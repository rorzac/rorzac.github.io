!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = {
      i: n,
      l: !1,
      exports: {},
    });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 1873));
})({
  121: function (t, e, r) {
    "use strict";
    (e.byteLength = function (t) {
      var e = a(t),
        r = e[0],
        n = e[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (e.toByteArray = function (t) {
        var e,
          r,
          n = a(t),
          o = n[0],
          u = n[1],
          h = new s(
            (function (t, e, r) {
              return (3 * (e + r)) / 4 - r;
            })(0, o, u)
          ),
          f = 0,
          c = u > 0 ? o - 4 : o;
        for (r = 0; r < c; r += 4)
          (e =
            (i[t.charCodeAt(r)] << 18) |
            (i[t.charCodeAt(r + 1)] << 12) |
            (i[t.charCodeAt(r + 2)] << 6) |
            i[t.charCodeAt(r + 3)]),
            (h[f++] = (e >> 16) & 255),
            (h[f++] = (e >> 8) & 255),
            (h[f++] = 255 & e);
        2 === u &&
          ((e = (i[t.charCodeAt(r)] << 2) | (i[t.charCodeAt(r + 1)] >> 4)),
          (h[f++] = 255 & e));
        1 === u &&
          ((e =
            (i[t.charCodeAt(r)] << 10) |
            (i[t.charCodeAt(r + 1)] << 4) |
            (i[t.charCodeAt(r + 2)] >> 2)),
          (h[f++] = (e >> 8) & 255),
          (h[f++] = 255 & e));
        return h;
      }),
      (e.fromByteArray = function (t) {
        for (
          var e, r = t.length, i = r % 3, s = [], o = 0, u = r - i;
          o < u;
          o += 16383
        )
          s.push(f(t, o, o + 16383 > u ? u : o + 16383));
        1 === i
          ? ((e = t[r - 1]), s.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
          : 2 === i &&
            ((e = (t[r - 2] << 8) + t[r - 1]),
            s.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
        return s.join("");
      });
    for (
      var n = [],
        i = [],
        s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        u = 0,
        h = o.length;
      u < h;
      ++u
    )
      (n[u] = o[u]), (i[o.charCodeAt(u)] = u);
    function a(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
    }
    function f(t, e, r) {
      for (var i, s, o = [], u = e; u < r; u += 3)
        (i =
          ((t[u] << 16) & 16711680) +
          ((t[u + 1] << 8) & 65280) +
          (255 & t[u + 2])),
          o.push(
            n[((s = i) >> 18) & 63] +
              n[(s >> 12) & 63] +
              n[(s >> 6) & 63] +
              n[63 & s]
          );
      return o.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  146: function (t, e, r) {
    "use strict";
    var n = function (t) {
      return (
        (function (t) {
          return !!t && "object" == typeof t;
        })(t) &&
        !(function (t) {
          var e = Object.prototype.toString.call(t);
          return (
            "[object RegExp]" === e ||
            "[object Date]" === e ||
            (function (t) {
              return t.$$typeof === i;
            })(t)
          );
        })(t)
      );
    };
    var i =
      "function" == typeof Symbol && Symbol.for
        ? Symbol.for("react.element")
        : 60103;
    function s(t, e) {
      return !1 !== e.clone && e.isMergeableObject(t)
        ? f(((r = t), Array.isArray(r) ? [] : {}), t, e)
        : t;
      var r;
    }
    function o(t, e, r) {
      return t.concat(e).map(function (t) {
        return s(t, r);
      });
    }
    function u(t) {
      return Object.keys(t).concat(
        (function (t) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t).filter(function (e) {
                return t.propertyIsEnumerable(e);
              })
            : [];
        })(t)
      );
    }
    function h(t, e) {
      try {
        return e in t;
      } catch (t) {
        return !1;
      }
    }
    function a(t, e, r) {
      var n = {};
      return (
        r.isMergeableObject(t) &&
          u(t).forEach(function (e) {
            n[e] = s(t[e], r);
          }),
        u(e).forEach(function (i) {
          (function (t, e) {
            return (
              h(t, e) &&
              !(
                Object.hasOwnProperty.call(t, e) &&
                Object.propertyIsEnumerable.call(t, e)
              )
            );
          })(t, i) ||
            (h(t, i) && r.isMergeableObject(e[i])
              ? (n[i] = (function (t, e) {
                  if (!e.customMerge) return f;
                  var r = e.customMerge(t);
                  return "function" == typeof r ? r : f;
                })(i, r)(t[i], e[i], r))
              : (n[i] = s(e[i], r)));
        }),
        n
      );
    }
    function f(t, e, r) {
      ((r = r || {}).arrayMerge = r.arrayMerge || o),
        (r.isMergeableObject = r.isMergeableObject || n),
        (r.cloneUnlessOtherwiseSpecified = s);
      var i = Array.isArray(e);
      return i === Array.isArray(t)
        ? i
          ? r.arrayMerge(t, e, r)
          : a(t, e, r)
        : s(e, r);
    }
    f.all = function (t, e) {
      if (!Array.isArray(t))
        throw new Error("first argument should be an array");
      return t.reduce(function (t, r) {
        return f(t, r, e);
      }, {});
    };
    var c = f;
    t.exports = c;
  },
  170: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.MessageRegistry = void 0);
    e.MessageRegistry = class {
      constructor() {
        this.registeredMsgType = new Map();
      }
      registerMessage(t) {
        if (this.registeredMsgType.has(t.type()))
          throw new Error("Already registered type " + t.type());
        this.registeredMsgType.set(t.type(), t);
      }
      parseMessage(t) {
        if (!t.type) throw new Error("Null type");
        const e = this.registeredMsgType.get(t.type);
        if (!e) throw new Error("Unregistered msg type " + t.type);
        return Object.setPrototypeOf(t.msg, e.prototype);
      }
    };
  },
  171: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.JSONUint8Array = void 0);
    const n = r(285);
    class i {
      static parse(t) {
        return JSON.parse(t, (t, e) =>
          e && "string" == typeof e && e.startsWith("__uint8array__")
            ? n.fromHex(e.replace("__uint8array__", ""))
            : e
        );
      }
      static stringify(t) {
        return JSON.stringify(t, (t, e) => {
          if (
            e &&
            (e instanceof Uint8Array ||
              ("object" == typeof e &&
                "type" in e &&
                "data" in e &&
                "Buffer" === e.type &&
                Array.isArray(e.data)))
          ) {
            const t = e instanceof Uint8Array ? e : new Uint8Array(e.data);
            return "__uint8array__" + n.toHex(t);
          }
          return e;
        });
      }
      static wrap(t) {
        if (void 0 !== t) return JSON.parse(i.stringify(t));
      }
      static unwrap(t) {
        if (void 0 !== t) return i.parse(JSON.stringify(t));
      }
    }
    e.JSONUint8Array = i;
  },
  181: function (t, e, r) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              h(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            try {
              h(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function h(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, u);
          }
          h((n = n.apply(t, e || [])).next());
        });
      };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.KeplrEnigmaUtils = void 0);
    e.KeplrEnigmaUtils = class {
      constructor(t, e) {
        (this.chainId = t), (this.keplr = e);
      }
      getPubkey() {
        return n(this, void 0, void 0, function* () {
          return yield this.keplr.getEnigmaPubKey(this.chainId);
        });
      }
      getTxEncryptionKey(t) {
        return n(this, void 0, void 0, function* () {
          return yield this.keplr.getEnigmaTxEncryptionKey(this.chainId, t);
        });
      }
      encrypt(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.keplr.enigmaEncrypt(this.chainId, t, e);
        });
      }
      decrypt(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.keplr.enigmaDecrypt(this.chainId, t, e);
        });
      }
    };
  },
  182: function (t, e, r) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              h(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            try {
              h(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function h(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, u);
          }
          h((n = n.apply(t, e || [])).next());
        });
      };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.CosmJSOfflineSigner = e.CosmJSOfflineSignerOnlyAmino = void 0);
    class i {
      constructor(t, e) {
        (this.chainId = t), (this.keplr = e);
      }
      getAccounts() {
        return n(this, void 0, void 0, function* () {
          const t = yield this.keplr.getKey(this.chainId);
          return [
            {
              address: t.bech32Address,
              algo: "secp256k1",
              pubkey: t.pubKey,
            },
          ];
        });
      }
      signAmino(t, e) {
        return n(this, void 0, void 0, function* () {
          if (this.chainId !== e.chain_id)
            throw new Error("Unmatched chain id with the offline signer");
          if ((yield this.keplr.getKey(e.chain_id)).bech32Address !== t)
            throw new Error("Unknown signer address");
          return yield this.keplr.signAmino(this.chainId, t, e);
        });
      }
      sign(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.signAmino(t, e);
        });
      }
    }
    e.CosmJSOfflineSignerOnlyAmino = i;
    e.CosmJSOfflineSigner = class extends i {
      constructor(t, e) {
        super(t, e), (this.chainId = t), (this.keplr = e);
      }
      signDirect(t, e) {
        return n(this, void 0, void 0, function* () {
          if (this.chainId !== e.chainId)
            throw new Error("Unmatched chain id with the offline signer");
          if ((yield this.keplr.getKey(e.chainId)).bech32Address !== t)
            throw new Error("Unknown signer address");
          return yield this.keplr.signDirect(this.chainId, t, e);
        });
      }
    };
  },
  1873: function (t, e, r) {
    t.exports = r(1880);
  },
  1880: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(228);
    var i = r(239);
    const s = new n.InjectedKeplr(i.version, "extension");
    !(function (t, e, r, n, i) {
      (window.keplr = t),
        (window.getOfflineSigner = e),
        (window.getOfflineSignerOnlyAmino = r),
        (window.getOfflineSignerAuto = n),
        (window.getEnigmaUtils = i);
    })(
      s,
      (t) => s.getOfflineSigner(t),
      (t) => s.getOfflineSignerOnlyAmino(t),
      (t) => s.getOfflineSignerAuto(t),
      (t) => s.getEnigmaUtils(t)
    );
  },
  19: function (t, e, r) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r];
                  },
                });
            }
          : function (t, e, r, n) {
              void 0 === n && (n = r), (t[n] = e[r]);
            }),
      i =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var r in t)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(e, r) ||
              n(e, t, r);
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      i(r(284), e),
      i(r(286), e),
      i(r(287), e),
      i(r(288), e),
      i(r(289), e),
      i(r(290), e),
      i(r(170), e),
      i(r(171), e);
  },
  197: function (t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == r.call(t);
      };
  },
  228: function (t, e, r) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r];
                  },
                });
            }
          : function (t, e, r, n) {
              void 0 === n && (n = r), (t[n] = e[r]);
            }),
      i =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var r in t)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(e, r) ||
              n(e, t, r);
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      i(r(566), e),
      i(r(182), e),
      i(r(181), e),
      i(r(569), e);
  },
  239: function (t) {
    t.exports = JSON.parse(
      '{"manifest_version":2,"name":"Keplr","description":"Keplr is a browser extension wallet for the Inter blockchain ecosystem.","version":"0.10.3","applications":{"gecko":{"id":"keplr-extension@keplr.app","strict_min_version":"56.0"}},"icons":{"16":"assets/icon-16.png","48":"assets/icon-48.png","128":"assets/icon-128.png"},"browser_action":{"default_popup":"popup.html","default_title":"Keplr"},"background":{"scripts":["browser-polyfill.js","background.bundle.js"],"persistent":true},"permissions":["storage","notifications","identity"],"content_scripts":[{"matches":["<all_urls>"],"js":["browser-polyfill.js","contentScripts.bundle.js"],"run_at":"document_start","all_frames":true}],"web_accessible_resources":["injectedScript.bundle.js","assets/temp-icon.svg"]}'
    );
  },
  248: function (t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    (e.read = function (t, e, r, n, i) {
      var s,
        o,
        u = 8 * i - n - 1,
        h = (1 << u) - 1,
        a = h >> 1,
        f = -7,
        c = r ? i - 1 : 0,
        g = r ? -1 : 1,
        d = t[e + c];
      for (
        c += g, s = d & ((1 << -f) - 1), d >>= -f, f += u;
        f > 0;
        s = 256 * s + t[e + c], c += g, f -= 8
      );
      for (
        o = s & ((1 << -f) - 1), s >>= -f, f += n;
        f > 0;
        o = 256 * o + t[e + c], c += g, f -= 8
      );
      if (0 === s) s = 1 - a;
      else {
        if (s === h) return o ? NaN : (1 / 0) * (d ? -1 : 1);
        (o += Math.pow(2, n)), (s -= a);
      }
      return (d ? -1 : 1) * o * Math.pow(2, s - n);
    }),
      (e.write = function (t, e, r, n, i, s) {
        var o,
          u,
          h,
          a = 8 * s - i - 1,
          f = (1 << a) - 1,
          c = f >> 1,
          g = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = n ? 0 : s - 1,
          l = n ? 1 : -1,
          p = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((u = isNaN(e) ? 1 : 0), (o = f))
              : ((o = Math.floor(Math.log(e) / Math.LN2)),
                e * (h = Math.pow(2, -o)) < 1 && (o--, (h *= 2)),
                (e += o + c >= 1 ? g / h : g * Math.pow(2, 1 - c)) * h >= 2 &&
                  (o++, (h /= 2)),
                o + c >= f
                  ? ((u = 0), (o = f))
                  : o + c >= 1
                  ? ((u = (e * h - 1) * Math.pow(2, i)), (o += c))
                  : ((u = e * Math.pow(2, c - 1) * Math.pow(2, i)), (o = 0)));
          i >= 8;
          t[r + d] = 255 & u, d += l, u /= 256, i -= 8
        );
        for (
          o = (o << i) | u, a += i;
          a > 0;
          t[r + d] = 255 & o, d += l, o /= 256, a -= 8
        );
        t[r + d - l] |= 128 * p;
      });
  },
  25: function (t, e) {
    t.exports = n;
    var r = null;
    try {
      r = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127,
            127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1,
            65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
            115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
            115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
            104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1,
            126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
            173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
            167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
            32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
            66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34,
            4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
            173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32,
            134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
            1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
            3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11,
          ])
        ),
        {}
      ).exports;
    } catch (t) {}
    function n(t, e, r) {
      (this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!r);
    }
    function i(t) {
      return !0 === (t && t.__isLong__);
    }
    n.prototype.__isLong__,
      Object.defineProperty(n.prototype, "__isLong__", {
        value: !0,
      }),
      (n.isLong = i);
    var s = {},
      o = {};
    function u(t, e) {
      var r, n, i;
      return e
        ? (i = 0 <= (t >>>= 0) && t < 256) && (n = o[t])
          ? n
          : ((r = a(t, (0 | t) < 0 ? -1 : 0, !0)), i && (o[t] = r), r)
        : (i = -128 <= (t |= 0) && t < 128) && (n = s[t])
        ? n
        : ((r = a(t, t < 0 ? -1 : 0, !1)), i && (s[t] = r), r);
    }
    function h(t, e) {
      if (isNaN(t)) return e ? v : w;
      if (e) {
        if (t < 0) return v;
        if (t >= l) return A;
      } else {
        if (t <= -p) return O;
        if (t + 1 >= p) return _;
      }
      return t < 0 ? h(-t, e).neg() : a(t % d | 0, (t / d) | 0, e);
    }
    function a(t, e, r) {
      return new n(t, e, r);
    }
    (n.fromInt = u), (n.fromNumber = h), (n.fromBits = a);
    var f = Math.pow;
    function c(t, e, r) {
      if (0 === t.length) throw Error("empty string");
      if (
        "NaN" === t ||
        "Infinity" === t ||
        "+Infinity" === t ||
        "-Infinity" === t
      )
        return w;
      if (
        ("number" == typeof e ? ((r = e), (e = !1)) : (e = !!e),
        (r = r || 10) < 2 || 36 < r)
      )
        throw RangeError("radix");
      var n;
      if ((n = t.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === n) return c(t.substring(1), e, r).neg();
      for (var i = h(f(r, 8)), s = w, o = 0; o < t.length; o += 8) {
        var u = Math.min(8, t.length - o),
          a = parseInt(t.substring(o, o + u), r);
        if (u < 8) {
          var g = h(f(r, u));
          s = s.mul(g).add(h(a));
        } else s = (s = s.mul(i)).add(h(a));
      }
      return (s.unsigned = e), s;
    }
    function g(t, e) {
      return "number" == typeof t
        ? h(t, e)
        : "string" == typeof t
        ? c(t, e)
        : a(t.low, t.high, "boolean" == typeof e ? e : t.unsigned);
    }
    (n.fromString = c), (n.fromValue = g);
    var d = 4294967296,
      l = d * d,
      p = l / 2,
      y = u(1 << 24),
      w = u(0);
    n.ZERO = w;
    var v = u(0, !0);
    n.UZERO = v;
    var m = u(1);
    n.ONE = m;
    var b = u(1, !0);
    n.UONE = b;
    var E = u(-1);
    n.NEG_ONE = E;
    var _ = a(-1, 2147483647, !1);
    n.MAX_VALUE = _;
    var A = a(-1, -1, !0);
    n.MAX_UNSIGNED_VALUE = A;
    var O = a(0, -2147483648, !1);
    n.MIN_VALUE = O;
    var M = n.prototype;
    (M.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (M.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * d + (this.low >>> 0)
          : this.high * d + (this.low >>> 0);
      }),
      (M.toString = function (t) {
        if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(O)) {
            var e = h(t),
              r = this.div(e),
              n = r.mul(e).sub(this);
            return r.toString(t) + n.toInt().toString(t);
          }
          return "-" + this.neg().toString(t);
        }
        for (var i = h(f(t, 6), this.unsigned), s = this, o = ""; ; ) {
          var u = s.div(i),
            a = (s.sub(u.mul(i)).toInt() >>> 0).toString(t);
          if ((s = u).isZero()) return a + o;
          for (; a.length < 6; ) a = "0" + a;
          o = "" + a + o;
        }
      }),
      (M.getHighBits = function () {
        return this.high;
      }),
      (M.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (M.getLowBits = function () {
        return this.low;
      }),
      (M.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (M.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
        for (
          var t = 0 != this.high ? this.high : this.low, e = 31;
          e > 0 && 0 == (t & (1 << e));
          e--
        );
        return 0 != this.high ? e + 33 : e + 1;
      }),
      (M.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (M.eqz = M.isZero),
      (M.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (M.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (M.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (M.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (M.equals = function (t) {
        return (
          i(t) || (t = g(t)),
          (this.unsigned === t.unsigned ||
            this.high >>> 31 != 1 ||
            t.high >>> 31 != 1) &&
            this.high === t.high &&
            this.low === t.low
        );
      }),
      (M.eq = M.equals),
      (M.notEquals = function (t) {
        return !this.eq(t);
      }),
      (M.neq = M.notEquals),
      (M.ne = M.notEquals),
      (M.lessThan = function (t) {
        return this.comp(t) < 0;
      }),
      (M.lt = M.lessThan),
      (M.lessThanOrEqual = function (t) {
        return this.comp(t) <= 0;
      }),
      (M.lte = M.lessThanOrEqual),
      (M.le = M.lessThanOrEqual),
      (M.greaterThan = function (t) {
        return this.comp(t) > 0;
      }),
      (M.gt = M.greaterThan),
      (M.greaterThanOrEqual = function (t) {
        return this.comp(t) >= 0;
      }),
      (M.gte = M.greaterThanOrEqual),
      (M.ge = M.greaterThanOrEqual),
      (M.compare = function (t) {
        if ((i(t) || (t = g(t)), this.eq(t))) return 0;
        var e = this.isNegative(),
          r = t.isNegative();
        return e && !r
          ? -1
          : !e && r
          ? 1
          : this.unsigned
          ? t.high >>> 0 > this.high >>> 0 ||
            (t.high === this.high && t.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(t).isNegative()
          ? -1
          : 1;
      }),
      (M.comp = M.compare),
      (M.negate = function () {
        return !this.unsigned && this.eq(O) ? O : this.not().add(m);
      }),
      (M.neg = M.negate),
      (M.add = function (t) {
        i(t) || (t = g(t));
        var e = this.high >>> 16,
          r = 65535 & this.high,
          n = this.low >>> 16,
          s = 65535 & this.low,
          o = t.high >>> 16,
          u = 65535 & t.high,
          h = t.low >>> 16,
          f = 0,
          c = 0,
          d = 0,
          l = 0;
        return (
          (d += (l += s + (65535 & t.low)) >>> 16),
          (c += (d += n + h) >>> 16),
          (f += (c += r + u) >>> 16),
          (f += e + o),
          a(
            ((d &= 65535) << 16) | (l &= 65535),
            ((f &= 65535) << 16) | (c &= 65535),
            this.unsigned
          )
        );
      }),
      (M.subtract = function (t) {
        return i(t) || (t = g(t)), this.add(t.neg());
      }),
      (M.sub = M.subtract),
      (M.multiply = function (t) {
        if (this.isZero()) return w;
        if ((i(t) || (t = g(t)), r))
          return a(
            r.mul(this.low, this.high, t.low, t.high),
            r.get_high(),
            this.unsigned
          );
        if (t.isZero()) return w;
        if (this.eq(O)) return t.isOdd() ? O : w;
        if (t.eq(O)) return this.isOdd() ? O : w;
        if (this.isNegative())
          return t.isNegative()
            ? this.neg().mul(t.neg())
            : this.neg().mul(t).neg();
        if (t.isNegative()) return this.mul(t.neg()).neg();
        if (this.lt(y) && t.lt(y))
          return h(this.toNumber() * t.toNumber(), this.unsigned);
        var e = this.high >>> 16,
          n = 65535 & this.high,
          s = this.low >>> 16,
          o = 65535 & this.low,
          u = t.high >>> 16,
          f = 65535 & t.high,
          c = t.low >>> 16,
          d = 65535 & t.low,
          l = 0,
          p = 0,
          v = 0,
          m = 0;
        return (
          (v += (m += o * d) >>> 16),
          (p += (v += s * d) >>> 16),
          (v &= 65535),
          (p += (v += o * c) >>> 16),
          (l += (p += n * d) >>> 16),
          (p &= 65535),
          (l += (p += s * c) >>> 16),
          (p &= 65535),
          (l += (p += o * f) >>> 16),
          (l += e * d + n * c + s * f + o * u),
          a(
            ((v &= 65535) << 16) | (m &= 65535),
            ((l &= 65535) << 16) | (p &= 65535),
            this.unsigned
          )
        );
      }),
      (M.mul = M.multiply),
      (M.divide = function (t) {
        if ((i(t) || (t = g(t)), t.isZero())) throw Error("division by zero");
        var e, n, s;
        if (r)
          return this.unsigned ||
            -2147483648 !== this.high ||
            -1 !== t.low ||
            -1 !== t.high
            ? a(
                (this.unsigned ? r.div_u : r.div_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high
                ),
                r.get_high(),
                this.unsigned
              )
            : this;
        if (this.isZero()) return this.unsigned ? v : w;
        if (this.unsigned) {
          if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return v;
          if (t.gt(this.shru(1))) return b;
          s = v;
        } else {
          if (this.eq(O))
            return t.eq(m) || t.eq(E)
              ? O
              : t.eq(O)
              ? m
              : (e = this.shr(1).div(t).shl(1)).eq(w)
              ? t.isNegative()
                ? m
                : E
              : ((n = this.sub(t.mul(e))), (s = e.add(n.div(t))));
          if (t.eq(O)) return this.unsigned ? v : w;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().div(t.neg())
              : this.neg().div(t).neg();
          if (t.isNegative()) return this.div(t.neg()).neg();
          s = w;
        }
        for (n = this; n.gte(t); ) {
          e = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
          for (
            var o = Math.ceil(Math.log(e) / Math.LN2),
              u = o <= 48 ? 1 : f(2, o - 48),
              c = h(e),
              d = c.mul(t);
            d.isNegative() || d.gt(n);

          )
            d = (c = h((e -= u), this.unsigned)).mul(t);
          c.isZero() && (c = m), (s = s.add(c)), (n = n.sub(d));
        }
        return s;
      }),
      (M.div = M.divide),
      (M.modulo = function (t) {
        return (
          i(t) || (t = g(t)),
          r
            ? a(
                (this.unsigned ? r.rem_u : r.rem_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high
                ),
                r.get_high(),
                this.unsigned
              )
            : this.sub(this.div(t).mul(t))
        );
      }),
      (M.mod = M.modulo),
      (M.rem = M.modulo),
      (M.not = function () {
        return a(~this.low, ~this.high, this.unsigned);
      }),
      (M.and = function (t) {
        return (
          i(t) || (t = g(t)),
          a(this.low & t.low, this.high & t.high, this.unsigned)
        );
      }),
      (M.or = function (t) {
        return (
          i(t) || (t = g(t)),
          a(this.low | t.low, this.high | t.high, this.unsigned)
        );
      }),
      (M.xor = function (t) {
        return (
          i(t) || (t = g(t)),
          a(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        );
      }),
      (M.shiftLeft = function (t) {
        return (
          i(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? a(
                this.low << t,
                (this.high << t) | (this.low >>> (32 - t)),
                this.unsigned
              )
            : a(0, this.low << (t - 32), this.unsigned)
        );
      }),
      (M.shl = M.shiftLeft),
      (M.shiftRight = function (t) {
        return (
          i(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? a(
                (this.low >>> t) | (this.high << (32 - t)),
                this.high >> t,
                this.unsigned
              )
            : a(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (M.shr = M.shiftRight),
      (M.shiftRightUnsigned = function (t) {
        if ((i(t) && (t = t.toInt()), 0 === (t &= 63))) return this;
        var e = this.high;
        return t < 32
          ? a((this.low >>> t) | (e << (32 - t)), e >>> t, this.unsigned)
          : a(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
      }),
      (M.shru = M.shiftRightUnsigned),
      (M.shr_u = M.shiftRightUnsigned),
      (M.toSigned = function () {
        return this.unsigned ? a(this.low, this.high, !1) : this;
      }),
      (M.toUnsigned = function () {
        return this.unsigned ? this : a(this.low, this.high, !0);
      }),
      (M.toBytes = function (t) {
        return t ? this.toBytesLE() : this.toBytesBE();
      }),
      (M.toBytesLE = function () {
        var t = this.high,
          e = this.low;
        return [
          255 & e,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          e >>> 24,
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
        ];
      }),
      (M.toBytesBE = function () {
        var t = this.high,
          e = this.low;
        return [
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          255 & e,
        ];
      }),
      (n.fromBytes = function (t, e, r) {
        return r ? n.fromBytesLE(t, e) : n.fromBytesBE(t, e);
      }),
      (n.fromBytesLE = function (t, e) {
        return new n(
          t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
          t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
          e
        );
      }),
      (n.fromBytesBE = function (t, e) {
        return new n(
          (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
          (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
          e
        );
      });
  },
  284: function (t, e, r) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              h(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            try {
              h(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function h(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, u);
          }
          h((n = n.apply(t, e || [])).next());
        });
      };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.Router = void 0);
    const i = r(170),
      s = r(171);
    e.Router = class {
      constructor(t) {
        (this.envProducer = t),
          (this.msgRegistry = new i.MessageRegistry()),
          (this.registeredHandler = new Map()),
          (this.guards = []),
          (this.port = "");
      }
      registerMessage(t) {
        this.msgRegistry.registerMessage(t);
      }
      addHandler(t, e) {
        if (this.registeredHandler.has(t))
          throw new Error("Already registered type " + t);
        this.registeredHandler.set(t, e);
      }
      addGuard(t) {
        this.guards.push(t);
      }
      handleMessage(t, e) {
        var r;
        return n(this, void 0, void 0, function* () {
          const n = this.msgRegistry.parseMessage(s.JSONUint8Array.unwrap(t)),
            i = this.envProducer(
              e,
              null !== (r = n.routerMeta) && void 0 !== r ? r : {}
            );
          for (const t of this.guards) yield t(i, n, e);
          n.validateBasic();
          const o = n.route();
          if (!o) throw new Error("Null router");
          const u = this.registeredHandler.get(o);
          if (!u) throw new Error("Can't get handler");
          return s.JSONUint8Array.wrap(yield u(i, n));
        });
      }
    };
  },
  285: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.fromHex = e.toHex = void 0),
      (e.toHex = function (t) {
        let e = "";
        for (const r of t) e += ("0" + r.toString(16)).slice(-2);
        return e;
      }),
      (e.fromHex = function (t) {
        if (t.length % 2 != 0)
          throw new Error("hex string length must be a multiple of 2");
        const e = [];
        for (let r = 0; r < t.length; r += 2) {
          const n = t.substr(r, 2);
          if (!n.match(/[0-9a-f]{2}/i))
            throw new Error("hex string contains invalid characters");
          e.push(parseInt(n, 16));
        }
        return new Uint8Array(e);
      });
  },
  286: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
  },
  287: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
  },
  288: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
  },
  289: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.Message = void 0);
    e.Message = class {
      approveExternal(t, e) {
        return !1;
      }
    };
  },
  290: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.WEBPAGE_PORT = e.APP_PORT = e.BACKGROUND_PORT = void 0),
      (e.BACKGROUND_PORT = "background"),
      (e.APP_PORT = "popup"),
      (e.WEBPAGE_PORT = "webpage");
  },
  3: function (t, e, r) {
    "use strict";
    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(121),
        i = r(248),
        s = r(197);
      function o() {
        return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function u(t, e) {
        if (o() < e) throw new RangeError("Invalid typed array length");
        return (
          h.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = h.prototype)
            : (null === t && (t = new h(e)), (t.length = e)),
          t
        );
      }
      function h(t, e, r) {
        if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h))
          return new h(t, e, r);
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return c(this, t);
        }
        return a(this, t, e, r);
      }
      function a(t, e, r, n) {
        if ("number" == typeof e)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function (t, e, r, n) {
              if ((e.byteLength, r < 0 || e.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              e =
                void 0 === r && void 0 === n
                  ? new Uint8Array(e)
                  : void 0 === n
                  ? new Uint8Array(e, r)
                  : new Uint8Array(e, r, n);
              h.TYPED_ARRAY_SUPPORT
                ? ((t = e).__proto__ = h.prototype)
                : (t = g(t, e));
              return t;
            })(t, e, r, n)
          : "string" == typeof e
          ? (function (t, e, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!h.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | l(e, r),
                i = (t = u(t, n)).write(e, r);
              i !== n && (t = t.slice(0, i));
              return t;
            })(t, e, r)
          : (function (t, e) {
              if (h.isBuffer(e)) {
                var r = 0 | d(e.length);
                return 0 === (t = u(t, r)).length || e.copy(t, 0, 0, r), t;
              }
              if (e) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    e.buffer instanceof ArrayBuffer) ||
                  "length" in e
                )
                  return "number" != typeof e.length || (n = e.length) != n
                    ? u(t, 0)
                    : g(t, e);
                if ("Buffer" === e.type && s(e.data)) return g(t, e.data);
              }
              var n;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(t, e);
      }
      function f(t) {
        if ("number" != typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function c(t, e) {
        if ((f(e), (t = u(t, e < 0 ? 0 : 0 | d(e))), !h.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < e; ++r) t[r] = 0;
        return t;
      }
      function g(t, e) {
        var r = e.length < 0 ? 0 : 0 | d(e.length);
        t = u(t, r);
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function d(t) {
        if (t >= o())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o().toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function l(t, e) {
        if (h.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return L(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return K(t).length;
            default:
              if (n) return L(t).length;
              (e = ("" + e).toLowerCase()), (n = !0);
          }
      }
      function p(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return P(this, e, r);
            case "utf8":
            case "utf-8":
              return S(this, e, r);
            case "ascii":
              return R(this, e, r);
            case "latin1":
            case "binary":
              return B(this, e, r);
            case "base64":
              return M(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function y(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function w(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = h.from(e, n)), h.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i);
        if ("number" == typeof e)
          return (
            (e &= 255),
            h.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(t, e, r, n, i) {
        var s,
          o = 1,
          u = t.length,
          h = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (o = 2), (u /= 2), (h /= 2), (r /= 2);
        }
        function a(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o);
        }
        if (i) {
          var f = -1;
          for (s = r; s < u; s++)
            if (a(t, s) === a(e, -1 === f ? 0 : s - f)) {
              if ((-1 === f && (f = s), s - f + 1 === h)) return f * o;
            } else -1 !== f && (s -= s - f), (f = -1);
        } else
          for (r + h > u && (r = u - h), s = r; s >= 0; s--) {
            for (var c = !0, g = 0; g < h; g++)
              if (a(t, s + g) !== a(e, g)) {
                c = !1;
                break;
              }
            if (c) return s;
          }
        return -1;
      }
      function m(t, e, r, n) {
        r = Number(r) || 0;
        var i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        var s = e.length;
        if (s % 2 != 0) throw new TypeError("Invalid hex string");
        n > s / 2 && (n = s / 2);
        for (var o = 0; o < n; ++o) {
          var u = parseInt(e.substr(2 * o, 2), 16);
          if (isNaN(u)) return o;
          t[r + o] = u;
        }
        return o;
      }
      function b(t, e, r, n) {
        return Y(L(e, t.length - r), t, r, n);
      }
      function E(t, e, r, n) {
        return Y(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function _(t, e, r, n) {
        return E(t, e, r, n);
      }
      function A(t, e, r, n) {
        return Y(K(e), t, r, n);
      }
      function O(t, e, r, n) {
        return Y(
          (function (t, e) {
            for (
              var r, n, i, s = [], o = 0;
              o < t.length && !((e -= 2) < 0);
              ++o
            )
              (r = t.charCodeAt(o)),
                (n = r >> 8),
                (i = r % 256),
                s.push(i),
                s.push(n);
            return s;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function M(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function S(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], i = e; i < r; ) {
          var s,
            o,
            u,
            h,
            a = t[i],
            f = null,
            c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
          if (i + c <= r)
            switch (c) {
              case 1:
                a < 128 && (f = a);
                break;
              case 2:
                128 == (192 & (s = t[i + 1])) &&
                  (h = ((31 & a) << 6) | (63 & s)) > 127 &&
                  (f = h);
                break;
              case 3:
                (s = t[i + 1]),
                  (o = t[i + 2]),
                  128 == (192 & s) &&
                    128 == (192 & o) &&
                    (h = ((15 & a) << 12) | ((63 & s) << 6) | (63 & o)) >
                      2047 &&
                    (h < 55296 || h > 57343) &&
                    (f = h);
                break;
              case 4:
                (s = t[i + 1]),
                  (o = t[i + 2]),
                  (u = t[i + 3]),
                  128 == (192 & s) &&
                    128 == (192 & o) &&
                    128 == (192 & u) &&
                    (h =
                      ((15 & a) << 18) |
                      ((63 & s) << 12) |
                      ((63 & o) << 6) |
                      (63 & u)) > 65535 &&
                    h < 1114112 &&
                    (f = h);
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (i += c);
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      (e.Buffer = h),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return h.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (h.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo() &&
                      "function" == typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (e.kMaxLength = o()),
        (h.poolSize = 8192),
        (h._augment = function (t) {
          return (t.__proto__ = h.prototype), t;
        }),
        (h.from = function (t, e, r) {
          return a(null, t, e, r);
        }),
        h.TYPED_ARRAY_SUPPORT &&
          ((h.prototype.__proto__ = Uint8Array.prototype),
          (h.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            h[Symbol.species] === h &&
            Object.defineProperty(h, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (h.alloc = function (t, e, r) {
          return (function (t, e, r, n) {
            return (
              f(e),
              e <= 0
                ? u(t, e)
                : void 0 !== r
                ? "string" == typeof n
                  ? u(t, e).fill(r, n)
                  : u(t, e).fill(r)
                : u(t, e)
            );
          })(null, t, e, r);
        }),
        (h.allocUnsafe = function (t) {
          return c(null, t);
        }),
        (h.allocUnsafeSlow = function (t) {
          return c(null, t);
        }),
        (h.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (h.compare = function (t, e) {
          if (!h.isBuffer(t) || !h.isBuffer(e))
            throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (
            var r = t.length, n = e.length, i = 0, s = Math.min(r, n);
            i < s;
            ++i
          )
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (h.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (h.concat = function (t, e) {
          if (!s(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return h.alloc(0);
          var r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = h.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!h.isBuffer(o))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            o.copy(n, i), (i += o.length);
          }
          return n;
        }),
        (h.byteLength = l),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) y(this, e, e + 1);
          return this;
        }),
        (h.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            y(this, e, e + 3), y(this, e + 1, e + 2);
          return this;
        }),
        (h.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            y(this, e, e + 7),
              y(this, e + 1, e + 6),
              y(this, e + 2, e + 5),
              y(this, e + 3, e + 4);
          return this;
        }),
        (h.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? S(this, 0, t)
            : p.apply(this, arguments);
        }),
        (h.prototype.equals = function (t) {
          if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === h.compare(this, t);
        }),
        (h.prototype.inspect = function () {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (h.prototype.compare = function (t, e, r, n, i) {
          if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var s = (i >>>= 0) - (n >>>= 0),
              o = (r >>>= 0) - (e >>>= 0),
              u = Math.min(s, o),
              a = this.slice(n, i),
              f = t.slice(e, r),
              c = 0;
            c < u;
            ++c
          )
            if (a[c] !== f[c]) {
              (s = a[c]), (o = f[c]);
              break;
            }
          return s < o ? -1 : o < s ? 1 : 0;
        }),
        (h.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (h.prototype.indexOf = function (t, e, r) {
          return w(this, t, e, r, !0);
        }),
        (h.prototype.lastIndexOf = function (t, e, r) {
          return w(this, t, e, r, !1);
        }),
        (h.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var i = this.length - e;
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var s = !1; ; )
            switch (n) {
              case "hex":
                return m(this, t, e, r);
              case "utf8":
              case "utf-8":
                return b(this, t, e, r);
              case "ascii":
                return E(this, t, e, r);
              case "latin1":
              case "binary":
                return _(this, t, e, r);
              case "base64":
                return A(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return O(this, t, e, r);
              default:
                if (s) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (s = !0);
            }
        }),
        (h.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function R(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function B(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function P(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", s = e; s < r; ++s) i += k(t[s]);
        return i;
      }
      function I(t, e, r) {
        for (var n = t.slice(e, r), i = "", s = 0; s < n.length; s += 2)
          i += String.fromCharCode(n[s] + 256 * n[s + 1]);
        return i;
      }
      function T(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function U(t, e, r, n, i, s) {
        if (!h.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < s)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function x(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var i = 0, s = Math.min(t.length - r, 2); i < s; ++i)
          t[r + i] =
            (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
      }
      function N(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var i = 0, s = Math.min(t.length - r, 4); i < s; ++i)
          t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255;
      }
      function q(t, e, r, n, i, s) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function D(t, e, r, n, s) {
        return s || q(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
      }
      function C(t, e, r, n, s) {
        return s || q(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
      }
      (h.prototype.slice = function (t, e) {
        var r,
          n = this.length;
        if (
          ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0
            ? (e += n) < 0 && (e = 0)
            : e > n && (e = n),
          e < t && (e = t),
          h.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(t, e)).__proto__ = h.prototype;
        else {
          var i = e - t;
          r = new h(i, void 0);
          for (var s = 0; s < i; ++s) r[s] = this[s + t];
        }
        return r;
      }),
        (h.prototype.readUIntLE = function (t, e, r) {
          (t |= 0), (e |= 0), r || T(t, e, this.length);
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
            n += this[t + s] * i;
          return n;
        }),
        (h.prototype.readUIntBE = function (t, e, r) {
          (t |= 0), (e |= 0), r || T(t, e, this.length);
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i;
          return n;
        }),
        (h.prototype.readUInt8 = function (t, e) {
          return e || T(t, 1, this.length), this[t];
        }),
        (h.prototype.readUInt16LE = function (t, e) {
          return e || T(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (h.prototype.readUInt16BE = function (t, e) {
          return e || T(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (h.prototype.readUInt32LE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (h.prototype.readUInt32BE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (h.prototype.readIntLE = function (t, e, r) {
          (t |= 0), (e |= 0), r || T(t, e, this.length);
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
            n += this[t + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (h.prototype.readIntBE = function (t, e, r) {
          (t |= 0), (e |= 0), r || T(t, e, this.length);
          for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256); )
            s += this[t + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s;
        }),
        (h.prototype.readInt8 = function (t, e) {
          return (
            e || T(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (h.prototype.readInt16LE = function (t, e) {
          e || T(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (h.prototype.readInt16BE = function (t, e) {
          e || T(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (h.prototype.readInt32LE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (h.prototype.readInt32BE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (h.prototype.readFloatLE = function (t, e) {
          return e || T(t, 4, this.length), i.read(this, t, !0, 23, 4);
        }),
        (h.prototype.readFloatBE = function (t, e) {
          return e || T(t, 4, this.length), i.read(this, t, !1, 23, 4);
        }),
        (h.prototype.readDoubleLE = function (t, e) {
          return e || T(t, 8, this.length), i.read(this, t, !0, 52, 8);
        }),
        (h.prototype.readDoubleBE = function (t, e) {
          return e || T(t, 8, this.length), i.read(this, t, !1, 52, 8);
        }),
        (h.prototype.writeUIntLE = function (t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) ||
            U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
            s = 0;
          for (this[e] = 255 & t; ++s < r && (i *= 256); )
            this[e + s] = (t / i) & 255;
          return e + r;
        }),
        (h.prototype.writeUIntBE = function (t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) ||
            U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
            s = 1;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            this[e + i] = (t / s) & 255;
          return e + r;
        }),
        (h.prototype.writeUInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 1, 255, 0),
            h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (h.prototype.writeUInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : x(this, t, e, !0),
            e + 2
          );
        }),
        (h.prototype.writeUInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : x(this, t, e, !1),
            e + 2
          );
        }),
        (h.prototype.writeUInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (h.prototype.writeUInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (h.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            U(this, t, e, r, i - 1, -i);
          }
          var s = 0,
            o = 1,
            u = 0;
          for (this[e] = 255 & t; ++s < r && (o *= 256); )
            t < 0 && 0 === u && 0 !== this[e + s - 1] && (u = 1),
              (this[e + s] = (((t / o) >> 0) - u) & 255);
          return e + r;
        }),
        (h.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            U(this, t, e, r, i - 1, -i);
          }
          var s = r - 1,
            o = 1,
            u = 0;
          for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
            t < 0 && 0 === u && 0 !== this[e + s + 1] && (u = 1),
              (this[e + s] = (((t / o) >> 0) - u) & 255);
          return e + r;
        }),
        (h.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 1, 127, -128),
            h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (h.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : x(this, t, e, !0),
            e + 2
          );
        }),
        (h.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : x(this, t, e, !1),
            e + 2
          );
        }),
        (h.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 4, 2147483647, -2147483648),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (h.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || U(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (h.prototype.writeFloatLE = function (t, e, r) {
          return D(this, t, e, !0, r);
        }),
        (h.prototype.writeFloatBE = function (t, e, r) {
          return D(this, t, e, !1, r);
        }),
        (h.prototype.writeDoubleLE = function (t, e, r) {
          return C(this, t, e, !0, r);
        }),
        (h.prototype.writeDoubleBE = function (t, e, r) {
          return C(this, t, e, !1, r);
        }),
        (h.prototype.copy = function (t, e, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          var i,
            s = n - r;
          if (this === t && r < e && e < n)
            for (i = s - 1; i >= 0; --i) t[i + e] = this[i + r];
          else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < s; ++i) t[i + e] = this[i + r];
          else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
          return s;
        }),
        (h.prototype.fill = function (t, e, r, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === t.length)
            ) {
              var i = t.charCodeAt(0);
              i < 256 && (t = i);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !h.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          var s;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (s = e; s < r; ++s) this[s] = t;
          else {
            var o = h.isBuffer(t) ? t : L(new h(t, n).toString()),
              u = o.length;
            for (s = 0; s < r - e; ++s) this[s + e] = o[s % u];
          }
          return this;
        });
      var j = /[^+\/0-9A-Za-z-_]/g;
      function k(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function L(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, i = null, s = [], o = 0; o < n; ++o) {
          if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              if (o + 1 === n) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (e -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            s.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return s;
      }
      function K(t) {
        return n.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(j, "")).length < 2
            )
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function Y(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
    }.call(this, r(9)));
  },
  566: function (t, e, r) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function o(t) {
              try {
                h(n.next(t));
              } catch (t) {
                s(t);
              }
            }
            function u(t) {
              try {
                h(n.throw(t));
              } catch (t) {
                s(t);
              }
            }
            function h(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(o, u);
            }
            h((n = n.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule
            ? t
            : {
                default: t,
              };
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.Keplr = void 0);
    const s = r(19),
      o = r(567),
      u = r(181),
      h = r(182),
      a = i(r(146)),
      f = i(r(25)),
      c = r(3);
    e.Keplr = class {
      constructor(t, e, r) {
        (this.version = t),
          (this.mode = e),
          (this.requester = r),
          (this.enigmaUtils = new Map()),
          (this.defaultOptions = {});
      }
      enable(t) {
        return n(this, void 0, void 0, function* () {
          "string" == typeof t && (t = [t]),
            yield this.requester.sendMessage(
              s.BACKGROUND_PORT,
              new o.EnableAccessMsg(t)
            );
        });
      }
      experimentalSuggestChain(t) {
        return n(this, void 0, void 0, function* () {
          const e = new o.SuggestChainInfoMsg(t);
          yield this.requester.sendMessage(s.BACKGROUND_PORT, e);
        });
      }
      getKey(t) {
        return n(this, void 0, void 0, function* () {
          const e = new o.GetKeyMsg(t);
          return yield this.requester.sendMessage(s.BACKGROUND_PORT, e);
        });
      }
      sendTx(t, e, r) {
        return n(this, void 0, void 0, function* () {
          const n = new o.SendTxMsg(t, e, r);
          return yield this.requester.sendMessage(s.BACKGROUND_PORT, n);
        });
      }
      signAmino(t, e, r, i = {}) {
        var u;
        return n(this, void 0, void 0, function* () {
          const n = new o.RequestSignAminoMsg(
            t,
            e,
            r,
            a.default(
              null !== (u = this.defaultOptions.sign) && void 0 !== u ? u : {},
              i
            )
          );
          return yield this.requester.sendMessage(s.BACKGROUND_PORT, n);
        });
      }
      signDirect(t, e, r, i = {}) {
        var u;
        return n(this, void 0, void 0, function* () {
          const n = new o.RequestSignDirectMsg(
              t,
              e,
              {
                bodyBytes: r.bodyBytes,
                authInfoBytes: r.authInfoBytes,
                chainId: r.chainId,
                accountNumber: r.accountNumber
                  ? r.accountNumber.toString()
                  : null,
              },
              a.default(
                null !== (u = this.defaultOptions.sign) && void 0 !== u
                  ? u
                  : {},
                i
              )
            ),
            h = yield this.requester.sendMessage(s.BACKGROUND_PORT, n);
          return {
            signed: {
              bodyBytes: h.signed.bodyBytes,
              authInfoBytes: h.signed.authInfoBytes,
              chainId: h.signed.chainId,
              accountNumber: f.default.fromString(h.signed.accountNumber),
            },
            signature: h.signature,
          };
        });
      }
      signArbitrary(t, e, r) {
        return n(this, void 0, void 0, function* () {
          let n = !1;
          "string" == typeof r
            ? ((r = c.Buffer.from(r).toString("base64")), (n = !0))
            : (r = c.Buffer.from(r).toString("base64"));
          const i = {
              chain_id: "",
              account_number: "0",
              sequence: "0",
              fee: {
                gas: "0",
                amount: [],
              },
              msgs: [
                {
                  type: "sign/MsgSignData",
                  value: {
                    signer: e,
                    data: r,
                  },
                },
              ],
              memo: "",
            },
            u = new o.RequestSignAminoMsg(t, e, i, {
              isADR36WithString: n,
            });
          return (yield this.requester.sendMessage(
            s.BACKGROUND_PORT,
            u
          )).signature;
        });
      }
      verifyArbitrary(t, e, r, i) {
        return n(this, void 0, void 0, function* () {
          return (
            "string" == typeof r && (r = c.Buffer.from(r)),
            yield this.requester.sendMessage(
              s.BACKGROUND_PORT,
              new o.RequestVerifyADR36AminoSignDoc(t, e, r, i)
            )
          );
        });
      }
      getOfflineSigner(t) {
        return new h.CosmJSOfflineSigner(t, this);
      }
      getOfflineSignerOnlyAmino(t) {
        return new h.CosmJSOfflineSignerOnlyAmino(t, this);
      }
      getOfflineSignerAuto(t) {
        return n(this, void 0, void 0, function* () {
          return (yield this.getKey(t)).isNanoLedger
            ? new h.CosmJSOfflineSignerOnlyAmino(t, this)
            : new h.CosmJSOfflineSigner(t, this);
        });
      }
      suggestToken(t, e, r) {
        return n(this, void 0, void 0, function* () {
          const n = new o.SuggestTokenMsg(t, e, r);
          yield this.requester.sendMessage(s.BACKGROUND_PORT, n);
        });
      }
      getSecret20ViewingKey(t, e) {
        return n(this, void 0, void 0, function* () {
          const r = new o.GetSecret20ViewingKey(t, e);
          return yield this.requester.sendMessage(s.BACKGROUND_PORT, r);
        });
      }
      getEnigmaPubKey(t) {
        return n(this, void 0, void 0, function* () {
          return yield this.requester.sendMessage(
            s.BACKGROUND_PORT,
            new o.GetPubkeyMsg(t)
          );
        });
      }
      getEnigmaTxEncryptionKey(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.requester.sendMessage(
            s.BACKGROUND_PORT,
            new o.GetTxEncryptionKeyMsg(t, e)
          );
        });
      }
      enigmaEncrypt(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return yield this.requester.sendMessage(
            s.BACKGROUND_PORT,
            new o.ReqeustEncryptMsg(t, e, r)
          );
        });
      }
      enigmaDecrypt(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return e && 0 !== e.length
            ? yield this.requester.sendMessage(
                s.BACKGROUND_PORT,
                new o.RequestDecryptMsg(t, e, r)
              )
            : new Uint8Array();
        });
      }
      getEnigmaUtils(t) {
        if (this.enigmaUtils.has(t)) return this.enigmaUtils.get(t);
        const e = new u.KeplrEnigmaUtils(t, this);
        return this.enigmaUtils.set(t, e), e;
      }
    };
  },
  567: function (t, e, r) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r];
                  },
                });
            }
          : function (t, e, r, n) {
              void 0 === n && (n = r), (t[n] = e[r]);
            }),
      i =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var r in t)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(e, r) ||
              n(e, t, r);
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      i(r(568), e);
  },
  568: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.GetTxEncryptionKeyMsg =
        e.RequestDecryptMsg =
        e.ReqeustEncryptMsg =
        e.GetPubkeyMsg =
        e.RequestSignDirectMsg =
        e.RequestVerifyADR36AminoSignDoc =
        e.RequestSignAminoMsg =
        e.GetSecret20ViewingKey =
        e.SendTxMsg =
        e.SuggestTokenMsg =
        e.SuggestChainInfoMsg =
        e.GetKeyMsg =
        e.EnableAccessMsg =
          void 0);
    const n = r(19);
    class i extends n.Message {
      constructor(t) {
        super(), (this.chainIds = t);
      }
      static type() {
        return "enable-access";
      }
      validateBasic() {
        if (!this.chainIds || 0 === this.chainIds.length)
          throw new Error("chain id not set");
      }
      route() {
        return "permission";
      }
      type() {
        return i.type();
      }
    }
    e.EnableAccessMsg = i;
    class s extends n.Message {
      constructor(t) {
        super(), (this.chainId = t);
      }
      static type() {
        return "get-key";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
      }
      route() {
        return "keyring";
      }
      type() {
        return s.type();
      }
    }
    e.GetKeyMsg = s;
    class o extends n.Message {
      constructor(t) {
        super(), (this.chainInfo = t);
      }
      static type() {
        return "suggest-chain-info";
      }
      validateBasic() {
        if (!this.chainInfo) throw new Error("chain info not set");
      }
      route() {
        return "chains";
      }
      type() {
        return o.type();
      }
    }
    e.SuggestChainInfoMsg = o;
    class u extends n.Message {
      constructor(t, e, r) {
        super(),
          (this.chainId = t),
          (this.contractAddress = e),
          (this.viewingKey = r);
      }
      static type() {
        return "suggest-token";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("Chain id is empty");
        if (!this.contractAddress) throw new Error("Contract address is empty");
      }
      route() {
        return "tokens";
      }
      type() {
        return u.type();
      }
    }
    e.SuggestTokenMsg = u;
    class h extends n.Message {
      constructor(t, e, r) {
        super(), (this.chainId = t), (this.tx = e), (this.mode = r);
      }
      static type() {
        return "send-tx-to-background";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id is empty");
        if (!this.tx) throw new Error("tx is empty");
        if (
          !this.mode ||
          ("sync" !== this.mode &&
            "async" !== this.mode &&
            "block" !== this.mode)
        )
          throw new Error("invalid mode");
      }
      route() {
        return "background-tx";
      }
      type() {
        return h.type();
      }
    }
    e.SendTxMsg = h;
    class a extends n.Message {
      constructor(t, e) {
        super(), (this.chainId = t), (this.contractAddress = e);
      }
      static type() {
        return "get-secret20-viewing-key";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("Chain id is empty");
        if (!this.contractAddress) throw new Error("Contract address is empty");
      }
      route() {
        return "tokens";
      }
      type() {
        return a.type();
      }
    }
    e.GetSecret20ViewingKey = a;
    class f extends n.Message {
      constructor(t, e, r, n = {}) {
        super(),
          (this.chainId = t),
          (this.signer = e),
          (this.signDoc = r),
          (this.signOptions = n);
      }
      static type() {
        return "request-sign-amino";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.signer) throw new Error("signer not set");
        const t = this.signDoc;
        if (
          !(() => {
            if (t && t.msgs && Array.isArray(t.msgs) && 1 === t.msgs.length) {
              return "sign/MsgSignData" === t.msgs[0].type;
            }
            return !1;
          })() &&
          t.chain_id !== this.chainId
        )
          throw new Error(
            "Chain id in the message is not matched with the requested chain id"
          );
        if (!this.signOptions) throw new Error("Sign options are null");
      }
      route() {
        return "keyring";
      }
      type() {
        return f.type();
      }
    }
    e.RequestSignAminoMsg = f;
    class c extends n.Message {
      constructor(t, e, r, n) {
        super(),
          (this.chainId = t),
          (this.signer = e),
          (this.data = r),
          (this.signature = n);
      }
      static type() {
        return "request-verify-adr-36-amino-doc";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.signer) throw new Error("signer not set");
        if (!this.signature) throw new Error("Signature not set");
      }
      route() {
        return "keyring";
      }
      type() {
        return c.type();
      }
    }
    e.RequestVerifyADR36AminoSignDoc = c;
    class g extends n.Message {
      constructor(t, e, r, n = {}) {
        super(),
          (this.chainId = t),
          (this.signer = e),
          (this.signDoc = r),
          (this.signOptions = n);
      }
      static type() {
        return "request-sign-direct";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.signer) throw new Error("signer not set");
        if (!this.signOptions) throw new Error("Sign options are null");
      }
      route() {
        return "keyring";
      }
      type() {
        return g.type();
      }
    }
    e.RequestSignDirectMsg = g;
    class d extends n.Message {
      constructor(t) {
        super(), (this.chainId = t);
      }
      static type() {
        return "get-pubkey-msg";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
      }
      route() {
        return "secret-wasm";
      }
      type() {
        return d.type();
      }
    }
    e.GetPubkeyMsg = d;
    class l extends n.Message {
      constructor(t, e, r) {
        super(),
          (this.chainId = t),
          (this.contractCodeHash = e),
          (this.msg = r);
      }
      static type() {
        return "request-encrypt-msg";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.contractCodeHash)
          throw new Error("contract code hash not set");
        if (!this.msg) throw new Error("msg not set");
      }
      route() {
        return "secret-wasm";
      }
      type() {
        return l.type();
      }
    }
    e.ReqeustEncryptMsg = l;
    class p extends n.Message {
      constructor(t, e, r) {
        super(), (this.chainId = t), (this.cipherText = e), (this.nonce = r);
      }
      static type() {
        return "request-decrypt-msg";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.cipherText || 0 === this.cipherText.length)
          throw new Error("ciphertext not set");
        if (!this.nonce || 0 === this.nonce.length)
          throw new Error("nonce not set");
      }
      route() {
        return "secret-wasm";
      }
      type() {
        return p.type();
      }
    }
    e.RequestDecryptMsg = p;
    class y extends n.Message {
      constructor(t, e) {
        super(), (this.chainId = t), (this.nonce = e);
      }
      static type() {
        return "get-tx-encryption-key-msg";
      }
      validateBasic() {
        if (!this.chainId) throw new Error("chain id not set");
        if (!this.nonce) throw new Error("nonce is null");
      }
      route() {
        return "secret-wasm";
      }
      type() {
        return y.type();
      }
    }
    e.GetTxEncryptionKeyMsg = y;
  },
  569: function (t, e, r) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function o(t) {
              try {
                h(n.next(t));
              } catch (t) {
                s(t);
              }
            }
            function u(t) {
              try {
                h(n.throw(t));
              } catch (t) {
                s(t);
              }
            }
            function h(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(o, u);
            }
            h((n = n.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule
            ? t
            : {
                default: t,
              };
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.InjectedKeplr = void 0);
    const s = r(19),
      o = r(181),
      u = r(182),
      h = i(r(146)),
      a = i(r(25));
    e.InjectedKeplr = class {
      constructor(
        t,
        e,
        r = {
          addMessageListener: (t) => window.addEventListener("message", t),
          removeMessageListener: (t) =>
            window.removeEventListener("message", t),
          postMessage: (t) => window.postMessage(t, window.location.origin),
        },
        n
      ) {
        (this.version = t),
          (this.mode = e),
          (this.eventListener = r),
          (this.parseMessage = n),
          (this.enigmaUtils = new Map()),
          (this.defaultOptions = {});
      }
      static startProxy(
        t,
        e = {
          addMessageListener: (t) => window.addEventListener("message", t),
          postMessage: (t) => window.postMessage(t, window.location.origin),
        },
        r
      ) {
        e.addMessageListener((i) =>
          n(this, void 0, void 0, function* () {
            const o = r ? r(i.data) : i.data;
            if (o && "proxy-request" === o.type)
              try {
                if (!o.id) throw new Error("Empty id");
                if ("version" === o.method)
                  throw new Error("Version is not function");
                if ("mode" === o.method)
                  throw new Error("Mode is not function");
                if ("defaultOptions" === o.method)
                  throw new Error("DefaultOptions is not function");
                if (!t[o.method] || "function" != typeof t[o.method])
                  throw new Error("Invalid method: " + o.method);
                if ("getOfflineSigner" === o.method)
                  throw new Error(
                    "GetOfflineSigner method can't be proxy request"
                  );
                if ("getOfflineSignerOnlyAmino" === o.method)
                  throw new Error(
                    "GetOfflineSignerOnlyAmino method can't be proxy request"
                  );
                if ("getOfflineSignerAuto" === o.method)
                  throw new Error(
                    "GetOfflineSignerAuto method can't be proxy request"
                  );
                if ("getEnigmaUtils" === o.method)
                  throw new Error(
                    "GetEnigmaUtils method can't be proxy request"
                  );
                const r =
                    "signDirect" === o.method
                      ? yield (() =>
                          n(this, void 0, void 0, function* () {
                            const e = o.args[2],
                              r = yield t.signDirect(
                                o.args[0],
                                o.args[1],
                                {
                                  bodyBytes: e.bodyBytes,
                                  authInfoBytes: e.authInfoBytes,
                                  chainId: e.chainId,
                                  accountNumber: e.accountNumber
                                    ? a.default.fromString(e.accountNumber)
                                    : null,
                                },
                                o.args[3]
                              );
                            return {
                              signed: {
                                bodyBytes: r.signed.bodyBytes,
                                authInfoBytes: r.signed.authInfoBytes,
                                chainId: r.signed.chainId,
                                accountNumber:
                                  r.signed.accountNumber.toString(),
                              },
                              signature: r.signature,
                            };
                          }))()
                      : yield t[o.method](...s.JSONUint8Array.unwrap(o.args)),
                  i = {
                    type: "proxy-request-response",
                    id: o.id,
                    result: {
                      return: s.JSONUint8Array.wrap(r),
                    },
                  };
                e.postMessage(i);
              } catch (t) {
                const r = {
                  type: "proxy-request-response",
                  id: o.id,
                  result: {
                    error: t.message || t.toString(),
                  },
                };
                e.postMessage(r);
              }
          })
        );
      }
      requestMethod(t, e) {
        const r = new Uint8Array(8),
          n = Array.from(crypto.getRandomValues(r))
            .map((t) => t.toString(16))
            .join(""),
          i = {
            type: "proxy-request",
            id: n,
            method: t,
            args: s.JSONUint8Array.wrap(e),
          };
        return new Promise((t, e) => {
          const r = (i) => {
            const o = this.parseMessage ? this.parseMessage(i.data) : i.data;
            if (!o || "proxy-request-response" !== o.type) return;
            if (o.id !== n) return;
            this.eventListener.removeMessageListener(r);
            const u = s.JSONUint8Array.unwrap(o.result);
            u
              ? u.error
                ? e(new Error(u.error))
                : t(u.return)
              : e(new Error("Result is null"));
          };
          this.eventListener.addMessageListener(r),
            this.eventListener.postMessage(i);
        });
      }
      enable(t) {
        return n(this, void 0, void 0, function* () {
          yield this.requestMethod("enable", [t]);
        });
      }
      experimentalSuggestChain(t) {
        var e, r;
        return n(this, void 0, void 0, function* () {
          ((null === (e = t.features) || void 0 === e
            ? void 0
            : e.includes("stargate")) ||
            (null === (r = t.features) || void 0 === r
              ? void 0
              : r.includes("no-legacy-stdTx"))) &&
            console.log(
              "“stargate”, “no-legacy-stdTx” feature has been deprecated. The launchpad is no longer supported, thus works without the two features. We would keep the aforementioned two feature for a while, but the upcoming update would potentially cause errors. Remove the two feature."
            ),
            yield this.requestMethod("experimentalSuggestChain", [t]);
        });
      }
      getKey(t) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("getKey", [t]);
        });
      }
      sendTx(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return (
            "length" in e ||
              console.log(
                "Do not send legacy std tx via `sendTx` API. We now only support protobuf tx. The usage of legeacy std tx would throw an error in the near future."
              ),
            yield this.requestMethod("sendTx", [t, e, r])
          );
        });
      }
      signAmino(t, e, r, i = {}) {
        var s;
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("signAmino", [
            t,
            e,
            r,
            h.default(
              null !== (s = this.defaultOptions.sign) && void 0 !== s ? s : {},
              i
            ),
          ]);
        });
      }
      signDirect(t, e, r, i = {}) {
        var s;
        return n(this, void 0, void 0, function* () {
          const n = yield this.requestMethod("signDirect", [
              t,
              e,
              {
                bodyBytes: r.bodyBytes,
                authInfoBytes: r.authInfoBytes,
                chainId: r.chainId,
                accountNumber: r.accountNumber
                  ? r.accountNumber.toString()
                  : null,
              },
              h.default(
                null !== (s = this.defaultOptions.sign) && void 0 !== s
                  ? s
                  : {},
                i
              ),
            ]),
            o = n.signed;
          return {
            signed: {
              bodyBytes: o.bodyBytes,
              authInfoBytes: o.authInfoBytes,
              chainId: o.chainId,
              accountNumber: a.default.fromString(o.accountNumber),
            },
            signature: n.signature,
          };
        });
      }
      signArbitrary(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("signArbitrary", [t, e, r]);
        });
      }
      verifyArbitrary(t, e, r, i) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("verifyArbitrary", [t, e, r, i]);
        });
      }
      getOfflineSigner(t) {
        return new u.CosmJSOfflineSigner(t, this);
      }
      getOfflineSignerOnlyAmino(t) {
        return new u.CosmJSOfflineSignerOnlyAmino(t, this);
      }
      getOfflineSignerAuto(t) {
        return n(this, void 0, void 0, function* () {
          return (yield this.getKey(t)).isNanoLedger
            ? new u.CosmJSOfflineSignerOnlyAmino(t, this)
            : new u.CosmJSOfflineSigner(t, this);
        });
      }
      suggestToken(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("suggestToken", [t, e, r]);
        });
      }
      getSecret20ViewingKey(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("getSecret20ViewingKey", [t, e]);
        });
      }
      getEnigmaPubKey(t) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("getEnigmaPubKey", [t]);
        });
      }
      getEnigmaTxEncryptionKey(t, e) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("getEnigmaTxEncryptionKey", [t, e]);
        });
      }
      enigmaEncrypt(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("enigmaEncrypt", [t, e, r]);
        });
      }
      enigmaDecrypt(t, e, r) {
        return n(this, void 0, void 0, function* () {
          return yield this.requestMethod("enigmaDecrypt", [t, e, r]);
        });
      }
      getEnigmaUtils(t) {
        if (this.enigmaUtils.has(t)) return this.enigmaUtils.get(t);
        const e = new o.KeplrEnigmaUtils(t, this);
        return this.enigmaUtils.set(t, e), e;
      }
    };
  },
  9: function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
});
