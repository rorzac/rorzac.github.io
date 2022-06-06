const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
  });

  function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else{
        currentContent.style.maxHeight = 0;
    }

  }

  document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('June 10 2022 00:00:00');
    
    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');
  
    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');
  
    function declOfNum(number, titles) {  
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
  
    const timeCount = () => {
      let now = new Date();
      let leftUntil = newYear - now;
      
      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
      let seconds = Math.floor(leftUntil / 1000) % 60;
  
      daysVal.textContent = days;
      hoursVal.textContent =	hours;
      minutesVal.textContent = minutes;
      secondsVal.textContent = seconds;
  
      daysText.textContent = declOfNum(days, ['day', 'days', 'days']);
      hoursText.textContent = declOfNum(hours, ['hour', 'hours', 'hours']);
      minutesText.textContent = declOfNum(minutes, ['minute', 'minutes', 'minutes']);
      secondsText.textContent = declOfNum(seconds, ['second', 'seconds', 'seconds']);
    };
  
    timeCount();
    setInterval(timeCount, 1000);
  });




