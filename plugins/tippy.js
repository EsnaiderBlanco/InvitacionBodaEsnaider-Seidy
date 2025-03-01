!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = t || self).tippy = e(t.Popper)
}(this, function(t) {
    "use strict";
    var e, n, i, r, o = "undefined" != typeof window && "undefined" != typeof document, a = !!o && !!window.msCrypto, s = "tippy-content", p = "tippy-backdrop", u = "tippy-arrow", c = "tippy-svg-arrow", l = {
        passive: !0,
        capture: !0
    }, f = function t() {
        return document.body
    };
    function d(t, e, n) {
        if (Array.isArray(t)) {
            var i = t[e];
            return null == i ? Array.isArray(n) ? n[e] : n : i
        }
        return t
    }
    function v(t, e) {
        var n = ({}).toString.call(t);
        return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1
    }
    function m(t, e) {
        return "function" == typeof t ? t.apply(void 0, e) : t
    }
    function h(t, e) {
        var n;
        return 0 === e ? t : function(i) {
            clearTimeout(n),
            n = setTimeout(function() {
                t(i)
            }, e)
        }
    }
    function g(t, e) {
        var n = Object.assign({}, t);
        return e.forEach(function(t) {
            delete n[t]
        }),
        n
    }
    function y(t) {
        return [].concat(t)
    }
    function b(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }
    function $(t) {
        return t.split("-")[0]
    }
    function w(t) {
        return [].slice.call(t)
    }
    function _(t) {
        return Object.keys(t).reduce(function(e, n) {
            return void 0 !== t[n] && (e[n] = t[n]),
            e
        }, {})
    }
    function x() {
        return document.createElement("div")
    }
    function E(t) {
        return ["Element", "Fragment"].some(function(e) {
            return v(t, e)
        })
    }
    function C(t) {
        return v(t, "MouseEvent")
    }
    function T(t) {
        return !!(t && t._tippy && t._tippy.reference === t)
    }
    function A(t, e) {
        t.forEach(function(t) {
            t && (t.style.transitionDuration = e + "ms")
        })
    }
    function O(t, e) {
        t.forEach(function(t) {
            t && t.setAttribute("data-state", e)
        })
    }
    function D(t) {
        var e, n = y(t)[0];
        return null != n && null != (e = n.ownerDocument) && e.body ? n.ownerDocument : document
    }
    function L(t, e, n) {
        var i = e + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
            t[i](e, n)
        })
    }
    function k(t, e) {
        for (var n, i = e; i; ) {
            if (t.contains(i))
                return !0;
            i = null == i.getRootNode ? void 0 : null == (n = i.getRootNode()) ? void 0 : n.host
        }
        return !1
    }
    var P = {
        isTouch: !1
    }
      , R = 0;
    function S() {
        !P.isTouch && (P.isTouch = !0,
        window.performance && document.addEventListener("mousemove", I))
    }
    function I() {
        var t = performance.now();
        t - R < 20 && (P.isTouch = !1,
        document.removeEventListener("mousemove", I)),
        R = t
    }
    function V() {
        var t = document.activeElement;
        if (T(t)) {
            var e = t._tippy;
            t.blur && !e.state.isVisible && t.blur()
        }
    }
    function M(t) {
        return [t + "() was called on a" + ("destroy" === t ? "n already-" : " ") + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ")
    }
    function H(t) {
        return t.replace(/[ \t]{2,}/g, " ").replace(/^[ \t]*/gm, "").trim()
    }
    function N(t) {
        var e;
        return [H("\n  %ctippy.js\n\n  %c" + H(e = t) + "\n\n  %c\uD83D\uDC77‍ This is a development-only message. It will be removed in production.\n  "), "color: #00C584; font-size: 1.3em; font-weight: bold;", "line-height: 1.5", "color: #a6a095;"]
    }
    function U(t, e) {
        if (t && !r.has(e)) {
            var n;
            r.add(e),
            (n = console).warn.apply(n, N(e))
        }
    }
    function j(t, e) {
        if (t && !r.has(e)) {
            var n;
            r.add(e),
            (n = console).error.apply(n, N(e))
        }
    }
    r = new Set;
    var B = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }
      , Y = Object.assign({
        appendTo: f,
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function t() {},
        onBeforeUpdate: function t() {},
        onCreate: function t() {},
        onDestroy: function t() {},
        onHidden: function t() {},
        onHide: function t() {},
        onMount: function t() {},
        onShow: function t() {},
        onShown: function t() {},
        onTrigger: function t() {},
        onUntrigger: function t() {},
        onClickOutside: function t() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, B, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    })
      , z = Object.keys(Y)
      , W = function t(e) {
        q(e, []),
        Object.keys(e).forEach(function(t) {
            Y[t] = e[t]
        })
    };
    function X(t) {
        var e = (t.plugins || []).reduce(function(e, n) {
            var i, r = n.name, o = n.defaultValue;
            return r && (e[r] = void 0 !== t[r] ? t[r] : null != (i = Y[r]) ? i : o),
            e
        }, {});
        return Object.assign({}, t, e)
    }
    function F(t, e) {
        var n, i, r = Object.assign({}, e, {
            content: m(e.content, [t])
        }, e.ignoreAttributes ? {} : (n = t,
        ((i = e.plugins) ? Object.keys(X(Object.assign({}, Y, {
            plugins: i
        }))) : z).reduce(function(t, e) {
            var i = (n.getAttribute("data-tippy-" + e) || "").trim();
            if (!i)
                return t;
            if ("content" === e)
                t[e] = i;
            else
                try {
                    t[e] = JSON.parse(i)
                } catch (r) {
                    t[e] = i
                }
            return t
        }, {})));
        return r.aria = Object.assign({}, Y.aria, r.aria),
        r.aria = {
            expanded: "auto" === r.aria.expanded ? e.interactive : r.aria.expanded,
            content: "auto" === r.aria.content ? e.interactive ? null : "describedby" : r.aria.content
        },
        r
    }
    function q(t, e) {
        void 0 === t && (t = {}),
        void 0 === e && (e = []),
        Object.keys(t).forEach(function(t) {
            var n, i, r = (n = g(Y, Object.keys(B)),
            i = t,
            !({}).hasOwnProperty.call(n, i));
            r && (r = 0 === e.filter(function(e) {
                return e.name === t
            }).length),
            U(r, ["`" + t + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "))
        })
    }
    var G = function t() {
        return "innerHTML"
    };
    function J(t, e) {
        t[G()] = e
    }
    function K(t) {
        var e = x();
        return !0 === t ? e.className = u : (e.className = c,
        E(t) ? e.appendChild(t) : J(e, t)),
        e
    }
    function Q(t, e) {
        E(e.content) ? (J(t, ""),
        t.appendChild(e.content)) : "function" != typeof e.content && (e.allowHTML ? J(t, e.content) : t.textContent = e.content)
    }
    function Z(t) {
        var e = t.firstElementChild
          , n = w(e.children);
        return {
            box: e,
            content: n.find(function(t) {
                return t.classList.contains(s)
            }),
            arrow: n.find(function(t) {
                return t.classList.contains(u) || t.classList.contains(c)
            }),
            backdrop: n.find(function(t) {
                return t.classList.contains(p)
            })
        }
    }
    function tt(t) {
        var e = x()
          , n = x();
        n.className = "tippy-box",
        n.setAttribute("data-state", "hidden"),
        n.setAttribute("tabindex", "-1");
        var i = x();
        function r(n, i) {
            var r = Z(e)
              , o = r.box
              , a = r.content
              , s = r.arrow;
            i.theme ? o.setAttribute("data-theme", i.theme) : o.removeAttribute("data-theme"),
            "string" == typeof i.animation ? o.setAttribute("data-animation", i.animation) : o.removeAttribute("data-animation"),
            i.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"),
            o.style.maxWidth = "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth,
            i.role ? o.setAttribute("role", i.role) : o.removeAttribute("role"),
            (n.content !== i.content || n.allowHTML !== i.allowHTML) && Q(a, t.props),
            i.arrow ? s ? n.arrow !== i.arrow && (o.removeChild(s),
            o.appendChild(K(i.arrow))) : o.appendChild(K(i.arrow)) : s && o.removeChild(s)
        }
        return i.className = s,
        i.setAttribute("data-state", "hidden"),
        Q(i, t.props),
        e.appendChild(n),
        n.appendChild(i),
        r(t.props, t.props),
        {
            popper: e,
            onUpdate: r
        }
    }
    tt.$$tippy = !0;
    var te = 1
      , tn = []
      , ti = [];
    function tr(e, n) {
        void 0 === n && (n = {});
        var i, r, o, s, p = Y.plugins.concat(n.plugins || []);
        i = e,
        r = "[object Object]" === Object.prototype.toString.call(i) && !i.addEventListener,
        j(!i, ["tippy() was passed", "`" + String(i) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")),
        j(r, "tippy() was passed a plain object which is not supported as an argument for virtual positioning. Use props.getReferenceClientRect instead."),
        q(n, p),
        document.addEventListener("touchstart", S, l),
        window.addEventListener("blur", V);
        var u = Object.assign({}, n, {
            plugins: p
        })
          , c = (o = e,
        E(o) ? [o] : v(s = o, "NodeList") ? w(o) : Array.isArray(o) ? o : w(document.querySelectorAll(o)))
          , g = E(u.content)
          , T = c.length > 1;
        U(g && T, "tippy() was passed an Element as the `content` prop, but more than one tippy instance was created by this invocation. This means the content element will only be appended to the last tippy instance. \n\n Instead, pass the .innerHTML of the element, or use a function that returns a cloned version of the element instead. \n\n 1) content: element.innerHTML\n 2) content: () => element.cloneNode(true)");
        var R = c.reduce(function(e, n) {
            var i = n && function e(n, i) {
                var r, o, s, p, u, c, v, g, E = F(n, Object.assign({}, Y, X(_(i)))), T = !1, R = !1, S = !1, I = !1, V = [], H = h(tC, E.interactiveDebounce), N = te++, B = (g = E.plugins).filter(function(t, e) {
                    return g.indexOf(t) === e
                }), z = {
                    id: N,
                    reference: n,
                    popper: x(),
                    popperInstance: null,
                    props: E,
                    state: {
                        isEnabled: !0,
                        isVisible: !1,
                        isDestroyed: !1,
                        isMounted: !1,
                        isShown: !1
                    },
                    plugins: B,
                    clearDelayTimeouts: function t() {
                        clearTimeout(r),
                        clearTimeout(o),
                        cancelAnimationFrame(s)
                    },
                    setProps: function t(e) {
                        if (U(z.state.isDestroyed, M("setProps")),
                        !z.state.isDestroyed) {
                            tc("onBeforeUpdate", [z, e]),
                            tx();
                            var i = z.props
                              , r = F(n, Object.assign({}, i, _(e), {
                                ignoreAttributes: !0
                            }));
                            z.props = r,
                            t_(),
                            i.interactiveDebounce !== r.interactiveDebounce && (td(),
                            H = h(tC, r.interactiveDebounce)),
                            i.triggerTarget && !r.triggerTarget ? y(i.triggerTarget).forEach(function(t) {
                                t.removeAttribute("aria-expanded")
                            }) : r.triggerTarget && n.removeAttribute("aria-expanded"),
                            tf(),
                            tu(),
                            G && G(i, r),
                            z.popperInstance && (tD(),
                            tk().forEach(function(t) {
                                requestAnimationFrame(t._tippy.popperInstance.forceUpdate)
                            })),
                            tc("onAfterUpdate", [z, e])
                        }
                    },
                    setContent: function t(e) {
                        z.setProps({
                            content: e
                        })
                    },
                    show: function t() {
                        U(z.state.isDestroyed, M("show"));
                        var e, n, i, r = z.state.isVisible, o = z.state.isDestroyed, a = !z.state.isEnabled, s = P.isTouch && !z.props.touch, p = d(z.props.duration, 0, Y.duration);
                        if (!(r || o || a || s || to().hasAttribute("disabled"))) {
                            if (tc("onShow", [z], !1),
                            !1 !== z.props.onShow(z)) {
                                if (z.state.isVisible = !0,
                                tr() && (q.style.visibility = "visible"),
                                tu(),
                                tg(),
                                z.state.isMounted || (q.style.transition = "none"),
                                tr()) {
                                    var u, l = ts();
                                    A([l.box, l.content], 0)
                                }
                                c = function t() {
                                    if (z.state.isVisible && !I) {
                                        if (I = !0,
                                        q.offsetHeight,
                                        q.style.transition = z.props.moveTransition,
                                        tr() && z.props.animation) {
                                            var e, n, i, r = ts(), o = r.box, a = r.content;
                                            A([o, a], p),
                                            O([o, a], "visible")
                                        }
                                        tl(),
                                        tf(),
                                        b(ti, z),
                                        null == (e = z.popperInstance) || e.forceUpdate(),
                                        tc("onMount", [z]),
                                        z.props.animation && tr() && (n = p,
                                        t$(n, i = function() {
                                            z.state.isShown = !0,
                                            tc("onShown", [z])
                                        }
                                        ))
                                    }
                                }
                                ,
                                n = z.props.appendTo,
                                i = to(),
                                (e = z.props.interactive && n === f || "parent" === n ? i.parentNode : m(n, [i])).contains(q) || e.appendChild(q),
                                z.state.isMounted = !0,
                                tD(),
                                U(z.props.interactive && n === Y.appendTo && i.nextElementSibling !== q, "Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order. \n\n Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. \n\n Specifying `appendTo: document.body` silences this warning, but it assumes you are using a focus management solution to handle keyboard navigation. \n\n See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity")
                            }
                        }
                    },
                    hide: function t() {
                        U(z.state.isDestroyed, M("hide"));
                        var e, n, i = !z.state.isVisible, r = z.state.isDestroyed, o = !z.state.isEnabled, a = d(z.props.duration, 1, Y.duration);
                        if (!i && !r && !o) {
                            if (tc("onHide", [z], !1),
                            !1 !== z.props.onHide(z)) {
                                if (z.state.isVisible = !1,
                                z.state.isShown = !1,
                                I = !1,
                                T = !1,
                                tr() && (q.style.visibility = "hidden"),
                                td(),
                                ty(),
                                tu(!0),
                                tr()) {
                                    var s = ts()
                                      , p = s.box
                                      , u = s.content;
                                    z.props.animation && (A([p, u], a),
                                    O([p, u], "hidden"))
                                }
                                (tl(),
                                tf(),
                                z.props.animation) ? tr() && (e = a,
                                n = z.unmount,
                                t$(e, function() {
                                    !z.state.isVisible && q.parentNode && q.parentNode.contains(q) && n()
                                })) : z.unmount()
                            }
                        }
                    },
                    hideWithInteractivity: function t(e) {
                        U(z.state.isDestroyed, M("hideWithInteractivity")),
                        ta().addEventListener("mousemove", H),
                        b(tn, H),
                        H(e)
                    },
                    enable: function t() {
                        z.state.isEnabled = !0
                    },
                    disable: function t() {
                        z.hide(),
                        z.state.isEnabled = !1
                    },
                    unmount: function t() {
                        U(z.state.isDestroyed, M("unmount")),
                        z.state.isVisible && z.hide(),
                        z.state.isMounted && (tL(),
                        tk().forEach(function(t) {
                            t._tippy.unmount()
                        }),
                        q.parentNode && q.parentNode.removeChild(q),
                        ti = ti.filter(function(t) {
                            return t !== z
                        }),
                        z.state.isMounted = !1,
                        tc("onHidden", [z]))
                    },
                    destroy: function t() {
                        U(z.state.isDestroyed, M("destroy")),
                        !z.state.isDestroyed && (z.clearDelayTimeouts(),
                        z.unmount(),
                        tx(),
                        delete n._tippy,
                        z.state.isDestroyed = !0,
                        tc("onDestroy", [z]))
                    }
                };
                if (!E.render)
                    return j(!0, "render() function has not been supplied."),
                    z;
                var W = E.render(z)
                  , q = W.popper
                  , G = W.onUpdate;
                q.setAttribute("data-tippy-root", ""),
                q.id = "tippy-" + z.id,
                z.popper = q,
                n._tippy = z,
                q._tippy = z;
                var J = B.map(function(t) {
                    return t.fn(z)
                })
                  , K = n.hasAttribute("aria-expanded");
                return t_(),
                tf(),
                tu(),
                tc("onCreate", [z]),
                E.showOnCreate && tP(),
                q.addEventListener("mouseenter", function() {
                    z.props.interactive && z.state.isVisible && z.clearDelayTimeouts()
                }),
                q.addEventListener("mouseleave", function() {
                    z.props.interactive && z.props.trigger.indexOf("mouseenter") >= 0 && ta().addEventListener("mousemove", H)
                }),
                z;
                function Q() {
                    var t = z.props.touch;
                    return Array.isArray(t) ? t : [t, 0]
                }
                function tt() {
                    return "hold" === Q()[0]
                }
                function tr() {
                    var t;
                    return !!(null != (t = z.props.render) && t.$$tippy)
                }
                function to() {
                    return v || n
                }
                function ta() {
                    var t = to().parentNode;
                    return t ? D(t) : document
                }
                function ts() {
                    return Z(q)
                }
                function tp(t) {
                    return z.state.isMounted && !z.state.isVisible || P.isTouch || p && "focus" === p.type ? 0 : d(z.props.delay, t ? 0 : 1, Y.delay)
                }
                function tu(t) {
                    void 0 === t && (t = !1),
                    q.style.pointerEvents = z.props.interactive && !t ? "" : "none",
                    q.style.zIndex = "" + z.props.zIndex
                }
                function tc(t, e, n) {
                    if (void 0 === n && (n = !0),
                    J.forEach(function(n) {
                        n[t] && n[t].apply(n, e)
                    }),
                    n) {
                        var i;
                        (i = z.props)[t].apply(i, e)
                    }
                }
                function tl() {
                    var t = z.props.aria;
                    if (t.content) {
                        var e = "aria-" + t.content
                          , i = q.id;
                        y(z.props.triggerTarget || n).forEach(function(t) {
                            var n = t.getAttribute(e);
                            if (z.state.isVisible)
                                t.setAttribute(e, n ? n + " " + i : i);
                            else {
                                var r = n && n.replace(i, "").trim();
                                r ? t.setAttribute(e, r) : t.removeAttribute(e)
                            }
                        })
                    }
                }
                function tf() {
                    !K && z.props.aria.expanded && y(z.props.triggerTarget || n).forEach(function(t) {
                        z.props.interactive ? t.setAttribute("aria-expanded", z.state.isVisible && t === to() ? "true" : "false") : t.removeAttribute("aria-expanded")
                    })
                }
                function td() {
                    ta().removeEventListener("mousemove", H),
                    tn = tn.filter(function(t) {
                        return t !== H
                    })
                }
                function tv(t) {
                    if (!P.isTouch || !S && "mousedown" !== t.type) {
                        var e = t.composedPath && t.composedPath()[0] || t.target;
                        if (!(z.props.interactive && k(q, e))) {
                            if (y(z.props.triggerTarget || n).some(function(t) {
                                return k(t, e)
                            })) {
                                if (P.isTouch || z.state.isVisible && z.props.trigger.indexOf("click") >= 0)
                                    return
                            } else
                                tc("onClickOutside", [z, t]);
                            !0 !== z.props.hideOnClick || (z.clearDelayTimeouts(),
                            z.hide(),
                            R = !0,
                            setTimeout(function() {
                                R = !1
                            }),
                            z.state.isMounted || ty())
                        }
                    }
                }
                function tm() {
                    S = !0
                }
                function th() {
                    S = !1
                }
                function tg() {
                    var t = ta();
                    t.addEventListener("mousedown", tv, !0),
                    t.addEventListener("touchend", tv, l),
                    t.addEventListener("touchstart", th, l),
                    t.addEventListener("touchmove", tm, l)
                }
                function ty() {
                    var t = ta();
                    t.removeEventListener("mousedown", tv, !0),
                    t.removeEventListener("touchend", tv, l),
                    t.removeEventListener("touchstart", th, l),
                    t.removeEventListener("touchmove", tm, l)
                }
                function tb(t, e) {
                    t$(t, e)
                }
                function t$(t, e) {
                    var n = ts().box;
                    function i(t) {
                        t.target === n && (L(n, "remove", i),
                        e())
                    }
                    if (0 === t)
                        return e();
                    L(n, "remove", u),
                    L(n, "add", i),
                    u = i
                }
                function tw(t, e, i) {
                    void 0 === i && (i = !1),
                    y(z.props.triggerTarget || n).forEach(function(n) {
                        n.addEventListener(t, e, i),
                        V.push({
                            node: n,
                            eventType: t,
                            handler: e,
                            options: i
                        })
                    })
                }
                function t_() {
                    var t;
                    tt() && (tw("touchstart", tE, {
                        passive: !0
                    }),
                    tw("touchend", tT, {
                        passive: !0
                    })),
                    (t = z.props.trigger).split(/\s+/).filter(Boolean).forEach(function(t) {
                        if ("manual" !== t)
                            switch (tw(t, tE),
                            t) {
                            case "mouseenter":
                                tw("mouseleave", tT);
                                break;
                            case "focus":
                                tw(a ? "focusout" : "blur", tA);
                                break;
                            case "focusin":
                                tw("focusout", tA)
                            }
                    })
                }
                function tx() {
                    V.forEach(function(t) {
                        var e = t.node
                          , n = t.eventType
                          , i = t.handler
                          , r = t.options;
                        e.removeEventListener(n, i, r)
                    }),
                    V = []
                }
                function tE(t) {
                    var e, n = !1;
                    if (!(!z.state.isEnabled || tO(t)) && !R) {
                        var i = (null == (e = p) ? void 0 : e.type) === "focus";
                        p = t,
                        v = t.currentTarget,
                        tf(),
                        !z.state.isVisible && C(t) && tn.forEach(function(e) {
                            return e(t)
                        }),
                        "click" === t.type && (0 > z.props.trigger.indexOf("mouseenter") || T) && !1 !== z.props.hideOnClick && z.state.isVisible ? n = !0 : tP(t),
                        "click" === t.type && (T = !n),
                        n && !i && tR(t)
                    }
                }
                function tC(t) {
                    var e, n, i, r, o = t.target, a = to().contains(o) || q.contains(o);
                    ("mousemove" !== t.type || !a) && (e = tk().concat(q).map(function(t) {
                        var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                        return n ? {
                            popperRect: t.getBoundingClientRect(),
                            popperState: n,
                            props: E
                        } : null
                    }).filter(Boolean),
                    i = (n = t).clientX,
                    r = n.clientY,
                    e.every(function(t) {
                        var e = t.popperRect
                          , n = t.popperState
                          , o = t.props.interactiveBorder
                          , a = $(n.placement)
                          , s = n.modifiersData.offset;
                        if (!s)
                            return !0;
                        var p = "bottom" === a ? s.top.y : 0
                          , u = "top" === a ? s.bottom.y : 0
                          , c = "right" === a ? s.left.x : 0
                          , l = "left" === a ? s.right.x : 0
                          , f = e.top - r + p > o
                          , d = r - e.bottom - u > o
                          , v = e.left - i + c > o
                          , m = i - e.right - l > o;
                        return f || d || v || m
                    }) && (td(),
                    tR(t)))
                }
                function tT(t) {
                    if (!(tO(t) || z.props.trigger.indexOf("click") >= 0 && T)) {
                        if (z.props.interactive) {
                            z.hideWithInteractivity(t);
                            return
                        }
                        tR(t)
                    }
                }
                function tA(t) {
                    !(0 > z.props.trigger.indexOf("focusin") && t.target !== to() || z.props.interactive && t.relatedTarget && q.contains(t.relatedTarget)) && tR(t)
                }
                function tO(t) {
                    return !!P.isTouch && tt() !== t.type.indexOf("touch") >= 0
                }
                function tD() {
                    tL();
                    var e = z.props
                      , i = e.popperOptions
                      , r = e.placement
                      , o = e.offset
                      , a = e.getReferenceClientRect
                      , s = e.moveTransition
                      , p = tr() ? Z(q).arrow : null
                      , u = a ? {
                        getBoundingClientRect: a,
                        contextElement: a.contextElement || to()
                    } : n
                      , l = [{
                        name: "offset",
                        options: {
                            offset: o
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            padding: {
                                top: 2,
                                bottom: 2,
                                left: 5,
                                right: 5
                            }
                        }
                    }, {
                        name: "flip",
                        options: {
                            padding: 5
                        }
                    }, {
                        name: "computeStyles",
                        options: {
                            adaptive: !s
                        }
                    }, {
                        name: "$$tippy",
                        enabled: !0,
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        fn: function t(e) {
                            var n = e.state;
                            if (tr()) {
                                var i = ts().box;
                                ["placement", "reference-hidden", "escaped"].forEach(function(t) {
                                    "placement" === t ? i.setAttribute("data-placement", n.placement) : n.attributes.popper["data-popper-" + t] ? i.setAttribute("data-" + t, "") : i.removeAttribute("data-" + t)
                                }),
                                n.attributes.popper = {}
                            }
                        }
                    }];
                    tr() && p && l.push({
                        name: "arrow",
                        options: {
                            element: p,
                            padding: 3
                        }
                    }),
                    l.push.apply(l, (null == i ? void 0 : i.modifiers) || []),
                    z.popperInstance = t.createPopper(u, q, Object.assign({}, i, {
                        placement: r,
                        onFirstUpdate: c,
                        modifiers: l
                    }))
                }
                function tL() {
                    z.popperInstance && (z.popperInstance.destroy(),
                    z.popperInstance = null)
                }
                function tk() {
                    return w(q.querySelectorAll("[data-tippy-root]"))
                }
                function tP(t) {
                    z.clearDelayTimeouts(),
                    t && tc("onTrigger", [z, t]),
                    tg();
                    var e = tp(!0)
                      , n = Q()
                      , i = n[0]
                      , o = n[1];
                    P.isTouch && "hold" === i && o && (e = o),
                    e ? r = setTimeout(function() {
                        z.show()
                    }, e) : z.show()
                }
                function tR(t) {
                    if (z.clearDelayTimeouts(),
                    tc("onUntrigger", [z, t]),
                    !z.state.isVisible) {
                        ty();
                        return
                    }
                    if (!(z.props.trigger.indexOf("mouseenter") >= 0 && z.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(t.type) >= 0) || !T) {
                        var e = tp(!1);
                        e ? o = setTimeout(function() {
                            z.state.isVisible && z.hide()
                        }, e) : s = requestAnimationFrame(function() {
                            z.hide()
                        })
                    }
                }
            }(n, u);
            return i && e.push(i),
            e
        }, []);
        return E(e) ? R[0] : R
    }
    tr.defaultProps = Y,
    tr.setDefaultProps = W,
    tr.currentInput = P;
    var to = function t(e) {
        var n = void 0 === e ? {} : e
          , i = n.exclude
          , r = n.duration;
        ti.forEach(function(t) {
            var e = !1;
            if (i && (e = T(i) ? t.reference === i : t.popper === i.popper),
            !e) {
                var n = t.props.duration;
                t.setProps({
                    duration: r
                }),
                t.hide(),
                t.state.isDestroyed || t.setProps({
                    duration: n
                })
            }
        })
    }
      , ta = Object.assign({}, t.applyStyles, {
        effect: function t(e) {
            var n = e.state
              , i = {
                popper: {
                    position: n.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(n.elements.popper.style, i.popper),
            n.styles = i,
            n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow)
        }
    })
      , ts = function t(e, n) {
        void 0 === n && (n = {}),
        j(!Array.isArray(e), ["The first argument passed to createSingleton() must be an array of", "tippy instances. The passed value was", String(e)].join(" "));
        var i, r, o = e, a = [], s = [], p = n.overrides, u = [], c = !1;
        function l() {
            s = o.map(function(t) {
                return y(t.props.triggerTarget || t.reference)
            }).reduce(function(t, e) {
                return t.concat(e)
            }, [])
        }
        function f() {
            a = o.map(function(t) {
                return t.reference
            })
        }
        function d(t) {
            o.forEach(function(e) {
                t ? e.enable() : e.disable()
            })
        }
        function v(t) {
            return o.map(function(e) {
                var n = e.setProps;
                return e.setProps = function(i) {
                    n(i),
                    e.reference === r && t.setProps(i)
                }
                ,
                function() {
                    e.setProps = n
                }
            })
        }
        function m(t, e) {
            var n = s.indexOf(e);
            if (e !== r) {
                r = e;
                var i = (p || []).concat("content").reduce(function(t, e) {
                    return t[e] = o[n].props[e],
                    t
                }, {});
                t.setProps(Object.assign({}, i, {
                    getReferenceClientRect: "function" == typeof i.getReferenceClientRect ? i.getReferenceClientRect : function() {
                        var t;
                        return null == (t = a[n]) ? void 0 : t.getBoundingClientRect()
                    }
                }))
            }
        }
        d(!1),
        f(),
        l();
        var h = tr(x(), Object.assign({}, g(n, ["overrides"]), {
            plugins: [{
                fn: function t() {
                    return {
                        onDestroy: function t() {
                            d(!0)
                        },
                        onHidden: function t() {
                            r = null
                        },
                        onClickOutside: function t(e) {
                            e.props.showOnCreate && !c && (c = !0,
                            r = null)
                        },
                        onShow: function t(e) {
                            e.props.showOnCreate && !c && (c = !0,
                            m(e, a[0]))
                        },
                        onTrigger: function t(e, n) {
                            m(e, n.currentTarget)
                        }
                    }
                }
            }].concat(n.plugins || []),
            triggerTarget: s,
            popperOptions: Object.assign({}, n.popperOptions, {
                modifiers: [].concat((null == (i = n.popperOptions) ? void 0 : i.modifiers) || [], [ta])
            })
        }))
          , b = h.show;
        h.show = function(t) {
            if (b(),
            !r && null == t)
                return m(h, a[0]);
            if (!r || null != t) {
                if ("number" == typeof t)
                    return a[t] && m(h, a[t]);
                if (o.indexOf(t) >= 0)
                    return m(h, t.reference);
                if (a.indexOf(t) >= 0)
                    return m(h, t)
            }
        }
        ,
        h.showNext = function() {
            var t = a[0];
            if (!r)
                return h.show(0);
            var e = a.indexOf(r);
            h.show(a[e + 1] || t)
        }
        ,
        h.showPrevious = function() {
            var t = a[a.length - 1];
            if (!r)
                return h.show(t);
            var e = a[a.indexOf(r) - 1] || t;
            h.show(e)
        }
        ;
        var $ = h.setProps;
        return h.setProps = function(t) {
            p = t.overrides || p,
            $(t)
        }
        ,
        h.setInstances = function(t) {
            d(!0),
            u.forEach(function(t) {
                return t()
            }),
            o = t,
            d(!1),
            f(),
            l(),
            u = v(h),
            h.setProps({
                triggerTarget: s
            })
        }
        ,
        u = v(h),
        h
    }
      , tp = {
        mouseover: "mouseenter",
        focusin: "focus",
        click: "click"
    }
      , tu = {
        clientX: 0,
        clientY: 0
    }
      , tc = [];
    function tl(t) {
        var e;
        tu = {
            clientX: t.clientX,
            clientY: t.clientY
        }
    }
    function tf(t, e) {
        return !t || !e || t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom || t.left !== e.left
    }
    if (o) {
        (e = document.createElement("style")).textContent = '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}',
        e.setAttribute("data-tippy-stylesheet", ""),
        n = document.head,
        (i = document.querySelector("head>style,head>link")) ? n.insertBefore(e, i) : n.appendChild(e)
    }
    return tr.setDefaultProps({
        plugins: [{
            name: "animateFill",
            defaultValue: !1,
            fn: function t(e) {
                if (!(null != (i = e.props.render) && i.$$tippy))
                    return j(e.props.animateFill, "The `animateFill` plugin requires the default render function."),
                    {};
                var n, i, r = Z(e.popper), o = r.box, a = r.content, s = e.props.animateFill ? (n = x(),
                n.className = p,
                O([n], "hidden"),
                n) : null;
                return {
                    onCreate: function t() {
                        s && (o.insertBefore(s, o.firstElementChild),
                        o.setAttribute("data-animatefill", ""),
                        o.style.overflow = "hidden",
                        e.setProps({
                            arrow: !1,
                            animation: "shift-away"
                        }))
                    },
                    onMount: function t() {
                        if (s) {
                            var e = o.style.transitionDuration
                              , n = Number(e.replace("ms", ""));
                            a.style.transitionDelay = Math.round(n / 10) + "ms",
                            s.style.transitionDuration = e,
                            O([s], "visible")
                        }
                    },
                    onShow: function t() {
                        s && (s.style.transitionDuration = "0ms")
                    },
                    onHide: function t() {
                        s && O([s], "hidden")
                    }
                }
            }
        }, {
            name: "followCursor",
            defaultValue: !1,
            fn: function t(e) {
                var n = e.reference
                  , i = D(e.props.triggerTarget || n)
                  , r = !1
                  , o = !1
                  , a = !0
                  , s = e.props;
                function p() {
                    return "initial" === e.props.followCursor && e.state.isVisible
                }
                function u() {
                    i.addEventListener("mousemove", f)
                }
                function c() {
                    i.removeEventListener("mousemove", f)
                }
                function l() {
                    r = !0,
                    e.setProps({
                        getReferenceClientRect: null
                    }),
                    r = !1
                }
                function f(t) {
                    var i = !t.target || n.contains(t.target)
                      , r = e.props.followCursor
                      , o = t.clientX
                      , a = t.clientY
                      , s = n.getBoundingClientRect()
                      , p = o - s.left
                      , u = a - s.top;
                    (i || !e.props.interactive) && e.setProps({
                        getReferenceClientRect: function t() {
                            var e = n.getBoundingClientRect()
                              , i = o
                              , s = a;
                            "initial" === r && (i = e.left + p,
                            s = e.top + u);
                            var c = "horizontal" === r ? e.top : s
                              , l = "vertical" === r ? e.right : i
                              , f = "horizontal" === r ? e.bottom : s
                              , d = "vertical" === r ? e.left : i;
                            return {
                                width: l - d,
                                height: f - c,
                                top: c,
                                right: l,
                                bottom: f,
                                left: d
                            }
                        }
                    })
                }
                function d() {
                    e.props.followCursor && (tc.push({
                        instance: e,
                        doc: i
                    }),
                    function t(e) {
                        e.addEventListener("mousemove", tl)
                    }(i))
                }
                function v() {
                    0 === (tc = tc.filter(function(t) {
                        return t.instance !== e
                    })).filter(function(t) {
                        return t.doc === i
                    }).length && function t(e) {
                        e.removeEventListener("mousemove", tl)
                    }(i)
                }
                return {
                    onCreate: d,
                    onDestroy: v,
                    onBeforeUpdate: function t() {
                        s = e.props
                    },
                    onAfterUpdate: function t(n, i) {
                        var a = i.followCursor;
                        !r && (void 0 === a || s.followCursor === a || (v(),
                        a ? (d(),
                        !e.state.isMounted || o || p() || u()) : (c(),
                        l())))
                    },
                    onMount: function t() {
                        !e.props.followCursor || o || (a && (f(tu),
                        a = !1),
                        p() || u())
                    },
                    onTrigger: function t(e, n) {
                        C(n) && (tu = {
                            clientX: n.clientX,
                            clientY: n.clientY
                        }),
                        o = "focus" === n.type
                    },
                    onHidden: function t() {
                        e.props.followCursor && (l(),
                        c(),
                        a = !0)
                    }
                }
            }
        }, {
            name: "inlinePositioning",
            defaultValue: !1,
            fn: function t(e) {
                var n, i = e.reference, r = -1, o = !1, a = [], s = {
                    name: "tippyInlinePositioning",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function t(o) {
                        var s = o.state;
                        e.props.inlinePositioning && (-1 !== a.indexOf(s.placement) && (a = []),
                        n !== s.placement && -1 === a.indexOf(s.placement) && (a.push(s.placement),
                        e.setProps({
                            getReferenceClientRect: function t() {
                                var e;
                                return e = s.placement,
                                function t(e, n, i, r) {
                                    if (i.length < 2 || null === e)
                                        return n;
                                    if (2 === i.length && r >= 0 && i[0].left > i[1].right)
                                        return i[r] || n;
                                    switch (e) {
                                    case "top":
                                    case "bottom":
                                        var o = i[0]
                                          , a = i[i.length - 1]
                                          , s = "top" === e
                                          , p = o.top
                                          , u = a.bottom
                                          , c = s ? o.left : a.left
                                          , l = s ? o.right : a.right;
                                        return {
                                            top: p,
                                            bottom: u,
                                            left: c,
                                            right: l,
                                            width: l - c,
                                            height: u - p
                                        };
                                    case "left":
                                    case "right":
                                        var f = Math.min.apply(Math, i.map(function(t) {
                                            return t.left
                                        }))
                                          , d = Math.max.apply(Math, i.map(function(t) {
                                            return t.right
                                        }))
                                          , v = i.filter(function(t) {
                                            return "left" === e ? t.left === f : t.right === d
                                        })
                                          , m = v[0].top
                                          , h = v[v.length - 1].bottom
                                          , g = f
                                          , y = d;
                                        return {
                                            top: m,
                                            bottom: h,
                                            left: g,
                                            right: y,
                                            width: y - g,
                                            height: h - m
                                        };
                                    default:
                                        return n
                                    }
                                }($(e), i.getBoundingClientRect(), w(i.getClientRects()), r)
                            }
                        })),
                        n = s.placement)
                    }
                };
                function p() {
                    if (!o) {
                        var t, n, i, r;
                        r = (t = e.props,
                        n = s,
                        {
                            popperOptions: Object.assign({}, t.popperOptions, {
                                modifiers: [].concat(((null == (i = t.popperOptions) ? void 0 : i.modifiers) || []).filter(function(t) {
                                    return t.name !== n.name
                                }), [n])
                            })
                        }),
                        o = !0,
                        e.setProps(r),
                        o = !1
                    }
                }
                return {
                    onCreate: p,
                    onAfterUpdate: p,
                    onTrigger: function t(n, i) {
                        if (C(i)) {
                            var o = w(e.reference.getClientRects())
                              , a = o.find(function(t) {
                                return t.left - 2 <= i.clientX && t.right + 2 >= i.clientX && t.top - 2 <= i.clientY && t.bottom + 2 >= i.clientY
                            })
                              , s = o.indexOf(a);
                            r = s > -1 ? s : r
                        }
                    },
                    onHidden: function t() {
                        r = -1
                    }
                }
            }
        }, {
            name: "sticky",
            defaultValue: !1,
            fn: function t(e) {
                var n = e.reference
                  , i = e.popper;
                function r(t) {
                    return !0 === e.props.sticky || e.props.sticky === t
                }
                var o = null
                  , a = null;
                return {
                    onMount: function t() {
                        e.props.sticky && function t() {
                            var s = r("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : n).getBoundingClientRect() : null
                              , p = r("popper") ? i.getBoundingClientRect() : null;
                            (s && tf(o, s) || p && tf(a, p)) && e.popperInstance && e.popperInstance.update(),
                            o = s,
                            a = p,
                            e.state.isMounted && requestAnimationFrame(t)
                        }()
                    }
                }
            }
        }],
        render: tt
    }),
    tr.createSingleton = ts,
    tr.delegate = function t(e, n) {
        j(!(n && n.target), "You must specity a `target` prop indicating a CSS selector string matching the target elements that should receive a tippy.");
        var i = []
          , r = []
          , o = !1
          , a = n.target
          , s = g(n, ["target"])
          , p = Object.assign({}, s, {
            trigger: "manual",
            touch: !1
        })
          , u = Object.assign({
            touch: Y.touch
        }, s, {
            showOnCreate: !0
        })
          , c = tr(e, p)
          , f = y(c);
        function d(t) {
            if (t.target && !o) {
                var e = t.target.closest(a);
                if (e) {
                    var i = e.getAttribute("data-tippy-trigger") || n.trigger || Y.trigger;
                    if (!(e._tippy || "touchstart" === t.type && "boolean" == typeof u.touch || "touchstart" !== t.type && 0 > i.indexOf(tp[t.type]))) {
                        var s = tr(e, u);
                        s && (r = r.concat(s))
                    }
                }
            }
        }
        function v(t, e, n, r) {
            void 0 === r && (r = !1),
            t.addEventListener(e, n, r),
            i.push({
                node: t,
                eventType: e,
                handler: n,
                options: r
            })
        }
        return f.forEach(function t(e) {
            var n, a, s = e.destroy, p = e.enable, u = e.disable;
            e.destroy = function(t) {
                void 0 === t && (t = !0),
                t && r.forEach(function(t) {
                    t.destroy()
                }),
                r = [],
                i.forEach(function(t) {
                    var e = t.node
                      , n = t.eventType
                      , i = t.handler
                      , r = t.options;
                    e.removeEventListener(n, i, r)
                }),
                i = [],
                s()
            }
            ,
            e.enable = function() {
                p(),
                r.forEach(function(t) {
                    return t.enable()
                }),
                o = !1
            }
            ,
            e.disable = function() {
                u(),
                r.forEach(function(t) {
                    return t.disable()
                }),
                o = !0
            }
            ,
            v(a = (n = e).reference, "touchstart", d, l),
            v(a, "mouseover", d),
            v(a, "focusin", d),
            v(a, "click", d)
        }),
        c
    }
    ,
    tr.hideAll = to,
    tr.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
    tr
});
