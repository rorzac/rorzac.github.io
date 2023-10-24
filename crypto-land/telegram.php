<?php

/* https://api.telegram.org/bot5892191579:AAFVoS2cwhyXM92S4tq5ly4eEixnZv0ksj4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$telegram = $_POST['telegram'];
$token = "5833572623:AAEK0UDzdXPucezQwgIW1mPBp3spqrmRfZQ";
$chat_id = "-982359838";
$arr = array(
  'Имя: ' => $name,
  'Телеграм: ' => $telegram,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Ошибка";
}
?>