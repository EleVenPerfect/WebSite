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
        "0.1513": "M 60 -897 L 1996 -897 L 1996 -753 L 1688 -753 L 1688 7 Q 1688 257 1420 257 Q 1308 257 1132 253 Q 1122 181 1100 91 Q 1246 105 1368 107 Q 1536 113 1536 -25 L 1536 -753 L 60 -753 L 60 -897 M 296 -579 L 1146 -579 L 1146 -27 L 444 -27 L 444 61 L 296 61 L 296 -579 M 144 -1083 Q 706 -1149 872 -1343 L 182 -1343 L 182 -1487 L 948 -1487 Q 974 -1573 976 -1691 L 1126 -1691 Q 1124 -1573 1104 -1487 L 1886 -1487 L 1886 -1343 L 1052 -1343 Q 1044 -1329 1028 -1305 Q 1430 -1193 1804 -1073 L 1734 -929 Q 1326 -1083 928 -1195 Q 716 -1017 230 -937 Q 194 -1013 144 -1083 M 998 -167 L 998 -439 L 444 -439 L 444 -167 L 998 -167 Z ",
        "0.51": "M 1601 0 L 1601 -1026 Q 1601 -1153 1616 -1331 L 1611 -1331 Q 1585 -1219 1565 -1175 L 1054 0 L 943 0 L 433 -1166 Q 415 -1206 387 -1331 L 381 -1331 Q 391 -1223 391 -1017 L 391 0 L 200 0 L 200 -1549 L 471 -1549 L 928 -487 Q 980 -365 997 -297 L 1004 -297 Q 1056 -440 1077 -491 L 1542 -1549 L 1800 -1549 L 1800 0 L 1601 0 Z ",
        "0.57": "M 128 -291 Q 199 -229 318 -189 Q 437 -149 544 -149 Q 870 -149 870 -381 Q 870 -446 835 -498 Q 800 -550 739 -590 Q 678 -630 510 -713 Q 277 -829 203 -928.5 Q 129 -1028 129 -1156 Q 129 -1349 284 -1462 Q 439 -1575 675 -1575 Q 906 -1575 1014 -1519 L 1014 -1301 Q 874 -1398 660 -1398 Q 518 -1398 428.5 -1338.5 Q 339 -1279 339 -1173 Q 339 -1079 401 -1020 Q 463 -961 670 -859 Q 898 -750 989 -641 Q 1080 -532 1080 -396 Q 1080 -192 932 -83 Q 784 26 521 26 Q 429 26 306.5 0.5 Q 184 -25 128 -63 L 128 -291 Z ",
        "0.59": "M 1348 -631 Q 1348 26 752 26 Q 181 26 181 -608 L 181 -1549 L 381 -1549 L 381 -617 Q 381 -152 771 -152 Q 1148 -152 1148 -602 L 1148 -1549 L 1348 -1549 L 1348 -631 Z ",
        "0.27": "M 177 -238 Q 333 -136 502 -136 Q 662 -136 760 -225.5 Q 858 -315 858 -463 Q 858 -612 758.5 -694 Q 659 -776 470 -776 Q 379 -776 225 -762 L 225 -1549 L 987 -1549 L 987 -1376 L 407 -1376 L 407 -938 Q 494 -943 538 -943 Q 783 -943 920 -819 Q 1057 -695 1057 -477 Q 1057 -252 910 -113 Q 763 26 504 26 Q 287 26 177 -38 L 177 -238 Z ",
        "0.39": "M 1417 0 L 1196 0 L 1038 -424 L 393 -424 L 244 0 L 23 0 L 613 -1549 L 827 -1549 L 1417 0 M 976 -599 L 742 -1243 Q 731 -1274 718 -1351 L 713 -1351 Q 702 -1281 688 -1243 L 456 -599 L 976 -599 Z ",
        "0.22": "M 91 -744 Q 91 -1154 227 -1364.5 Q 363 -1575 621 -1575 Q 1113 -1575 1113 -781 Q 1113 -389 974.5 -181.5 Q 836 26 586 26 Q 350 26 220.5 -171 Q 91 -368 91 -744 M 291 -753 Q 291 -136 604 -136 Q 912 -136 912 -763 Q 912 -1412 610 -1412 Q 291 -1412 291 -753 Z ",
        "0.1036": "M 526 -333 Q 791 -215 1098 -70 L 1550 -461 L 430 -461 L 430 -609 L 527 -857 L 50 -857 L 50 -1009 L 587 -1009 L 695 -1283 L 172 -1283 L 172 -1435 L 755 -1435 L 860 -1701 L 1042 -1701 L 937 -1435 L 1884 -1435 L 1884 -1283 L 877 -1283 L 769 -1009 L 2012 -1009 L 2012 -857 L 709 -857 L 612 -611 L 1778 -611 L 1778 -455 L 1246 0 Q 1380 64 1522 133 L 1424 285 Q 922 21 442 -199 L 526 -333 Z ",
        "0.2862": "M 776 -701 L 1794 -701 L 1794 -59 L 1640 -59 L 1640 -141 L 930 -141 L 930 -59 L 776 -59 L 776 -701 M 600 -1009 L 1234 -1009 L 1234 -1281 L 894 -1281 Q 840 -1153 778 -1047 Q 726 -1081 640 -1119 Q 786 -1355 858 -1645 L 1010 -1611 Q 980 -1509 947 -1417 L 1234 -1417 L 1234 -1701 L 1390 -1701 L 1390 -1417 L 1902 -1417 L 1902 -1281 L 1390 -1281 L 1390 -1009 L 2000 -1009 L 2000 -873 L 600 -873 L 600 -1009 M 852 63 L 1350 71 L 2016 55 Q 1994 121 1960 213 L 1298 217 L 822 205 Q 482 201 346 -29 Q 264 47 106 239 L 24 73 Q 201 -98 280 -172 L 280 -845 L 42 -845 L 42 -993 L 434 -993 L 434 -138 Q 557 61 852 63 M 1640 -565 L 930 -565 L 930 -277 L 1640 -277 L 1640 -565 M 274 -1665 Q 376 -1541 554 -1287 L 412 -1187 Q 250 -1441 146 -1579 L 274 -1665 Z ",
        "0.54": "M 400 -579 L 400 0 L 200 0 L 200 -1549 L 640 -1549 Q 891 -1549 1029.5 -1428 Q 1168 -1307 1168 -1082 Q 1168 -854 1006 -712.5 Q 844 -571 601 -579 L 400 -579 M 400 -1373 L 400 -755 L 585 -755 Q 768 -755 863 -837.5 Q 958 -920 958 -1074 Q 958 -1373 604 -1373 L 400 -1373 Z ",
        "0.69": "M 918 321 L 0 321 L 0 192 L 918 192 L 918 321 Z ",
        "0.25": "M 143 -259 Q 302 -136 502 -136 Q 662 -136 755.5 -214.5 Q 849 -293 849 -425 Q 849 -719 428 -719 L 299 -719 L 299 -881 L 422 -881 Q 795 -881 795 -1157 Q 795 -1412 510 -1412 Q 347 -1412 203 -1302 L 203 -1487 Q 355 -1575 558 -1575 Q 756 -1575 876 -1471.5 Q 996 -1368 996 -1203 Q 996 -899 686 -812 L 686 -808 Q 854 -790 951.5 -689.5 Q 1049 -589 1049 -439 Q 1049 -230 898.5 -102 Q 748 26 498 26 Q 278 26 143 -56 L 143 -259 Z ",
        "0.58": "M 1136 -1371 L 689 -1371 L 689 0 L 488 0 L 488 -1371 L 43 -1371 L 43 -1549 L 1136 -1549 L 1136 -1371 Z ",
        "0.47": "M 549 -1380 L 400 -1380 L 400 -169 L 549 -169 L 549 0 L 51 0 L 51 -169 L 200 -169 L 200 -1380 L 51 -1380 L 51 -1549 L 549 -1549 L 549 -1380 Z ",
        "0.2153": "M 520 -5 L 1192 -5 L 1192 -573 L 672 -573 L 672 -725 L 1192 -725 L 1192 -1209 L 616 -1209 L 616 -1361 L 1254 -1361 Q 1160 -1510 1062 -1633 L 1194 -1717 Q 1328 -1561 1406 -1441 L 1281 -1361 L 1952 -1361 L 1952 -1209 L 1360 -1209 L 1360 -725 L 1880 -725 L 1880 -573 L 1360 -573 L 1360 -5 L 2008 -5 L 2008 147 L 520 147 L 520 -5 M 306 -581 Q 388 -545 464 -515 Q 354 -163 234 253 L 62 193 Q 188 -149 306 -581 M 202 -1675 Q 396 -1529 548 -1383 Q 480 -1315 428 -1261 Q 320 -1375 100 -1565 L 202 -1675 M 126 -1157 Q 270 -1057 480 -885 Q 406 -801 362 -755 Q 152 -947 26 -1043 L 126 -1157 Z ",
        "0.41": "M 1260 -64 Q 1089 26 831 26 Q 498 26 299 -185.5 Q 100 -397 100 -745 Q 100 -1119 324 -1347 Q 548 -1575 893 -1575 Q 1115 -1575 1260 -1512 L 1260 -1303 Q 1094 -1395 895 -1395 Q 636 -1395 473 -1222.5 Q 310 -1050 310 -757 Q 310 -479 462 -315.5 Q 614 -152 860 -152 Q 1090 -152 1260 -256 L 1260 -64 Z ",
        "0.1260": "M 776 -1679 L 750 -1637 Q 1004 -1403 1238 -1163 L 1128 -1039 Q 914 -1277 672 -1509 Q 476 -1199 268 -991 L 1090 -991 Q 1078 -713 1070 -601 Q 1060 -303 798 -303 Q 692 -303 538 -309 Q 526 -397 510 -469 Q 644 -447 766 -445 Q 910 -443 920 -627 Q 926 -723 932 -851 L 402 -851 L 402 -49 Q 402 63 522 63 L 850 63 Q 1008 63 1028 -41 Q 1052 -137 1064 -281 Q 1142 -249 1222 -223 Q 1202 -91 1172 21 Q 1122 207 890 207 L 492 207 Q 246 207 246 -37 L 246 -967 Q 182 -907 120 -857 Q 60 -955 28 -1001 Q 356 -1251 592 -1679 L 776 -1679 M 1734 -1665 L 1894 -1665 L 1894 -3 Q 1894 241 1652 243 Q 1568 243 1338 241 Q 1328 149 1306 59 Q 1518 77 1604 77 Q 1734 77 1734 -51 L 1734 -1665 M 1470 -255 L 1316 -255 L 1316 -1487 L 1470 -1487 L 1470 -255 Z ",
        "0.2845": "M 624 -1415 L 1268 -1415 Q 1207 -1527 1126 -1635 L 1254 -1713 Q 1344 -1601 1416 -1485 L 1299 -1415 L 1968 -1415 L 1968 -1269 L 1580 -1269 L 1580 -307 Q 1580 -65 1336 -51 Q 1244 -47 1094 -47 Q 1084 -125 1064 -213 Q 1184 -203 1298 -203 Q 1436 -203 1436 -359 L 1436 -1269 L 1142 -1269 L 1142 -895 Q 1142 -273 780 5 Q 730 -63 676 -119 Q 998 -375 998 -893 L 998 -1269 L 624 -1269 L 624 -1415 M 929 73 L 1332 81 L 2022 61 Q 1988 141 1956 215 L 1331 225 L 884 215 Q 504 205 348 -15 Q 258 69 114 241 L 28 71 Q 179 -63 276 -147 L 276 -845 L 48 -845 L 48 -991 L 424 -991 L 424 -127 Q 569 64 929 73 M 1662 -913 L 1804 -977 Q 1938 -689 2016 -473 L 1870 -411 Q 1776 -683 1662 -913 M 726 -975 L 872 -923 Q 772 -685 644 -425 Q 634 -429 496 -489 Q 626 -719 726 -975 M 246 -1687 Q 410 -1469 530 -1283 L 392 -1185 Q 272 -1389 118 -1603 L 246 -1687 Z ",
        "0.26": "M 1128 -402 L 930 -402 L 930 0 L 740 0 L 740 -402 L 18 -402 L 18 -529 L 703 -1549 L 930 -1549 L 930 -557 L 1128 -557 L 1128 -402 M 740 -557 L 740 -1206 Q 740 -1275 744 -1365 L 740 -1365 Q 726 -1327 681 -1246 L 220 -557 L 740 -557 Z ",
        "0.23": "M 1077 0 L 189 0 L 189 -169 L 536 -169 L 536 -1345 L 180 -1242 L 180 -1422 L 731 -1582 L 731 -169 L 1077 -169 L 1077 0 Z ",
        "0.43": "M 1033 0 L 200 0 L 200 -1549 L 998 -1549 L 998 -1371 L 400 -1371 L 400 -875 L 954 -875 L 954 -698 L 400 -698 L 400 -177 L 1033 -177 L 1033 0 Z "
    },
    "styleOptions": {
        "textColor": "ffffff",
        "openLinksInNewWindow": false,
        "backgroundColorAlpha": 1,
        "backgroundColor": "ffffff",
        "animationSpeed": 0.2,
        "boxColor": "000000",
        "rotate": true,
        "boxAlpha": 0.7,
        "textAlpha": 1,
        "zoom": true
    },
    "viewBox": {
        "y": 2.225,
        "height": 175.625,
        "x": 2.375,
        "width": 178.25
    },
    "tags": [{
        "shapeColor": "2dc160",
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
        "matrix": [[0.02249839, 0, 27.71118464], [0, 0.02249839, 86.925]],
        "fill": "#2dc160",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00806693, 0, 49.67737543], [0, 0.00806693, 48.27592408]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00537975, 0, 57.51280858], [0, 0.00537975, 31.37310127]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33af66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00446663, 0, 108.65732303], [0, 0.00446663, 94.81621125]],
        "fill": "#33af66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00768238, 0, 84.23619685], [0, 0.00768238, 21.95]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "10a540",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00467033, 0, 12.49729068], [0, 0.00467033, 95.84395604]],
        "fill": "#10a540",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00313819, 0, 67.79194431], [0, 0.00313819, 123.46764241]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00267998, 0, 55.16603357], [0, 0.00267998, 175.68972675]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996633",
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
        "matrix": [[0.00548741, 0, 62.30789049], [0, 0.00548741, 170.25]],
        "fill": "#996633",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "35b365",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00254745, 0, 104.38439398], [0, 0.00254745, 101.82397602]],
        "fill": "#35b365",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00224156, 0, 67.98318791], [0, 0.00224156, 128.90545886]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00223332, 0, 89.54701298], [0, 0.00223332, 8.90810562]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996633",
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
        "matrix": [[0.00493867, 0, 63.93477913], [0, 0.00493867, 160.325]],
        "fill": "#996633",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00254745, 0, 3.08450654], [0, 0.00254745, 67.82397602]],
        "fill": "#009933",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "12ab45",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0022121, 0, 20.32412181], [0, 0.0022121, 50.8677816]],
        "fill": "#12ab45",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00219922, 0, 10.32441795], [0, 0.00219922, 101.90474585]],
        "fill": "#009933",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "009933",
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
        "matrix": [[0.00438993, 0, 3.30458283], [0, 0.00438993, 76.4]],
        "fill": "#009933",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "9a6836",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00254668, 0, 64.32266623], [0, 0.00254668, 150.82279621]],
        "fill": "#9a6836",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00207904, 0, 141.32718216], [0, 0.00207904, 100.75782866]],
        "fill": "#339966",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00178665, 0, 7.25709792], [0, 0.00178665, 62.1264845]],
        "fill": "#009933",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996634",
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
        "matrix": [[0.00472071, 0, 66.56642363], [0, 0.00472071, 145.0057148]],
        "fill": "#996634",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00212288, 0, 68.51772212], [0, 0.00212288, 134.01998002]],
        "fill": "#996633",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "0fa842",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00179325, 0, 23.91003369], [0, 0.00179325, 46.12436709]],
        "fill": "#0fa842",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00192473, 0, 151.4057312], [0, 0.00192473, 65.46102915]],
        "fill": "#339966",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "339966",
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
        "matrix": [[0.00467128, 0, 151.71756055], [0, 0.00467128, 81.7300185]],
        "fill": "#339966",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00212288, 0, 2.68962841], [0, 0.00212288, 81.01998002]],
        "fill": "#009933",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "339b66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00180294, 0, 151.40853237], [0, 0.00180294, 59.43914019]],
        "fill": "#339b66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00178665, 0, 56.58900625], [0, 0.00178665, 22.1264845]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "009933",
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
        "matrix": [[0.00378151, 0, 15.43802521], [0, 0.00378151, 58.40604347]],
        "fill": "#009933",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00206764, 0, 2.27161808], [0, 0.00206764, 86.02539165]],
        "fill": "#009933",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "339f66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00161333, 0, 149.33789335], [0, 0.00161333, 50.4738484]],
        "fill": "#339f66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00161386, 0, 144.26288114], [0, 0.00161386, 104.9259123]],
        "fill": "#339966",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "339f66",
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
        "matrix": [[0.00329245, 0, 149.40242093], [0, 0.00329245, 46.55]],
        "fill": "#339f66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.0016983, 0, 16.12632621], [0, 0.0016983, 106.21598402]],
        "fill": "#009933",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "3ebb60",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00134494, 0, 87.15313391], [0, 0.00134494, 89.34327532]],
        "fill": "#3ebb60",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00133999, 0, 74.41693659], [0, 0.00133999, 117.34486337]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "10a943",
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
        "matrix": [[0.00329245, 0, 29.47088164], [0, 0.00329245, 42.55]],
        "fill": "#10a943",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00167049, 0, 109.2164756], [0, 0.00167049, 54.17565386]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33a266",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00134494, 0, 147.23589147], [0, 0.00134494, 40.34327532]],
        "fill": "#33a266",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00133999, 0, 95.40223692], [0, 0.00133999, 4.34486337]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "339966",
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
        "matrix": [[0.00279288, 0, 163.46076372], [0, 0.00279288, 73.03056114]],
        "fill": "#339966",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00127373, 0, 110.05342368], [0, 0.00127373, 105.41198801]],
        "fill": "#339966",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "0da640",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00130065, 0, 34.19508516], [0, 0.00130065, 87.31119752]],
        "fill": "#0da640",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "339a66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00116079, 0, 147.19830181], [0, 0.00116079, 108.21506321]],
        "fill": "#339a66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00265283, 0, 70.38898501], [0, 0.00265283, 92.07899838]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "37b568",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00127373, 0, 138.63743227], [0, 0.00127373, 33.41198801]],
        "fill": "#37b568",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00115761, 0, 110.27337502], [0, 0.00115761, 57.94699621]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00116079, 0, 49.19830181], [0, 0.00116079, 58.3122147]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "339966",
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
        "matrix": [[0.00251277, 0, 165.31720629], [0, 0.00251277, 86.33802421]],
        "fill": "#339966",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "1eb751",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00127373, 0, 39.23696695], [0, 0.00127373, 35.41198801]],
        "fill": "#1eb751",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "579e54",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00109108, 0, 92.2749052], [0, 0.00109108, 92.25391867]],
        "fill": "#579e54",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "638d4e",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00109465, 0, 91.19982307], [0, 0.00109465, 95.21731214]],
        "fill": "#638d4e",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00251277, 0, 51.31720629], [0, 0.00251277, 63.41857851]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00127373, 0, 68.20334549], [0, 0.00127373, 18.41198801]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00110106, 0, 57.19967567], [0, 0.00110106, 117.10415589]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "0ea741",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00109465, 0, 35.19982307], [0, 0.00109465, 84.34879987]],
        "fill": "#0ea741",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00210084, 0, 73.07668067], [0, 0.00210084, 78.84707766]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "379c68",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00127334, 0, 149.16133311], [0, 0.00127334, 37.41197833]],
        "fill": "#379c68",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 160.64345655], [0, 0.00089662, 96.56218354]],
        "fill": "#339966",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 133.37175264], [0, 0.00089333, 51.56324225]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00210084, 0, 73.07668067], [0, 0.00210084, 62.2292113]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00117917, 0, 72.2410416], [0, 0.00117917, 82.16323523]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 122.25890949], [0, 0.00089662, 33.56218354]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 118.87944321], [0, 0.00089333, 96.56324225]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00217499, 0, 72.84997528], [0, 0.00217499, 73.93457862]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00114232, 0, 72.46788405], [0, 0.00114232, 67.96368438]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 107.70280946], [0, 0.00089662, 33.56218354]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 86.66962202], [0, 0.00089333, 177.56324225]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00215851, 0, 53.40035426], [0, 0.00215851, 69.0573938]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00119145, 0, 112.16542745], [0, 0.00119145, 61.39365719]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 79.43334478], [0, 0.00089662, 136.56218354]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 77.87501626], [0, 0.00089333, 51.56324225]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "6f7535",
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
        "matrix": [[0.00219496, 0, 44.26773151], [0, 0.00219496, 100.7]],
        "fill": "#6f7535",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00119145, 0, 72.16542745], [0, 0.00119145, 58.27435227]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 76.07120628], [0, 0.00089662, 33.56218354]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 60.93028973], [0, 0.00089333, 33.56324225]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "14ad47",
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
        "matrix": [[0.00219496, 0, 37.30101367], [0, 0.00219496, 81.7]],
        "fill": "#14ad47",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00119145, 0, 72.16542745], [0, 0.00119145, 65.31890626]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 20.52706084], [0, 0.00089662, 108.56218354]],
        "fill": "#009933",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 115.30844946], [0, 0.00089333, 117.56324225]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "9c6a38",
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
        "matrix": [[0.00204317, 0, 50.25300709], [0, 0.00204317, 110.61735642]],
        "fill": "#9c6a38",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00102768, 0, 164.17361612], [0, 0.00102768, 55.32393228]],
        "fill": "#339966",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 56.38194651], [0, 0.00089662, 177.56218354]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 70.80148547], [0, 0.00089333, 93.56324225]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0018784, 0, 113.25679684], [0, 0.0018784, 65.51053339]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00102768, 0, 54.17361612], [0, 0.00102768, 71.45514511]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 54.45366345], [0, 0.00089662, 114.56218354]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "9b6a38",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 118.22816565], [0, 0.00089333, 115.56324225]],
        "fill": "#9b6a38",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00185368, 0, 72.3323653], [0, 0.00185368, 86.92465792]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "9b6937",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00102768, 0, 48.17361612], [0, 0.00102768, 106.08414706]],
        "fill": "#9b6937",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "0da640",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00089662, 0, 58.25331191], [0, 0.00089662, 98.56218354]],
        "fill": "#0da640",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00089333, 0, 52.15651731], [0, 0.00089333, 112.56324225]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00164622, 0, 75.08996811], [0, 0.00164622, 15.775]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "747946",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 126.16326727], [0, 0.00084915, 104.60799201]],
        "fill": "#747946",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "9c6a38",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00084492, 0, 121.13056683], [0, 0.00084492, 113.4866372]],
        "fill": "#9c6a38",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00084, 0, 102.13067994], [0, 0.00084, 125.54282498]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00164622, 0, 55.7089484], [0, 0.00164622, 74.775]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 47.90362988], [0, 0.00084915, 103.60799201]],
        "fill": "#996633",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00084492, 0, 3.13056683], [0, 0.00084492, 88.4840037]],
        "fill": "#009933",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00077386, 0, 164.1322012], [0, 0.00077386, 52.4885127]],
        "fill": "#339966",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00164622, 0, 127.70046777], [0, 0.00164622, 19.775]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 151.27393253], [0, 0.00084915, 73.60799201]],
        "fill": "#339966",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00050895, 0, 137.66329419], [0, 0.00050895, 73.82907855]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00077386, 0, 115.1322012], [0, 0.00077386, 119.51056396]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00164622, 0, 121.38954091], [0, 0.00164622, 87.775]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00062643, 0, 92.64367835], [0, 0.00062643, 63.62657252]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00077839, 0, 111.132097], [0, 0.00077839, 35.45168234]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00077386, 0, 84.1322012], [0, 0.00077386, 114.42902915]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0012605, 0, 137.6460084], [0, 0.0012605, 59.45278255]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 68.55458484], [0, 0.00084915, 95.60799201]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00077839, 0, 67.132097], [0, 0.00077839, 136.44093758]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00050599, 0, 92.66336233], [0, 0.00050599, 81.64777492]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996633",
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
        "matrix": [[0.00157357, 0, 126.18880788], [0, 0.00157357, 110.68062069]],
        "fill": "#996633",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 106.27282456], [0, 0.00084915, 86.60799201]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00050895, 0, 92.66329419], [0, 0.00050895, 67.8716014]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00070772, 0, 96.13372247], [0, 0.00070772, 33.4944935]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996633",
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
        "matrix": [[0.00152414, 0, 87.3399448], [0, 0.00152414, 108.91744513]],
        "fill": "#996633",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00062643, 0, 137.64367835], [0, 0.00062643, 77.182874]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "9f6f3f",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00071186, 0, 86.13362717], [0, 0.00071186, 110.53739693]],
        "fill": "#9f6f3f",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00070772, 0, 85.13372247], [0, 0.00070772, 112.41253652]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0012605, 0, 137.6460084], [0, 0.0012605, 63.37374194]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00084915, 0, 56.41067081], [0, 0.00084915, 76.60799201]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "3c9c6a",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00064533, 0, 151.13515734], [0, 0.00064533, 110.50246534]],
        "fill": "#3c9c6a",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00050599, 0, 92.66336233], [0, 0.00050599, 74.98586001]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00157357, 0, 57.18880788], [0, 0.00157357, 79.73589848]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00078202, 0, 47.18589912], [0, 0.00078202, 31.93806935]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00050895, 0, 137.66329419], [0, 0.00050895, 80.16435332]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00064158, 0, 141.13524373], [0, 0.00064158, 96.61763952]],
        "fill": "#339966",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00157357, 0, 47.18880788], [0, 0.00157357, 53.73901371]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00062643, 0, 137.64367835], [0, 0.00062643, 68.17645447]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00064533, 0, 131.13515734], [0, 0.00064533, 22.45234216]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00064158, 0, 128.13524373], [0, 0.00064158, 106.51299094]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00070028, 0, 127.35889356], [0, 0.00070028, 74.90469452]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.0007943, 0, 122.11028497], [0, 0.0007943, 84.56790346]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00064533, 0, 114.13515734], [0, 0.00064533, 67.41055885]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00033732, 0, 106.44224155], [0, 0.00033732, 83.18057677]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00135937, 0, 137.34373455], [0, 0.00135937, 55.76326139]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.0007943, 0, 108.11028497], [0, 0.0007943, 96.55701797]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33c966",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00052891, 0, 137.51283514], [0, 0.00052891, 84.86601415]],
        "fill": "#33c966",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00064158, 0, 59.13524373], [0, 0.00064158, 119.31895231]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00135937, 0, 92.34373455], [0, 0.00135937, 72.17145699]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00034802, 0, 96.35759908], [0, 0.00034802, 59.51332684]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00064533, 0, 49.13515734], [0, 0.00064533, 27.1921763]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00064158, 0, 48.13524373], [0, 0.00064158, 29.24953747]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00056022, 0, 106.28711485], [0, 0.00056022, 77.93315281]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "009933",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.0007943, 0, 7.11028497], [0, 0.0007943, 97.61046918]],
        "fill": "#009933",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "039c36",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00064533, 0, 3.13515734], [0, 0.00064533, 90.36554011]],
        "fill": "#039c36",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.0002811, 0, 91.36853463], [0, 0.0002811, 25.98285233]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0014088, 0, 137.19259763], [0, 0.0014088, 66.41271849]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00068785, 0, 137.2656076], [0, 0.00068785, 72.47937652]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "339966",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00039585, 0, 149.51589548], [0, 0.00039585, 91.5215404]],
        "fill": "#339966",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00057543, 0, 137.136765], [0, 0.00057543, 70.55346149]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0014088, 0, 137.19259763], [0, 0.0014088, 83.68177733]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00048723, 0, 125.50063872], [0, 0.00048723, 82.29969949]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0005788, 0, 137.13668751], [0, 0.0005788, 75.20624421]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33c166",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00057543, 0, 137.136765], [0, 0.00057543, 87.42091429]],
        "fill": "#33c166",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00098039, 0, 60.50245098], [0, 0.00098039, 83.31288907]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00071241, 0, 127.1143793], [0, 0.00071241, 14.42437531]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "9d6c3b",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0005788, 0, 115.13668751], [0, 0.0005788, 121.35598802]],
        "fill": "#9d6c3b",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "22bb55",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00033732, 0, 41.44224155], [0, 0.00033732, 69.158123]],
        "fill": "#22bb55",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.0014088, 0, 92.19259763], [0, 0.0014088, 66.42464454]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00071241, 0, 92.1143793], [0, 0.00071241, 57.45308507]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00016965, 0, 100.22109806], [0, 0.00016965, 13.38138456]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00057543, 0, 92.136765], [0, 0.00057543, 61.28175497]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00138408, 0, 92.26816609], [0, 0.00138408, 78.89731832]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00041762, 0, 126.4291189], [0, 0.00041762, 77.75690328]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00056882, 0, 90.21191704], [0, 0.00056882, 98.48386677]],
        "fill": "#996633",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00056551, 0, 89.21199319], [0, 0.00056551, 101.6559369]],
        "fill": "#996633",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33b866",
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
        "matrix": [[0.00070028, 0, 136.35889356], [0, 0.00070028, 92.73009114]],
        "fill": "#33b866",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "996633",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00070013, 0, 88.18999345], [0, 0.00070013, 105.40481462]],
        "fill": "#996633",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0005788, 0, 87.13668751], [0, 0.0005788, 29.18710884]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00016866, 0, 100.22112078], [0, 0.00016866, 23.30231906]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "009933",
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
        "matrix": [[0.0014088, 0, 5.19259763], [0, 0.0014088, 94.6453444]],
        "fill": "#009933",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00071241, 0, 77.1143793], [0, 0.00071241, 35.38406697]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0002262, 0, 106.29479742], [0, 0.0002262, 71.72044448]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00057543, 0, 58.136765], [0, 0.00057543, 35.6219855]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00121931, 0, 106.27195584], [0, 0.00121931, 80.76859226]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00042991, 0, 116.35350475], [0, 0.00042991, 71.34284561]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0005788, 0, 57.13668751], [0, 0.0005788, 39.36635948]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00057543, 0, 51.136765], [0, 0.00057543, 24.20193564]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00028011, 0, 122.14355742], [0, 0.00028011, 11.92473622]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00071241, 0, 48.1143793], [0, 0.00071241, 55.52863235]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "1cb54f",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0005788, 0, 39.13668751], [0, 0.0005788, 72.36820186]],
        "fill": "#1cb54f",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00016866, 0, 100.22112078], [0, 0.00016866, 21.0274953]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00124403, 0, 124.19638738], [0, 0.00124403, 80.58071647]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33c666",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00063053, 0, 139.11847363], [0, 0.00063053, 30.32256735]],
        "fill": "#33c666",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00028275, 0, 113.36849677], [0, 0.00028275, 10.29621618]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00050929, 0, 133.13828626], [0, 0.00050929, 90.61345458]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00109748, 0, 125.2026317], [0, 0.00109748, 35.85]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00034802, 0, 106.35759908], [0, 0.00034802, 73.66427075]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00051227, 0, 116.13821768], [0, 0.00051227, 50.67605446]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00050929, 0, 115.13828626], [0, 0.00050929, 31.29768463]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "33cc66",
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
        "matrix": [[0.00070028, 0, 96.35889356], [0, 0.00070028, 53.17062751]],
        "fill": "#33cc66",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00063053, 0, 115.11847363], [0, 0.00063053, 69.50264554]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.00051227, 0, 101.13821768], [0, 0.00051227, 51.45631]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.0002811, 0, 96.36853463], [0, 0.0002811, 83.89241064]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    },
    {
        "shapeColor": "996633",
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
        "matrix": [[0.00109748, 0, 89.83117214], [0, 0.00109748, 103.85]],
        "fill": "#996633",
        "text": "ATIME",
        "bbox": {
            "y": -1804.585,
            "height": 2060.17,
            "x": -232.585,
            "width": 6580.17
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 2,
        "glyphs": [{
            "y": 0,
            "x": 0,
            "glyph": "0.1036"
        },
        {
            "y": 0,
            "x": 2048,
            "glyph": "0.2153"
        },
        {
            "y": 0,
            "x": 4096,
            "glyph": "0.1260"
        },
        {
            "y": 0,
            "x": 6144,
            "glyph": "0.2862"
        },
        {
            "y": 0,
            "x": 8192,
            "glyph": "0.1513"
        },
        {
            "y": 0,
            "x": 10240,
            "glyph": "0.2845"
        }],
        "matrix": [[0.00063053, 0, 80.11847363], [0, 0.00063053, 11.50336931]],
        "fill": "#33cc66",
        "text": "\u4e13\u6ce8\u521b\u9020\u5947\u8ff9",
        "bbox": {
            "y": -2047.33,
            "height": 2662.66,
            "x": -280.33,
            "width": 12872.66
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 3,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 9104,
            "glyph": "0.57"
        },
        {
            "y": 0,
            "x": 10286,
            "glyph": "0.54"
        },
        {
            "y": 0,
            "x": 11539,
            "glyph": "0.26"
        },
        {
            "y": 0,
            "x": 12740,
            "glyph": "0.25"
        },
        {
            "y": 0,
            "x": 13941,
            "glyph": "0.22"
        }],
        "matrix": [[0.0002262, 0, 100.29479742], [0, 0.0002262, 17.3857691]],
        "fill": "#33cc66",
        "text": "ATIME_MSP430",
        "bbox": {
            "y": -1887.84,
            "height": 2521.68,
            "x": -289.84,
            "width": 15656.68
        }
    },
    {
        "shapeColor": "33cc66",
        "xheight": 1106,
        "parentId": 4,
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
        },
        {
            "y": 0,
            "x": 6185,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 7103,
            "glyph": "0.27"
        },
        {
            "y": 0,
            "x": 8304,
            "glyph": "0.23"
        },
        {
            "y": 0,
            "x": 9505,
            "glyph": "0.69"
        },
        {
            "y": 0,
            "x": 10423,
            "glyph": "0.51"
        },
        {
            "y": 0,
            "x": 12424,
            "glyph": "0.41"
        },
        {
            "y": 0,
            "x": 13794,
            "glyph": "0.59"
        }],
        "matrix": [[0.00050929, 0, 69.13828626], [0, 0.00050929, 51.6120261]],
        "fill": "#33cc66",
        "text": "ATIME_51_MCU",
        "bbox": {
            "y": -1895.995,
            "height": 2530.99,
            "x": -290.995,
            "width": 15746.99
        }
    }],
    "meta": {
        "browser": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.154 Safari/537.36 LBBROWSER",
        "version": 2.64
    }
});