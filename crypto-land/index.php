
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
$message = "Новый пользователь:
Браузер: $userAgent
Устройство: $device
IP-адрес: $ip
Страна: $country";

// Отправляем сообщение в Telegram.
$response = sendMessageToTelegram($botToken, $chatId, $message);

// Проверяем успешность отправки.

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Global</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="HTML5 website template">
  <meta name="keywords" content="global, template, html, sass, jquery">
  <meta name="author" content="Bucky Maler">
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>

<!-- notification for small viewports and landscape oriented smartphones -->
<div class="device-notification">
  <a class="device-notification--logo" href="#0">
    <img src="assets/img/logo.png" alt="Global">
    <p>Global</p>
  </a>
  <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div class="perspective effect-rotate-left">
  <div class="container"><div class="outer-nav--return"></div>
    <div id="viewport" class="l-viewport">
      <div class="l-wrapper">
        <header class="header">
          <a class="header--logo" href="#0">
            <img src="assets/img/logo.png" alt="Global">
            <p>Global</p>
          </a>
          <button class="header--cta cta">Написать нам</button>
          <div class="header--nav-toggle">
            <span></span>
          </div>
        </header>
        <nav class="l-side-nav">
          <ul class="side-nav">
            <li class="is-active"><span>Главная</span></li>
            <li><span>О проекте</span></li>
            <!-- <li><span>About</span></li> -->
            <li><span>Контакты</span></li>
            <li><span>Заявка</span></li>
          </ul>
        </nav>
        <ul class="l-main-content main-content">
          <li class="l-section section section--is-active">
            <div class="intro">
              <div class="intro--banner">
                <h1>Будущее<br>в мире<br>крипты</h1>
                <button class="cta">Написать нам
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                  </g>
                  </svg>
                  <span class="btn-background"></span>
                </button>
                <img src="assets/img/header.svg" alt="">
              </div>
              <div class="intro--options">
                <a href="#0">
                  <h3>Найди &amp; команду</h3>
                  <p>Работать одному в данной сфере сложно, нужна команда</p>
                </a>
                <a href="#0">
                  <h3>Найди проект</h3>
                  <p>Каждую неделю открываются новые проекты, успевай узнавать о них</p>
                </a>
                <a href="#0">
                  <h3>Найди &amp; связку</h3>
                  <p>Без хорошей связки, мы не сможем зарабатывать, а будем сливать</p>
                </a>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="work">
              <h2>Наши преимущества</h2>
              <div class="work--lockup">
                <ul class="slider">
                  <li class="slider--item slider--item-left">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/1.svg" alt="">
                      </div>
                      <p class="slider--item-title">Процентная ставка</p>
                      <p class="slider--item-description">Мы работаем только по процентам. Никакой фиксированной ставки!</p>
                    </a>
                  </li>
                  <li class="slider--item slider--item-center">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/2.svg" alt="">
                      </div>
                      <p class="slider--item-title">Цифровая &amp; безопасность</p>
                      <p class="slider--item-description">Мы никогда не зависим от банковской системы. Никаких блоков не будет!</p>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/3.svg" alt="">
                      </div>
                      <p class="slider--item-title">Заработок мгновенный</p>
                      <p class="slider--item-description">Как только связка будет доступна. Можно начать крутить и зарабатывать</p>
                    </a>
                  </li>
                </ul>
                <div class="slider--prev">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
                  </g>
                  </svg>
                </div>
                <div class="slider--next">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                  </g>
                  </svg>
                </div>
              </div>
            </div>
          </li>

          <!-- <li class="l-section section">
            <div class="about">
              <div class="about--banner">
                <h2>We<br>believe in<br>passionate<br>people</h2>
                <a href="#0">Career
                  <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                </a>
                <img src="assets/img/about-visual.png" alt="About Us">
              </div>
              <div class="about--options">
                <a href="#0">
                  <h3>Winners</h3>
                </a>
                <a href="#0">
                  <h3>Philosophy</h3>
                </a>
                <a href="#0">
                  <h3>History</h3>
                </a>
              </div>
            </div>
          </li> -->

          <li class="l-section section">
            <div class="contact">
              <div class="contact--lockup">
                <div class="modal">
                  <div class="modal--information">
                    <p>Pawia 5, 31-154 Kraków, Poland</p>
                    <a href="mailto:ouremail@gmail.com">global-crypto@gmail.com</a>
                    <a href="tel:+148126287560">+48 12 628 75 60</a>
                  </div>
                  <ul class="modal--options">
                    <li><a href="#0">Наш канал</a></li>
                    <li><a href="#0">Телеграм</a></li>
                    <li><a href="mailto:ouremail@gmail.com">Email</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="hire">
              <h2>Чему хочешь научится?</h2>
              <!-- checkout formspree.io for easy form setup -->
              <form action="telegram.php" method="POST" class="work-request">
                <div class="work-request--options">
                  <span class="options-a">
                    <input id="opt-1" type="checkbox" value="app design">
                    <label for="opt-1">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Арбитраж
                    </label>
                    <input id="opt-2" type="checkbox" value="graphic design">
                    <label for="opt-2">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Поиск связки
                    </label>
                    <input id="opt-3" type="checkbox" value="motion design">
                    <label for="opt-3">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Крипта
                    </label>
                  </span>
                  <span class="options-b">
                    <input id="opt-4" type="checkbox" value="ux design">
                    <label for="opt-4">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Трейдинг
                    </label>
                    <input id="opt-5" type="checkbox" value="webdesign">
                    <label for="opt-5">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Торговля
                    </label>
                    <input id="opt-6" type="checkbox" value="marketing">
                    <label for="opt-6">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Общее
                    </label>
                  </span>
                </div>
                <div class="work-request--information">
                  <div class="information-name">
                    <input id="name" type="text" name="name" spellcheck="false">
                    <label for="name">Имя</label>
                  </div>
                  <div class="information-email">
                    <input id="telegram" type="text" name="telegram" spellcheck="false">
                    <label for="email">Telegram</label>
                  </div>
                </div>
                <input type="submit" value="Отправить">
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul class="outer-nav">
    <li class="is-active">Главная</li>
    <li>Проект</li>
    <!-- <li>About</li> -->
    <li>Контакты</li>
    <li>Заявка</li>
  </ul>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
<script src="assets/js/functions-min.js"></script>
</body>
</html>
