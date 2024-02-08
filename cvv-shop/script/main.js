document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('passwordInput').value;
    if (password === '2393') {
        window.location.href = '/login.html';
    } else {
        document.getElementById('passwordInput').value = ''; // Очищаем поле ввода
        document.getElementById('message').textContent = 'Пароль неверный. Попробуйте еще раз.';
    }
});