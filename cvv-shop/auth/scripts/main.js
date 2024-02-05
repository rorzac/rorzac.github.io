document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var toggleableBlock = document.getElementById("toggleableBlock");
    var isOpen = false; // Переменная для отслеживания состояния блока

    toggleButton.addEventListener("click", function() {
        if (!isOpen) {
            fadeIn(toggleableBlock); // Плавное появление блока
            isOpen = true;
        } else {
            fadeOut(toggleableBlock); // Плавное исчезновение блока
            isOpen = false;
        }
    });

    var closeLink = document.getElementById("closeLink");

    closeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        fadeOut(toggleableBlock); // Плавное исчезновение блока при нажатии на ссылку
        isOpen = false;
    });

    // Функция для плавного появления блока
    function fadeIn(element) {
        element.style.display = 'block';
        var height = element.clientHeight;
        element.style.opacity = 0;

        var fadeEffect = setInterval(function () {
            if (element.style.opacity < 1) {
                element.style.opacity = parseFloat(element.style.opacity) + 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);

        var timer = setInterval(function () {
            if (height >= element.scrollHeight) {
                clearInterval(timer);
            }
            height += 5; // скорость раскрытия элемента
            element.style.height = height + 'px';
        }, 10);
    }

    // Функция для плавного исчезновения блока
    function fadeOut(element) {
        var height = element.clientHeight;
        var fadeEffect = setInterval(function () {
            if (element.style.opacity > 0) {
                element.style.opacity = parseFloat(element.style.opacity) - 0.1;
            } else {
                clearInterval(fadeEffect);
                element.style.display = 'none';
            }
        }, 50);

        var timer = setInterval(function () {
            if (height <= 0) {
                clearInterval(timer);
            } else {
                height -= 5; // скорость закрытия элемента
                element.style.height = height + 'px';
            }
        }, 10);
    }
});



