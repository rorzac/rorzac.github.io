!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e("#preloader").delay(0).fadeOut(),
      (function () {
        var n = e(".slider-active");
        function o(n) {
          var o =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
          n.each(function () {
            var n = e(this),
              i = n.data("delay"),
              a = "animated " + n.data("animation");
            n.css({ "animation-delay": i, "-webkit-animation-delay": i }),
              n.addClass(a).one(o, function () {
                n.removeClass(a);
              });
          });
        }
        n.on("init", function (n, i) {
          o(e(".single-slider:first-child").find("[data-animation]"));
        }),
          n.on("beforeChange", function (n, i, a, t) {
            o(
              e('.single-slider[data-slick-index="' + t + '"]').find(
                "[data-animation]"
              )
            );
          }),
          n.slick({
            autoplay: !1,
            autoplaySpeed: 1e4,
            dots: !1,
            fade: !0,
            arrows: !1,
            responsive: [
              { breakpoint: 767, settings: { dots: !1, arrows: !1 } },
            ],
          });
      })(),
      new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0,
      }).init();
  }),
    e(document).ready(function () {
      e("html").css("scroll-behavior", "auto");
    });
  var n = e(".section-link");
  if (
    (e(window).scroll(function () {
      var o = e(this).scrollTop();
      n.each(function () {
        e(this.hash).offset().top - 105 <= o &&
          (e(this).parent().addClass("active"),
          e(this).parent().siblings().removeClass("active"));
      });
    }),
    e(function () {
      e('a.section-link[href*="#"]:not([href="#"])').on("click", function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var n = e(this.hash);
          if (
            (n = n.length ? n : e("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              e("html, body").animate(
                { scrollTop: n.offset().top - 90 },
                1200,
                "easeInOutExpo"
              ),
              !1
            );
        }
      });
    }),
    e(".menu-area li.menu-item-has-children ul").length &&
      e(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      ),
    e(".mobile-menu").length)
  ) {
    var o = e(".menu-area .main-menu").html();
    e(".mobile-menu .menu-box .menu-outer").append(o),
      e(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
        }
      ),
      e(".mobile-nav-toggler").on("click", function () {
        e("body").addClass("mobile-menu-visible");
      }),
      e(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        e("body").removeClass("mobile-menu-visible");
      });
  }
  e(".banner-social-link").on("click", function () {
    return (
      e(this).parent().find("span").animate({ width: "toggle" }, 0),
      e(this).parent().toggleClass("is-active"),
      !1
    );
  }),
    e(window).on("scroll", function () {
      e(window).scrollTop() < 245
        ? (e("#sticky-header").removeClass("sticky-menu"),
          e("#header-fixed-height").removeClass("active-height"))
        : (e("#sticky-header").addClass("sticky-menu"),
          e("#header-fixed-height").addClass("active-height"));
    }),
    e(".scroll-to-target,.banner-scroll a").length &&
      e(".scroll-to-target,.banner-scroll a").on("click", function () {
        var n = e(this).attr("data-target");
        e("html, body").animate({ scrollTop: e(n).offset().top }, 1e3);
      }),
    e('.home-01 a[href*="#"]:not(.section-link)').on("click", function () {
      e("html, body").animate({ scrollTop: e("html").offset().top }, 1e3);
    }),
    e("[data-countdown]").each(function () {
      var n = e(this),
        o = e(this).data("countdown");
      n.countdown(o, function (e) {
        n.html(
          e.strftime(
            '<div class="time-count day"><span>%D</span>Days</div><div class="time-count hour"><span>%H</span>hour</div><div class="time-count min"><span>%M</span>minute</div><div class="time-count sec"><span>%S</span>second</div>'
          )
        );
      });
    }),
    e(".brand-active").slick({
      dots: !1,
      infinite: !0,
      speed: 1e3,
      autoplay: !0,
      arrows: !1,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 5, slidesToScroll: 1, infinite: !0 },
        },
        { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        {
          breakpoint: 767,
          settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1 },
        },
        {
          breakpoint: 575,
          settings: { slidesToShow: 2, slidesToScroll: 1, arrows: !1 },
        },
      ],
    }),
    e(document).ready(function () {
      var n = e(".choose-active"),
        o = e(".slide-progress"),
        i = e(".slider__label");
      n.on("beforeChange", function (e, n, a, t) {
        var s = (t / (n.slideCount - 1)) * 100;
        o.css("background-size", s + "% 100%").attr("aria-valuenow", s),
          i.text(s + "% completed");
      }),
        n.slick({
          dots: !1,
          infinite: !0,
          speed: 1e3,
          autoplay: !0,
          arrows: !1,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 1, infinite: !0 },
            },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 767,
              settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1 },
            },
            {
              breakpoint: 575,
              settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1 },
            },
          ],
        });
    }),
    e(".jarallax").jarallax({ speed: 0.2 }),
    e(".odometer").appear(function (n) {
      e(".odometer").each(function () {
        var n = e(this).attr("data-count");
        e(this).html(n);
      });
    });
  var i = e("#countdown-gampang"),
    a = new Date();
  a.setDate(a.getDate() + 50),
    i.CountdownGampang({ rampung: a }),
    e(".bt-roadmap_x").mCustomScrollbar({
      axis: "x",
      scrollbarPosition: "outside",
      theme: "custom-bar3",
      scrollInertia: 100,
      advanced: { autoExpandHorizontalScroll: 2 },
    });
})(jQuery);
