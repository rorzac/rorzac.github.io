<?php
session_start();
if (!$_SESSION['user']) {
    header('Location: /');
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/normalize.css" />
    <link rel="stylesheet" href="style/style.css" />
    <link rel="stylesheet" href="../fonts/fonts.css" />
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
            <a class="header__btn" href="../php/logout.php"> Exit </a>
          </div>
        </div>
        <div class="exchange__item">
          <div class="exchange__from">
            <div class="main__block">
              
              <div class="main__tab">
                <div class="block active js-tab-trigger" data-tab="1">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="2">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="3">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="4">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="5">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="6">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="7">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>
                <div class="block js-tab-trigger" data-tab="8">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
                  <div class="block js-tab-trigger" data-tab="9">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
                  <div class="block js-tab-trigger" data-tab="10">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
              </div>
            </div>
          </div>

          <div class="exchange__to active js-tab-content active" data-tab="1">
            <div class="tabs-content">
                <div class="tabs-content__item active js-tab-content" data-tab="1">
                  
                  
                  <div  class="block">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">Bitcoin</div>
                </div>

                <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
                  

                </div>
               
                <div class="tabs-content__item js-tab-content" data-tab="2">
                    <div  class="block">
                        <div class="block__icon">
                          <img src="images/btc.png" alt="" />
                        </div>
                        <div class="main__text">Moneo</div>
                      </div>
      
                      <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Monero</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
                            
                </div>
                <div class="tabs-content__item js-tab-content" data-tab="3">

          <div  class="block">
                  <div class="block__icon">
                    <img src="images/btc.png" alt="" />
                  </div>
                  <div class="main__text">LiteCoin</div>
                </div>

                <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Litecoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>

                  <div  class="block">
                    <div class="block__icon">
                      <img src="images/btc.png" alt="" />
                    </div>
                    <div class="main__text">Bitcoin</div>
                  </div>
                </div>
               
                <div class="tabs-content__item js-tab-content" data-tab="4">
          
                    <div  class="block">
                        <div class="block__icon">
                          <img src="images/btc.png" alt="" />
                        </div>
                        <div class="main__text">XRP</div>
                      </div>
      
                      <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">XRP</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>
      
                        <div  class="block">
                          <div class="block__icon">
                            <img src="images/btc.png" alt="" />
                          </div>
                          <div class="main__text">Bitcoin</div>
                        </div>

                </div>
                <div class="tabs-content__item js-tab-content" data-tab="5">Текст 1</div>
                <div class="tabs-content__item js-tab-content" data-tab="6">Текст 6</div>
             </div>
          </div>
          </div>



          






        </div>
      </div>
    </header>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script/main.js"></script>
  </body>
</html>
