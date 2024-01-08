<?php

/* https://api.telegram.org/bot5892191579:AAFVoS2cwhyXM92S4tq5ly4eEixnZv0ksj4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$telegram = $_POST['telegram'];


$message = $_POST['message'];
$token = "6944405279:AAG6ICQZGushcRVCKzXh9nCYesqRPo26u3M";
$chat_id = "-4053734311";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телеграм: ' => $telegram,
  'Сообщение:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.php');
} else {
  echo "Ошибка";
}
?>