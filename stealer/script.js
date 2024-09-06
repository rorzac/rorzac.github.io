function startScan() {
    const logArea = document.getElementById('logArea');
    logArea.innerHTML += '<p>Scanning system for crypto wallets...</p>';
    setTimeout(() => {
        logArea.innerHTML += '<p>Wallets found! Preparing to extract data...</p>';
    }, 2000);
}

function simulateAttack() {
    const logArea = document.getElementById('logArea');
    logArea.innerHTML += '<p>Simulating attack on detected wallets...</p>';
    setTimeout(() => {
        logArea.innerHTML += '<p>Attack successful! Funds transferred.</p>';
    }, 2000);
}
