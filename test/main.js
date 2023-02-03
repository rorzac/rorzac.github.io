document.querySelector('button').onclick = myClick;

let btc = 174.11;



function myClick(){
   let input = document.querySelector('input').value;
   
   if (input >= 100) {
    

    document.querySelector('.out').innerHTML = input * btc;

    document.getElementsByClassName('block')[0].style.display = "block";
   }
 
   else {
    alert('Минимальная сумма 100');
   }
}