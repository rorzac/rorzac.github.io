document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('passwordInput').value;
    if (password === '\u0032\u0033\u0039\u0033') {
        var encryptedUrl = '\x77\x69\x6E\x64\x6F\x77\x2E\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x2E\x68\x72\x65\x66\x20\x3D\x20\x27\x2F\x6C\x6F\x67\x69\x6E\x2E\x68\x74\x6D\x6C\x27\x3B';
eval(encryptedUrl);

    } else {
        document.getElementById('passwordInput').value = '';
        document.getElementById('message').textContent = '\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.';
    }
});
