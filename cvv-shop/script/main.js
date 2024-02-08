document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('passwordInput').value;
    if (password === '\u0032\u0033\u0039\u0033') {
        window.location.href = '/cvv-shop/login.html';
    } else {
        document.getElementById('passwordInput').value = '';
        document.getElementById('message').textContent = '\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.';
    }
});
