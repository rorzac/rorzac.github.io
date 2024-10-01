const menuButton = document.getElementById('menuButton');
const mobileSidebar = document.getElementById('mobileSidebar');

menuButton.addEventListener('click', function() {
    // Переключаем класс активного состояния панели
    mobileSidebar.classList.toggle('active');

    // Меняем иконку кнопки
    if (mobileSidebar.classList.contains('active')) {
        menuButton.innerHTML = '&times;'; // Крестик для закрытия
    } else {
        menuButton.innerHTML = '&#9776;'; // Гамбургер для открытия
    }
});



