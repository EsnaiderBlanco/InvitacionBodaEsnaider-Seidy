/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).ScrollReveal = t()
}(this, function() {
    "use strict";
    var e, t, n, i, r, o, s, a, l = {
        delay: 0,
        distance: "0",
        duration: 600,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 0,
        opacity: 0,
        origin: "bottom",
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        afterReset: function e() {},
        afterReveal: function e() {},
        beforeReset: function e() {},
        beforeReveal: function e() {}
    }, c = {
        success: function e() {
            document.documentElement.classList.add("sr"),
            document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function() {
                document.body.style.height = "100%"
            })
        },
        failure: function e() {
            return document.documentElement.classList.remove("sr"),
            {
                clean: function e() {},
                destroy: function e() {},
                reveal: function e() {},
                sync: function e() {},
                get noop() {
                    return !0
                }
            }
        }
    };
    /*! @license is-dom-node v1.0.4

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
    function u(e) {
        return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }
    /*! @license Tealight v0.3.6

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
    function d(e, t) {
        if (void 0 === t && (t = document),
        e instanceof Array)
            return e.filter(u);
        if (u(e))
            return [e];
        if (n = e,
        i = Object.prototype.toString.call(n),
        "object" == typeof window.NodeList ? n instanceof window.NodeList : null !== n && "object" == typeof n && "number" == typeof n.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) && (0 === n.length || u(n[0])))
            return Array.prototype.slice.call(e);
        if ("string" == typeof e)
            try {
                var n, i, r = t.querySelectorAll(e);
                return Array.prototype.slice.call(r)
            } catch (o) {}
        return []
    }
    function f(e) {
        return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
    }
    function h(e, t) {
        if (f(e))
            return Object.keys(e).forEach(function(n) {
                return t(e[n], n, e)
            });
        if (e instanceof Array)
            return e.forEach(function(n, i) {
                return t(n, i, e)
            });
        throw TypeError("Expected either an array or object literal.")
    }
    function p(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
        if (this.constructor.debug && console) {
            var i = "%cScrollReveal: " + e;
            t.forEach(function(e) {
                return i += "\n — " + e
            }),
            console.log(i, "color: #ea654b;")
        }
    }
    function m() {
        var e = this
          , t = function() {
            return {
                active: [],
                stale: []
            }
        }
          , n = t()
          , i = t()
          , r = t();
        try {
            h(d("[data-sr-id]"), function(e) {
                var t = parseInt(e.getAttribute("data-sr-id"));
                n.active.push(t)
            })
        } catch (o) {
            throw o
        }
        h(this.store.elements, function(e) {
            -1 === n.active.indexOf(e.id) && n.stale.push(e.id)
        }),
        h(n.stale, function(t) {
            return delete e.store.elements[t]
        }),
        h(this.store.elements, function(e) {
            -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId),
            e.hasOwnProperty("sequence") && -1 === i.active.indexOf(e.sequence.id) && i.active.push(e.sequence.id)
        }),
        h(this.store.containers, function(e) {
            -1 === r.active.indexOf(e.id) && r.stale.push(e.id)
        }),
        h(r.stale, function(t) {
            var n = e.store.containers[t].node;
            n.removeEventListener("scroll", e.delegate),
            n.removeEventListener("resize", e.delegate),
            delete e.store.containers[t]
        }),
        h(this.store.sequences, function(e) {
            -1 === i.active.indexOf(e.id) && i.stale.push(e.id)
        }),
        h(i.stale, function(t) {
            return delete e.store.sequences[t]
        })
    }
    /*! @license Rematrix v0.3.0

		Copyright 2018 Julian Lloyd.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
        */
    function y(e) {
        if (e.constructor !== Array)
            throw TypeError("Expected array.");
        if (16 === e.length)
            return e;
        if (6 === e.length) {
            var t = v();
            return t[0] = e[0],
            t[1] = e[1],
            t[4] = e[2],
            t[5] = e[3],
            t[12] = e[4],
            t[13] = e[5],
            t
        }
        throw RangeError("Expected array with either 6 or 16 values.")
    }
    function v() {
        for (var e = [], t = 0; t < 16; t++)
            t % 5 == 0 ? e.push(1) : e.push(0);
        return e
    }
    function g(e, t) {
        for (var n = y(e), i = y(t), r = [], o = 0; o < 4; o++)
            for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) {
                var l = 4 * a
                  , c = [i[l], i[l + 1], i[l + 2], i[l + 3]]
                  , u = s[0] * c[0] + s[1] * c[1] + s[2] * c[2] + s[3] * c[3];
                r[o + l] = u
            }
        return r
    }
    function $(e, t) {
        var n = v();
        return n[0] = e,
        n[5] = "number" == typeof t ? t : e,
        n
    }
    var b = function() {
        var e = {}
          , t = document.documentElement.style;
        function n(n, i) {
            if (void 0 === i && (i = t),
            n && "string" == typeof n) {
                if (e[n])
                    return e[n];
                if ("string" == typeof i[n])
                    return e[n] = n;
                if ("string" == typeof i["-webkit-" + n])
                    return e[n] = "-webkit-" + n;
                throw RangeError('Unable to find "' + n + '" style property.')
            }
            throw TypeError("Expected a string.")
        }
        return n.clearCache = function() {
            return e = {}
        }
        ,
        n
    }();
    function _(e, t) {
        t.split(";").forEach(function(t) {
            var n = t.split(":")
              , i = n[0]
              , r = n.slice(1);
            i && r && (e.style[i.trim()] = r.join(":"))
        })
    }
    function w(e) {
        var t, n = this;
        try {
            h(d(e), function(e) {
                var i = e.getAttribute("data-sr-id");
                if (null !== i) {
                    t = !0;
                    var r = n.store.elements[i];
                    r.callbackTimer && window.clearTimeout(r.callbackTimer.clock),
                    _(r.node, r.styles.inline.generated),
                    e.removeAttribute("data-sr-id"),
                    delete n.store.elements[i]
                }
            })
        } catch (i) {
            return p.call(this, "Clean failed.", i.message)
        }
        if (t)
            try {
                m.call(this)
            } catch (r) {
                return p.call(this, "Clean failed.", r.message)
            }
    }
    function k() {
        var e = this;
        h(this.store.elements, function(e) {
            _(e.node, e.styles.inline.generated),
            e.node.removeAttribute("data-sr-id")
        }),
        h(this.store.containers, function(t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.removeEventListener("scroll", e.delegate),
            n.removeEventListener("resize", e.delegate)
        }),
        this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {}
        }
    }
    function x(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
        if (f(e))
            return h(t, function(t) {
                h(t, function(t, n) {
                    f(t) ? (e[n] && f(e[n]) || (e[n] = {}),
                    x(e[n], t)) : e[n] = t
                })
            }),
            e;
        throw TypeError("Target must be an object literal.")
    }
    function T(e) {
        return void 0 === e && (e = navigator.userAgent),
        /Android|iPhone|iPad|iPod/i.test(e)
    }
    var E, j = (E = 0,
    function() {
        return E++
    }
    );
    function q() {
        var e = this;
        m.call(this),
        h(this.store.elements, function(e) {
            var t = [e.styles.inline.generated];
            e.visible ? (t.push(e.styles.opacity.computed),
            t.push(e.styles.transform.generated.final),
            e.revealed = !0) : (t.push(e.styles.opacity.generated),
            t.push(e.styles.transform.generated.initial),
            e.revealed = !1),
            _(e.node, t.filter(function(e) {
                return "" !== e
            }).join(" "))
        }),
        h(this.store.containers, function(t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.addEventListener("scroll", e.delegate),
            n.addEventListener("resize", e.delegate)
        }),
        this.delegate(),
        this.initTimeout = null
    }
    function P(e, t) {
        void 0 === t && (t = {});
        var n = t.pristine || this.pristine
          , i = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen
          , r = e.visible && !e.revealed
          , o = !e.visible && e.revealed && e.config.reset;
        return t.reveal || r ? L.call(this, e, i) : t.reset || o ? R.call(this, e) : void 0
    }
    function L(e, t) {
        var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
        t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant),
        e.revealed = e.seen = !0,
        _(e.node, n.filter(function(e) {
            return "" !== e
        }).join(" ")),
        O.call(this, e, t)
    }
    function R(e) {
        var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
        e.revealed = !1,
        _(e.node, t.filter(function(e) {
            return "" !== e
        }).join(" ")),
        O.call(this, e)
    }
    function O(e, t) {
        var n = this
          , i = t ? e.config.duration + e.config.delay : e.config.duration
          , r = e.revealed ? e.config.beforeReveal : e.config.beforeReset
          , o = e.revealed ? e.config.afterReveal : e.config.afterReset
          , s = 0;
        e.callbackTimer && (s = Date.now() - e.callbackTimer.start,
        window.clearTimeout(e.callbackTimer.clock)),
        r(e.node),
        e.callbackTimer = {
            start: Date.now(),
            clock: window.setTimeout(function() {
                o(e.node),
                e.callbackTimer = null,
                e.revealed && !e.config.reset && e.config.cleanup && w.call(n, e.node)
            }, i - s)
        }
    }
    function A(e, t) {
        if (void 0 === t && (t = this.pristine),
        !e.visible && e.revealed && e.config.reset)
            return P.call(this, e, {
                reset: !0
            });
        var n = this.store.sequences[e.sequence.id]
          , i = e.sequence.index;
        if (n) {
            var r = new z(n,"visible",this.store)
              , o = new z(n,"revealed",this.store);
            if (n.models = {
                visible: r,
                revealed: o
            },
            !o.body.length) {
                var s = n.members[r.body[0]]
                  , a = this.store.elements[s];
                if (a)
                    return S.call(this, n, r.body[0], -1, t),
                    S.call(this, n, r.body[0], 1, t),
                    P.call(this, a, {
                        reveal: !0,
                        pristine: t
                    })
            }
            if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift())
                return S.call(this, n, i, -1, t),
                P.call(this, e, {
                    reveal: !0,
                    pristine: t
                });
            if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop())
                return S.call(this, n, i, 1, t),
                P.call(this, e, {
                    reveal: !0,
                    pristine: t
                })
        }
    }
    function I(e) {
        var t = Math.abs(e);
        if (isNaN(t))
            throw RangeError("Invalid sequence interval.");
        this.id = j(),
        this.interval = Math.max(t, 16),
        this.members = [],
        this.models = {},
        this.blocked = {
            head: !1,
            foot: !1
        }
    }
    function z(e, t, n) {
        var i = this;
        this.head = [],
        this.body = [],
        this.foot = [],
        h(e.members, function(e, r) {
            var o = n.elements[e];
            o && o[t] && i.body.push(r)
        }),
        this.body.length && h(e.members, function(e, r) {
            var o = n.elements[e];
            o && !o[t] && (r < i.body[0] ? i.head.push(r) : i.foot.push(r))
        })
    }
    function S(e, t, n, i) {
        var r = this
          , o = ["head", null, "foot"][1 + n]
          , s = e.members[t + n]
          , a = this.store.elements[s];
        e.blocked[o] = !0,
        setTimeout(function() {
            e.blocked[o] = !1,
            a && A.call(r, a, i)
        }, e.interval)
    }
    function C(e, t, n) {
        var i, r = this;
        void 0 === t && (t = {}),
        void 0 === n && (n = !1);
        var o = []
          , s = t.interval || l.interval;
        try {
            s && (i = new I(s));
            var a = d(e);
            if (!a.length)
                throw Error("Invalid reveal target.");
            var c = a.reduce(function(e, n) {
                var s, a = {}, l = n.getAttribute("data-sr-id");
                l ? (x(a, r.store.elements[l]),
                _(a.node, a.styles.inline.computed)) : (a.id = j(),
                a.node = n,
                a.seen = !1,
                a.revealed = !1,
                a.visible = !1);
                var c = x({}, a.config || r.defaults, t);
                if (!c.mobile && T() || !c.desktop && !T())
                    return l && w.call(r, a),
                    e;
                var u = d(c.container)[0];
                if (!u)
                    throw Error("Invalid container.");
                return u.contains(n) && (s = function e(t) {
                    for (var n = [], i = arguments.length - 1; i-- > 0; )
                        n[i] = arguments[i + 1];
                    var r = null;
                    return h(n, function(e) {
                        h(e, function(e) {
                            null === r && e.node === t && (r = e.id)
                        })
                    }),
                    r
                }(u, o, r.store.containers),
                null === s && (s = j(),
                o.push({
                    id: s,
                    node: u
                })),
                a.config = c,
                a.containerId = s,
                a.styles = function e(t) {
                    var n = window.getComputedStyle(t.node)
                      , i = n.position
                      , r = t.config
                      , o = {}
                      , s = (t.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
                    o.computed = s ? s.map(function(e) {
                        return e.trim()
                    }).join("; ") + ";" : "",
                    o.generated = s.some(function(e) {
                        return e.match(/visibility\s?:\s?visible/i)
                    }) ? o.computed : s.concat(["visibility: visible"]).map(function(e) {
                        return e.trim()
                    }).join("; ") + ";";
                    var a = parseFloat(n.opacity)
                      , l = isNaN(parseFloat(r.opacity)) ? parseFloat(n.opacity) : parseFloat(r.opacity)
                      , c = {
                        computed: a !== l ? "opacity: " + a + ";" : "",
                        generated: a !== l ? "opacity: " + l + ";" : ""
                    }
                      , u = [];
                    if (parseFloat(r.distance)) {
                        var d, f, h, p, m = "top" === r.origin || "bottom" === r.origin ? "Y" : "X", _ = r.distance;
                        ("top" === r.origin || "left" === r.origin) && (_ = /^-/.test(_) ? _.substr(1) : "-" + _);
                        var w = _.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g)
                          , k = w[0]
                          , x = w[1];
                        switch (x) {
                        case "em":
                            _ = parseInt(n.fontSize) * k;
                            break;
                        case "px":
                            _ = k;
                            break;
                        case "%":
                            _ = "Y" === m ? t.node.getBoundingClientRect().height * k / 100 : t.node.getBoundingClientRect().width * k / 100;
                            break;
                        default:
                            throw RangeError("Unrecognized or missing distance unit.")
                        }
                        "Y" === m ? u.push((d = _,
                        (f = v())[13] = d,
                        f)) : u.push((h = _,
                        (p = v())[12] = h,
                        p))
                    }
                    r.rotate.x && u.push((q = r.rotate.x,
                    P = Math.PI / 180 * q,
                    (L = v())[5] = L[10] = Math.cos(P),
                    L[6] = L[9] = Math.sin(P),
                    L[9] *= -1,
                    L)),
                    r.rotate.y && u.push((R = r.rotate.y,
                    O = Math.PI / 180 * R,
                    (A = v())[0] = A[10] = Math.cos(O),
                    A[2] = A[8] = Math.sin(O),
                    A[2] *= -1,
                    A)),
                    r.rotate.z && u.push((I = r.rotate.z,
                    z = Math.PI / 180 * I,
                    (S = v())[0] = S[5] = Math.cos(z),
                    S[1] = S[4] = Math.sin(z),
                    S[4] *= -1,
                    S)),
                    1 !== r.scale && (0 === r.scale ? u.push($(2e-4)) : u.push($(r.scale)));
                    var T = {};
                    if (u.length) {
                        T.property = b("transform"),
                        T.computed = {
                            raw: n[T.property],
                            matrix: function e(t) {
                                if ("string" == typeof t) {
                                    var n = t.match(/matrix(3d)?\(([^)]+)\)/);
                                    if (n)
                                        return y(n[2].split(", ").map(parseFloat))
                                }
                                return v()
                            }(n[T.property])
                        },
                        u.unshift(T.computed.matrix);
                        var E = u.reduce(g);
                        T.generated = {
                            initial: T.property + ": matrix3d(" + E.join(", ") + ");",
                            final: T.property + ": matrix3d(" + T.computed.matrix.join(", ") + ");"
                        }
                    } else
                        T.generated = {
                            initial: "",
                            final: ""
                        };
                    var j = {};
                    if (c.generated || T.generated.initial) {
                        j.property = b("transition"),
                        j.computed = n[j.property],
                        j.fragments = [];
                        var q, P, L, R, O, A, I, z, S, C = r.delay, N = r.duration, D = r.easing;
                        c.generated && j.fragments.push({
                            delayed: "opacity " + N / 1e3 + "s " + D + " " + C / 1e3 + "s",
                            instant: "opacity " + N / 1e3 + "s " + D + " 0s"
                        }),
                        T.generated.initial && j.fragments.push({
                            delayed: T.property + " " + N / 1e3 + "s " + D + " " + C / 1e3 + "s",
                            instant: T.property + " " + N / 1e3 + "s " + D + " 0s"
                        }),
                        j.computed && !j.computed.match(/all 0s|none 0s/) && j.fragments.unshift({
                            delayed: j.computed,
                            instant: j.computed
                        });
                        var F = j.fragments.reduce(function(e, t, n) {
                            return e.delayed += 0 === n ? t.delayed : ", " + t.delayed,
                            e.instant += 0 === n ? t.instant : ", " + t.instant,
                            e
                        }, {
                            delayed: "",
                            instant: ""
                        });
                        j.generated = {
                            delayed: j.property + ": " + F.delayed + ";",
                            instant: j.property + ": " + F.instant + ";"
                        }
                    } else
                        j.generated = {
                            delayed: "",
                            instant: ""
                        };
                    return {
                        inline: o,
                        opacity: c,
                        position: i,
                        transform: T,
                        transition: j
                    }
                }(a),
                i && (a.sequence = {
                    id: i.id,
                    index: i.members.length
                },
                i.members.push(a.id)),
                e.push(a)),
                e
            }, []);
            h(c, function(e) {
                r.store.elements[e.id] = e,
                e.node.setAttribute("data-sr-id", e.id)
            })
        } catch (u) {
            return p.call(this, "Reveal failed.", u.message)
        }
        h(o, function(e) {
            r.store.containers[e.id] = {
                id: e.id,
                node: e.node
            }
        }),
        i && (this.store.sequences[i.id] = i),
        !0 !== n && (this.store.history.push({
            target: e,
            options: t
        }),
        this.initTimeout && window.clearTimeout(this.initTimeout),
        this.initTimeout = window.setTimeout(q.bind(this), 0))
    }
    function N() {
        var e = this;
        h(this.store.history, function(t) {
            C.call(e, t.target, t.options, !0)
        }),
        q.call(this)
    }
    var D, F = function(e) {
        return (e > 0) - (e < 0) || +e
    }, W = Math.sign || F, Y = (D = Date.now(),
    function(e) {
        var t = Date.now();
        t - D > 16 ? (D = t,
        e(t)) : setTimeout(function() {
            return Y(e)
        }, 0)
    }
    ), H = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Y;
    function B(e, t) {
        var n = t ? e.node.clientHeight : e.node.offsetHeight
          , i = t ? e.node.clientWidth : e.node.offsetWidth
          , r = 0
          , o = 0
          , s = e.node;
        do
            isNaN(s.offsetTop) || (r += s.offsetTop),
            isNaN(s.offsetLeft) || (o += s.offsetLeft),
            s = s.offsetParent;
        while (s);
        return {
            bounds: {
                top: r,
                right: o + i,
                bottom: r + n,
                left: o
            },
            height: n,
            width: i
        }
    }
    function M(e) {
        var t, n;
        return e.node === document.documentElement ? (t = window.pageYOffset,
        n = window.pageXOffset) : (t = e.node.scrollTop,
        n = e.node.scrollLeft),
        {
            top: t,
            left: n
        }
    }
    function U(e) {
        void 0 === e && (e = {});
        var t = this.store.containers[e.containerId];
        if (t) {
            var n = Math.max(0, Math.min(1, e.config.viewFactor))
              , i = e.config.viewOffset
              , r = {
                top: e.geometry.bounds.top + e.geometry.height * n,
                right: e.geometry.bounds.right - e.geometry.width * n,
                bottom: e.geometry.bounds.bottom - e.geometry.height * n,
                left: e.geometry.bounds.left + e.geometry.width * n
            }
              , o = {
                top: t.geometry.bounds.top + t.scroll.top + i.top,
                right: t.geometry.bounds.right + t.scroll.left - i.right,
                bottom: t.geometry.bounds.bottom + t.scroll.top - i.bottom,
                left: t.geometry.bounds.left + t.scroll.left + i.left
            };
            return r.top < o.bottom && r.right > o.left && r.bottom > o.top && r.left < o.right || "fixed" === e.styles.position
        }
    }
    function X(e, t) {
        var n = this;
        void 0 === e && (e = {
            type: "init"
        }),
        void 0 === t && (t = this.store.elements),
        H(function() {
            var i = "init" === e.type || "resize" === e.type;
            h(n.store.containers, function(e) {
                i && (e.geometry = B.call(n, e, !0));
                var t = M.call(n, e);
                e.scroll && (e.direction = {
                    x: W(t.left - e.scroll.left),
                    y: W(t.top - e.scroll.top)
                }),
                e.scroll = t
            }),
            h(t, function(e) {
                (i || void 0 === e.geometry) && (e.geometry = B.call(n, e)),
                e.visible = U.call(n, e)
            }),
            h(t, function(e) {
                e.sequence ? A.call(n, e) : P.call(n, e)
            }),
            n.pristine = !1
        })
    }
    function G(s) {
        var u;
        if (void 0 === s && (s = {}),
        void 0 === this || Object.getPrototypeOf(this) !== G.prototype)
            return new G(s);
        if (!G.isSupported())
            return p.call(this, "Instantiation failed.", "This browser is not supported."),
            c.failure();
        try {
            u = o ? x({}, o, s) : x({}, l, s)
        } catch (f) {
            return p.call(this, "Invalid configuration.", f.message),
            c.failure()
        }
        try {
            if (!d(u.container)[0])
                throw Error("Invalid container.")
        } catch (h) {
            return p.call(this, h.message),
            c.failure()
        }
        return !(o = u).mobile && T() || !o.desktop && !T() ? (p.call(this, "This device is disabled.", "desktop: " + o.desktop, "mobile: " + o.mobile),
        c.failure()) : (c.success(),
        this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {}
        },
        this.pristine = !0,
        e = e || X.bind(this),
        t = t || k.bind(this),
        n = n || C.bind(this),
        i = i || w.bind(this),
        r = r || N.bind(this),
        Object.defineProperty(this, "delegate", {
            get: function() {
                return e
            }
        }),
        Object.defineProperty(this, "destroy", {
            get: function() {
                return t
            }
        }),
        Object.defineProperty(this, "reveal", {
            get: function() {
                return n
            }
        }),
        Object.defineProperty(this, "clean", {
            get: function() {
                return i
            }
        }),
        Object.defineProperty(this, "sync", {
            get: function() {
                return r
            }
        }),
        Object.defineProperty(this, "defaults", {
            get: function() {
                return o
            }
        }),
        Object.defineProperty(this, "version", {
            get: function() {
                return "4.0.9"
            }
        }),
        Object.defineProperty(this, "noop", {
            get: function() {
                return !1
            }
        }),
        a || (a = this))
    }
    return G.isSupported = function() {
        var e, t;
        return ("transform"in (e = document.documentElement.style) || "WebkitTransform"in e) && ("transition"in (t = document.documentElement.style) || "WebkitTransition"in t)
    }
    ,
    Object.defineProperty(G, "debug", {
        get: function() {
            return s || !1
        },
        set: function(e) {
            return s = "boolean" == typeof e ? e : s
        }
    }),
    G(),
    G
});
