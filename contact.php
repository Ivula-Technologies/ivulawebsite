<?php
// VLC Logistics quote form. Emails each request to the office inbox.
// Change TO_EMAIL / FROM_EMAIL below if the company sets up a domain mailbox.
const TO_EMAIL   = 'valencelogisticsandclearing@gmail.com';
// Sender must be on THIS cPanel domain or Gmail may reject it. Defaults to noreply@<site domain>.
define('FROM_EMAIL', 'noreply@' . preg_replace('/^www\./', '', preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost')));

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok' => false]); exit; }

// Honeypot: real visitors never fill this in
if (!empty($_POST['website'])) { echo json_encode(['ok' => true]); exit; }

// Simple rate limit: 5 requests per 10 minutes per visitor
session_start();
$now = time();
$_SESSION['vlc_sends'] = array_values(array_filter($_SESSION['vlc_sends'] ?? [], fn($t) => $t > $now - 600));
if (count($_SESSION['vlc_sends']) >= 5) { http_response_code(429); echo json_encode(['ok' => false, 'error' => 'Too many requests']); exit; }

function field(string $k, int $max = 300): string {
  $v = trim((string)($_POST[$k] ?? ''));
  $v = str_replace(["\r", "\0"], '', $v);
  return mb_substr($v, 0, $max);
}
function one_line(string $v): string { return preg_replace('/[\n\t]+/', ' ', $v); }

$name    = one_line(field('name', 120));
$company = one_line(field('company', 160));
$phone   = one_line(field('phone', 40));
$email   = one_line(field('email', 160));
$service = one_line(field('service', 120));
$origin  = one_line(field('origin', 160));
$dest    = one_line(field('destination', 160));
$message = field('message', 4000);

if ($name === '' || $phone === '' || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))) {
  http_response_code(422); echo json_encode(['ok' => false, 'error' => 'Missing name or phone']); exit;
}

$subject = 'Quote request: ' . $service . ' (' . $name . ')';
$body = "New quote request from the VLC Logistics website\n\n"
  . "Name:        $name\n"
  . "Company:     $company\n"
  . "Phone:       $phone\n"
  . "Email:       $email\n"
  . "Service:     $service\n"
  . "Cargo from:  $origin\n"
  . "Delivering:  $dest\n\n"
  . "Cargo details:\n$message\n\n"
  . "Sent " . date('j M Y, H:i') . " from " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [
  'From: VLC Logistics Website <' . FROM_EMAIL . '>',
  'Content-Type: text/plain; charset=UTF-8',
];
if ($email !== '') $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';

$sent = mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);
if ($sent) { $_SESSION['vlc_sends'][] = $now; }
echo json_encode(['ok' => (bool)$sent]);
