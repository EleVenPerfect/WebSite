(function(e) {
    function f(e) {
        if (! (this instanceof f)) return new f(e);
        e || (e = {});
        "number" == typeof e && (e = {
            s: e
        });
        null != e.u || (e.u = !0);
        this.options = e;
        this.s = e.s || f.C;
        this.H = 1E3 / this.s;
        this.I = this.s !== f.C;
        this.w = null;
        this.l = {};
        this.p = this.v = 0
    }
    var u = Date.now,
    O = e.setTimeout,
    n, y, C = !1; (function() {
        var f, s = ["ms", "moz", "webkit", "o"];
        n = e.requestAnimationFrame;
        y = e.cancelAnimationFrame;
        for (f = 0; f < s.length && !n; f++) n = n || e[s[f] + "RequestAnimationFrame"],
        y = y || e[s[f] + "CancelAnimationFrame"] || e[s[f] + "CancelRequestAnimationFrame"];
        n && n(function() {
            C = !0
        })
    })();
    f.C = 60;
    f.R = function(n) {
        var s = new f(n);
        e.requestAnimationFrame = function(e) {
            return s.Q(e)
        };
        e.cancelAnimationFrame = function(e) {
            return s.cancel(e)
        };
        return s
    };
    f.prototype.request = function(e) {
        var f = this,
        w; ++this.p;
        if (C && f.options.u && !this.I) return n(e);
        if (!e) throw new TypeError("Not enough arguments");
        null == this.w && (w = this.H + this.v - (u ? u() : (new Date).getTime()), 0 > w && (w = 0), this.w = O(function() {
            var e;
            f.v = u ? u() : (new Date).getTime();
            f.w = null; ++f.p;
            for (e in f.l) if (f.l[e]) {
                if (C && f.options.u) n(f.l[e]);
                else f.l[e](f.v);
                delete f.l[e]
            }
        },
        w));
        this.l[this.p] = e;
        return this.p
    };
    f.prototype.cancel = function(e) {
        C && this.options.u && y(e);
        delete this.l[e]
    };
    "object" == typeof exports && "object" == typeof module ? module.P = f: "function" == typeof define && define.O ? define(function() {
        return f
    }) : e.AnimationFrame = f
})(window);
window.TagulDisplayCloud = function(e, f, u, O) {
    function n(b) {
        return ! isNaN(parseFloat(b)) && isFinite(b)
    }
    function y() {
        var b = h.offsetWidth,
        c = h.offsetHeight;
        G = 36E4 < b * c ? 1 : 1.5;
        h.width = G * b + 1;
        h.height = G * c + 1
    }
    function C() {
        if (x) {
            attribution.f = D;
            var b = H();
            attribution.d = b - Math.max(attribution.k - (b - attribution.d), 0);
            attribution.q = !0
        }
    }
    function K(b) {
        b = parseInt(b.replace("#", ""), 16);
        return {
            j: b >> 16 & 255,
            i: b >> 8 & 255,
            g: b & 255
        }
    }
    function s(b, c) {
        b = b.substring(1, b.length);
        b = K(b);
        return "rgba(" + b.j + "," + b.i + "," + b.g + "," + c.toFixed(4) + ")"
    }
    function w(b) {
        b = b.toString(16);
        return 1 == b.length ? "0" + b: b
    }
    function Q(b, c, d) {
        c1 = K(b.substring(1, b.length));
        c2 = K(c.substring(1, c.length));
        return "#" + w(Math.round(c1.j * (1 - d) + c2.j * d)) + w(Math.round(c1.i * (1 - d) + c2.i * d)) + w(Math.round(c1.g * (1 - d) + c2.g * d))
    }
    function H() {
        return Date.now ? Date.now() : (new Date).getTime()
    }
    function L(b, c) {
        b.setTransform(c[0][0], c[1][0], c[0][1], c[1][1], c[0][2], c[1][2])
    }
    function v(b, c) {
        return [[1, 0, b], [0, 1, c]]
    }
    function q(b, c) {
        return [[b[0][0] * c[0][0] + b[0][1] * c[1][0], b[0][0] * c[0][1] + b[0][1] * c[1][1], b[0][0] * c[0][2] + b[0][1] * c[1][2] + b[0][2]], [b[1][0] * c[0][0] + b[1][1] * c[1][0], b[1][0] * c[0][1] + b[1][1] * c[1][1], b[1][0] * c[0][2] + b[1][1] * c[1][2] + b[1][2]]]
    }
    function R(b) {
        var c = b[0][0] * b[1][1] - b[0][1] * b[1][0];
        return [[b[1][1] / c, -b[0][1] / c, (b[0][1] * b[1][2] - b[0][2] * b[1][1]) / c], [ - b[1][0] / c, b[0][0] / c, (b[0][2] * b[1][0] - b[0][0] * b[1][2]) / c]]
    }
    function S(b) {
        return Math.sqrt(b[0][0] * b[0][0] + b[0][1] * b[0][1])
    }
    function E(b, c) {
        return {
            x: c[0][0] * b.x + c[0][1] * b.y + c[0][2],
            y: c[1][0] * b.x + c[1][1] * b.y + c[1][2]
        }
    }
    function F(b, c) {
        var d = E({
            x: b.x,
            y: b.y
        },
        c),
        a = E({
            x: b.x + b.width,
            y: b.y + b.height
        },
        c),
        e = E({
            x: b.x,
            y: b.y + b.height
        },
        c),
        g = E({
            x: b.x + b.width,
            y: b.y
        },
        c),
        f = Math.min(d.x, a.x, e.x, g.x),
        h = Math.min(d.y, a.y, e.y, g.y),
        k = Math.max(d.x, a.x, e.x, g.x),
        d = Math.max(d.y, a.y, e.y, g.y);
        return {
            x: f,
            y: h,
            width: k - f,
            height: d - h
        }
    }
    function T(b, c) {
        var d = v( - b.bbox.D, -b.bbox.F),
        a = Math.pow(b.o / b.scale, c),
        d = q([[a, 0, 0], [0, a, 0]], d),
        a = (b.N - b.G) * c,
        d = q([[Math.cos(a), Math.sin(a), 0], [ - Math.sin(a), Math.cos(a), 0]], d);
        return q(v(b.bbox.D, b.bbox.F), d)
    }
    function U(b, c, d, a, e) {
        radius = 0.1 * Math.min(a, e);
        b.beginPath();
        b.moveTo(c + radius, d);
        b.lineTo(c + a - radius, d);
        b.quadraticCurveTo(c + a, d, c + a, d + radius);
        b.lineTo(c + a, d + e - radius);
        b.quadraticCurveTo(c + a, d + e, c + a - radius, d + e);
        b.lineTo(c + radius, d + e);
        b.quadraticCurveTo(c, d + e, c, d + e - radius);
        b.lineTo(c, d + radius);
        b.quadraticCurveTo(c, d, c + radius, d);
        b.closePath();
        b.fill()
    }
    function M(b, c) {
        for (var d = 0,
        a = 0,
        e = 0; e < c.glyphs.length; e++) {
            var g = c.glyphs[e],
            d = v(g.x - d, g.y - a);
            b.transform(d[0][0], d[1][0], d[0][1], d[1][1], d[0][2], d[1][2]);
            d = b;
            a = g.path;
            d.beginPath();
            for (var f = void 0,
            h = void 0,
            k = 0; k < a.length; k++)"M" == a[k] ? d.moveTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "q" == a[k] ? d.quadraticCurveTo(f + parseFloat(a[++k]), f + parseFloat(a[++k]), f += parseFloat(a[++k]), h = f + parseFloat(a[++k])) : "Q" == a[k] ? d.quadraticCurveTo(parseFloat(a[++k]), parseFloat(a[++k]), f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "c" == a[k] ? d.bezierCurveTo(f + parseFloat(a[++k]), h + parseFloat(a[++k]), f + parseFloat(a[++k]), h + parseFloat(a[++k]), f += parseFloat(a[++k]), h += parseFloat(a[++k])) : "C" == a[k] ? d.bezierCurveTo(a[++k], a[++k], a[++k], a[++k], f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "l" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h += parseFloat(a[++k])) : "h" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h) : "H" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h) : "v" == a[k] ? d.lineTo(f, h += parseFloat(a[++k])) : "V" == a[k] ? d.lineTo(f, h = parseFloat(a[++k])) : "L" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "Z" != a[k] && "z" != a[k] || d.closePath();
            d.closePath();
            d.fill();
            d = g.x;
            a = g.y
        }
    }
    function V() {
        var b = {},
        c;
        for (c in e.outlines) b[c] = e.outlines[c].split(" ");
        for (c = 0; c < r.length; ++c) for (var d = 0; d < r[c].glyphs.length; ++d) r[c].glyphs[d].path = b[r[c].glyphs[d].glyph];
        void 0 != l.backgroundColor && (m.fillStyle = s(l.backgroundColor, l.J), m.fillRect(0, 0, h.width, h.height));
        b = e.a;
        c = Math.min(0.95 * h.width / b.width, 0.95 * h.height / b.height);
        d = q([[c, 0, 0], [0, c, 0]], v( - b.x + (h.width / c - b.width) / 2, -b.y + (h.height / c - b.height) / 2));
        for (c = 0; c < r.length; c++) {
            var a = r[c];
            m.fillStyle = a.fill;
            a.h = q(d, a.matrix);
            L(m, a.h);
            M(m, a);
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y + a.bbox.height;
            a.bbox.D = a.bbox.x + a.bbox.width / 2;
            a.bbox.F = a.bbox.y + a.bbox.height / 2;
            a.B = R(a.h);
            a.d = 0;
            a.scale = S(a.matrix);
            a.o = l.zoom ? Math.max(1.1 * a.scale, 0.15 * Math.sqrt(b.width * b.height / (a.bbox.width * a.bbox.height))) : a.scale;
            a.o = Math.min(a.o, Math.min(b.width / a.bbox.width, b.height / a.bbox.height));
            a.o = Math.max(a.scale, a.o);
            var f = a.matrix,
            g = S(f),
            n = f[0][0] / g,
            f = f[0][1] / g,
            g = void 0,
            g = 1 < f ? 90 : -1 > f ? -90 : 180 * Math.asin(f) / Math.PI;
            0 > n && (g = 180 * (0 > f ? -1 : 1) - g);
            a.G = Math.round(g) * Math.PI / 180;
            a.N = l.rotate ? 0 : a.G;
            a.m = 0;
            a.n = 0;
            a.e = F(a.bbox, q(a.h, T(a, 1)));
            0 > a.e.x && (a.m = -a.e.x);
            a.e.x + a.e.width > h.width && (a.m = -(a.e.x + a.e.width) + h.width);
            0 > a.e.y && (a.n = -a.e.y);
            a.e.y + a.e.height > h.height && (a.n = -(a.e.y + a.e.height) + h.height);
            a.L = Q(l.backgroundColor, a.fill, 0.2);
            x && a.fill && (attribution.backgroundColor = attribution.backgroundColor || {
                j: 0,
                i: 0,
                g: 0
            },
            a = K(a.fill), attribution.backgroundColor.j += a.j, attribution.backgroundColor.i += a.i, attribution.backgroundColor.g += a.g)
        }
        l.A && (l.r = s(l.A, 1), l.r = l.r.substring(0, l.r.length - 7));
        P = m.getImageData(0, 0, h.width, h.height);
        if (x) {
            attribution.backgroundColor.j /= r.length;
            attribution.backgroundColor.i /= r.length;
            attribution.backgroundColor.g /= r.length;
            attribution.backgroundColor = "#" + (65536 * attribution.backgroundColor.j + 256 * attribution.backgroundColor.i + attribution.backgroundColor.g).toString(16);
            attribution.backgroundColor = s(attribution.backgroundColor, 0.8);
            attribution.t = l.backgroundColor;
            for (c = 0; c < attribution.data.tags.length; c++) a = attribution.data.tags[c],
            b = F(a.bbox, a.matrix),
            attribution.a = attribution.a ? {
                x: Math.min(b.x, attribution.a.x),
                y: Math.min(b.y, attribution.a.y),
                b: Math.max(b.x + b.width, attribution.a.b),
                c: Math.max(b.y + b.height, attribution.a.c)
            }: {
                x: b.x,
                y: b.y,
                b: b.x + b.width,
                c: b.y + b.height
            };
            attribution.a.width = attribution.a.b - attribution.a.x;
            attribution.a.height = attribution.a.c - attribution.a.y;
            c = Math.min(h.width / attribution.a.width, h.height / attribution.a.height);
            c = Math.min(c, Math.sqrt(0.02 * h.width * h.height / (attribution.a.width * attribution.a.height)));
            a = attribution.data.tags[0];
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y + a.bbox.height;
            a.h = q(q([[c, 0, 0], [0, c, 0]], v( - attribution.a.x + (h.width / c - 1 * attribution.a.width), -attribution.a.y + (h.height / c - 0 * attribution.a.height))), a.matrix);
            a.m = 0;
            a.n = -attribution.a.height * c;
            a.B = R(q(v(1 * a.m, 1 * a.n), a.h));
            for (d = 0; d < a.glyphs.length; ++d) a.glyphs[d].path = attribution.data.outlines[a.glyphs[d].glyph].split(" ")
        }
    }
    function W() {
        if (p && 0 < p.length || x && attribution.q) {
            for (var b = p.slice(), c = 0; c < t.length; c++) - 1 == b.indexOf(t[c]) && b.push(t[c]);
            g && m.putImageData(P, 0, 0, g.x - 2, g.y - 2, g.width + 4, g.height + 4);
            g = void 0;
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                m.fillStyle = d.L;
                L(m, d.h);
                M(m, d)
            }
            for (var a = H(), c = 0; c < b.length; c++) {
                var d = b[c],
                e = (a - d.d) / (1E3 * l.k),
                e = 1 < e ? 1 : e;
                if (0.5 < e && d != z && d.f == D) {
                    var f = t.indexOf(d); - 1 != f && (t.splice(f, 1), -1 == p.indexOf(d) && p.push(d), -1 == b.indexOf(d) && b.push(d));
                    d.f = I;
                    e = 1 - e;
                    d.d = a - 1E3 * e * l.k
                }
                d.f == I && (e = 1 - e);
                0 < e ? (f = q(d.h, T(d, e)), f = q(v(e * d.m, e * d.n), f)) : f = d.h;
                L(m, f);
                g ? (f = F(d.bbox, f), g = {
                    x: Math.min(g.x, f.x),
                    y: Math.min(g.y, f.y),
                    b: Math.max(g.b, f.x + f.width),
                    c: Math.max(g.c, f.y + f.height)
                },
                g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height);
                l.A && (m.fillStyle = l.r + (e * l.K).toFixed(4) + ")", U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height));
                m.fillStyle = l.t ? Q(d.fill, l.t, e) : d.fill;
                M(m, d);
                a > d.d + 1E3 * l.k && (b.splice(c, 1), c < p.length && p.splice(c, 1), c--, d.f == D && -1 == t.indexOf(d) && t.push(d))
            }
            x && (attribution.q || g) && (d = attribution.data.tags[0], e = (a - attribution.d) / attribution.k, e = 1 < e ? 1 : e, 1 <= e && (attribution.q = !1), attribution.f == I && (e = 1 - e), f = q(v(e * d.m, e * d.n), d.h), g ? (f = F(d.bbox, f), g = {
                x: Math.min(g.x, f.x),
                y: Math.min(g.y, f.y),
                b: Math.max(g.b, f.x + f.width),
                c: Math.max(g.c, f.y + f.height)
            },
            g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height), m.fillStyle = attribution.backgroundColor, L(m, q(v(e * d.m, e * d.n), d.h)), U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height), m.fillStyle = attribution.t, M(m, d))
        }
        N && N.request(W)
    }
    if (!f) if (e) if (f = document.createElement("canvas"), f.getContext && f.getContext("2d")) {
        for (var A = 0; document.getElementById(f = "tagul_embed_cloud_" + A);) A++;
        document.writeln('<a id="' + f + '" style="width: 100%; height: 100%">');
        document.writeln('<canvas style="width: 100%; height: 100%"></canvas>');
        document.writeln("</a>");
        var A = document.getElementsByTagName("head")[0],
        J = document.createElement("style"),
        X = document.createTextNode("#" + f + " {outline: 0; border: 0; background: none; margin: 0; padding: 0;}\n#" + f + ":hover {border: 0;}\n");
        J.type = "text/css";
        J.styleSheet ? J.styleSheet.cssText = X.nodeValue: J.appendChild(X);
        A.appendChild(J)
    } else {
        document.writeln('<a href="http://www.atime.org.cn" style="width: 100%; height: 100%">');
        document.writeln('<img src="http://www.atime.org.cn/bootstrap/textcloud/please_update_browser.png" style="width: 100%; height: auto"/>');
        document.writeln("</a>");
        return
    } else {
        document.writeln("<div>Sorry! Cloud does not exist!</div>");
        return
    }
    var x = !1;
    e.a = {
        x: e.viewBox.x,
        y: e.viewBox.y,
        width: e.viewBox.width,
        height: e.viewBox.height
    };
    A = {};
    u = "boolean" == typeof u ? u: !0;
    var G, g, r = e.tags,
    P, z = null,
    p = [],
    t = [],
    D = 0,
    I = 1;
    A.cleanUp = function() {
        m = B = null;
        h.onmousemove = null;
        h.onmouseout = null;
        l = N = t = p = z = P = g = h = window.onresize = null
    };
    var B = document.getElementById(f),
    h = B.getElementsByTagName("canvas")[0];
    window.onresize = function() {
        y();
        V()
    };
    y();
    var m = h.getContext("2d");
    m.clearRect(0, 0, h.width, h.height);
    x && (h.onmouseover = C);
    h.onmousemove = function(b) {
        var c = h,
        d = 0,
        a = 0;
        if (void 0 !== c.offsetParent) {
            do d += c.offsetLeft,
            a += c.offsetTop;
            while (c = c.offsetParent)
        }
        d += Y + Z + $;
        a += aa + ba + ca;
        b = {
            x: (b.pageX - d) * G,
            y: (b.pageY - a) * G
        };
        if (x && (c = attribution.data.tags[0], d = E(b, c.B), c = c.bbox, !(d.x < c.x || d.x > c.b || d.y < c.y || d.y > c.c))) {
            h.style.cursor = "pointer";
            B.href = attribution.url;
            B.target = "_blank";
            z = null;
            return
        }
        for (c = r.length - 1; 0 <= c && (d = E(b, r[c].B), a = r[c].bbox, d.x < a.x || d.x > a.b || d.y < a.y || d.y > a.c); c--);
        c = 0 <= c ? r[c] : null;
        null != c ? h.style.cursor = "pointer": (h.style.cursor = "auto", B.removeAttribute("href"));
        if (c != z) {
            for (b = 0; b < t.length; b++) - 1 == p.indexOf(t[b]) && p.push(t[b]);
            t = []
        }
        c != z && null != c && (B.href = c.url ? c.url: "javascript:void(0);", B.target = l.M || O ? "_blank": "_self", null != c && c.f != D && (c.f = D, b = H(), c.d = b - Math.max(1E3 * l.k - (b - c.d), 0), -1 == p.indexOf(c) && p.push(c)));
        z = c
    };
    h.onmouseout = function() {
        for (var b = 0; b < p.length; b++) {
            var c = p[b];
            if (c.f == D) {
                c.f = I;
                var d = H();
                c.d = d - Math.max(1E3 * l.k - (d - c.d), 0);
                z = null
            }
        }
        x && (attribution.f = I, d = H(), attribution.d = d - Math.max(attribution.k - (d - attribution.d), 0), attribution.q = !0)
    };
    var N = N || new window.AnimationFrame(60),
    Y = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingLeft, 10) || 0,
    aa = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingTop, 10) || 0,
    Z = parseInt(document.defaultView.getComputedStyle(h, void 0).borderLeftWidth, 10) || 0,
    ba = parseInt(document.defaultView.getComputedStyle(h, void 0).borderTopWidth, 10) || 0;
    f = document.body.parentNode;
    ca = f.offsetTop;
    $ = f.offsetLeft;
    void 0 === e.styleOptions && (e.styleOptions = {});
    var l = {
        backgroundColor: e.styleOptions.backgroundColor ? "#" + e.styleOptions.backgroundColor: "#FFFFFF",
        J: n(e.styleOptions.backgroundColorAlpha) ? e.styleOptions.backgroundColorAlpha: 1,
        k: n(e.styleOptions.animationSpeed) ? e.styleOptions.animationSpeed: 0.3,
        t: e.styleOptions.textColor ? "#" + e.styleOptions.textColor: void 0,
        S: n(e.styleOptions.textAlpha) ? e.styleOptions.textAlpha: 1,
        A: e.styleOptions.boxColor ? "#" + e.styleOptions.boxColor: void 0,
        K: n(e.styleOptions.boxAlpha) ? e.styleOptions.boxAlpha: 0.8,
        zoom: !0 == e.styleOptions.zoom,
        rotate: !0 == e.styleOptions.rotate,
        M: !0 == e.styleOptions.openLinksInNewWindow
    },
    Y,
    aa,
    Z,
    ba,
    ca,
    $;
    V();
    u && W();
    return A
};
TagulDisplayCloud({
    "outlines": {
        "0.1035": "M 526 -333 Q 791 -215 1098 -70 L 1550 -461 L 430 -461 L 430 -609 L 527 -857 L 50 -857 L 50 -1009 L 587 -1009 L 695 -1283 L 172 -1283 L 172 -1435 L 755 -1435 L 860 -1701 L 1042 -1701 L 937 -1435 L 1884 -1435 L 1884 -1283 L 877 -1283 L 769 -1009 L 2012 -1009 L 2012 -857 L 709 -857 L 612 -611 L 1778 -611 L 1778 -455 L 1246 0 Q 1380 64 1522 133 L 1424 285 Q 922 21 442 -199 L 526 -333 Z ",
        "0.51": "M 1601 0 L 1601 -1026 Q 1601 -1153 1616 -1331 L 1611 -1331 Q 1585 -1219 1565 -1175 L 1054 0 L 943 0 L 433 -1166 Q 415 -1206 387 -1331 L 381 -1331 Q 391 -1223 391 -1017 L 391 0 L 200 0 L 200 -1549 L 471 -1549 L 928 -487 Q 980 -365 997 -297 L 1004 -297 Q 1056 -440 1077 -491 L 1542 -1549 L 1800 -1549 L 1800 0 L 1601 0 Z ",
        "0.58": "M 1136 -1371 L 689 -1371 L 689 0 L 488 0 L 488 -1371 L 43 -1371 L 43 -1549 L 1136 -1549 L 1136 -1371 Z ",
        "0.2844": "M 624 -1415 L 1268 -1415 Q 1207 -1527 1126 -1635 L 1254 -1713 Q 1344 -1601 1416 -1485 L 1299 -1415 L 1968 -1415 L 1968 -1269 L 1580 -1269 L 1580 -307 Q 1580 -65 1336 -51 Q 1244 -47 1094 -47 Q 1084 -125 1064 -213 Q 1184 -203 1298 -203 Q 1436 -203 1436 -359 L 1436 -1269 L 1142 -1269 L 1142 -895 Q 1142 -273 780 5 Q 730 -63 676 -119 Q 998 -375 998 -893 L 998 -1269 L 624 -1269 L 624 -1415 M 929 73 L 1332 81 L 2022 61 Q 1988 141 1956 215 L 1331 225 L 884 215 Q 504 205 348 -15 Q 258 69 114 241 L 28 71 Q 179 -63 276 -147 L 276 -845 L 48 -845 L 48 -991 L 424 -991 L 424 -127 Q 569 64 929 73 M 1662 -913 L 1804 -977 Q 1938 -689 2016 -473 L 1870 -411 Q 1776 -683 1662 -913 M 726 -975 L 872 -923 Q 772 -685 644 -425 Q 634 -429 496 -489 Q 626 -719 726 -975 M 246 -1687 Q 410 -1469 530 -1283 L 392 -1185 Q 272 -1389 118 -1603 L 246 -1687 Z ",
        "0.39": "M 1417 0 L 1196 0 L 1038 -424 L 393 -424 L 244 0 L 23 0 L 613 -1549 L 827 -1549 L 1417 0 M 976 -599 L 742 -1243 Q 731 -1274 718 -1351 L 713 -1351 Q 702 -1281 688 -1243 L 456 -599 L 976 -599 Z ",
        "0.1512": "M 60 -897 L 1996 -897 L 1996 -753 L 1688 -753 L 1688 7 Q 1688 257 1420 257 Q 1308 257 1132 253 Q 1122 181 1100 91 Q 1246 105 1368 107 Q 1536 113 1536 -25 L 1536 -753 L 60 -753 L 60 -897 M 296 -579 L 1146 -579 L 1146 -27 L 444 -27 L 444 61 L 296 61 L 296 -579 M 144 -1083 Q 706 -1149 872 -1343 L 182 -1343 L 182 -1487 L 948 -1487 Q 974 -1573 976 -1691 L 1126 -1691 Q 1124 -1573 1104 -1487 L 1886 -1487 L 1886 -1343 L 1052 -1343 Q 1044 -1329 1028 -1305 Q 1430 -1193 1804 -1073 L 1734 -929 Q 1326 -1083 928 -1195 Q 716 -1017 230 -937 Q 194 -1013 144 -1083 M 998 -167 L 998 -439 L 444 -439 L 444 -167 L 998 -167 Z ",
        "0.1259": "M 776 -1679 L 750 -1637 Q 1004 -1403 1238 -1163 L 1128 -1039 Q 914 -1277 672 -1509 Q 476 -1199 268 -991 L 1090 -991 Q 1078 -713 1070 -601 Q 1060 -303 798 -303 Q 692 -303 538 -309 Q 526 -397 510 -469 Q 644 -447 766 -445 Q 910 -443 920 -627 Q 926 -723 932 -851 L 402 -851 L 402 -49 Q 402 63 522 63 L 850 63 Q 1008 63 1028 -41 Q 1052 -137 1064 -281 Q 1142 -249 1222 -223 Q 1202 -91 1172 21 Q 1122 207 890 207 L 492 207 Q 246 207 246 -37 L 246 -967 Q 182 -907 120 -857 Q 60 -955 28 -1001 Q 356 -1251 592 -1679 L 776 -1679 M 1734 -1665 L 1894 -1665 L 1894 -3 Q 1894 241 1652 243 Q 1568 243 1338 241 Q 1328 149 1306 59 Q 1518 77 1604 77 Q 1734 77 1734 -51 L 1734 -1665 M 1470 -255 L 1316 -255 L 1316 -1487 L 1470 -1487 L 1470 -255 Z ",
        "0.47": "M 549 -1380 L 400 -1380 L 400 -169 L 549 -169 L 549 0 L 51 0 L 51 -169 L 200 -169 L 200 -1380 L 51 -1380 L 51 -1549 L 549 -1549 L 549 -1380 Z ",
        "0.2152": "M 520 -5 L 1192 -5 L 1192 -573 L 672 -573 L 672 -725 L 1192 -725 L 1192 -1209 L 616 -1209 L 616 -1361 L 1254 -1361 Q 1160 -1510 1062 -1633 L 1194 -1717 Q 1328 -1561 1406 -1441 L 1281 -1361 L 1952 -1361 L 1952 -1209 L 1360 -1209 L 1360 -725 L 1880 -725 L 1880 -573 L 1360 -573 L 1360 -5 L 2008 -5 L 2008 147 L 520 147 L 520 -5 M 306 -581 Q 388 -545 464 -515 Q 354 -163 234 253 L 62 193 Q 188 -149 306 -581 M 202 -1675 Q 396 -1529 548 -1383 Q 480 -1315 428 -1261 Q 320 -1375 100 -1565 L 202 -1675 M 126 -1157 Q 270 -1057 480 -885 Q 406 -801 362 -755 Q 152 -947 26 -1043 L 126 -1157 Z ",
        "0.2861": "M 776 -701 L 1794 -701 L 1794 -59 L 1640 -59 L 1640 -141 L 930 -141 L 930 -59 L 776 -59 L 776 -701 M 600 -1009 L 1234 -1009 L 1234 -1281 L 894 -1281 Q 840 -1153 778 -1047 Q 726 -1081 640 -1119 Q 786 -1355 858 -1645 L 1010 -1611 Q 980 -1509 947 -1417 L 1234 -1417 L 1234 -1701 L 1390 -1701 L 1390 -1417 L 1902 -1417 L 1902 -1281 L 1390 -1281 L 1390 -1009 L 2000 -1009 L 2000 -873 L 600 -873 L 600 -1009 M 852 63 L 1350 71 L 2016 55 Q 1994 121 1960 213 L 1298 217 L 822 205 Q 482 201 346 -29 Q 264 47 106 239 L 24 73 Q 201 -98 280 -172 L 280 -845 L 42 -845 L 42 -993 L 434 -993 L 434 -138 Q 557 61 852 63 M 1640 -565 L 930 -565 L 930 -277 L 1640 -277 L 1640 -565 M 274 -1665 Q 376 -1541 554 -1287 L 412 -1187 Q 250 -1441 146 -1579 L 274 -1665 Z ",
        "0.43": "M 1033 0 L 200 0 L 200 -1549 L 998 -1549 L 998 -1371 L 400 -1371 L 400 -875 L 954 -875 L 954 -698 L 400 -698 L 400 -177 L 1033 -177 L 1033 0 Z "
    },
    "styleOptions": {
        "textColor": "ffffff",
        "openLinksInNewWindow": false,
        "backgroundColorAlpha": 0,
        "backgroundColor": "ffffff",
        "animationSpeed": 0.18,
        "boxColor": "000000",
        "rotate": true,
        "boxAlpha": 0.7,
        "textAlpha": 1,
        "zoom": true
    },
    "viewBox": {
        "y": 2.3758,
        "height": 217.3535,
        "x": 0.2486,
        "width": 178.4299
    },
    "tags": [{
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00985227, 0, 24.43440909], [0, 0.00985227, 160.09672727]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00886705, 0, 51.96638249], [0, 0.00886705, 180.5436847]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00797565, 0, 60.8833635], [0, 0.00797565, 127.81306494]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00886705, 0, 63.13363413], [0, 0.00886705, 201.09491652]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00601271, 0, 59.67323935], [0, 0.00601271, 108.41418527]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00666995, 0, 109.87562018], [0, 0.00666995, 141.633375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0042224, 0, 57.34216378], [0, 0.0042224, 138.38574026]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00661835, 0, 106.83940301], [0, 0.00661835, 174.77395822]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00328409, 0, 81.73905308], [0, 0.00328409, 207.32890909]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00573529, 0, 106.77683824], [0, 0.00573529, 185.41930419]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00281494, 0, 70.69963265], [0, 0.00281494, 95.94049351]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00545723, 0, 32.02636361], [0, 0.00545723, 190.419125]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00271002, 0, 21.43962406], [0, 0.00271002, 169.05000014]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00424451, 0, 24.91343562], [0, 0.00424451, 177.324875]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00234578, 0, 87.36729404], [0, 0.00234578, 213.28707792]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00363815, 0, 41.14356508], [0, 0.00363815, 197.29775]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00234578, 0, 76.65835821], [0, 0.00234578, 185.66207792]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0037598, 0, 89.05939951], [0, 0.0037598, 69.74453644]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00187662, 0, 112.01563467], [0, 0.00187662, 192.50866234]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00363235, 0, 90.00158088], [0, 0.00363235, 76.39094401]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00187662, 0, 84.86355734], [0, 0.00187662, 165.98866234]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00347759, 0, 148.48726541], [0, 0.00347759, 111.08036032]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00187662, 0, 59.87962982], [0, 0.00187662, 165.98866234]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00331373, 0, 92.63328431], [0, 0.00331373, 50.02323818]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00183232, 0, 12.47775917], [0, 0.00183232, 141.51416822]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00336835, 0, 93.57127801], [0, 0.00336835, 39.49755487]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00184589, 0, 91.95420554], [0, 0.00184589, 43.31722667]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00339566, 0, 91.27777486], [0, 0.00339566, 60.88487113]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00184589, 0, 9.07920554], [0, 0.00184589, 130.58701512]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00345028, 0, 60.17076856], [0, 0.00345028, 77.40532346]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00174183, 0, 61.10228341], [0, 0.00174183, 69.82956425]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00329552, 0, 151.80645308], [0, 0.00329552, 104.25916307]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0017554, 0, 119.58372977], [0, 0.0017554, 82.96933421]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00321359, 0, 121.11696254], [0, 0.00321359, 78.14579654]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0017554, 0, 11.29372977], [0, 0.0017554, 137.27834232]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00329552, 0, 119.76145308], [0, 0.00329552, 89.62795412]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00165135, 0, 94.25680765], [0, 0.00165135, 33.13910827]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00303179, 0, 90.95884843], [0, 0.00303179, 82.460625]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00165135, 0, 8.06680765], [0, 0.00165135, 126.18126685]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00313165, 0, 60.59247199], [0, 0.00313165, 87.97456957]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00165135, 0, 60.00180765], [0, 0.00165135, 81.91725458]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00308613, 0, 123.16414391], [0, 0.00308613, 65.79422041]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00166492, 0, 91.96325401], [0, 0.00166492, 54.10703843]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00308613, 0, 96.64414391], [0, 0.00308613, 24.62019444]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00166492, 0, 89.75325401], [0, 0.00166492, 88.69857391]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00303179, 0, 7.276831], [0, 0.00303179, 122.240625]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 117.64997635], [0, 0.00140747, 188.30524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00303179, 0, 5.3533807], [0, 0.00303179, 115.610625]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 120.49409576], [0, 0.00140747, 113.16524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00311345, 0, 121.97564076], [0, 0.00311345, 71.69957665]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 117.83466112], [0, 0.00140747, 97.69524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00305882, 0, 62.47264706], [0, 0.00305882, 65.30839491]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 101.32327762], [0, 0.00140747, 113.16524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00293137, 0, 156.23482843], [0, 0.00293137, 96.22282634]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 95.0524148], [0, 0.00140747, 217.03524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00293137, 0, 127.50482843], [0, 0.00293137, 32.69978077]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 79.57304832], [0, 0.00140747, 113.16524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00293137, 0, 126.39982843], [0, 0.00293137, 51.08563689]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 77.34518366], [0, 0.00140747, 143.00024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00276751, 0, 68.33584734], [0, 0.00276751, 27.10967266]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 62.09587567], [0, 0.00140747, 203.77524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00295868, 0, 127.42132528], [0, 0.00295868, 43.69650965]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 29.91869477], [0, 0.00140747, 180.57024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00290406, 0, 125.37833158], [0, 0.00290406, 58.8734696]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 114.43038782], [0, 0.00140747, 198.25024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00295868, 0, 119.68632528], [0, 0.00295868, 94.6069755]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 62.02878932], [0, 0.00140747, 113.16524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00290406, 0, 98.85833158], [0, 0.00290406, 15.50445422]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00157443, 0, 95.28277825], [0, 0.00157443, 28.97316325]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00295868, 0, 67.75132528], [0, 0.00295868, 21.60663993]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 64.89408037], [0, 0.00140747, 51.28524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00293137, 0, 64.51982843], [0, 0.00293137, 47.90400388]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 59.51734897], [0, 0.00140747, 143.00024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00287675, 0, 66.89683473], [0, 0.00287675, 35.55148599]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 43.30693124], [0, 0.00140747, 200.46024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00293137, 0, 65.62482843], [0, 0.00293137, 42.23263766]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 159.89936086], [0, 0.00140747, 86.64524675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00290406, 0, 63.49833158], [0, 0.00290406, 58.46417369]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00148395, 0, 97.49730249], [0, 0.00148395, 19.1288667]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00277661, 0, 128.53051296], [0, 0.00277661, 38.17706476]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 67.09149474], [0, 0.00140747, 30.29024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00277661, 0, 3.66551296], [0, 0.00277661, 107.70068627]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140747, 0, 14.1731705], [0, 0.00140747, 145.21024675]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00242544, 0, 161.87216492], [0, 0.00242544, 82.5435]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00139347, 0, 158.27682673], [0, 0.00139347, 90.32944734]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00243067, 0, 163.29071954], [0, 0.00243067, 71.58456986]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00140704, 0, 139.40827309], [0, 0.00140704, 145.2095119]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00256723, 0, 162.87320378], [0, 0.00256723, 77.89335243]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00130298, 0, 99.71635097], [0, 0.00130298, 10.07966349]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00242544, 0, 1.0973452], [0, 0.00242544, 96.9085]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00131655, 0, 2.39279733], [0, 0.00131655, 101.98440863]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0022577, 0, 164.92457283], [0, 0.0022577, 67.00827405]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00122607, 0, 130.57732157], [0, 0.00122607, 26.74334228]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00207563, 0, 154.9837605], [0, 0.00207563, 115.56929855]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00113558, 0, 18.97684581], [0, 0.00113558, 162.71727626]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 147.85989097], [0, 0.00181908, 135.666375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00113558, 0, 0.19184581], [0, 0.00113558, 91.94206172]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 103.24426926], [0, 0.00181908, 7.486375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 167.12377753], [0, 0.00093831, 73.60183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 61.11879156], [0, 0.00181908, 91.466375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 160.14789659], [0, 0.00093831, 97.91183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 58.86173251], [0, 0.00181908, 96.991375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 127.96367796], [0, 0.00093831, 164.21183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 16.55294419], [0, 0.00181908, 155.556375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 132.85107064], [0, 0.00093831, 45.97683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00077381, 0, 81.06157738], [0, 0.00077381, 197.32730446]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 130.83685254], [0, 0.00093831, 53.71183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 147.58913259], [0, 0.00181908, 140.086375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00038456, 0, 70.01014699], [0, 0.00038456, 175.26745684]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 120.74759297], [0, 0.00181908, 201.966375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 123.62494574], [0, 0.00093831, 195.15183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00046429, 0, 106.31794643], [0, 0.00046429, 190.86919777]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 100.41626406], [0, 0.00093831, 62.55183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 72.43387208], [0, 0.00181908, 16.326375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 95.26708819], [0, 0.00023074, 172.8287607]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 54.4238689], [0, 0.00181908, 130.141375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 100.39943539], [0, 0.00093831, 144.32183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00030952, 0, 65.35363095], [0, 0.00030952, 187.36118161]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 97.42713647], [0, 0.00093831, 84.65183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 46.72352582], [0, 0.00181908, 142.296375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 42.22708819], [0, 0.00023074, 155.50803644]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00181908, 0, 16.99546935], [0, 0.00181908, 158.871375]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 96.84357146], [0, 0.00093831, 219.46183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00030952, 0, 123.91863095], [0, 0.00030952, 138.85739429]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 96.50067371], [0, 0.00093831, 142.11183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0017388, 0, 144.9636327], [0, 0.0017388, 148.87653737]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 58.80208819], [0, 0.00023074, 114.09248891]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0017388, 0, 141.6486327], [0, 0.0017388, 159.95730168]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 63.04328945], [0, 0.00093831, 185.20683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00077381, 0, 81.06157738], [0, 0.00077381, 193.76475201]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 48.1855216], [0, 0.00093831, 202.88683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0017388, 0, 132.8086327], [0, 0.0017388, 23.99621464]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00015382, 0, 79.71805879], [0, 0.00015382, 149.49598884]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.0017388, 0, 106.2886327], [0, 0.0017388, 98.00755456]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 18.38984232], [0, 0.00093831, 133.27183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00046429, 0, 75.37794643], [0, 0.00046429, 195.73338724]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 17.49290996], [0, 0.00093831, 149.84683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00155672, 0, 144.96782038], [0, 0.00155672, 151.99807909]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 5.99592585], [0, 0.00093831, 99.01683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00155672, 0, 48.83282038], [0, 0.00155672, 138.71943168]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 10.02341535], [0, 0.00093831, 110.06683117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00061905, 0, 63.3022619], [0, 0.00061905, 171.87890038]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 142.61781686], [0, 0.00093831, 113.38183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00152941, 0, 35.65632353], [0, 0.00152941, 145.51115562]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0005791, 0, 58.86754487], [0, 0.0005791, 158.0470525]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00134734, 0, 55.5505112], [0, 0.00134734, 125.33294348]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 121.77542646], [0, 0.00093831, 115.59183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00046429, 0, 106.31794643], [0, 0.00046429, 198.99327428]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00093831, 0, 58.86991461], [0, 0.00093831, 93.49183117]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00137465, 0, 100.77200805], [0, 0.00137465, 178.56292529]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 88.63708819], [0, 0.00023074, 196.25104515]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 170.08167676], [0, 0.00121272, 62.81925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0008777, 0, 150.40186489], [0, 0.0008777, 132.07891134]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00046429, 0, 77.58794643], [0, 0.00046429, 171.37599272]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0008777, 0, 140.45686489], [0, 0.0008777, 164.20064424]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 103.09297622], [0, 0.00121272, 4.25425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00015382, 0, 58.72305879], [0, 0.00015382, 180.59679829]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 67.29315865], [0, 0.00121272, 183.26425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0008777, 0, 33.27186489], [0, 0.0008777, 149.84296454]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00077381, 0, 70.01157738], [0, 0.00077381, 174.13450524]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.0008777, 0, 14.48686489], [0, 0.0008777, 147.63334893]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 159.02602205], [0, 0.00121272, 120.27925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00038456, 0, 40.17514699], [0, 0.00038456, 162.49620223]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 145.52001255], [0, 0.00121272, 154.53425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00078722, 0, 89.63138913], [0, 0.00078722, 62.42625928]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00098319, 0, 109.70388655], [0, 0.00098319, 163.68681183]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00078722, 0, 58.69138913], [0, 0.00078722, 145.40099418]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 126.16378507], [0, 0.00121272, 130.22425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00030765, 0, 103.08111759], [0, 0.00030765, 156.62200536]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 117.65010911], [0, 0.00121272, 144.58925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00078722, 0, 14.49138913], [0, 0.00078722, 151.94326978]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00098319, 0, 58.87388655], [0, 0.00098319, 150.70587082]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00069673, 0, 88.53091336], [0, 0.00069673, 115.43013694]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 73.66013422], [0, 0.00121272, 90.44425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00048862, 0, 50.03206911], [0, 0.00048862, 151.14063035]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 33.31637824], [0, 0.00121272, 193.20925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00069673, 0, 25.54591336], [0, 0.00069673, 182.73920344]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00098319, 0, 50.03388655], [0, 0.00098319, 156.84916361]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 159.2554376], [0, 0.00060625, 117.25228228]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00119258, 0, 122.87619573], [0, 0.00119258, 204.47074751]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00015382, 0, 142.70305879], [0, 0.00015382, 141.68669575]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 155.96448269], [0, 0.00121272, 126.90925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 138.2604376], [0, 0.00060625, 179.2915208]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00030952, 0, 134.96863095], [0, 0.00030952, 177.01334344]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 136.0504376], [0, 0.00060625, 115.51488512]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 119.48615011], [0, 0.00121272, 164.47925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 120.68208819], [0, 0.00023074, 166.90569335]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 116.19056762], [0, 0.00121272, 210.88925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 100.6904376], [0, 0.00060625, 170.52609494]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00046429, 0, 95.26794643], [0, 0.00046429, 175.71152142]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 95.1654376], [0, 0.00060625, 188.16029367]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 69.76268665], [0, 0.00121272, 115.85925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00023074, 0, 58.80208819], [0, 0.00023074, 108.41350116]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 58.7359481], [0, 0.00121272, 156.74425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 49.8604376], [0, 0.00060625, 135.56631806]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00030952, 0, 139.38863095], [0, 0.00030952, 166.46019937]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00060625, 0, 48.7554376], [0, 0.00060625, 149.50651314]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 48.7664278], [0, 0.00121272, 158.95425]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1035"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2152"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1259"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2861"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1512"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2844"
        }],
        "matrix": [[0.00030765, 0, 122.97111759], [0, 0.00030765, 158.29869458]],
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        },
        "fill": "#4b3e58",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "url": "http://www.atime.org.cn"
    },
    {
        "shapeColor": "251f1a",
        "xheight": 1106,
        "parentId": 1,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.39"
        },
        {
            "y": 0,
            "x": 1282,
            "glyph": "0.58"
        },
        {
            "y": 0,
            "x": 2456,
            "glyph": "0.47"
        },
        {
            "y": 0,
            "x": 3058,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 5059,
            "glyph": "0.43"
        }],
        "matrix": [[0.00121272, 0, 10.12583663], [0, 0.00121272, 133.53925]],
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        },
        "fill": "#4b3e58",
        "text": "ATIME",
        "url": "http://www.atime.org.cn"
    }],
    "meta": {
        "browser": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.154 Safari/537.36 LBBROWSER",
        "version": 2.64
    }
});