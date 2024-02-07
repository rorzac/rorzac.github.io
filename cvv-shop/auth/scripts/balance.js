document.addEventListener("DOMContentLoaded", function() {
    var paymentForm = document.getElementById("paymentForm");
    var modal = document.getElementById("modal");
    var closeModal = document.getElementsByClassName("close")[0];
    var paymentButton = document.getElementById("paymentButton");
    

    var wallets = {
        bitcoin: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
        ethereum: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
        monero: "42fd7ef93f394346b4e6723583eb78a9524080e6",
        litecoin: "LUWPbpM43E2p7ZSh8cyTBEkvpHmr3cB8Ez",
        usdt: "0xdac17f958d2ee523a2206206994597c13d831ec70xdac17f958d2ee523a2206206994597c13d831ec7"
    };
    

    async function convertToCrypto(paymentMethod, usdAmount) {
        if (paymentMethod === 'usdt') {
            return usdAmount;
        }
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${paymentMethod}&vs_currencies=usd`);
            const data = await response.json();
            const rate = data[paymentMethod].usd;
            const cryptoAmount = parseFloat(usdAmount) / rate;
            return cryptoAmount.toFixed(8);
        } catch (error) {
            console.error('Ошибка при конвертации суммы в криптовалюту:', error);
            return null;
        }
    }

    paymentForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        var usdAmount = document.getElementById("amount").value;
        var paymentMethod = document.getElementById("paymentMethod").value;

        if (parseFloat(usdAmount) < 100) {
            alert('Минимальная сумма для оплаты составляет 100 долларов.');
            return;
        }

        var walletAddress = wallets[paymentMethod];
        var cryptoAmount = await convertToCrypto(paymentMethod, usdAmount);

        if (cryptoAmount !== null) {
            document.getElementById("walletAddress").textContent = walletAddress;
            document.getElementById("cryptoAmount").textContent = cryptoAmount;
            document.getElementById("usdAmount").textContent = usdAmount + ' USD';

            modal.style.display = "block";
            startTimer(3600);
        } else {
            alert('Ошибка при конвертации суммы в криптовалюту. Пожалуйста, попробуйте снова.');
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    paymentButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function startTimer(duration) {
        var timer = duration, hours, minutes, seconds;
        var timerInterval = setInterval(function () {
            hours = Math.floor(timer / 3600);
            minutes = Math.floor((timer % 3600) / 60);
            seconds = timer % 60;

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            document.getElementById("timer").textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(timerInterval);
                modal.style.display = "none";
            }
        }, 1000);
    }
});
