#!/usr/bin/env bash
# Smoke test for public/lead.php with PHP's built-in server.
# There is no mail server here, so mail() fails: that exercises the
# "lead saved anyway, health turns red" path. Run: bash tests/lead-php.sh
set -euo pipefail
work=$(mktemp -d)
trap 'kill $pid 2>/dev/null; rm -rf "$work"' EXIT
mkdir -p "$work/public_html"
cp public/lead.php "$work/public_html/"
export TMPDIR="$work/tmp"; mkdir -p "$TMPDIR"
php -S 127.0.0.1:8099 -t "$work/public_html" -d sendmail_path=/bin/false >/dev/null 2>&1 &
pid=$!
sleep 1
url=http://127.0.0.1:8099/lead.php
fail() { echo "FAIL: $1"; exit 1; }
post() { curl -s -o /dev/null -w '%{http_code}' -H 'Content-Type: application/json' "$@" "$url"; }

[ "$(curl -s -o /dev/null -w '%{http_code}' "$url?health")" = 200 ] || fail "health should start green"
[ "$(curl -s -o /dev/null -w '%{http_code}' "$url")" = 405 ] || fail "GET should be 405"
[ "$(post -H 'Origin: https://evil.example' -d '{"name":"A","email":"a@b.co"}')" = 403 ] || fail "cross-site should be 403"
[ "$(post -d '{"name":"","email":"nope"}')" = 422 ] || fail "bad input should be 422"
[ "$(post -d '{"name":"Bot","email":"bot@b.co","company_site":"x"}')" = 200 ] || fail "honeypot should look accepted"
[ "$(post -d '{"name":"Ann","email":"ann@b.co","message":"Hello"}')" = 200 ] || fail "real lead should be 200 even if mail fails"
log=$(cat "$work"/ivula-data/leads-*.jsonl)
grep -q '"status":"new"' <<<"$log" || fail "lead should be saved"
grep -q 'Bot' <<<"$log" && fail "honeypot hit must not be saved"
[ "$(curl -s -o /dev/null -w '%{http_code}' "$url?health")" = 503 ] || fail "health should turn red after a mail failure"
[ "$(post -d '{"name":"Ann","email":"ann@b.co","message":"Hello"}')" = 200 ] || fail "repeat should look accepted"
grep -q '"status":"repeat"' "$work"/ivula-data/leads-*.jsonl || fail "repeat should be logged as repeat"
[ "$(post -d '{"name":"Sp","email":"sp@b.co","message":"http://a http://b http://c http://d"}')" = 200 ] || fail "spam should look accepted"
grep -q '"status":"spam"' "$work"/ivula-data/leads-*.jsonl || fail "spam should be logged as spam"
for i in 1 2 3; do post -d "{\"name\":\"R$i\",\"email\":\"r$i@b.co\"}" >/dev/null; done
[ "$(post -d '{"name":"R9","email":"r9@b.co"}')" = 429 ] || fail "6th post in an hour should be 429"
# If the private folder cannot be used and mail fails too, say so instead of "sent".
kill $pid; wait $pid 2>/dev/null || true
rm -rf "$work/ivula-data" "$TMPDIR"/*; touch "$work/ivula-data"
php -S 127.0.0.1:8099 -t "$work/public_html" -d sendmail_path=/bin/false >/dev/null 2>&1 &
pid=$!
sleep 1
[ "$(curl -s -o /dev/null -w '%{http_code}' "$url?health")" = 503 ] || fail "health should be red without storage"
[ "$(post -d '{"name":"Zed","email":"z@b.co"}')" = 502 ] || fail "unsaved and unsent should be 502"
echo "lead.php: all checks passed"
