<?php
/**
 * Lead form handler for cPanel hosting.
 *
 * The site is a static export, so the project brief and care plan forms POST
 * JSON here (see NEXT_PUBLIC_LEAD_FORM_ENDPOINT in .env.production). Each
 * submission is emailed to the Ivula inbox with Reply-To set to the visitor,
 * so a reply goes straight back to them. No third-party form service needed.
 *
 * Spam and abuse: same-site requests only, honeypot, field length caps,
 * header injection stripped, at most 5 submissions per IP address and 30 in
 * total per hour, link-stuffed messages and exact repeats are dropped quietly.
 *
 * No lost leads: every real submission is first appended to a private log
 * outside the web root (../ivula-data/leads-YYYY-MM.jsonl), so a mail outage
 * never loses one. A failed send is recorded, and GET lead.php?health answers
 * 503 for a day afterwards, so an uptime monitor emails Bius (see README.md,
 * "Monitoring").
 */

const LEAD_TO = 'info@ivulatechnologies.com';
const MAX_PER_HOUR = 5;
const MAX_TOTAL_PER_HOUR = 30;
const MAX_LINKS = 3;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

/** Private folder next to the site folder (never served), or null if it cannot be used. */
function dataDir(): ?string
{
    $root = rtrim($_SERVER['DOCUMENT_ROOT'] ?? '', '/');
    if ($root === '') {
        return null;
    }
    $dir = dirname($root) . '/ivula-data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    return is_dir($dir) && is_writable($dir) ? $dir : null;
}

/** Counts hits on a key for the current hour; false once the limit is reached. */
function underLimit(string $key, int $limit): bool
{
    $file = sys_get_temp_dir() . '/ivula-lead-' . hash('sha256', $key . date('YmdH'));
    $handle = @fopen($file, 'c+');
    if (!$handle) {
        return true;
    }
    flock($handle, LOCK_EX); // read and increment as one step, so bursts cannot slip past
    $count = (int) stream_get_contents($handle);
    if ($count < $limit) {
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, (string) ($count + 1));
    }
    flock($handle, LOCK_UN);
    fclose($handle);
    return $count < $limit;
}

$mailFailedFile = (dataDir() ?? sys_get_temp_dir()) . '/lead-mail-failed';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['health'])) {
    $lastFailure = (int) @filemtime($mailFailedFile);
    $mailOk = $lastFailure < time() - 86400;
    $healthy = function_exists('mail') && dataDir() !== null && $mailOk;
    respond($healthy ? 200 : 503, [
        'ok' => $healthy,
        'mail' => function_exists('mail'),
        'storage' => dataDir() !== null,
        'lastMailFailure' => $lastFailure ? gmdate('c', $lastFailure) : null,
    ]);
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

// Per-IP and site-wide hourly limits, so a flood never buries the inbox.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (!underLimit('ip:' . $ip, MAX_PER_HOUR) || !underLimit('all', MAX_TOTAL_PER_HOUR)) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please email us instead.']);
}

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

// Link-stuffed messages are spam; repeats of the same message are double clicks.
// Both get a normal "sent" answer so bots learn nothing, but no email.
$spam = preg_match_all('~https?://|www\.~i', $message) > MAX_LINKS;
$fingerprint = hash('sha256', strtolower($email) . '|' . implode('|', $lines));
$repeat = !underLimit('dup:' . $fingerprint, 1);

// Keep every lead before trying to email it.
$saved = dataDir() !== null && @file_put_contents(
    dataDir() . '/leads-' . date('Y-m') . '.jsonl',
    json_encode([
        'at' => gmdate('c'),
        'subject' => $subject,
        'name' => $name,
        'email' => $email,
        'body' => implode("\n", $lines),
        'status' => $spam ? 'spam' : ($repeat ? 'repeat' : 'new'),
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n",
    FILE_APPEND | LOCK_EX
) !== false;
if (!$saved) {
    error_log('lead.php: could not save a lead to ivula-data');
}
if ($spam || $repeat) {
    respond(200, ['ok' => true]);
}

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
    // Flag the failure so the health check alerts.
    @touch($mailFailedFile);
    error_log('lead.php: mail() failed for a lead from ' . $email);
    if (!$saved) {
        // Neither emailed nor saved: tell the visitor rather than pretend.
        respond(502, ['ok' => false, 'error' => 'We could not send your message. Please email us instead.']);
    }
}
respond(200, ['ok' => true]);