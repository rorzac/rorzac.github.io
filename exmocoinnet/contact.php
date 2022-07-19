<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
    <link rel="stylesheet" href="style/normalize.css" />
    <link rel="stylesheet" href="style/contact.css" />
    <link rel="stylesheet" href="fonts/fonts.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <title>ExmoCoin - Contact</title>
  </head>
  <body>
    <div class="wrapper">
      <header>
        <a href="index.html">Back to main</a>
      </header>
      
      <form action="#">
        <div class="dbl-field">
          <div class="field">
            <input type="text" name="name" placeholder="Enter your name">
            <i class='fas fa-user'></i>
          </div>
          <div class="field">
            <input type="text" name="email" placeholder="Enter your email">
            <i class='fas fa-envelope'></i>
          </div>
        </div>
        <div class="dbl-field">
          <div class="field">
            <input type="text" name="phone" placeholder="Enter your phone">
            <i class='fas fa-phone-alt'></i>
          </div>
          <div class="field">
            <input type="text" name="website" placeholder="Enter your website">
            <i class='fas fa-globe'></i>
          </div>
        </div>
        <div class="message">
          <textarea placeholder="Write your message" name="message"></textarea>
          <i class="material-icons">message</i>
        </div>
        <div class="button-area">
          <button type="submit">Send Message</button>
          <span></span>
        </div>
      </form>
    </div>

    <script>
      const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
    </script>
  </body>
</html>
