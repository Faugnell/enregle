<?php
header('Content-Type: application/json; charset=utf-8');

// Autorise POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Lecture du body JSON
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$email = isset($data['email']) ? trim($data['email']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

// 🔐 CONFIGURATION BDD (remplace avec tes infos OVH)
$host = 'obliganobligate.mysql.db';
$db   = 'obliganobligate';
$user = 'obliganobligate';
$pass = 'c1ZthZfbJVwwLz8';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    $ip = $_SERVER['REMOTE_ADDR'] ?? null;
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;

    $stmt = $pdo->prepare("
        INSERT INTO waitlist (email, ip, user_agent, created_at)
        VALUES (:email, :ip, :ua, NOW())
    ");

    $stmt->execute([
        ':email' => $email,
        ':ip' => $ip,
        ':ua' => $userAgent
    ]);

    echo json_encode(['ok' => true]);

} catch (PDOException $e) {
    if (isset($e->errorInfo[1]) && (int)$e->errorInfo[1] === 1062) {
        http_response_code(409);
        echo json_encode(['ok' => false, 'error' => 'Email already exists']);
        exit;
    }

    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Database error']);
    exit;
}