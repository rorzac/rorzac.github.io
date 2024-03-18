(function ($) {

    "use strict";
    var wind = $(window);
    dsnGridMouseParallax();
    dsnGridProgressCircle(wind);
    embedVideo();
    mouseMove();

})(jQuery);

/**
 *
 * Function Mouse Parallax
 *
 */
function dsnGridMouseParallax() {

    var parallax = $('[data-dsn-grid="parallax"]');
    if (parallax.length === 0) {
        return;
    }
    parallax.each(function () {
        var _that = $(this),
            dsn_grid = dsnGridRemoveAttr(_that, 'data-dsn-grid'),
            speed = dsnGridRemoveAttr(_that, 'data-dsn-grid-speed'),
            move = dsnGridRemoveAttr(_that, 'data-dsn-grid-move'),
            _content = _that.html(),
            _html = '<div class="icon-circle"></div>' + '<div class="dsn-grid-parallax">' + _content + '</div>';
        _that.html(_html);

        speed = (speed === undefined) ? 0.3 : parseFloat(speed);

        move = (move === undefined) ? 25 : parseFloat(move);


        var icon = _that.find('.icon-circle'),
            dsn_grid_parallax = _that.find('.dsn-grid-parallax');
        _that.on('mouseleave', function (e) {
            TweenMax.to(_that, speed, {scale: 1});
            TweenMax.to(dsn_grid_parallax, 0.3, {scale: 1, x: 0, y: 0});
            TweenMax.to(icon, speed, {scale: 1, x: 0, y: 0});
        }).on('mouseenter', function (e) {
            TweenMax.to(_that, speed, {transformOrigin: '0 0', scale: 1});
            TweenMax.to(icon, speed, {scale: 1.2});
        }).on('mousemove', function (e) {
            parallaxIt(e, icon, move, _that);
            parallaxIt(e, dsn_grid_parallax, move, _that);
        });
    });

    function parallaxIt(e, target, movement, $this) {
        var boundingRect = $this[0].getBoundingClientRect();
        var relX = e.pageX - boundingRect.left;
        var relY = e.pageY - boundingRect.top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        TweenMax.to(target, 0.3, {
            x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
            y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
            ease: Power2.easeOut
        });
    }

}

/**
 *
 * Function button Up  page
 *
 */
function dsnGridProgressCircle(wind) {
    var
        e = $('[data-dsn-grid="progress-circle"]'),
        color = dsnGridRemoveAttr(e, 'data-dsn-grid-stroke');


    var stroke = color === undefined ? '' : 'stroke="' + color + '"';

    e.css({position: 'fixed', right: '-60px', bottom: '60px', width: '52px', height: '52px', 'z-index': '99999999'});
    e.append('<svg class="dsn-progress-circle-up" width="100%" height="100%" ' + stroke + ' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n' +
        '        <path class="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 300ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>' +
        '    </svg>');


    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            height = $(document).height() - wind.height();

        if (bodyScroll > 70) {
            TweenMax.to(e, 1, {ease: Back.easeOut.config(4), right: 60});
            e.find('.dsn-progress-path').css('stroke-dashoffset', 300 - Math.round(bodyScroll * 300 / height) + '%');

        } else {
            TweenMax.to(e, 1, {ease: Back.easeIn.config(4), right: -60});
        }

    });

    e.on('click', function () {
        $('body,html').animate({scrollTop: 0}, 300);
    })

}

/**
 *
 * Function Embed Video
 *
 */
function embedVideo() {
    var video = $('[data-dsn-video]');
    video.each(function (e) {
        var _e = $(this);
        var _v = dsnGridRemoveAttr(_e, 'data-dsn-video');
        _e.append('  <div class="play-button">\n' +
            '                        <div class="play-btn">\n' +
            '                            <i class="fas fa-play"></i>\n' +
            '                        </div>\n' +
            '                        <svg class="play-circles" viewBox="0 0 152 152">\n' +
            '                            <circle class="play-circle-01" fill="none" stroke="#fff" stroke-width="3"\n' +
            '                                    stroke-dasharray="343 343" cx="76" cy="76" r="72.7" data-svg-origin="76 76"\n' +
            '                                    style="transform-origin: 0px 0px 0px; stroke-dasharray: 343, 343; opacity: 1;"\n' +
            '                                    transform="matrix(0,1,-1,0,152,0)"></circle>\n' +
            '                            <circle class="play-circle-02" fill="none" stroke="#fff" stroke-width="3"\n' +
            '                                    stroke-dasharray="309 309" cx="76" cy="76" r="65.5" data-svg-origin="76 76"\n' +
            '                                    style="transform-origin: 0px 0px 0px; stroke-dasharray: 309, 309; opacity: 1;"\n' +
            '                                    transform="matrix(0,-1,1,0,0,152)"></circle>\n' +
            '                        </svg>\n' +
            '                    </div>');

        _e.on('click', function () {
            _e.addClass('dsn-video');
            _e.html('<div class="dsn-iframe-player">' + _v + '</div>');
            $('body,html').animate({scrollTop: _e.offset().top});
        });

        moveIcon(_e, _e.find('.play-button'));


    });


}

/**
 *
 * Function Move Icon Video
 *
 */
function moveIcon(_e, target) {

    _e.on('mousemove', function (e) {

        var pLeft = e.pageX;
        var pTop = e.pageY - $(this).offset().top;


        if (pTop > 0 && pTop < $(this).height() && $(this).offset().left < pLeft && pLeft < (_e.width())) {

            TweenMax.to(target, .5, {left: pLeft, top: pTop});


        } else {

            TweenMax.to(target, .5, {left: '50%', top: '50%'});

        }

    }).on('mouseenter', function () {
        $('body').off('mousemove');
        $('.dsn-move').css('display', 'none');
    })
        .on('mouseleave', function () {
            $('.dsn-move').css('display', '');
            TweenMax.to(target, .5, {left: '50%', top: '50%'});
            $('body').on('mousemove', function (e) {
                TweenMax.to($('.dsn-move'), .5, {left: e.pageX, top: e.pageY});
            });
        });


}

/**
 *
 * Function Remove attr and get value
 *
 */
function dsnGridRemoveAttr(e, attr) {
    var out = e.attr(attr);
    if (out !== undefined) {
        e.removeAttr(attr);
    }

    return out;
}

/**
 *
 * Function cursor mouse move
 *
 */
function mouseMove() {

    var body = $('body');
    const mouse_move = $('[data-dsn-grid-mousemove]');


    if (mouse_move.length > 0) {
        var _that = mouse_move;

        var mov = dsnGridRemoveAttr(_that, 'data-dsn-grid-mousemove');

        if (mov !== 'true') {
            return;
        }

        /**
         * ===================
         *      parent_div
         * ===================
         * @type {jQuery|HTMLElement}
         */
        var parent_div = $('<div class="dsn-move"></div>');
        var $transition = 'top .15s ease-out,left .15s ease-out';
        parent_div.css({
            position: 'absolute',
            'pointer-events': 'none',
            left: 0,
            top: 0,
            'z-index': 1000,
            width: '35px',
            height: '35px',
            transform: 'translate(-50%,-50%)',
            // '-webkit-transition': $transition,
            // '-moz-transition': $transition,
            // '-ms-transition': $transition,
            // '-o-transition': $transition,
            // 'transition': $transition
        });

        body.append(parent_div);

        body.on('mousemove', function (e) {
            // parent_div.css({left: e.pageX, top: e.pageY});
            TweenMax.to(parent_div , 0.5, {left: e.pageX, top: e.pageY})
        });


    }


}


/**
 *
 * Function Change  cursor mouse move
 *
 */
function dsnGridMouseChange(element, $class) {
    var dsn_move = $('div.dsn-move');
    $(element).on('mouseenter', function () {
        // dsn_move.addClass($class);
    }).on('mouseleave', function () {
        // dsn_move.removeClass($class);
    })
}

