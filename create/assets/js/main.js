/*-----------------------------------------------------------------------------------
    Template Name: Tilke - Marketing Agency HTML Template
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    #. Main Menu
    #. Testimonials Slider One
    #. Testimonials Slider Two
    #. Counter Up
    #. Progress bar
    #. Active Isotope
    #. Sticky Header
    #. Preloader
    #. Accordion Class Toggle
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-slide-panel'),
            mobilePanelMenu = $('.mobile-menu'),
            panelOverly = $('.panel-overlay'),
            navClose = $('.panel-close'),
            canvasBtn = $('.off-canvas-btn'),
            canvasPanel = $('.off-canvas-panel');

        // Panel Click Event
        navbarToggler.on('click', function (e) {
            e.preventDefault();
            mobilePanel.toggleClass('show-panel');
        });
        canvasBtn.on('click', function (e) {
            e.preventDefault();
            canvasPanel.toggleClass('show-panel');
        });
        navClose.on('click', function (e) {
            e.preventDefault();
            mobilePanel.removeClass('show-panel');
            canvasPanel.removeClass('show-panel');
        });
        panelOverly.on('click', function (e) {
            e.preventDefault();
            mobilePanel.removeClass('show-panel');
            canvasPanel.removeClass('show-panel');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.submenu').stop(true, true).slideToggle(350);
            $(this).toggleClass('submenu-opened');
        });
    }

    // ===== Testimonials Slider One
    function testimonialSliderOne() {
        const slider = $('.testimonial-slider-one');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }

    // ===== Testimonials Slider Two
    function testimonialSliderTwo() {
        const slider = $('.testimonial-slider-two');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // ===== Counter Up
    function counterUp() {
        $('.counter-item, .single-progress-bar').on('inview', function (event, isInView) {
            if (isInView) {
                $(this).find('.counter').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
    }

    // ===== Progress bar
    function progressBar() {
        $('.progress-bar-item').on('inview', function (event, isInView) {
            if (isInView) {
                $(this).find('.progress-line').each(function () {
                    const percentage = $(this).data('percentage'),
                        lineInner = $(this).find('.line'),
                        widthCss = percentage + '%';

                    lineInner.width(widthCss);
                });
                $(this).unbind('inview');
            }
        });
    }

    // ===== Active Isotope
    function activeIsotope() {
        $('.portfolio-section').imagesLoaded(function () {
            const items = $('.filter-items').isotope();

            // items on button click
            $('.portfolio-filter').on('click', 'li', function (e) {
                const filterValue = $(this).attr('data-filter');
                items.isotope({
                    filter: filterValue
                });
            });
            // menu active class
            $('.portfolio-filter li').on('click', function (event) {
                $('.portfolio-filter .active').removeClass('active');
                $(this).addClass('active');

                event.preventDefault();
            });
        });
    }

    // ==== Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.template-header');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    // ==== Preloader
    function preloader() {
        $('#preloader').delay(500).fadeOut(500);
    }

    // ==== Nice Select
    function activeNiceSelect() {
        $('select').niceSelect();
    }

    // ===== Portfolio Slider
    function portfolioSlider() {
        const slider = $('.portfolio-slider');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // ===== Accordion Class Toggle
    function accordionClassToggle() {
        $('.accordion .accordion-title').on('click', function (event) {
            $('.accordion .accordion-active').removeClass('accordion-active');
            $(this).parent().addClass('accordion-active');

            event.preventDefault();
        });
    }

    // ===== Brand Slider
    function logoCarousel() {
        const slider = $('.logo-carousel-active');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Product Gallery
    function productGallery() {
        const mainGallery = $('.product-main-gallery'),
            thumbGallery = $('.product-thumb-gallery');

        mainGallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: thumbGallery
        });

        thumbGallery.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: mainGallery,
            dots: false,
            centerMode: false,
            focusOnSelect: true
        });
    }

    // ===== Related Product Slider
    function relatedProductSlider() {
        const slider = $('.related-product-slider');

        slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    /*---------------------
    === Document Ready  ===
    ----------------------*/
    $(document).ready(function () {
        mainMenu();
        testimonialSliderOne();
        testimonialSliderTwo();
        counterUp();
        progressBar();
        activeIsotope();
        activeNiceSelect();
        portfolioSlider();
        accordionClassToggle();
        logoCarousel();
        productGallery();
        relatedProductSlider();
    });

    /*---------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        preloader();
        new WOW().init();
    });

})(jQuery);