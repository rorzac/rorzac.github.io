window.bioEp = {
    bgEl: {}, popupEl: {}, closeBtnEl: {}, shown: !1,
    overflowDefault: "visible",
    transformDefault: "",
    width: 400,
    height: 220,
    html: "",
    css: "",
    fonts: [],
    delay: 3,
    showOnDelay: !1,
    cookieExp: 30,
    showOncePerSession: !1,
    onPopup: null,
    cookieManager: {
        create: function (a, b, d, c) {
            var e = "";
            c ? e = "; expires=0" : d && (c = new Date, c.setTime(c.getTime() + 864E5 * d), e = "; expires=" + c.toGMTString());
            document.cookie = a + "=" + b + e + "; path=/"
        }, get: function (a) {
            a += "=";
            for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
                for (var c = b[d];
                " " == c.charAt(0);) c = c.substring(1, c.length);
                if (0 === c.indexOf(a)) return c.substring(a.length, c.length)
            }
            return null
        }, erase: function (a) {
            this.create(a, "", -1)
        }
    }, checkCookie: function(){
        if(typeof(Storage)=="undefined" || sessionStorage.getItem('bioep_disable')=='on'){
			return true;
		}
		sessionStorage.setItem('bioep_disable', 'on');
		return false;
    }, addPopup: function () {
		this.popupEl = document.getElementById("bio_ep_bg");
	}, showPopup: function () {
		if(!bioEp.checkCookie()){
			$(this.popupEl).fadeIn();
			console.log($(this.popupEl).attr('id'));
		}
	}, hidePopup: function () {
		$(this.popupEl).fadeOut();
    }, scalePopup: function () {
        var a = bioEp.popupEl.offsetWidth,
            b = bioEp.popupEl.offsetHeight,
            d = window.innerWidth,
            c = window.innerHeight,
            e = 0,
            f = 0,
            g = a / b;
        a > d - 40 && (e = d - 40, f = e / g, f > c - 40 && (f = c - 40, e = f * g));
        0 === f && b > c - 40 && (e = (c - 40) * g);
        a = e / a;
        if (0 >= a || 1 < a) a = 1;
        "" === this.transformDefault && (this.transformDefault = window.getComputedStyle(this.popupEl, null).getPropertyValue("transform"));
        this.popupEl.style.transform = this.transformDefault + " scale(" + a + ")"
    }, addEvent: function (a, b, d) {
        a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent && a.attachEvent("on" + b, d)
    }, loadEvents: function () {
        this.addEvent(document, "mouseout", function (a) {
            a = a ? a : window.event;
            "input" != a.target.tagName.toLowerCase() && (a.clientX >= Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 50 || 50 <= a.clientY || a.relatedTarget || a.toElement || bioEp.showPopup())
        }.bind(this));
        this.addEvent(this.closeBtnEl, "click", function () {
            bioEp.hidePopup()
        });
        this.addEvent(window, "resize", function () {
            bioEp.scalePopup()
        })
    }, setOptions: function (a) {
        this.width = "undefined" === typeof a.width ? this.width : a.width;
        this.height = "undefined" === typeof a.height ? this.height : a.height;
        this.html = "undefined" === typeof a.html ? this.html : a.html;
        this.css = "undefined" === typeof a.css ? this.css : a.css;
        this.fonts = "undefined" === typeof a.fonts ? this.fonts : a.fonts;
        this.delay = "undefined" === typeof a.delay ? this.delay : a.delay;
        this.showOnDelay = "undefined" === typeof a.showOnDelay ? this.showOnDelay : a.showOnDelay;
        this.cookieExp = "undefined" === typeof a.cookieExp ? this.cookieExp : a.cookieExp;
        this.showOncePerSession = "undefined" === typeof a.showOncePerSession ? this.showOncePerSession : a.showOncePerSession;
        this.onPopup = "undefined" === typeof a.onPopup ? this.onPopup : a.onPopup
    }, domReady: function (a) {
        "interactive" === document.readyState || "complete" === document.readyState ? a() : this.addEvent(document, "DOMContentLoaded", a)
    }, init: function (a) {
        "undefined" !== typeof a && this.setOptions(a);
		setTimeout(function(){
			bioEp.addPopup();
			bioEp.loadEvents();
			bioEp.showOnDelay && bioEp.showPopup();
		}, 1000 * bioEp.delay);
    }
};