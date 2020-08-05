"use strict";

$(document).ready(function () {

	// Modal Form
	$('.callback').fancybox({
		padding: 0,
		content: $('#modal-form'),
		helpers: {
			overlay: {
				locked: false
			}
		},
	    tpl: {
	        closeBtn: '<a title="Close" class="fancybox-item fancybox-close modal-form-close" href="javascript:;"></a>'
	    }
	});


	// Fancybox Images
	$('.fancy-img').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			},
			thumbs: {
				width: 60,
				height: 60
			}
		},
	    tpl: {
	        closeBtn: '<a title="Close" class="fancybox-item fancybox-close modal-form-close2" href="javascript:;"></a>'
	    }
	});

	// Modal Videos
    $("#about-gallery").on('click', '.about-video', function() {
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });
        return false;
    });
    $("#gallery-grid").on('click', ".gallery-video", function() {
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });
        return false;
    });


	// BreadCrumbs
	if ($('#b-crumbs-menu').length > 0) {
		$('.b-crumbs-menu').on('click', '#b-crumbs-menu', function () {
			if ($(this).hasClass('opened')) {
				$(this).removeClass('opened');
				$(this).next('.b-crumbs-menulist').fadeOut(200);
			} else {
				$(this).addClass('opened');
				$(this).next('.b-crumbs-menulist').fadeIn(200);
			}
			return false;
		});
	}


	// Dropdown
	if ($('.dropdown-wrap').length > 0) {
		$('.dropdown-wrap').on('click', '.dropdown-title', function () {
			$('.dropdown-list').slideUp(200);
			if ($(this).hasClass('opened')) {
				$(this).removeClass('opened');
				// $(this).next('.dropdown-list').slideUp(200);
			} else {
				$('.dropdown-wrap .dropdown-title').removeClass('opened');
				$(this).addClass('opened');
				$(this).next('.dropdown-list').slideDown(200);
			}
			return false;
		});
		$('.cont').on('click', '.dropdown-wrap-range', function () {
			return false;
		});
		$('.dropdown-wrap .dropdown-list li').on('click', 'a', function () {
			$(this).closest('.dropdown-wrap').find('.dropdown-title').text($(this).text());
			if ($(this).attr('href') == '#') {
				$('.dropdown-list').slideUp(200);
				$('.dropdown-wrap .dropdown-title').removeClass('opened');
				return false;
			}
		});
	}

	if ($('.dropdown-wrap').length > 0 || $('#b-crumbs-menu').length > 0) {
		$('body').on('click', function () {
			if ($('#b-crumbs-menu').length > 0) {
				$('.b-crumbs-menulist').fadeOut(200);
				$('#b-crumbs-menu').removeClass('opened');
			}
			if ($('.dropdown-wrap').length > 0) {
				$('.dropdown-list').slideUp(200);
				$('.dropdown-wrap .dropdown-title').removeClass('opened');
			}
		});
	}

	// Top Menu Seacrh
	$('.header').on('click', '#header-searchbtn', function () {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('#header-search').fadeOut();
		} else {
			$(this).addClass('opened');
			$('#header-search').fadeIn();
		}
		return false;
	});


	// Top Menu
	$('.header').on('click', '#header-menutoggle', function () {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('#top-menu').fadeOut();
		} else {
			$(this).addClass('opened');
			$('#top-menu').fadeIn();
		}
		return false;
	});
	// Top SubMenu
	$('#top-menu .has-child').on('click', '.fa', function () {
		if ($(this).parent().hasClass('opened')) {
			$(this).parent().removeClass('opened');
			$(this).next('ul').slideUp();
		} else {
			$(this).parent().addClass('opened');
			$(this).next('ul').slideDown();
		}
		return false;
	});


	// Section Menu
	if ($('#section-menu-btn').length > 0) {
		$('.section-top').on('click', '#section-menu-btn', function () {
			if ($(this).hasClass('opened')) {
				$(this).removeClass('opened').text('Catalog');
				$('#section-menu-wrap').fadeOut(200);
				$('.section-menu-overlay').fadeOut(200).remove();
			} else {
				$(this).addClass('opened').width($(this).width()).text('Close');
				$('#section-menu-wrap').fadeIn(200);
				$('body').append('<div class="section-menu-overlay"></div>');
				$('.section-menu-overlay').fadeIn(200);

				$('body').on('click', '.section-menu-overlay', function () {
					$('#section-menu-btn').removeClass('opened').text('Catalog');
					$('#section-menu-wrap').fadeOut(200);
					$('.section-menu-overlay').fadeOut(200).remove();
					return false;
				});
			}
			return false;
		});
	}




	// Product Tabs
	$('.prod-tabs li').on('click', 'a', function () {
		if ($(this).parent().hasClass('prod-tabs-addreview') || $(this).parent().hasClass('active') || $(this).attr('data-prodtab') == '')
			return false;
		$('.prod-tabs li').removeClass('active');
		$(this).parent().addClass('active');

		// mobile
		$('.prod-tab-mob').removeClass('active');
		$('.prod-tab-mob[data-prodtab-num=' + $(this).parent().data('prodtab-num') + ']').addClass('active');

		$('.prod-tab-cont .prod-tab').hide();
		$($(this).attr('data-prodtab')).fadeIn();

		return false;
	});

	// Product Tabs (mobile)
	$('.prod-tab-cont').on('click', '.prod-tab-mob', function () {
		if ($(this).hasClass('active') || $(this).attr('data-prodtab') == '')
			return false;
		$('.prod-tab-cont .prod-tab-mob').removeClass('active');
		$(this).addClass('active');

		// main
		$('.prod-tabs li').removeClass('active');
		$('.prod-tabs li[data-prodtab-num=' + $(this).data('prodtab-num') + ']').addClass('active');

		$('.prod-tab-cont .prod-tab').slideUp();
		$($(this).attr('data-prodtab')).slideDown();
		return false;
	});

	$('.prod-tabs').on('click', '.prod-tabs-addreview', function () {
		if ($('.prod-tabs li.active a').attr('data-prodtab') == '#prod-tab-3') {
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		} else {
			$('.prod-tabs li').removeClass('active');
			$('#prod-reviews').addClass('active');
			$('.prod-tab-cont .prod-tab').hide();
			$('#prod-tab-3').fadeIn();
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		}
		$('#prod-addreview-form').fadeIn();
		return false;
	});

	// Show Properties
	$('.prod-cont').on('click', '#prod-showprops', function () {
		if ($('.prod-tabs li.active a').attr('data-prodtab') == '#prod-tab-2') {
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		} else {
			$('.prod-tabs li').removeClass('active');
			$('#prod-props').addClass('active');
			$('.prod-tab-cont .prod-tab').hide();
			$('#prod-tab-2').fadeIn();
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		}
		return false;
	});

	// Show Description
	$('.prod-cont').on('click', '#prod-showdesc', function () {
		if ($('.prod-tabs li.active a').attr('data-prodtab') == '#prod-tab-1') {
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		} else {
			$('.prod-tabs li').removeClass('active');
			$('#prod-desc').addClass('active');
			$('.prod-tab-cont .prod-tab').hide();
			$('#prod-tab-1').fadeIn();
			$('html, body').animate({scrollTop: ($('.prod-tabs-wrap').offset().top - 10)}, 700);
		}
		return false;
	});


	// Quantity
	$('.qnt-wrap').on('click', 'a', function () {
		var qnt = $(this).parent().find('input').val();
		if ($(this).hasClass('qnt-plus')) {
			qnt++;
		} else if ($(this).hasClass('qnt-minus')) {
			qnt--;
		}
		if (qnt > 0)
			$(this).parent().find('input').val(qnt);
		return false;
	});



	// Colors
	$('.prodv-colors ul').on('click', 'li', function () {
		if (!$(this).hasClass('active')) {
			$('.prodv-colors ul li').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	});


	// Catalog Rating
	$('.sectls-rating').on('click', 'i', function () {
		if ($(this).parent().attr('data-rating'))
			return false;

	    $(this).parent().attr('data-rating', $(this).attr('title'));
	    var rating_count = $(this).parent().parent().find('.sectls-rating-count').text();
	    rating_count++;
	    $(this).parent().parent().find('.sectls-rating-count').html(rating_count);
	    return false;
	});

	// Product Rating
	$('.prod-rating').on('click', 'i', function () {
		if ($(this).parent().attr('data-rating'))
			return false;

	    $(this).parent().attr('data-rating', $(this).attr('title'));
	    var rating_count = $(this).parent().parent().find('.prod-rating-count').text();
	    rating_count++;
	    $(this).parent().parent().find('.prod-rating-count').html(rating_count);
	    return false;
	});


	// Post Add Comment Form
	$('.post-comments').on('click', '#post-comments-add', function () {
		$('#post-addcomment-form').slideDown();
		return false;
	});


	// Forms Validation
	var filterEmail  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
	$('.form-validate').submit(function () {
		var errors = 0;
		$(this).find('[data-required="text"]').each(function () {
            if ($(this).attr('data-required-email') == 'email'){
                if (!filterEmail.test($(this).val())) {
                    $(this).addClass("redborder");
                    errors++;
                }
                else {
                    $(this).removeClass("redborder");
                }
                return;
            }
			if ($(this).val() == '') {
				$(this).addClass('redborder');
				errors++;
			} else {
				$(this).removeClass('redborder');
			}
		});
		if (errors === 0) {
			var form1 = $(this);
			$.ajax({
				type: "POST",
				url: 'php/email.php',
				data: $(this).serialize(),
				success: function(data) {
					form1.append('<p class="form-result">Thank you!</p>');
		            $("form").trigger('reset');
				}
			});
		}
		return false;
	});
	$('.form-validate').find('[data-required="text"]').blur(function () {
        if ($(this).attr('data-required-email') == 'email' && ($(this).hasClass("redborder"))) {
            if (filterEmail.test($(this).val()))
                $(this).removeClass("redborder");
            return;
        }
		if ($(this).val() != "" && ($(this).hasClass("redborder")))
            $(this).removeClass("redborder");
	});


});


// Generate Front Filter Lines
function motor_createLine(x1,y1, x2,y2, after_el){
	var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
	var transform = 'rotate('+angle+'deg)';

	var line = jQuery('<div>').insertAfter(after_el).addClass('line').css({
		'position': 'absolute',
		'transform': transform
	}).offset({left: x1, top: y1}).width(length);
	return line;
}


$(window).load(function(){

	// Front Filter
		if ($('#frontsearch-cont').length > 0) {
			for (var i = 1; i <= $('#frontsearch-cont').data('lines-count'); i++) {
				if ($('#frontsearch-cont .frontsearch-res' + i + ' span').length > 0) {
					motor_createLine(
						($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().left + 17),
						($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().top + 9),
						($('#frontsearch-cont .frontsearch-point' + i).offset().left + 6),
						($('#frontsearch-cont .frontsearch-point' + i).offset().top + 6),
						('#frontsearch-cont .frontsearch-res' + i)
					);
				}
			}
			$(window).resize(function () {
				if ($('#frontsearch-cont .frontsearch-res' + i + ' span').length > 0) {
					$('#frontsearch-cont .line').remove();
					for (var i = 1; i <= $('#frontsearch-cont').data('lines-count'); i++) {
						motor_createLine(
							($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().left + 17),
							($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().top + 9),
							($('#frontsearch-cont .frontsearch-point' + i).offset().left + 6),
							($('#frontsearch-cont .frontsearch-point' + i).offset().top + 6),
							('#frontsearch-cont .frontsearch-res' + i)
						);
					}
				}
			});
		}


	// Front Slider
	if ($('#front-slider').length > 0) {
		$('#front-slider').fractionSlider({
			'fullWidth': 			true,
			'controls': 			false, 
			'pager': 				true,
			'responsive': 			true,
		    'increase': 			false,
			'pauseOnHover': 		false,
			'dimensions': 			"1170,392",
		});
	}



	// Product Slider
	if ($('#prod-slider').length > 0) {
		$("#prod-thumbs").flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 97,
		    itemMargin: 0,
		    minItems: 4,
		    maxItems: 4,
			asNavFor: '#prod-slider', 
		    start: function(slider){
		        $("#prod-thumbs").resize();
		    }
		});
		$('#prod-slider').flexslider({
		    animation: "fade",
		    animationSpeed: 500,
		    slideshow: false,
		    animationLoop: false,
		    smoothHeight: false,
			controlNav: false,
		    sync: "#prod-thumbs",
		});
	}

	// Slider "About Us"
	if ($('#aboutus').length > 0) {
		$('#aboutus').flexslider({
		    animation: "fade",
		    animationSpeed: 500,
		    slideshow: false,
		    animationLoop: false,
		    directionNav: false,
		    smoothHeight: true,
			controlNav: true,
		});
	}


	// Blog sliders
	if ($('.blog-slider').length > 0) {
		$('.blog-slider').flexslider({
		    animation: "fade",
		    animationSpeed: 500,
		    slideshow: false,
		    animationLoop: false,
		    directionNav: false,
		    smoothHeight: false,
			controlNav: true,
		});
	}
	if ($('.post-slider').length > 0) {
		$('.post-slider').flexslider({
		    animation: "fade",
		    animationSpeed: 500,
		    slideshow: false,
		    animationLoop: false,
		    directionNav: false,
		    smoothHeight: true,
			controlNav: true,
		});
	}


	// Section Product Title in Hover
	$('.special')
	.on( "mouseenter", function() {
		var ttl_height = $(this).find('h3').height();
		var inner_height = $(this).find('h3 span').height();
		$(this).find('h3 span').css('top', (-inner_height+ttl_height));
	})
	.on( "mouseleave", function() {
		$(this).find('h3 span').css('top', 0);
	});

	$('.popular')
	.on( "mouseenter", function() {
		var ttl_height = $(this).find('h3').height();
		var inner_height = $(this).find('h3 span').height();
		$(this).find('h3 span').css('top', (-inner_height+ttl_height));
	})
	.on( "mouseleave", function() {
		$(this).find('h3 span').css('top', 0);
	});

	$('.sectgl')
	.on( "mouseenter", function() {
		var ttl_height = $(this).find('h3').height();
		var inner_height = $(this).find('h3 span').height();
		$(this).find('h3 span').css('top', (-inner_height+ttl_height));
	})
	.on( "mouseleave", function() {
		$(this).find('h3 span').css('top', 0);
	});


	// Masonry Grids
	if ($('#blog-grid').length > 0) {
		$('#blog-grid').masonry({
			itemSelector: '.blog-grid-i',
		});
	}
	if ($('#gallery-grid').length > 0) {
		$('#gallery-grid').masonry({
			itemSelector: '.gallery-grid-i',
			columnWidth: '.gallery-grid-sizer',
			percentPosition: true
		});
	}
	if ($('#about-gallery').length > 0) {
		$('#about-gallery').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	}


});