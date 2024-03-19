/*-----------------------------------------------------------------------------------
    Template Name: Agincy - Digital Agenc HTML Template
    Template URI: https://webtend.net/demo/html/agincy/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Menu Hidden Sidebar
    ## Search Box
    ## Video Popup
    ## Main Slider
    ## Project Slider
    ## Testimonial Slider
    ## Testimonial Two
    ## Instagram Image
    ## Gallery Widget
    ## Shop Preview
    ## Service Details
    ## SkillBar
    ## Portfolio Masonry
    ## Fact Counter
    ## Circle Counter
    ## why choose
    ## Scroll to Top
    ## Nice Select
    ## WOW Animation
    ## Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
         
        // ## Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // ## Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
  
        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        // ## Hero Video Popup
        if ($('.hero-video-play').length) {
            $('.hero-video-play').magnificPopup({
                type: 'video',
            });
        }
        
        // ## Video Popup With Text
        if ($('.video-play-text').length) {
            $('.video-play-text').magnificPopup({
                type: 'video',
            });
        }
        
        
        // ## Main Slider
        if ($('.main-slider-active').length) {
            $('.main-slider-active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                appendDots: '.main-slider-dots',
            });
        }
        
        
        // ## Project Slider
        if ($('.projects-active').length) {
            $('.projects-active').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: false,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Testimonial Slider
        if ($('.testimonials-active').length) {
            $('.testimonials-active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 600,
                arrows: false,
                dots: false,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }
        
        
        // ## Testimonial Two Slider
        if ($('.testimonials-two-active').length) {
            $('.testimonials-two-active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 600,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }
        
        
        // ## Instagram Image Popup 
        $('.instagram-item a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // ## Gallery Widget Image Popup 
        $('.gallery a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        
        // ## Shop Preview Image Popup 
        $('.preview-item .pupup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        
        // ## Service Details Image Popup 
        $('.service-images-area a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // ## SkillBar
        if ($('.skillbar').length) {
            $('.skillbar').appear(function () {
                $('.skillbar').skillBars({
                    from: 0,
                    speed: 4000,
                    interval: 100,
                });
            });
        }
        
        
        // ## Portfolio Masonry
        if ($('.portfolio-masonry-two').length) {
            $(this).imagesLoaded(function () {
                $('.portfolio-masonry-two').isotope({
                    // options
                    itemSelector: '.item',
                });
            });
        }
        
        
         /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {
                
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        

        /* ## Circle Counter */
		if ($.fn.circleProgress) {
			var progress = $('.progress-content')
			if($.fn.circleProgress) {
			  progress.appear(function () {
				progress.circleProgress({
					value: 0.8,
					size: 100,
                    thickness: 10,
					fill: "#FF8F26",
                    lineCap: 'round',
					emptyFill: "transparent",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.counting').html(Math.round(89 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        /*## why choose section */
		if ($.fn.circleProgress) {
			var progressOne = $('.service-progress.one')
			if($.fn.circleProgress) {
			  progressOne.appear(function () {
				progressOne.circleProgress({
					value: 0.85,
					size: 85,
                    thickness: 6,
					fill: "#FF8F26",
                    lineCap: 'round',
					emptyFill: "transparent",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.counting').html(Math.round(89 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progressTwo = $('.service-progress.two')
			if($.fn.circleProgress) {
			  progressTwo.appear(function () {
				progressTwo.circleProgress({
					value: 0.73,
					size: 85,
                    thickness: 6,
					fill: "#FF8F26",
                    lineCap: 'round',
					emptyFill: "transparent",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.counting').html(Math.round(73 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progressThree = $('.service-progress.three')
			if($.fn.circleProgress) {
			  progressThree.appear(function () {
				progressThree.circleProgress({
					value: 0.90,
					size: 85,
                    thickness: 6,
					fill: "#FF8F26",
                    lineCap: 'round',
					emptyFill: "transparent",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.counting').html(Math.round(95 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        
        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        // ## Nice Select
        $('select').niceSelect();
        
        
        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
 
    });
    
    
    /* ==========================================================================
       When document is resize, do
    ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
    ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
    ========================================================================== */

    $(window).on('load', function () {

        // ## Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });

})(window.jQuery);
