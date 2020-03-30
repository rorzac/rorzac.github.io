$('.js-tab-trigger').on('click', function() {
    var tabName = $(this).data('tab'),
        tab = $('.js-tab-content[data-tab="'+tabName+'"]');
    
     $('.js-tab-trigger.active').removeClass('active');
     $(this).addClass('active');
    
    
     $('.js-tab-content.active').removeClass('active');
     tab.addClass('active');
  });