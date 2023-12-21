/** cookies v1.1.0*/
(function () {
    var tools = {
        /**
        * Href cookie name.
        */
        hrefCookieName: "bpmHref",

        /**
        * Ref cookie name.
        */
        refCookieName: "bpmRef",

        /**
        * Session cookie name.
        */
        obsoleteCookieName: "bpmSessionId",
        trackingIdCookieName: "bpmTrackingId",
        href: null,
        ref: null,
		
		/**
		* Top-level domains.
		*/
		TLDs: ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "money", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join(),

        /**
        * Returns the value of cookie with the specified key.
	    * @param {String} name The key (cookie name) of the cookie.
	    * @return {String} The value of a specified cookie.
	    */
        getCookie: function (name) {
            var cname = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) === 0) {
                    return c.substring(cname.length, c.length);
                }
            }
            return null;
        },

        /**
         * @param {string} name Cookie name.
         * @param {string} value Coockie value.
         * @param {string} expires Cookie expires date in GMT string representation.
         * @param {string} domain Cookie domain.
         * @returns {string} String data for the cookie.
         */
        formatCookieString: function (name, value, expires, domain) {
            return name ? name + "=" + (value ? value : "") +
                (expires ? ";expires=" + expires : "") +
                "; path=/" +
                (domain ? ";domain=" + domain : "")
                : null;
        },

        /**
         * @param {string} name Name of the cookie.
         * @returns {void}
         */
        deleteCookie: function (name) {
            var domain = this.getTopLevelDomain();
            var expireDate = "Thu, 01 Jan 1970 00:00:01 GMT";
            var coockieString = this.formatCookieString(name, null, expireDate, domain);
            if (coockieString) {
                document.cookie = coockieString;
            }
        },

        /**
         * Get top-level domain of the current page.
         * @returns {string} Domain name.
         */
        getTopLevelDomain: function() {
            var url = document.location.hostname;
			var parts = url.split('.');
			if (parts[0] === 'www' && parts[1] !== 'com'){
				parts.shift()
			}
			var ln = parts.length
			  , i = ln
			  , minLength = parts[parts.length-1].length
			  , part
			while(part = parts[--i]){
				if (i === 0
					|| i < ln-2
					|| part.length < minLength
					|| this.TLDs.indexOf(part) < 0
				){
					return parts.slice(i).join('.')
				}
			}
        },

        /**
         * Replace value of new tracking cookie with existing old value.
         * @returns {bool} True if the tracking id cookie was replaced with existing value of the old cookie.
         */
        replaceTrackingIdCookie: function () {
            var existingCookie = this.getCookie(this.obsoleteCookieName);
            if (existingCookie) {
                this.setCookie(this.trackingIdCookieName, existingCookie);
                this.deleteCookie(this.obsoleteCookieName);
                return true;
            }
            return false;
        },

        /**
        * Set the value of cookie with the specified key.
	    * @param {String} name The key (cookie name) of the cookie.
	    * @param {String} value The value of a specified cookie.
	    */
        setCookie: function (name, value) {
            var date = new Date();
            var expiresCookieDays = 180;
            date.setTime(date.getTime() + (expiresCookieDays * 24 * 60 * 60 * 1000));
            var expires = date.toGMTString();
            var domain = this.getTopLevelDomain();
            var coockieString = this.formatCookieString(name, value, expires, domain);
            if (coockieString) {
                document.cookie = coockieString;
            }
        },

        /**
        * Init module.
	    */
        init: function () {
            this.href = window.location.href;
            this.ref = document.referrer;
        },
		
		/**
        * Returns domain name.
	    * @param {String} site url.
	    * @return {String} domain name.
	    */
        extractDomain: function (url) {
            var domain;
            if (url.indexOf("://") > -1) {
                domain = url.split('/')[2];
            } else {
                domain = url.split('/')[0];
            }
            domain = domain.split('/')[0];
            if (domain.substring(0, 4) === "www.") {
                domain = domain.substring(4, domain.length);
            }
            return domain;
        },

        /**
        * Returns the value of flag.
        * @return {Boolean} The flag for internal navigation.
        */
        isInternalNavigation: function () {
            if (this.ref === "") {
                return false;
            }
            return this.extractDomain(this.ref) === this.extractDomain(location.host);
        },

        /**
        * Returns the value of flag.
        * @param {String} value The url address.
        * @return {Boolean} The flag for url address is contains Utm.
        */
        containsUtm: function (value) {
            var queryStr = value.split("?")[1];
            var queryParams = [];
            if (queryStr) {
                queryParams = queryStr.split("&");
            }
            var flag = false;
            var i = 0;
            while (i < queryParams.length && !flag) {
                var param = queryParams[i].trim();
                flag = param.indexOf("utm_") === 0;
                i++;
            }
            return flag;
        },

        /**
        * Returns new guid.
        * @return {String} new guid.
        */
        newGuid: function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
        }
    };
    tools.init();
    if (!tools.isInternalNavigation()) {
        if (tools.ref === "" && !tools.containsUtm(tools.href)) {
            var refValue = tools.getCookie(tools.refCookieName);
            var hrefValue = tools.getCookie(tools.hrefCookieName);
            if (!refValue) {
                tools.setCookie(tools.refCookieName, "");
            }
            if (!hrefValue || refValue === "") {
                tools.setCookie(tools.hrefCookieName, tools.href);
            }
        } else {
            tools.setCookie(tools.refCookieName, tools.extractDomain(tools.ref));
            tools.setCookie(tools.hrefCookieName, tools.href);
        }
        if (!tools.getCookie(tools.trackingIdCookieName) && !tools.replaceTrackingIdCookie()) {
            tools.setCookie(tools.trackingIdCookieName, tools.newGuid());
        }
    }
})();
