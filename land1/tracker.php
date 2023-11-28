<?php
// Замените 'YOUR_BOT_TOKEN' на токен вашего Telegram бота.
$botToken = '5833572623:AAEK0UDzdXPucezQwgIW1mPBp3spqrmRfZQ';

// Замените 'YOUR_CHAT_ID' на Chat ID вашей группы Telegram.
$chatId = '-982359838';
function getCountryByIP($ip) {
    $url = "http://ip-api.com/json/$ip";

    $response = file_get_contents($url);

    if ($response !== false) {
        $data = json_decode($response);

        if ($data->status == "success") {
            return $data->country;
        }
    }

    return null;
}

$ip = $_SERVER['REMOTE_ADDR']; // Получаем IP-адрес пользователя.

$country = getCountryByIP($ip);




// Функция для отправки сообщения в Telegram.
function sendMessageToTelegram($botToken, $chatId, $message) {
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}

// Получаем информацию о новом пользователе.
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$device = $_SERVER['HTTP_USER_AGENT']; // Тут можно добавить определение устройства, используя User-Agent.
 // Здесь нужно определить страну на основе IP-адреса пользователя. Можно использовать сторонний сервис или библиотеку.

// Создаем сообщение с информацией о пользователе.
$message = "Новый лид:
Устройство: $device
IP-адрес: $ip
Страна: $country";

// Отправляем сообщение в Telegram.
$response = sendMessageToTelegram($botToken, $chatId, $message);

// Проверяем успешность отправки.

?>