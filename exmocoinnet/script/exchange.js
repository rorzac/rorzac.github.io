$('.js-tab-trigger').on('click', function() {
    var tabName = $(this).data('tab'),
        tab = $('.js-tab-content[data-tab="'+tabName+'"]');
    
     $('.js-tab-trigger.active').removeClass('active');
     $(this).addClass('active');
    
    
     $('.js-tab-content.active').removeClass('active');
     tab.addClass('active');
  });
 
  
  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
  }

  $(document).ready(function () {
    $("#flip").click(function () {
      $("#panel").slideToggle("slow");
    });
  });
