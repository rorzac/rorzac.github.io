document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var toggleableBlock = document.getElementById("toggleableBlock");

    toggleButton.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(toggleableBlock); 
        var displayPropertyValue = computedStyle.getPropertyValue("display");

        if (displayPropertyValue === "none") {
            toggleableBlock.style.display = "block"; 
       
        } else {
            toggleableBlock.style.display = "none"; 
          
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var toggleableBlock = document.getElementById("toggleableBlock");
    var closeLink = document.getElementById("closeLink");

    closeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        toggleableBlock.style.display = "none"; 
    });
});