document.querySelector(".island").addEventListener("click", function () {
    document.body.classList.toggle("active");
  });
  
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var today = new Date();
      var time =
        (today.getHours() % 12) +
        ":" +
        today.getMinutes().toString().padStart(2, "0");
      document.getElementById("time").appendChild(document.createTextNode(time));
  
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 2000);
    },
    false
  );
  