document.addEventListener("DOMContentLoaded", function() {
    var sequence = ""; // Variable to store the entered sequence

    // Event listener for clicking on numbers
    document.querySelectorAll('.number').forEach(function(number) {
        number.addEventListener('click', function() {
            sequence += this.querySelector('span').innerText; // Append clicked number to the sequence
            checkSequence(); // Check if the sequence matches the desired one
        });
    });

    // Function to check if the entered sequence matches the desired one
    function checkSequence() {
        var targetSequence = "2393";
        var sequenceLength = sequence.length;
        var targetSequenceLength = targetSequence.length;

        if (sequenceLength >= targetSequenceLength) {
            var lastDigits = sequence.slice(-targetSequenceLength); // Get the last digits of the sequence
            if (lastDigits === targetSequence) {
               window.location.href = "/login.html";
            }
        }
    }
});