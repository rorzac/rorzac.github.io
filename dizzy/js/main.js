(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
});


/*=============================================
	=          Data Background               =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/*=============================================
	=           Data Color             =
=============================================*/
$("[data-bg-color]").each(function () {
	$(this).css("background-color", $(this).attr("data-bg-color"));
});


/*===========================================
	=          One page Menu               =
=============================================*/
$('.navigation a[href*="#"]:not([href="#"])').on("click", function() {
	console.log("click");
	if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
		if (target.length) {
			if ($(window).width() < 768) {
				$("html, body").animate({
					scrollTop: target.offset().top - 30
				}, 1000, "easeInOutExpo");
			} else {
				$("html, body").animate({
					scrollTop: target.offset().top - 50
				}, 1000, "easeInOutExpo");
			}
			return false;
		}
	}
});


/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmobile__menu-outer li.menu-item-has-children ul').length) {
	$('.tgmobile__menu-outer .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn, .tgmobile__menu .navigation li a').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top -50
    }, 1000);

  });
};



})(jQuery);