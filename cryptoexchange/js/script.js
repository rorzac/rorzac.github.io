$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#search-text .coin-bg").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});


$(document).ready(function () {
  $("#myInput1").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#search-text1 .coin-bg").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});



