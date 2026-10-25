<?php
/**
 * Lead form handler for cPanel hosting.
 *
 * The site is a static export, so the project brief and care plan forms POST
 * JSON here (see NEXT_PUBLIC_LEAD_FORM_ENDPOINT in .env.production). Each
 * submission is emailed to the Ivula inbox with Reply-To set to the visitor,
 * so a reply goes straight back to them. No third-party form service needed.
 *
 * Spam and abuse: same-site requests only, field length caps, header
 * injection stripped, and at most 5 submissions per IP address per hour.
 */

const LEAD_TO = 'info@ivulatechnologies.com';
const MAX_PER_HOUR = 5;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Use POST.']);
}

// Only accept submissions from this site's own pages.
$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
if ($origin !== '' && strtolower((string) parse_url($origin, PHP_URL_HOST)) !== $host) {
    respond(403, ['ok' => false, 'error' => 'Cross-site submissions are not accepted.']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

/** Trim, cap length and drop control characters (keeping new lines if asked). */
function clean($value, int $max, bool $multiline = false): string
{
    $value = is_scalar($value) ? (string) $value : '';
    $value = $multiline
        ? preg_replace('/[^\P{C}\n\t]/u', '', $value)
        : preg_replace('/\p{C}/u', ' ', $value);
    return mb_substr(trim((string) $value), 0, $max);
}

// Honeypot fields: real visitors never see or fill these.
if (clean($data['company_site'] ?? '', 200) !== '' || clean($data['_gotcha'] ?? '', 200) !== '') {
    respond(200, ['ok' => true]);
}

$name = clean($data['name'] ?? '', 120);
$email = clean($data['email'] ?? '', 200);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please give your name and a valid email address.']);
}

// Simple per-IP rate limit, stored in the system temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/ivula-lead-' . hash('sha256', $ip . date('YmdH'));
$count = (int) @file_get_contents($bucket);
if ($count >= MAX_PER_HOUR) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please email us instead.']);
}
@file_put_contents($bucket, (string) ($count + 1), LOCK_EX);

$subject = clean($data['_subject'] ?? '', 150) ?: "Website enquiry from {$name}";

$labels = [
    'name' => 'Name',
    'email' => 'Email',
    'company' => 'Company',
    'website' => 'Website',
    'projectType' => 'Project type',
    'budget' => 'Budget',
    'timeline' => 'Timeline',
    'plan' => 'Plan',
    'platform' => 'Platform',
    'sites' => 'Number of sites',
    'source' => 'Sent from page',
];
$lines = [];
foreach ($labels as $key => $label) {
    $value = clean($data[$key] ?? '', 300);
    if ($value !== '') {
        $lines[] = "{$label}: {$value}";
    }
}
$message = clean($data['message'] ?? '', 5000, true);
if ($message !== '') {
    $lines[] = '';
    $lines[] = $message;
}
$lines[] = '';
$lines[] = 'Reply to this email to answer ' . $name . ' directly.';

// Send from the site's own domain; never trust an unexpected Host header.
$domain = preg_match('/(^|\.)ivulatechnologies\.com$/', $host) ? preg_replace('/^www\./', '', $host) : 'ivulatechnologies.com';
$replyName = str_replace(['"', '<', '>', ',', ';'], '', $name);
$headers = [
    'From: Ivula website <noreply@' . $domain . '>',
    'Reply-To: ' . mb_encode_mimeheader($replyName) . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: ivula-lead-form',
];

$sent = mail(
    LEAD_TO,
    mb_encode_mimeheader($subject, 'UTF-8'),
    implode("\r\n", $lines),
    implode("\r\n", $headers),
    '-fnoreply@' . $domain
);

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'We could not send your message. Please email us instead.']);
}
respond(200, ['ok' => true]);
