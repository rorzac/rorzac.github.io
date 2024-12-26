$(function() {
	
	$(".phone input").mask("+38(099)999-99-99");
	
		/*слайдер intro*/
	if ($(window).width()>=576){
   jQuery('.bx-slider1').bxSlider({
	   minSlides: 1,
		maxSlides: 1,
		touchEnabled: false,
	   controls: false,
	infiniteLoop: false,
      responsive: true
  });
	}
	
	/*smoth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
        
    });
	
	 /*.play_img*/
    $(".play_img").on("click", function(event){
        event.preventDefault();
        
        $(".col_1").toggleClass("active");        
    });
    
    /*toggle nav*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });
	
	/*изменение количества1*/
		 $(document).ready(function() {
		$('.down').click(function () {
			var $input = $(this).parent().find('input');
			//var count = $input.val() - 1;
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.up').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
	
	/*изменение количества2*/
		 $(document).ready(function() {
		$('.down1').click(function () {
			var $input = $(this).parent().find('input');
			//var count = $input.val() - 1;
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.up1').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
	
	
	/*bx slider 2*/
	jQuery('.bx-slider2').bxSlider({
	   minSlides: 1,
		maxSlides: 3,
		touchEnabled: false,
	   
		slideWidth: 400,
		controls: true,
		pager: false,
      responsive: true
  });
	/*bx slider 3*/
	jQuery('.bx-slider3').bxSlider({
	   minSlides: 1,
		maxSlides: 3,
		slideWidth: 400,
		touchEnabled: true,
		
	   controls: true,
		pager: false,
      responsive: true
  });
	
});



