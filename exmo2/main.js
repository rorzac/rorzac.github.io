window.onload = function () {
    let c = {'USD':'78', 'EUR':'85.60', 'RUB':'1'}; // Устанавливаем курс валют

    let val = document.getElementById('val'); // Получаем элемент ввода данных
    let currency1 = document.getElementById('cur1'); // Получаем первый селект
    let currency2 = document.getElementById('cur2'); // Получаем второй селект
    let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
    function summ() { // Делаем функцию
        let z = 0;
        if(currency1.value === currency2.value){ // Если оба значения в селектах равны
            result.innerText = val.value; // То просто вписываем данные из поля ввода
        } else {
            if(currency1.value != 'RUB'){ // Если не равны рублю, то
                z = val.value*c[currency1.value]; // Переводим сумму в рубли
                result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }
    val.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ();
    };
    currency1.onchange = function () { // При смене первого селекта вызываем функцию.
        summ();
    };
    currency2.onchange = function () { // При смене второго селекта вызываем функцию.
        summ();
    }
}


// start




    // finish modal


