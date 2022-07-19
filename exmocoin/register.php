<?php
    session_start();
    if ($_SESSION['user']) {
        header('Location: private/exchange.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/normalize.css" />
    <link rel="stylesheet" href="style/register.css" />
    <link rel="stylesheet" href="fonts/fonts.css" />
    <title>Document</title>
  </head>
  <body>
    <header class="header">
      <div class="container">
        <div class="header__top">
          <a class="header__logo" href="#">
            <img
              class="header__logo-img"
              src="images/exmologo.svg"
              alt="logo"
            />
          </a>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__list-item">
                <a class="menu__list-link" href="#"> Main </a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#"> Home </a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#"> Support</a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#"> Blog </a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#"> Contact </a>
              </li>
            </ul>
          </nav>
          <div class="header__control">
            <a class="header__btn" href="#"> Authorization </a>
          </div>
        </div>
        <div class="register__item">
          <div class="register__form">
            <div class="rg__top">
              <div class="rg__logo">
                <img src="images/exmologo.svg" alt="" />
              </div>
              <div class="rg__sec">
                <img src="images/secure.svg" alt="" class="secure" />
                <p>Secure</p>
              </div>
            </div>
            <div class="rg__title">
              <a href="#">Login</a> or <span>Register</span>
            </div>
            <form action="php/signup.php" method="post" enctype="multipart/form-data">
        <label>ФИО</label>
        <input type="text" name="full_name" placeholder="Введите свое полное имя">
        <label>Логин</label>
        <input type="text" name="login" placeholder="Введите свой логин">
        <label>Почта</label>
        <input type="email" name="email" placeholder="Введите адрес своей почты">
        <label>Изображение профиля</label>
        <input type="file" name="avatar">
        <label>Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль">
        <label>Подтверждение пароля</label>
        <input type="password" name="password_confirm" placeholder="Подтвердите пароль">
        <button type="submit">Войти</button>

        <?php
            if ($_SESSION['message']) {
                echo '<p class="msg"> ' . $_SESSION['message'] . ' </p>';
            }
            unset($_SESSION['message']);
        ?>
          </div>
        </div>
      </div>
    </header>
  </body>
</html>
