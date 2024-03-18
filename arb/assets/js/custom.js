(function ($) {

    "use strict";

    var wind = $(window);

    loader(wind);
    data_overlay();
    background();
    scrolling_event(wind);
    dsn_slider();
    hoverPlayVideo();
    slider_project();
    effectHeader();
    nexProject();
    hoverReveal();
    navBar();
    changeCircle();
    loadMore();
    effectBackForward();
    dsn_filters();
    validateForm();

})(jQuery);


function validateForm() {

    var contact_form = $('#contact-form');
    if (contact_form.length === 0)
        return;

    contact_form.validator();
    // when the form is submitted
    contact_form.on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        contact_form.find('.messages').html(alertBox);
                        // empty the form
                        contact_form[0].reset();
                    }
                }
            });
            return false;
        }
    });
}

function dsn_filters() {
    var button_filter = $('.box-filter');
    var box_filter = $('.Filter-overlay');
    var close = $('.close-filters');
    var tl = new TimelineMax();
    var wind = $(window);


    if (button_filter.length !== 0) {


        close.on('click', function () {
            tl = new TimelineMax();
            box_filter.find('li').each(function () {
                tl.fromTo($(this), .3, {left: 0, opacity: 1}, {left: -40, opacity: 0, ease: Power1.easeIn});
            });
            tl.set(box_filter, {display: 'none'});
        });
        button_filter.on('click', function () {
            box_filter.show();
            tl = new TimelineMax();
            box_filter.find('li').each(function () {
                tl.fromTo($(this), .5, {left: -40, opacity: 0}, {
                    left: 0,
                    opacity: 1,
                    ease: Back.easeOut.config(4)
                });
            });

        });

        box_filter.find('li a').on('click', function (e) {
            e.preventDefault();
            var _that = $(this);
            var filter = _that.data('filter');
            var cat_filter = $('.cat-filter');
            if (filter === '*') {
                TweenMax.to(cat_filter.find('.cat-filter-item'), .5, {
                    scale: 1,
                    display: 'inline-block',
                    ease: Back.easeOut.config(4)
                });
            } else {
                TweenMax.to(cat_filter.find('.cat-filter-item').not('.cat-filter-' + filter), .5, {
                    scale: 0,
                    display: 'none',
                    ease: Back.easeOut.config(4)
                });

                TweenMax.to(cat_filter.find('.cat-filter-item' + '.cat-filter-' + filter), .5, {
                    scale: 1,
                    display: 'inline-block',
                    ease: Back.easeOut.config(4)
                });


            }

            $('html,body').animate({
                scrollTop: $('.proj-full').offset().top - 100
            }, 1000);


        });

        $('.cat-filter').find('.cat-filter-item').on('mouseenter', function () {
            $(this).attr('style', '');
        });

    }


};

/**
 *
 * Function Page Load
 *
 */
function loader() {


    if ($('.dsn-loader .dsn-progress-page').length === 0) {
        return;
    }

    var bar = new ProgressBar.Line('.dsn-loader .dsn-progress-page', {
        easing: 'easeInOut',
        duration: 1400,
        trailWidth: 1,
        svgStyle: {width: '100%', height: '1px'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(1.0);  // Number from 0.0 to 1.0


    $(window).on('load', function () {
        scroller($(window));

        const tl = new TimelineMax()
        tl.to('.dsn-loader .dsn-progress-page', .7, {opacity: 0})
            .to('.dsn-up', 2, {ease: Bounce.easeOut, top: '-50%'})
            .to('.dsn-down', 2, {ease: Bounce.easeOut, top: '100%'}, .7)
            .to('.dsn-loader', .1, {display: 'none'});


        var dsn_slider_info = $('.dsn-grid-info');
        var active = dsn_slider_info.find('.dsn-slider-active');
        active.css('opacity', 0);

        setTimeout(function () {
            active.css('opacity', 1);
            var t = new TimelineLite();
            var speed = 0.05;
            active.find('.word__wrapper .chars__wrapper').each(function () {
                var num_rund = getRndInteger(0, 3);

                switch (num_rund) {
                    case 0 :
                        t.fromTo($(this), speed, {opacity: 0, scaleY: 0}, {opacity: 1, scaleY: 1});
                        break;
                    case 1 :
                        t.fromTo($(this), speed, {opacity: 0, scaleX: 0}, {opacity: 1, scaleX: 1});
                        break;
                    case 2 :
                        t.fromTo($(this), speed, {opacity: 0, x: 1}, {opacity: 1, x: 0});
                        break;
                    case 3 :
                        t.fromTo($(this), speed, {opacity: 0, y: 1}, {opacity: 1, y: 0});
                        break;
                    default :
                        t.fromTo($(this), speed, {opacity: 0}, {opacity: 1});
                }
            });

            t.fromTo(dsn_slider_info.find('.slide-meta li '), 1, {opacity: 0, x: -40}, {
                ease: Back.easeOut.config(1),
                opacity: 1,
                x: 0
            });
            t.fromTo(dsn_slider_info.find('.custom-btn'), 1, {opacity: 0, x: -40}, {
                ease: Back.easeOut.config(4),
                opacity: 1,
                x: 0
            });
        }, 900)


    });

    /* fancybox
    -------------------------------------------------------*/
    $(".proj-container .single-image").fancybox({
        'openEffect': 'none',
        'closeEffect': 'none',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });


}

function data_overlay() {
    $('[data-overlay-color]').each(function () {
        var _that = $(this);
        var _color = dsnGridRemoveAttr(_that, 'data-overlay-color');
        _that.addClass('dsn-overlay');
        $('body').append('<style>.dsn-overlay[data-overlay]:before{background: ' + _color + ';}</style>');

    });
}


/**
 *
 * Function set background image from data background
 *
 */
function background() {

    var cover = $(".cover-bg, section , [data-image-src]");
    cover.each(function () {
        var attr = $(this).attr('data-image-src');

        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }

    });
}

/**
 *
 * Function navbar scrolling background and change logo
 *
 */
function scrolling_event(wind) {
    var oheight = $('.site-header').outerHeight();

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            headerSmall = $(".site-header , .header-top");

        if (bodyScroll > 250) {

            headerSmall.addClass("header-stickytop");
            $('.sections').addClass("body-pt");
            $('body').css('paddingTop', oheight);

        } else {

            headerSmall.removeClass("header-stickytop");
            $('body').css('paddingTop', 0);
        }
    });

}

/**
 *
 * Function Portfolio
 *
 */
function dsn_slider() {
    var
        dsn_slider_old = $('.dsn-grid-prev'),
        dsn_slider_current = $('.dsn-grid-slider-effect'),
        dsn_slider_prev = $('.dsn-grid-wrapper .dsn-grid-nav-box .to_top'),
        dsn_slider_next = $('.dsn-grid-wrapper .dsn-grid-nav-box .to_bottom'),
        dsn_slider_label = $('.dsn-grid-hover-label'),
        dsn_slider_info = $('.dsn-grid-info'),
        active = dsn_slider_info.find('.dsn-slider-active'),
        progress_slider = $('.dsn-progress-circle'),
        dsn_dir_slider = '',
        href = ''
    ;

    var tlm_progress = new TimelineMax();


    var speed_slide_custom = 1.85;
    var speed_slide_slick = 1500;
    dsn_slider_old.slick({
        arrows: false,
        speed: speed_slide_slick,

    });


    dsn_slider_current.slick({
        arrows: false,
        asNavFor: '.dsn-grid-prev',
        speed: speed_slide_slick,
        slidesToShow: 1,
        draggable: false

    });


    /**
     *
     *  =========================
     *      Slick Position
     *  =========================
     *
     *
     */


    dsn_slider_prev.on('click', function () {
        dsn_dir_slider = 'right';
        dsn_slider_current.slick('slickPrev');

    });

    dsn_slider_next.on('click', function () {
        dsn_dir_slider = 'left';
        dsn_slider_current.slick('slickNext');
    });


    // On swipe event
    dsn_slider_old.on('swipe', function (event, slick, direction) {
        if (direction === 'left') {
            dsn_dir_slider = 'left';
            dsn_slider_current.slick('slickNext');
        } else {
            dsn_dir_slider = 'right';
            dsn_slider_current.slick('slickPrev');
        }

    });


    function animationLeft() {
        TweenMax.fromTo(dsn_slider_label, speed_slide_custom, {left: '100%'}, {ease: Power3.easeOut, left: '-100%'});
    }

    function animationRight() {
        TweenMax.fromTo(dsn_slider_label, speed_slide_custom, {left: '-100%'}, {ease: Power3.easeOut, left: '100%'});
    }


    /**
     *
     * ===================
     *      Split Text
     * ===================
     *
     */
    dsn_slider_info.find('h6 span').each(function () {
        convertTextLine($(this), $(this).parent());
    });

    dsn_slider_info.find('h2').each(function () {
        convertTextLine($(this), $(this));
    });


    /**
     *
     * ========================
     *   Before After Event
     * ========================
     *
     */



    dsn_slider_current.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (dsn_dir_slider === 'left') {
            animationLeft();
        } else if (dsn_dir_slider === 'right') {
            animationRight();
        }
        dsn_dir_slider = '';
        $('.word__wrapper .chars__wrapper').css('opacity', '0');
        dsn_slider_info.find('.dsn-grid-info-wrapper').removeClass('dsn-slider-active');

        tlm_progress.reverse().progress(.00);
        setTimeout(function () {
            tlm_progress.play();
        }, 500);

    });

    dsn_slider_current.on('afterChange', function (event, slick, currentSlide) {

        var CurrentSlideDom = $(slick.$slides.get(currentSlide)),
            span_num = $('.dsn-grid-num span');


        /**
         *
         *  Text Number
         *
         * @type {TimelineLite}
         */
        var t2 = new TimelineLite();
        t2.fromTo(span_num, 0.5, {opacity: 0, x: 0}, {opacity: 1, ease: Back.easeIn.config(4), x: -20});
        currentSlide++;
        span_num.text((currentSlide < 10 ? "0" : "") + currentSlide);
        t2.fromTo(span_num, 1.5, {x: -20}, {ease: Back.easeOut.config(4), x: 0});


        /**
         *
         * Active information
         *
         */

        active = dsn_slider_info.find('[data-id="' + CurrentSlideDom.data('id') + '"]');
        active.addClass('dsn-slider-active');

        var t = new TimelineLite();
        var speed = 0.05;
        active.find('.word__wrapper .chars__wrapper').each(function () {
            var num_rund = getRndInteger(0, 3);

            switch (num_rund) {
                case 0 :
                    t.fromTo($(this), speed, {opacity: 0, scaleY: 0}, {opacity: 1, scaleY: 1});
                    break;
                case 1 :
                    t.fromTo($(this), speed, {opacity: 0, scaleX: 0}, {opacity: 1, scaleX: 1});
                    break;
                case 2 :
                    t.fromTo($(this), speed, {opacity: 0, x: 1}, {opacity: 1, x: 0});
                    break;
                case 3 :
                    t.fromTo($(this), speed, {opacity: 0, y: 1}, {opacity: 1, y: 0});
                    break;
                default :
                    t.fromTo($(this), speed, {opacity: 0}, {opacity: 1});
            }
        });

        t.fromTo(dsn_slider_info.find('.slide-meta li '), 1, {opacity: 0, x: -40}, {
            ease: Back.easeOut.config(1),
            opacity: 1,
            x: 0
        });
        t.fromTo(dsn_slider_info.find('.custom-btn'), 1, {opacity: 0, x: -40}, {
            ease: Back.easeOut.config(4),
            opacity: 1,
            x: 0
        });


    });


    /**
     *
     * ========================
     *      mousewheel
     * ========================
     */
    dsn_slider_current.bind('mousewheel DOMMouseScroll', function (event) {


        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

            dsn_dir_slider = 'right';
            dsn_slider_current.slick('slickPrev');
        } else {
            dsn_dir_slider = 'left';
            dsn_slider_current.slick('slickNext');
        }

    });

    /**
     *
     * ========================
     *      progress
     * ========================
     */


    tlm_progress.fromTo(progress_slider.find('svg path'), 8, {'stroke-dashoffset': 309},
        {
            'stroke-dashoffset': 0,
            onComplete: function () {
                if ($('.dsn-grid-root').length !== 0) {
                    dsn_dir_slider = 'left';
                    dsn_slider_current.slick('slickNext');
                } else {
                    tlm_progress = null;
                }

            }

        });


    $('body').on('mousemove', function (e) {
        // progress_slider.css({left: e.pageX - 15, top: e.pageY - 15});
        TweenMax.to(progress_slider , 0.5 , {left: e.pageX - 15, top: e.pageY - 15})

    });

    $('.dsn-grid-root a').on('click', function (e) {
        e.preventDefault();
    });


    function convertTextLine(text, append) {

        project = text.html().trim();
        // console.log(project);
        text.html('');
        out = '';
        for (var i = 0; i < project.length; i++) {
            if (i === 0) {
                out += '<div class="word__wrapper">'
            }
            if (project.charAt(i) !== ' ') {
                out += '<span class="chars__wrapper">' + project.charAt(i) + '</span>';

            } else {
                out += '</div>' + project.charAt(i) + '<div class="word__wrapper">';
            }
        }

        out += '</div>';
        append.append(out);

    }


    /**
     *
     *
     */


    dsn_view_project(tlm_progress, progress_slider);

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function slider_project() {
    var proj_slider_slick = $('.proj-slider-image');
    var hover_slider = $('.dsn-hover');


    proj_slider_slick.each(function () {
        var slick = $(this);
        var dir = 'left';
        var mouseClick = false;

        slick.slick({
            arrows: false,
        });


        slick.find('.item-project').each(function () {
            var _that = $(this);
            _that.find('img').on('mousemove', function (e) {
                var img = $(this);
                if (_that.hasClass('slick-current')) {

                    var left = e.pageX;
                    var width = img.width();
                    var space_padding = (width * 10) / 100;
                    var pWidth = ((width + space_padding) / 2);
                    if (left > space_padding) {
                        mouseClick = true;
                        hover_slider.css('top', 0);
                        if (left < pWidth) {

                            if (!hover_slider.hasClass('dsn-left-hover')) {
                                hover_slider.addClass('dsn-left-hover');
                                dir = 'left';
                            }


                        } else if (left > pWidth) {
                            if (hover_slider.hasClass('dsn-left-hover')) {
                                hover_slider.removeClass('dsn-left-hover');
                                dir = 'right';
                            }
                        }

                        TweenMax.to(hover_slider.find('.custom-btn') , 0.5 , {
                            'display': 'inline-flex',
                            left: e.pageX - 35,
                            top: e.pageY - 30
                        });
                    } else {
                        hover_slider.css('top', '');
                        mouseClick = false;
                        hover_slider.find('.custom-btn').css({'display': 'none'});
                    }


                } else {
                    hover_slider.css('top', '');
                    mouseClick = false;
                }

            }).on('mouseleave', function () {
                hover_slider.find('.custom-btn').css({'display': 'none'});
                hover_slider.css('top', '');

            }).on('mouseenter', function () {

                hover_slider.find('.custom-btn').css({'display': 'inline-flex'});


            }).on('click', function () {
                if (!mouseClick) {
                    return;
                }
                if (dir === 'left') {
                    slick.slick('slickNext');
                } else {
                    slick.slick('slickPrev');
                }

                hover_slider.find('.custom-btn').css({'display': 'inline-flex'});


            });
        });
    });


}


/**
 *
 * Function animate Play Video
 *
 */
function hoverPlayVideo() {
    TweenMax.set(".play-circle-01", {
        rotation: 90,
        transformOrigin: "center"
    });

    TweenMax.set(".play-circle-02", {
        rotation: -90,
        transformOrigin: "center"
    });

    TweenMax.set(".play-perspective", {
        xPercent: -2,
        scale: .08,
        transformOrigin: "center 41%",
        perspective: 1
    });

    TweenMax.set(".play-video", {
        visibility: "hidden",
        opacity: 0,
    });

    TweenMax.set(".play-triangle", {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        rotationY: 10,
        scaleX: 2
    });

    var rotateTL = new TimelineMax({paused: true})
        .to(".play-circle-01", .7, {
            opacity: .1,
            rotation: '+=360',
            strokeDasharray: "456 456",
            ease: Power1.easeInOut
        }, 0)
        .to(".play-circle-02", .7, {
            opacity: .1,
            rotation: '-=360',
            strokeDasharray: "411 411",
            ease: Power1.easeInOut
        }, 0);

    const button = document.querySelector(".play-button");

    if (button !== null) {
        button.addEventListener("mouseover", () => rotateTL.play());
        button.addEventListener("mouseleave", () => rotateTL.reverse());

    }

}

/**
 *  Function Change Circle Mouse
 */
function changeCircle() {
    dsnGridMouseChange('a', 'override-circle');
    dsnGridMouseChange('.site-header a', 'override-circle-none');
}

/**
 *  Function init Mouse Scroll Time
 */
function scroller(wind) {


    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        || navigator.userAgent.match(/Edge/i)
        || navigator.userAgent.match(/MSIE 10/i)
        || navigator.userAgent.match(/MSIE 9/i)
    ) {
        $('body').addClass('cuby-mobile');
    }

    var scrollTime = 0.3;			//Scroll time
    var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    wind.on("mousewheel DOMMouseScroll", function (event) {


        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = wind.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);


        TweenMax.to(this, scrollTime, {
            scrollTo: {y: finalScroll, autoKill: true},
            ease: Power4.easeOut,
            autoKill: true,
            overwrite: 10
        });


    });

}


/**
 *  Function ajax slider
 */
function dsn_view_project(tlm_progress, progress_slider) {

    var dsn_info = $('.dsn-grid-info');
    var dsn_info_title = dsn_info.find('.dsn-grid-info-wrapper .title ');
    var dsn_info_click = dsn_info.find('.dsn-grid-info-wrapper .title , .custom-btn');

    var dsn_info_current = $('.dsn-grid-current');
    var dsn_info_prev = $('.dsn-grid-prev');
    var body = $('body');
    var tlMoveUp = new TimelineMax();
    var href = null;
    var size = $(window).width();

    $(window).on('resize', function () {
        size = $(window).width();
    });

    dsn_info_title.on('mouseenter', function () {
        if (size > 991) {
            dsn_info_current.find('.dsn-grid-slider-effect').css({transform: 'scale(1.1)'});
            dsn_info.css({transform: 'scale(1.1) translate3d(-40px , -50% ,0)'});
            dsn_info_prev.css({transform: 'translate3d(-40px , 0 , 0)'});
        }
        tlm_progress.pause();
    }).on('mouseleave', function () {
        if (size > 991) {
            dsn_info_current.find('.dsn-grid-slider-effect').css({transform: ''});
            dsn_info.css({transform: ''});
            dsn_info_prev.css({transform: ''});
        }
        tlm_progress.resume();

    });

    dsn_info_click.on('click', function (e) {
        e.preventDefault();
        var _parent = $(this).parent('.dsn-slider-active');
        var id = _parent.data('id');
        var url = _parent.data('url');
        tlm_progress.pause();
        $('body').attr('data-dsn-grid-mousemove', "true");
        mouseMove();

        beforeSend(id);

        function beforeSend(id) {

            if (tlMoveUp.isActive()) {
                return;
            }
            var e_img = dsn_info_current.find('.slick-active[data-id="' + id + '"]');

            var img_src = e_img.attr('data-image-src');
            var header = $('<header class="header-project cover-bg " data-overlay="2"></header>');
            header.css({
                position: 'absolute',
                'background-image': 'url("' + img_src + '")',
                width: e_img.width(),
                height: '100%',
                top: 0,
                left: e_img.offset().left
            });

            body.append(header);
            tlMoveUp.staggerTo([dsn_info, dsn_info_prev, $('.dsn-grid-nav-box')], 1, {
                ease: Back.easeIn.config(1.7),
                y: '-100%',
                opacity: 0
            }).to(header, 1, {
                ease: Back.easeIn.config(1.7), width: '100%', left: 0, onStart: function () {
                    TweenMax.to(dsn_info_current, .1, {opacity: 0});
                },
                onComplete: function () {
                    href = url;
                    ajaxProject(id, url, header)
                }
            });


        }


    });


}

function effectBackForward() {
    $(window).on('popstate', function (e) {
        $('body').toggleClass('dsn-loader-active');
        setTimeout(function () {
            $(".root").load(document.location + ' .dsn-grid-color', function () {
                refreshScript();
            });
        }, 1000);

    });
}

function nexProject() {
    var tlNext = new TimelineMax();

    $('.project-next-box ').on('click', function (e) {
        e.preventDefault();
        if (tlNext.isActive()) {
            return;
        }
        var _that = $(this);
        var body = $('body');
        var id = _that.data('id');
        var url = _that.data('url');
        var src = _that.find('.project-next-bg[data-image-src]').attr('data-image-src');

        /**
         *
         *  element move
         */

        var object = {opacity: 0, y: -100, ease: Back.easeIn.config(4)};
        tlNext.to(_that.find('.next-project h4 '), 1, object);
        tlNext.to(_that.find('.next-title'), 1, object, .3);
        tlNext.to(_that, 1, {
            ease: Elastic.easeIn.config(1, 0.3),
            opacity: 0,
            y: '100%',
            onComplete: function () {
                body.css('overflow', 'hidden');

                var header = $('<header class="header-project cover-bg " data-overlay="2"></header>');
                header.css({
                    position: 'fixed',
                    'clip-path': 'circle(0% at 50% 50%)',
                    'background-image': 'url("' + src + '")',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    transform: 'translateY(100%)',
                    'z-index': 9999
                });

                body.append(header);
                TweenMax.to(header, 2.5, {
                    ease: Elastic.easeOut.config(1, 0.75),
                    y: 0, 'clip-path': 'circle(100% at 50% 50%)',
                    onStart: function () {
                        $('.dsn-grid-color').html('');
                        $('body,html').animate({scrollTop: 0});
                    },
                    onComplete: function () {
                        ajaxProject(id, url, header);
                    }

                });


            }
        });


    });
}

function ajaxProject(id, url, header) {
    $.ajax({
        url: 'ajax/project' + id + '.html',
        dataType: 'html',
        cache: false,
        beforeSend: function () {
            $('.dsn-move').addClass('dsn-loader');
        },
        success: function (data, textStatus, jqXHR) {
            header.css({'z-index': 9999});
            $('.dsn-grid-color').html(data);
            setTimeout(function () {
                animation(header);
                refreshScript();
                history.pushState({page: id}, 'project' + id, url);

                $('.dsn-move').removeClass('dsn-loader');
            }, 100);


        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
}

function animation(remove) {
    var e = $('.dsn-grid-animation');
    TweenMax.to(remove, .5, {
        opacity: 0, onComplete: function () {
            if (remove !== null && remove !== undefined) {
                remove.remove();
            }
        }
    });
    TweenMax.fromTo(e, 1, {opacity: 1, y: "100%"}, {ease: Back.easeOut.config(1.7), opacity: 1, x: '-50%', y: '-50%'});
    TweenMax.to($('body'), 1, {overflow: ''});

}

/**
 *  Function Effect Header
 */
function effectHeader() {

    var animate_fade_in = $('.content-block:not(footer .content-block)');
    if (animate_fade_in.length > 0) {
        animate_fade_in.attr('data-aos', "fade-up");
    }


    setTimeout(function () {
        AOS.init({
            duration: 1000
        });
    }, 1000);


    setTimeout(() => document.body.classList.add('render'), 60);
    const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    const total = navdemos.length;
    const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
    const navigate = (linkEl) => {
        document.body.classList.remove('render');
        document.body.addEventListener('transitionend', () => window.location = linkEl.href);
    };
    navdemos.forEach(link => link.addEventListener('click', (ev) => {
        ev.preventDefault();
        navigate(ev.target);
    }));
    document.addEventListener('keydown', (ev) => {
        const keyCode = ev.keyCode || ev.which;
        let linkEl;
        if (keyCode === 37) {
            linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
        } else if (keyCode === 39) {
            linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
        } else {
            return false;
        }
        navigate(linkEl);
    });
    imagesLoaded('.glitch__img', {background: true}, () => {
        document.body.classList.remove('loading');
        document.body.classList.add('imgloaded');
    });
}

function hoverReveal() {

    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {x: posx, y: posy}
    }
    // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);


    // Effect 1
    class HoverImgFx1 {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

            this.initEvents();
        }

        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };

            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }

        showImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {zIndex: 1000});
                }
            })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.2, {
                    ease: Sine.easeOut,
                    startAt: {x: '-100%'},
                    x: '0%'
                }), 'begin')
                .add(new TweenMax(this.DOM.revealImg, 0.2, {
                    ease: Sine.easeOut,
                    startAt: {x: '100%'},
                    x: '0%'
                }), 'begin');
        }

        hideImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {zIndex: 999});
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {zIndex: ''});
                    TweenMax.set(this.DOM.reveal, {opacity: 0});
                }
            })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.2, {
                    ease: Sine.easeOut,
                    x: '100%'
                }), 'begin')

                .add(new TweenMax(this.DOM.revealImg, 0.2, {
                    ease: Sine.easeOut,
                    x: '-100%'
                }), 'begin');
        }
    }


    Array.from(document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')).forEach(link => new HoverImgFx1(link));


    imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
}

/**
 *  Function Click Navigation Bar
 */
function navBar() {
    /* Nav bar
  -------------------------------------------------------*/
    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');

            applyListeners();
        };

        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };

        $('.nav__list-item:not(.nav__list-dropdown) ').on("click", function () {
            $('body').removeClass('nav-active');
        });

        $(".nav__list-dropdown > a").on('click',
            function (e) {
                e.preventDefault();
                var _that = $(this).parent();
                var dispaly = _that.find('ul').css('display');
                $(".nav__list-dropdown").find("ul").slideUp("slow");
                if (dispaly !== 'block') {
                    _that.find("ul").slideDown("slow");
                }

            }
        );


        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
        };

        init();

    }();

}


/**
 * Ajax Load More
 */
function loadMore() {
    var button = $('.button-loadmore');
    var progress = button.find('.dsn-load-progress-ajax');
    var progress_text = button.find('.progress-text');
    var old_text = progress_text.text();
    var url = button.data('url');
    var page = parseInt(button.data('page'));
    var content = $('.dsn-block-content');
    button.on('click', function () {
        $.ajax({
            url: url,
            data: {},
            beforeSend: function () {
                button.addClass('dsn-loading');
            },
            success: function (data) {
                setTimeout(function () {
                    content.append(data);
                    button.removeClass('dsn-loading');
                    progress.css('width', 0);
                    progress_text.text(old_text);
                    hoverReveal();
                    AOS.init({
                        duration: 1000
                    });

                }, 500);

            },
            xhrFields: {
                onprogress: function (e) {
                    if (e.lengthComputable) {
                        var p = e.loaded / e.total * 100;
                        progress.css('width', p + '%');
                        progress_text.text(p + '%');
                    }
                }
            }
        });
    });


}

/**
 * Function Load Via Ajax
 */
function refreshScript() {


    var wind = $(window);
    dsnGridMouseParallax();
    dsnGridProgressCircle(wind);
    embedVideo();
    mouseMove();
    loader(wind);
    background();
    scrolling_event(wind);
    dsn_slider();
    hoverPlayVideo();
    slider_project();
    effectHeader();
    nexProject();
    hoverReveal();
    changeCircle();
    loadMore();

}


