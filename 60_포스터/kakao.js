navigator = {
  appVersion: '',
};
(function (P) {
  function Pa() {
    return function () {};
  }
  function Zb(a) {
    return function (b) {
      this[a] = b;
    };
  }
  function p(a) {
    return function () {
      return this[a];
    };
  }
  function Q() {}
  function n(a, b) {
    function d() {}
    d.prototype = b.prototype;
    a.prototype = new d();
    a.prototype.constructor = a;
    a.Wb = b.prototype;
    d.prototype = f;
  }
  function yc(a) {
    return 'string' == typeof a;
  }
  function Da(a) {
    return 'number' == typeof a;
  }
  function w(a, b) {
    return a === T ? b : a;
  }
  function hb(a) {
    return a === T || a;
  }
  function xa(a, b) {
    return function () {
      a.apply(b, arguments);
    };
  }
  function I(a) {
    return a instanceof pa ? a.W() : a;
  }
  function ua(a) {
    return a.sh();
  }
  function $b(a) {
    if (a instanceof ga) {
      var b = a.rb();
      return new W(I(a.B()), I(b));
    }
    return a;
  }
  function zc(a, b) {
    return new ga(ua(a), ua(b));
  }
  function ac(a, b, d) {
    for (var F in a) a.hasOwnProperty(F) && b.call(d, F, a[F]);
  }
  function Qa(a, b) {
    return a.indexOf(b);
  }
  function s(a, b, d) {
    a.forEach(b, d);
  }
  function Ib(a, b, d) {
    return a.map(b, d);
  }
  function qb(a, b) {
    for (var d = a.length - 1; 0 <= d; --d) a[d] === b && a.splice(d, 1);
  }
  function q(a) {
    return document.createElement(a);
  }
  function Va(a) {
    return (a && a.ownerDocument) || document;
  }
  function Ea(a) {
    var b = a && a.parentNode;
    b && b.removeChild(a);
  }
  function Uc(a, b, d) {
    a.childNodes[d] !== b && a.insertBefore(b, a.childNodes[d] || f);
  }
  function bc(a, b) {
    return (
      b &&
      (a.compareDocumentPosition
        ? !!(a.compareDocumentPosition(b) & 16)
        : a != b && a.contains(b))
    );
  }
  function Jb(a, b) {
    for (var d in b) b.hasOwnProperty(d) && a.setAttribute(d, b[d]);
  }
  function Cd(a) {
    var a = a.target.getAttribute('data-key'),
      b = Dd[a];
    b.parentNode.removeChild(b);
    delete P[a];
  }
  function i(a, b) {
    var d = a.style,
      F;
    for (F in b) b.hasOwnProperty(F) && (d[F] = b[F]);
  }
  function ya(a, b) {
    a.style.cssText += ';' + b;
  }
  function ib(a) {
    ya(a, 'display:block');
  }
  function Ra(a) {
    ya(a, 'display:none');
  }
  function M(a) {
    a.style.position = 'absolute';
  }
  function Ed(a) {
    return Ib($e, function (b) {
      return b + a + ';';
    }).join('');
  }
  function Kb(a) {
    ya(a, Ed('user-select:none') + Ed('user-drag:none'));
    a.unselectable = 'on';
    a.draggable = j;
  }
  function J(a, b, d) {
    ya(
      a,
      'width:' +
        (Da(b) ? A(0, b) + 'px' : b) +
        ';height:' +
        (Da(d) ? A(0, d) + 'px' : d),
    );
  }
  function za(a, b, d, F, c) {
    d === T && (d = b);
    F === T && (F = b);
    c === T && (c = d);
    b = String(
      (Da(b) ? b + 'px' : b) +
        ' ' +
        (Da(d) ? d + 'px' : d) +
        ' ' +
        (Da(F) ? F + 'px' : F) +
        ' ' +
        (Da(c) ? c + 'px' : c),
    );
    a.style.margin = b;
  }
  function ra(a, b) {
    K || (a.style.cursor = b);
  }
  function Wa(a, b) {
    var d = /^https?:/.test(b) ? 'url(' + b + ')' : b;
    a.style.background = d;
  }
  function jb(a, b, d) {
    a.style.backgroundSize = b + 'px ' + d + 'px';
  }
  function Aa(a, b) {
    a.style.zIndex = String(b);
  }
  function $(a, b, d) {
    i(a, { left: b + 'px', top: d + 'px' });
  }
  function Fd(a, b, d) {
    Da(b) && (b += 'px');
    d === T ? (d = b) : Da(d) && (d += 'px');
    i(a, { transformOrigin: b + ' ' + d, webkitTransformOrigin: b + ' ' + d });
  }
  function Sa(a, b, d) {
    this.wj =
      (d ? d + ' ' : '') +
      'url(' +
      cc +
      ') no-repeat ' +
      (-a || 0) +
      'px ' +
      (-b || 0) +
      'px';
  }
  function rb(a, b) {
    i(b, { background: a.wj });
    jb(b, sb, tb);
  }
  function k(a, b, d, F, c) {
    function g(a) {
      a = a || Xa.event;
      a.target || (a.target = a.srcElement);
      return g.ri.call(g.scope || g.target, a);
    }
    var m;
    m = g;
    m.target = a;
    m.type = b;
    m.ri = d;
    m.scope = F;
    m.options = c === T ? j : c === l ? l : c;
    a.addEventListener
      ? a.addEventListener(b, m, m.options)
      : a.attachEvent('on' + b, m);
    a = af++;
    Vc[a] = m;
    return a;
  }
  function y(a) {
    var b = Vc[a];
    b &&
      (b.target.removeEventListener
        ? b.target.removeEventListener(b.type, b, b.options)
        : b.target.detachEvent('on' + b.type, b),
      delete Vc[a]);
  }
  function sa(a, b) {
    if (b.getBoundingClientRect) {
      var d = b.getBoundingClientRect();
      return new B(
        ((K ? a.pageX - P.pageXOffset : a.clientX) - d.left) | 0,
        ((K ? a.pageY - P.pageYOffset : a.clientY) - d.top) | 0,
      );
    }
    var c = (d = 0);
    do (d += b.offsetLeft || 0), (c += b.offsetTop || 0);
    while ((b = b.offsetParent));
    return new B(a.clientX - d, a.clientY - c);
  }
  function aa(a) {
    a.preventDefault && a.preventDefault();
    a.returnValue = j;
  }
  function Gd(a) {
    return 'which' in a
      ? 1 == a.which
      : a.preventDefault
      ? 0 == a.button
      : 1 == a.button;
  }
  function Fa() {
    this.o = {};
  }
  function h(a, b, d) {
    var c;
    (c = a.o[b]) &&
      s(
        c,
        function (a) {
          a && a.Pf.call(a.object || this, d);
        },
        a,
      );
  }
  function Ja(a) {
    this.o = {};
    this.Wh = a;
  }
  function Ya(a) {
    Ja.call(this, a);
    for (
      var b = 0,
        a = ['webkit', 'moz'],
        d = Xa.requestAnimationFrame,
        c = Xa.cancelAnimationFrame,
        e = 0;
      e < a.length && !d;
      ++e
    )
      (d = Xa[a[e] + 'RequestAnimationFrame']),
        (c =
          Xa[a[e] + 'CancelAnimationFrame'] ||
          Xa[a[e] + 'CancelRequestAnimationFrame']);
    d ||
      (d = function (a) {
        var d = +new Date(),
          c = A(0, 16 - (d - b)),
          F = setTimeout(function () {
            a(d + c);
          }, c);
        b = d + c;
        return F;
      });
    c ||
      (c = function (a) {
        clearTimeout(a);
      });
    this.pj = d;
    this.Of = c;
    this.ba = f;
  }
  function Ga() {
    this.o = {};
  }
  function Hd(a, b) {
    b.a || b.M();
    b.Td = a;
    Uc(a.a, b.a, 0);
  }
  function ca(a, b) {
    b.a || b.M();
    b.Td = a;
    a.a.appendChild(b.a);
  }
  function Ac(a) {
    this.o = {};
    this.Mi = a.tj;
    this.ec = a.duration || 300;
    this.zg = a.Bk || 0;
    this.rf = a.Zb || Id;
  }
  function Id(a) {
    return a * (2 - a);
  }
  function Jd(a) {
    return 1 - z(a - 1, 4);
  }
  function Ka(a) {
    this.o = {};
    this.ec = a.duration;
    this.rf = a.Zb || Bc.lk;
  }
  function Wc(a) {
    Ka.call(this, a);
    this.vc = 1;
    this.zb = a.yb;
    this.Pa = a.vb;
    this.Qa = a.wb;
    this.he = a.nf;
    this.ie = a.of;
    this.te = a.se;
    this.ve = a.ue;
  }
  function Xc(a) {
    Ka.call(this, a);
    this.he = a.nf;
    this.ie = a.of;
    this.te = a.se;
    this.ve = a.ue;
  }
  function dc(a) {
    Ka.call(this, a);
    this.vc = 1;
    this.zb = a.yb;
    this.Pa = a.vb;
    this.Qa = a.wb;
  }
  function Cc() {}
  function Yc() {
    this.ee = [];
  }
  function ec(a) {
    a.Ea();
    s(
      a.ee,
      function (a) {
        if (a.visible)
          if ('path' === a.type) {
            var d = a.Wg,
              c = a.closed,
              e = this.r.getContext('2d');
            e.save();
            e.strokeStyle = a.strokeStyle || '#000';
            e.lineWidth = a.ad || 1;
            e.fillStyle = a.fillStyle || 'transparent';
            e.lineCap = a.lineCap || 'round';
            e.beginPath();
            s(
              d,
              function (d) {
                e.moveTo(d[0] || 0, d[1] || 0);
                if (d[0] == d[2] && d[1] == d[3])
                  e.arc(d[0], d[1], a.ad / 4, 2 * Math.PI, l);
                else
                  for (var g = 2; g < d.length; g += 2)
                    e.lineTo(d[g], d[g | 1]);
                c && e.closePath();
              },
              this,
            );
            e.fill('evenodd');
            e.stroke();
            e.restore();
            s(
              d,
              function (d) {
                if (a.Kj && 4 <= d.length) {
                  var c = d.slice(2, 4).concat(d.slice(0, 4));
                  Kd(this, a.ad, a.strokeStyle, c);
                }
                a.ni &&
                  4 <= d.length &&
                  ((c = d.slice(d.length - 4)),
                  Kd(this, a.ad, a.strokeStyle, c));
              },
              this,
            );
          } else {
            var d = a.x,
              g = a.y,
              m = a.nj,
              X = a.oj,
              ba = d - m,
              f = g - X,
              h = d + m,
              j = g + X,
              m = 0.5522847498307936 * m,
              X = 0.5522847498307936 * X,
              v = this.r.getContext('2d');
            v.strokeStyle = a.strokeStyle || '#000';
            v.lineWidth = a.ad || 1;
            v.fillStyle = a.fillStyle || 'transparent';
            v.beginPath();
            v.moveTo(d, f);
            v.bezierCurveTo(d + m, f, h, g - X, h, g);
            v.bezierCurveTo(h, g + X, d + m, j, d, j);
            v.bezierCurveTo(d - m, j, ba, g + X, ba, g);
            v.bezierCurveTo(ba, g - X, d - m, f, d, f);
            v.fill();
            v.stroke();
          }
      },
      a,
    );
  }
  function Kd(a, b, d, c) {
    var a = a.r.getContext('2d'),
      e = Math.atan2(c[3] - c[1], c[2] - c[0]);
    a.save();
    a.translate(c[2], c[3]);
    a.rotate(e);
    a.scale(1.5 * b, 1.5 * b);
    a.fillStyle = d || '#000';
    a.beginPath();
    a.moveTo(1, 0);
    a.lineTo(-1, -1);
    a.lineTo(-1, 1);
    a.fill();
    a.restore();
  }
  function ub() {
    this.Hk = '';
    this.Kk = [];
    this.ob = {};
  }
  function fc(a) {
    return document.createElementNS('http://www.w3.org/2000/svg', a);
  }
  function Ld(a, b, d, c) {
    var b = a.Vd + '-arrow-' + d + '-' + b,
      a = a.pd,
      e = document.getElementById(b);
    if (e) return e.setAttribute('style', 'stroke:none;fill:' + c), b;
    e = fc('marker');
    e.id = b;
    e.setAttribute('style', 'stroke:none;fill:' + c);
    e.setAttribute('orient', 'auto');
    e.setAttribute('viewBox', '-3,-3,6,6');
    a.appendChild(e);
    c = fc('path');
    c.setAttribute('d', 'start' === d ? 'M-3,0L3,-3v6z' : 'M3,0L-3,-3v6z');
    e.appendChild(c);
    return b;
  }
  function Md(a, b, d) {
    var c = a.ob[d];
    qb(c, b);
    0 === c.length && delete a.ob[d];
  }
  function Zc() {}
  function Nd(a) {
    var b = '';
    ac(a, function (a, c) {
      b += a + '=' + c + ' ';
    });
    return b;
  }
  function Od(a, b) {
    this.point = a;
    this.latLng = ua(b);
  }
  function Ta(a, b) {
    this.width = Number(a);
    this.height = Number(b);
  }
  function Dc() {}
  function gc(a, b) {
    var d = b.a;
    b instanceof vb
      ? ((a.Ek = b), (a.overlayLayer = a.Xe = d))
      : b instanceof hc && ((a.zk = b), (a.graphicsLayer = a.yk = d));
  }
  function Lb(a) {
    this.b = a;
  }
  function Ha(a) {
    this.b = a;
  }
  function $c(a) {
    this.b = a;
    this.ph = function (a, d) {
      return new La(3.2 * a + 24e4, 3.2 * d + 48e4);
    };
    this.qe = function (a, d) {
      return new L(0.3125 * (a - 24e4), 0.3125 * (d - 48e4));
    };
  }
  function Za(a) {
    this.b = a;
  }
  function $a() {
    this.o = {};
  }
  function Mb(a, b, d, c, e, g, m, X) {
    this.S = a;
    this.O = b;
    this.jc = d;
    this.Je = c || f;
    this.ci = e || c || f;
    this.Xh = g || f;
    this.zj = m || f;
    this.Fb = X || '';
    this.Hb = j;
    this.o = {};
  }
  function ad(a, b) {
    a.nc = b;
    ra(a.a, b ? 'default' : 'pointer');
    rb((b && a.zj) || a.jc, a.a);
  }
  function Ec(a, b) {
    a.Hb != b &&
      ((a.Hb = b),
      ra(a.a, b ? 'default' : 'pointer'),
      rb((b && a.Xh) || a.jc, a.a));
  }
  function hc() {
    this.o = {};
    this.Tf = this.Sf = 0;
  }
  function Pd(a) {
    var b = a.b,
      d = a.G,
      c = a.r,
      e = b.m(),
      g = b.h();
    Fc(a.a, 1);
    d.ja(5 * e, 5 * g);
    d = -ha(b) - 2 * e;
    b = -ia(b) - 2 * g;
    $(c, d, b);
    a.Sf = d;
    a.Tf = b;
  }
  function vb() {
    this.o = {};
  }
  function Nb(a) {
    this.o = {};
    this.b = a;
    this.$ = [[], [], [], [], [], [], [], [], []];
  }
  function kb() {
    this.o = {};
  }
  function ic(a) {
    this.o = {};
    a = a || {};
    this.ih = [];
    this.sf = [];
    this.tf = { 2: jc(80), 5: jc(100), 9: jc(120), 11: jc(140), 13: jc(160) };
    this.Jb = a.gap || 8;
    this.We = !!a.noTip;
    this.fd = a.autoFold;
    this.ye = !!a.folding;
    this.Le = f;
    this.fd && (this.Ni = this.fd.maxHeight || 240);
    this.Nc = j;
  }
  function Qd(a, b) {
    return A(a.Rb, N(a.Mg, (((b + a.Jb / 2) / a.Jb) | 0) + a.Rb));
  }
  function jc(a) {
    var b = q('div');
    M(b);
    J(b, 29, 15);
    za(b, -6, 0, 0, 0);
    Wa(b, '-0px -' + a + 'px url(' + cc + ')');
    jb(b, sb, tb);
    return b;
  }
  function B(a, b) {
    this.x = Number(a);
    this.y = Number(b);
  }
  function Rd(a, b, d, c, e, g, m) {
    this.Hf = a;
    this.bg = b;
    this.xh = d;
    this.yh = c;
    this.Pg = e;
    this.Mf = g;
    this.Nf = m;
  }
  function ab(a, b) {
    this.La = Number(a);
    this.Ma = Number(b);
  }
  function pa(a, b) {
    ab.call(this, b, a);
  }
  function L(a, b) {
    ab.call(this, a, b);
  }
  function va(a, b) {
    return b.ph(a.e(), a.c());
  }
  function Y(a, b, d, c) {
    this.pan = Number(a || 0);
    this.tilt = Number(b || 0);
    this.zoom = Number(d || 0);
    this.panoId = c || f;
  }
  function La(a, b) {
    ab.call(this, a, b);
  }
  function bd(a, b) {
    var d = cd(a, b);
    return new B(d.x - ha(b), d.y - ia(b));
  }
  function cd(a, b) {
    var d = b.B(),
      c = z(2, -b.j());
    return new B(
      H(a.e() * c) - H(d.e() * c),
      b.h() - H(a.c() * c) + H(d.c() * c),
    );
  }
  function Sd(a, b, d) {
    var c = z(2, -d),
      d = Ba((a.La - b.La) * c),
      a = Ba((a.Ma - b.Ma) * c);
    return 1 > d && 1 > a;
  }
  function W(a, b) {
    a && this.tb(a, b || a);
  }
  function ga(a, b) {
    W.call(this);
    a && this.tb(a, b);
  }
  function kc() {
    this.i = [];
    this.Ya = new Ya(13);
    this.Ya.addListener('tick', this.tc, this);
  }
  function wb() {
    this.o = {};
    this.a = xb.cloneNode(l);
    this.R = bb.IDLE;
    this.$d = f;
    this.Ma = this.La = 0;
  }
  function Td(a, b) {
    b != a.$d &&
      (J(a.a, Math.ceil(a.Sa.m() * b), Math.ceil(a.Sa.h() * b)), (a.$d = b));
  }
  function lc(a) {
    this.o = {};
    this.x = a.x;
    this.y = a.y;
    this.zoom = a.zoom;
    this.Sa = a.tileset;
    this.R = bb.IDLE;
    a = this.a = this.Sa.qg(this.x, this.y, this.zoom);
    M(a);
    Kb(a);
    ya(a, 'min-width:0;min-height:0;max-width:none;max-height:none');
    J(a, this.Sa.m(), this.Sa.h());
  }
  function lb(a, b, d) {
    ab.call(this, a, b);
    this.H = d;
  }
  function ea(a, b, d, c, e, g, m, X) {
    var f = {};
    'object' == typeof a
      ? (f = a)
      : ((f.width = a),
        (f.height = b),
        (f.urlFunc = d),
        (f.copyrights = c),
        (f.dark = e),
        (f.minZoom = g),
        (f.maxZoom = m),
        (f.getTile = X));
    this.S = f.width;
    this.O = f.height;
    this.He = f.urlFunc;
    this.md = f.copyrights || [];
    this.qg = f.getTile;
    this.Uh = f.dark || j;
    this.D = f.minZoom || 0;
    this.Q = f.maxZoom || this.D;
  }
  function Ud(a, b, d) {
    for (var c = 0; c < a.md.length; ++c) {
      var e = a.md[c];
      if (b >= e.D && (e.Da ? e.Da.kd(d) : 1)) return e.Xi;
    }
    return '';
  }
  function Vd(a, b, d) {
    for (var c = 0; c < a.md.length; ++c) {
      var e = a.md[c];
      if (b >= e.D && (e.Da ? e.Da.kd(d) : 1)) return e.Gj;
    }
    return '';
  }
  function la(a, b, d, c) {
    this.Xi = a;
    this.Gj = b;
    this.D = d || 0;
    this.Da = c ? $b(c) : f;
  }
  function wa(a) {
    return Ma + (Na ? 'ssl.daumcdn.net/' : '') + 'map' + a + '.daumcdn.net';
  }
  function mc() {
    return Ma + 'boundary.map.daum.net';
  }
  function Ob(a) {
    return function (b, d, c) {
      var e;
      e = c + 5;
      return -751908 >> e <= b &&
        b <= 1235811 >> e &&
        -249697 >> e <= d &&
        d <= 1274461 >> e
        ? a(b, d, c)
        : bf + 'white.png';
    };
  }
  function yb(a, b) {
    ka[a] = Ca.length;
    Ca.push(b);
  }
  function Wd() {
    Ca[ka.ROADMAP] = dd;
    Ca[ka.SKYVIEW] = ed;
    Ca[ka.HYBRID] = ed;
    Ca[ka.OVERLAY] = fd;
    yb('ROADMAP_HD', Xd);
    yb('SKYVIEW_HD', Yd);
    yb('OVERLAY_HD', Zd);
    Ca[ka.BICYCLE] = $d;
    Ca[ka.BICYCLE_HYBRID] = ae;
    yb('BICYCLE_HD', be);
    yb('BICYCLE_HYBRID_HD', ce);
    Ca[ka.USE_DISTRICT] = de;
    yb('USE_DISTRICT_HD', ee);
    Pb = j;
  }
  function Gc() {
    wb.call(this);
  }
  function Hc() {
    this.a = fe.pop() || gd.cloneNode(l);
  }
  function Qb() {
    this.o = {};
    this.hc = [];
    this.eg = Va(T).createDocumentFragment();
  }
  function ge(a, b, d, c, e) {
    a.Xb.qg
      ? (a = new lc({ x: b, y: d, zoom: c, tileset: e }))
      : ((a = new a.Ef()), (a.x = b), (a.y = d), (a.zoom = c), (a.Sa = e));
    return a;
  }
  function Rb(a) {
    this.o = {};
    this.Xa = [];
    this.b = a;
  }
  function cf(a, b, d, c) {
    var e = [];
    s(
      a.Xa,
      function (a) {
        a = a.sb();
        e = e.concat((b ? Vd(a, d, c) : Ud(a, d, c)) || []);
      },
      a,
    );
    return e;
  }
  function hd() {
    Qb.call(this);
  }
  function nc(a) {
    this.o = {};
    this.k = a || {};
    this.a = f;
  }
  function Ic(a) {
    this.o = {};
    this.b = a;
    this.ea = [];
  }
  function zb() {
    this.o = {};
  }
  function Jc(a, b) {
    a.Wf && ra(a.a, a.Xf || (b ? he : df));
  }
  function Ab(a) {
    Qb.call(this);
    this.i = a;
    this.fg = [];
    a.addListener('tilesloaded', this.Rf, this);
  }
  function Sb() {
    this.o = {};
    this.i = [];
    this.Oc = 0;
  }
  function Z() {
    this.o = {};
  }
  function oc(a, b, d, c, e) {
    var g = d || {};
    d instanceof B && (g = { offset: d, shape: c, coords: e });
    this.Yj = a;
    this.lf = b;
    this.Jj = g.spriteSize || b;
    this.Qd = g.offset || new B((b.m() - 1) >> 1, b.h() - 1);
    this.de = g.shape || '';
    this.n = g.coords || '';
    this.Ij = g.spriteOrigin || new B(0, 0);
    this.Ih = g.alt || '';
  }
  function o(a) {
    this.o = {};
    a = a || {};
    this.$a = a.zIndex || 0;
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    this.T = a.image || ie;
    hb(a.clickable) && (this.Na = l);
    this.K = a.draggable;
    this.Gb = hb(a.active);
    this.M();
    this.eh(a.title || '');
    a.opacity && this.hf(a.opacity);
    this.F(a.map || f);
    K && ((this.bb = new Ja(750)), this.bb.addListener('tick', this.Yd, this));
  }
  function je(a) {
    if (a.T.de) {
      var b = a.Fc,
        d = a.Ec;
      if (!b) {
        b = a.Fc = q('img');
        b.src = Tb;
        b.alt = '';
        ya(
          b,
          '-webkit-touch-callout:none;min-width:0;min-height:0;max-width:99999px;max-height:none;border:0;display:block',
        );
        M(b);
        Kb(b);
        a.a.appendChild(b);
        ++ke;
        d = 'daum.maps.Marker.Area:' + ke.toString(36);
        b.useMap = '#' + d;
        var c = (a.zd = q('map'));
        c.id = d;
        c.name = d;
        a.a.appendChild(c);
        d = a.Ec = q('area');
        d.href = 'javascript:void(0)';
        d.alt = '';
        c.appendChild(d);
        i(d, { webkitTapHighlightColor: 'transparent' });
      }
      c = a.T.lf;
      J(b, c.width, c.height);
      d.shape = a.T.de || 'rect';
      b = a.T;
      c = b.lf;
      d.coords = b.n || [0, 0, c.m(), c.h()].join();
      d.title = a.Fb;
    } else a.fa && (a.fa.title = a.Fb);
  }
  function le(a) {
    var b = a.T.de ? a.Ec : a.fa,
      d = K ? 'touchstart' : ta ? 'MSPointerDown' : 'mousedown';
    a.Nh = k(b, K ? 'touchend' : ta ? 'MSPointerUp' : 'click', a.jd, a);
    a.ki = k(b, d, a.hi, a);
    K ||
      ((a.Ri = k(b, 'mouseover', a.Lc, a)),
      (a.Qi = k(b, 'mouseout', a.Kc, a)),
      (a.vj =
        Bb || me
          ? k(a.a, 'contextmenu', a.li, a)
          : k(b, 'contextmenu', a.Yd, a)));
  }
  function ne(a) {
    a.Ad = j;
    a.Ob = j;
    a.Zd = j;
    K && a.bb.stop();
    y(a.fi);
    y(a.ji);
    id();
  }
  function D(a) {
    this.o = {};
    a = a || {};
    this.ck = w(a.xAnchor, 0.5);
    this.dk = w(a.yAnchor, 0.5);
    var b = (this.a = q('div'));
    M(b);
    this.J(a.zIndex || 0);
    i(b, { whiteSpace: 'nowrap' });
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    a.clickable && (this.Na = l);
    this.Aa = l;
    a.content && this.ce(a.content);
    this.F(a.map || f);
  }
  function oe(a) {
    var b = a.a;
    za(b, (-b.offsetHeight * a.dk) | 0, 0, 0, (-b.offsetWidth * a.ck) | 0);
  }
  function Ua() {
    this.o = {};
    this.Eb = {};
    this.Z = j;
  }
  function jd(a, b) {
    var d = [
      k(b, K ? 'touchstart' : 'mousedown', a.di, a),
      k(b, K ? 'touchmove' : 'mousemove', a.Ue, a),
      k(b, K ? 'touchend' : 'mouseup', a.Xj, a),
    ];
    s(
      ['mouseover', 'mouseout'],
      function (a) {
        var c = k(
          b,
          a,
          function (b) {
            b = this.Fa(K ? b.touches[0] : b);
            h(this, a, b);
          },
          this,
        );
        d.push(c);
      },
      a,
    );
    return d;
  }
  function fa(a) {
    this.k = {};
    a = a || {};
    Ua.call(this);
    this.Ga = [];
    this.Xg = [];
    this.Ic = [];
    this.Ud = [];
    this.Sg = [];
    this.Eb = [];
    this.Vb(a);
    this.k.zIndex = a.zIndex || 0;
    this.Db(a);
    this.F(a.map || f);
  }
  function pe(a, b) {
    var d = (a.Sg = b || []);
    kd(d[0]) || (d = [d]);
    a.Ud = Ib(d, function (a) {
      return Ib(a, I);
    });
    a.Z = l;
  }
  function qe(a, b) {
    b = !!b;
    b != a.qd &&
      (s(
        a.Ic,
        function (a) {
          this.G.nb(a, b);
        },
        a,
      ),
      (a.qd = b));
  }
  function da(a) {
    fa.call(this, a);
  }
  function ma(a) {
    this.k = {};
    a = a || {};
    Ua.call(this);
    this.xb = f;
    this.Ga = [];
    this.k.zIndex = a.zIndex || 0;
    this.Vb(a);
    this.Db(a);
    this.F(a.map || f);
  }
  function re(a, b) {
    if (!a.Da || !a.Da.Ib(b)) (a.Da = $b(b)), (a.Z = l);
  }
  function U(a) {
    this.k = {};
    a = a || {};
    Ua.call(this);
    this.qb = f;
    this.Ga = [];
    this.k.zIndex = a.zIndex || 0;
    this.Vb(a);
    this.Hc || (a.radius = w(a.radius, 100));
    this.Db(a);
    this.F(a.map || f);
  }
  function se(a, b) {
    var d = a.k.center;
    if (!d || !d.ua(b)) (a.n = I(b)), (a.Z = l);
  }
  function C(a) {
    a.rx = w(a.rx, 100);
    a.ry = w(a.ry, 100);
    U.call(this, a);
  }
  function x(a) {
    this.o = {};
    a = a || {};
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    this.rj = !!a.removable;
    this.Qd = a.offset || ef;
    this.M();
    this.J(a.zIndex || 0);
    te(this, a.content || '');
    this.Kf = !a.disableAutoPan;
    this.F(a.map || f);
    this.If = f;
  }
  function te(a, b) {
    a.cc = b;
    for (var d = a.Uf, c; (c = d.firstChild); ) d.removeChild(c);
    yc(b) ? (d.innerHTML = b) : d.appendChild(b);
  }
  function ld(a) {
    var b = a.a,
      d = a.Uf;
    J(b, 640, 'auto');
    var c = (a.S = A(150, d.offsetWidth)),
      a = (a.O = A(23, d.offsetHeight));
    J(b, c, a);
    d.className = d.className;
  }
  function Kc() {
    this.o = {};
  }
  function Cb() {
    this.o = {};
    this.Ub = new Kc();
    this.Uc = this.Aa = l;
    this.position = 0;
    this.ah = j;
    this.Hh = ['left', 'right'];
  }
  function ue(a, b) {
    b = !!b;
    b != a.Uc && ((a.Uc = b) ? a.Ub.show() : a.Ub.P());
  }
  function cb(a) {
    this.o = {};
    this.a = a;
    if (
      'static' ==
      (a.currentStyle || a.ownerDocument.defaultView.getComputedStyle(a, f))
        .position
    )
      a.style.position = 'relative';
    a.style.overflow = 'hidden';
    Wa(a, 'url(' + qa + 'bg_tile.png)');
  }
  function Lc(a, b) {
    this.ja(a, b);
  }
  function pc(a, b, d) {
    var b = A(a.D, N(a.Q, b)),
      c = z(2, b - a.H);
    a.ka = d.la((a.ka.e() - d.e()) * c, (a.ka.c() - d.c()) * c);
    a.ca = d.la((a.ca.e() - d.e()) * c, (a.ca.c() - d.c()) * c);
    a.H = b;
  }
  function ha(a) {
    var b = z(2, -a.H);
    return H((a.ca.e() - a.ka.e()) * b);
  }
  function ia(a) {
    var b = z(2, -a.H);
    return H((a.ka.c() - a.ca.c()) * b);
  }
  function Db(a, b) {
    var d = a.B(),
      c = z(2, -a.H);
    return new La((d.e() * c + b.e()) / c, (d.c() * c + a.h() - b.c()) / c);
  }
  function Ub(a, b) {
    this.ja(a, b);
    this.kc = db;
  }
  function md(a, b) {
    var d;
    this.o = {};
    this.a = a;
    this.Ck = this.Gb = j;
    this.kh = 32;
    'object' === typeof b || b
      ? ((d = l), b.speed && 0 <= b.speed && (this.kh = b.speed))
      : (d = j);
    this.$c = j;
    this.Dg = this.eb = 0;
    this.ic = new Ya();
    this.ic.addListener('tick', this.Ca, this);
    this.Kd = this.ra = this.Me = this.Oe = this.Ne = 0;
    this.hb = new Ya();
    this.hb.addListener('tick', this.L, this);
    this.Ld = new Ja(this.Ui);
    this.Ld.addListener('tick', this.Ti, this);
    this.Zf = new Ja(50);
    this.Zf.addListener('tick', this.Yh, this);
    this.setActive(d);
  }
  function ve(a, b) {
    a.Ki !== b &&
      ((a.$c = j),
      b
        ? ((a.Fg = k(document, 'keydown', a.Ji, a)),
          (a.Gg = k(document, 'keyup', a.Li, a)))
        : (y(a.Fg), y(a.Gg), (a.Fg = f), (a.Gg = f), we(a)),
      (a.Ki = b));
  }
  function we(a) {
    a.hb.stop();
    a.Kd = 0;
    a.ra = 0;
    a.eb = 0;
  }
  function qc(a) {
    cb.call(this, a);
    this.Gh = [];
    this.b = new Lc(this.a.clientWidth, this.a.clientHeight);
    a = f;
    document.createElementNS &&
    document.implementation &&
    document.implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
      '1.1',
    )
      ? (a = new ub())
      : P.HTMLCanvasElement
      ? (a = new Yc())
      : document.namespaces &&
        document.namespaces.add &&
        (document.namespaces.add(
          'v',
          'urn:schemas-microsoft-com:vml',
          '#default#VML',
        ),
        (a = new Zc()));
    this.G = a;
    this.ta = new zb();
    ca(this, this.ta);
    a = this.ta.a;
    a.style.cssText += 'left:0;top:0;width:100%;height:100%;touch-action:none';
    Oa &&
      i(a, {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-focus-ring-color': 'rgba(0, 0, 0, 0)',
      });
    this.t = new zb();
    this.t.b = this.b;
    ca(this.ta, this.t);
    this.t.addListener('pan', this.Ta, this);
    this.t.addListener('panned', this.Ye, this);
    this.t.addListener('canceled', this.ij, this);
    var b = (this.i = new Sb());
    this.u = new Ab(b);
    this.u.b = this.b;
    ca(this.t, this.u);
    this.u.addListener('scaled', this.Ab, this);
    this.na = new Ab(b);
    this.na.b = this.b;
    ca(this.t, this.na);
    this.na.addListener('scaled', this.Ab, this);
    b.addListener('tilesloaded', this.qh, this);
    this.ia = new Rb(this.b);
    ca(this.t, this.ia);
    this.ma = new Ic(this.b);
    ca(this.t, this.ma);
    this.Oa = new Cb();
    this.Oa.addListener('logo', this.ej, this);
    ca(this, this.Oa);
    this.I = new hc();
    this.I.b = this.b;
    this.I.be(this.G);
    ca(this.t, this.I);
    this.da = new vb();
    ca(this.t, this.da);
    this.xc = new Nb(this.b);
    ca(this, this.xc);
    this.oe = Q;
    this.Qc = f;
    this.Ug = j;
    this.gj = l;
    this.bb = new Ja(750);
    this.bb.addListener('tick', this.mi, this);
    K
      ? ((this.Ik = k(a, 'touchstart', this.Uj, this)),
        (this.Ei = k(a, 'touchmove', this.vg, this)),
        (this.Fi = k(a, 'touchend', this.wg, this)))
      : ((this.Dk = k(a, 'mousedown', this.Qe, this)),
        (this.Ei = k(a, 'mousemove', this.vg, this)),
        (this.Fi = k(a, 'mouseup', this.wg, this)));
    k(a, 'mouseover', this.Lc, this);
    k(a, 'mouseout', this.Kc, this);
    k(a, 'contextmenu', this.Yd, this);
  }
  function xe(a, b) {
    var d = a.ta.a;
    b && !a.K
      ? ((d.style.Sj = 'none'), a.pc(f), a.ta.pc(l), (a.K = l))
      : !b &&
        a.K &&
        ((d.style.Sj = 'auto'),
        a.ga !== f && a.ub(f, l),
        a.pc('default'),
        a.ta.pc(j),
        (a.K = j));
  }
  function ye(a, b) {
    if (b && !a.ae) {
      var d = a.ta.a;
      a.Pi = k(d, 'mousewheel', a.Te, a);
      a.Oi = k(d, 'DOMMouseScroll', a.Te, a);
      a.bk = k(d, 'wheel', a.Te, a);
      a.ae = l;
    } else !b && a.ae && (y(a.Pi), y(a.Oi), y(a.bk), (a.ae = j));
  }
  function ze(a, b) {
    if (b && !a.ze) {
      var d = a.ta.a;
      a.si = k(d, Oa ? 'touchstart' : 'gesturestart', a.ig, a);
      ta &&
        ((a.Ve = new P.MSGesture()),
        (a.Ve.target = a.t.a),
        (a.Pc = 0),
        (a.Wi = k(d, 'MSPointerDown', a.ig, a)),
        (a.Vi = k(d, 'selectstart', aa, a)));
      a.ze = l;
    } else
      !b &&
        a.ze &&
        (y(a.si), ta && (y(a.Wi), y(a.Vi), (a.Ve = f), (a.Pc = 0)), (a.ze = j));
  }
  function Ia(a) {
    var b = a.u.sb(),
      d = a.b.j(),
      c = a.b.C().W(a.g);
    a.Oa.V(d);
    ue(a.Oa, a.Uc && 320 < a.b.m());
    var e = 480 > a.b.m(),
      b = [].concat((e ? Vd(b, d, c) : Ud(b, d, c)) || []),
      b = b.concat(cf(a.ia, e, d, c), a.Gh),
      a = a.Oa,
      d = b;
    qb(d, '');
    a.Mj.innerHTML = d[0] ? ', ' + d.join(', ') : '';
  }
  function Ae(a, b) {
    var d = Ca[b],
      c = a.b,
      e = A(a.Id, d.D);
    c.D = e;
    e = N(a.Hd, d.Q);
    c.Q = e;
    c.j() < d.D && (pc(c, d.D, c.C()), s(a.sa, Mc), a.I.q(), a.ia.q());
    c.j() > d.Q && (pc(c, d.Q, c.C()), s(a.sa, Mc), a.I.q(), a.ia.q());
    Be(a);
    a.u.Yc(d);
    a.u.q();
    b != ka.HYBRID
      ? a.yd && (a.bf(ka.OVERLAY), (a.yd = j))
      : a.xa != ka.HYBRID && !a.yd && (a.ne(ka.OVERLAY, l), (a.yd = l));
    Ia(a);
    c = a.Oa;
    d = d.Uh;
    i(c.a, { color: d ? '#fff' : '#000' });
    c.Mh.src = d ? ff : Ce;
    c = c.Ub;
    i(c.Lf, { 'border-color': d ? '#fff' : '#000' });
    i(c.$f, { color: d ? '#fff' : '#000' });
    a.xa = b;
  }
  function De(a, b) {
    if (!a.A && ((a.Ug = Eb(a)), Jc(a.ta, l), a.ga === f)) {
      Ee.pause();
      a.Sc();
      var d = Va(a.t.a);
      K
        ? ((a.wh = k(d, 'touchmove', a.Tj, a, { passive: j })),
          (a.uh = k(d, 'touchend', a.vh, a)),
          (a.th = k(d, 'touchcancel', a.vh, a)))
        : ta
        ? ((a.Re = k(d, 'MSPointerMove', a.Jd, a)),
          (a.Se = k(d, 'MSPointerUp', a.ub, a)))
        : ((a.Re = k(d, 'mousemove', a.Jd, a)),
          (a.Se = k(d, 'mouseup', a.ub, a)));
      a.ga = l;
      d = sa(b.touches ? b.touches[0] : b, a.a);
      a.Pa = d.e();
      a.Qa = d.c();
      a.Yb = [];
    }
  }
  function Fe(a, b, d, c, e, g) {
    if (!a.A && (b || d)) {
      var m = a.b,
        f = ha(m),
        m = ia(m);
      a.Dd = a.b.C();
      b = a.Qc = new Xc({
        duration: c,
        Zb: e,
        nf: f,
        of: m,
        se: f - b,
        ue: m - d,
      });
      a.t.fj(b);
      b.start();
      g || (a.A = l);
    }
  }
  function rc(a, b, d, c) {
    Eb(a);
    a.Sb = j;
    var c = c || {},
      e = a.b,
      g = (a.Bb = a.Bb || Db(a.b, d)),
      m = e.j() + b;
    if (m < e.D || m > e.Q) (a.Bb = f), (a.A = j);
    else {
      a.ed = !!b;
      a.ed && h(a, 'zoom_start');
      var X = z(2, -e.j()),
        ba = d.e() + H((e.B().e() - e.ca.e()) * X),
        d = d.c() - H((e.B().c() - e.ca.c()) * X);
      a.Dd = e.C();
      pc(e, m, g);
      a.Oa.V(e.j());
      g = c.duration;
      m = c.Zb;
      a.oe = c.complete || Q;
      c.Lh
        ? ((c = ha(e)),
          (X = ia(e)),
          (e = bd(e.C(), e)),
          a.Pe(b, ba, d, c, X, c + (e.e() - ba), X + (e.c() - d), g, m))
        : a.$d(b, ba, d, g, m);
    }
  }
  function Be(a) {
    Fc(a.na.a, 1);
    $(a.na.a, 0, 0);
    Aa(a.u.a, 0);
    Aa(a.na.a, 1);
    var b = a.u;
    a.u = a.na;
    a.na = b;
    a.u.show();
  }
  function Ge(a) {
    var b = a[0],
      a = a[1];
    return z(z(b.screenX - a.screenX, 2) + z(b.screenY - a.screenY, 2), 0.5);
  }
  function He(a) {
    a.Be != f &&
      (Oa && (y(a.Ae), (a.Ae = f)), y(a.Be), y(a.hg), (a.Be = f), (a.hg = f));
  }
  function mb(a) {
    h(a, 'idle');
  }
  function Vb(a) {
    a.u.q();
    a.I.q();
    a.ia.q();
    s(a.sa, Mc);
  }
  function Nc(a) {
    a.Ag && (a.qh(), (a.Ag = j));
  }
  function Eb(a) {
    return a.Qc && a.gj ? (a.Qc.cancel(), l) : j;
  }
  function r(a, b) {
    nd = !!hb(b.tileAnimation);
    qc.call(this, a);
    this.sa = [];
    this.Lb = [];
    this.Ra = new Dc();
    gc(this.Ra, this.da);
    gc(this.Ra, this.I);
    this.I.Lb = this.Lb;
    var d = b.projectionId;
    this.Fk = d;
    this.g = d === f ? new Ha(this.b) : new $c(this.b);
    var b = b || {},
      d = b.mapTypeId || 1,
      c = Ca[d],
      e = this.b;
    this.Id = w(b.minLevel, -Infinity);
    this.Hd = w(b.maxLevel, Infinity);
    var g = A(this.Id, c.D);
    e.D = g;
    c = N(this.Hd, c.Q);
    e.Q = c;
    e.V(A(e.D, N(e.Q, w(b.level, 3))));
    c = I(b.center);
    e.za(va(c, this.g));
    e.ca = this.b.B();
    Ae(this, d);
    hb(b.$scale) && ((this.Uc = l), ue(this.Oa, l));
    d = hb(b.draggable);
    xe(this, d);
    d && ((d = hb(b.scrollwheel)), ye(this, d), ze(this, d));
    b.disableDoubleClick ||
      (k(this.ta.a, 'dblclick', this.Yf, this),
      K &&
        ((this.od = new Ja(500)),
        this.od.addListener('tick', this.yg, this),
        k(this.ta.a, 'touchstart', this.Lj, this),
        k(this.ta.a, 'touchend', this.bi, this)));
    this.Qb = f;
    this.bh(b.keyboardShortcuts);
    this.hj = !!b.enablePanAnimation;
    this.ai = !b.disableDoubleClickZoom;
    hb(b.$status) || this.Oa.P();
    Ia(this);
    k(P, 'resize', this.Ia, this);
  }
  function Mc(a) {
    a.aa();
  }
  function Ie(a, b, d) {
    var d = d || {},
      c = d.padding || {},
      e = a.gd(b, c.top, c.right, c.bottom, c.left),
      c = a.b,
      g = c.j(),
      m = e.zoom;
    if (m == g) a.Vg(e.ac.W(a.g), d);
    else {
      var d = c.C(),
        e = e.ac,
        f = Math.pow(2, m - g),
        d = a.g.ab(
          a.g.qe((f * d.e() - e.e()) / (f - 1), (f * d.c() - e.c()) / (f - 1)),
        );
      0 <= d.x && d.x < c.m() && 0 <= d.y && d.y < c.h()
        ? rc(a, m - g, d)
        : a.Vc(b);
    }
  }
  function na(a, b) {
    return new S(a, b);
  }
  function od(a) {
    var b = (a.Mc = '__daum$' + ++Je + (+new Date()).toString(36));
    P[b] = new ja(a);
  }
  function gf(a) {
    a.aa();
  }
  function R(a, b) {
    cb.call(this, a);
    this.da = new vb();
    ca(this, this.da);
    this.Ra = new Dc();
    gc(this.Ra, this.da);
    this.Tg = l;
    this.b = new Ub(a.clientWidth, a.clientHeight);
    this.g = new Za(this.b);
    od(this);
    this.ba = Je;
    this.k = b = b || {};
    b.serviceName = Na ? 'maptunneling' : 'mapOpenApi';
    this.Zj = b.viewerUrl || hf;
    this.b.V(w(b.zoom, 0));
    b && b.panoId ? this.U(w(b.panoId, 0)) : this.U(0);
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
    this.ma = new Ic(new Lc(a.clientWidth, a.clientHeight));
    ca(this, this.ma);
    var d = this.ma,
      c = new nc({ background: '#fff', opacity: 1 });
    d.me(c);
    var e = this.ma.a;
    i(e, { width: '100%', height: '100%', zIndex: 3 });
    var g = c.a;
    ya(
      g,
      'z-index:3; height:92%; padding:10px 2% 5px; margin:-100$ 2% 5px; background:url(" ',
    );
    i(g, {
      zIndex: 3,
      height: 'auto',
      width: '92%',
      padding: '10px',
      margin: '-100% 2% 5px',
      'background-image':
        'url("' + Ma + 't1.daumcdn.net/mapjsapi/images/bg_1x1_white_80.png")',
      'background-repeat': 'repeat',
      fontSize: '14px',
      'box-shadow': '3px 5px rgba(0, 0, 0, 0.3)',
      'word-break': 'break-all',
      transition: 'margin 1s',
    });
    P.setTimeout(function () {
      i(g, { marginTop: '5px' });
    }, 100);
    var m = q('p');
    i(m, { margin: 0 });
    m.innerHTML = '';
    m.appendChild(
      document.createTextNode(
        '[\uacf5\uc9c0]Flash Player \uc9c0\uc6d0 \uc885\ub8cc \uc608\uc815\uc5d0 \ub530\ub978 \ub85c\ub4dc\ubdf0 API \uc5c5\ub370\uc774\ud2b8 \uc548\ub0b4',
      ),
    );
    var X = q('p');
    i(X, { margin: '0.5em 0px 0' });
    var ba = q('a');
    ba.href = 'https://kakaomap.tistory.com/325';
    ba.target = '_blank';
    i(ba, {
      color: '#0000FF',
      'text-decoration': 'underline',
      cursor: 'pointer',
    });
    ba.innerHTML = '';
    ba.appendChild(
      document.createTextNode(
        '\ube14\ub85c\uadf8 \uacf5\uc9c0 \ud655\uc778\ud558\uae30',
      ),
    );
    X.appendChild(ba);
    ba = q('a');
    i(ba, { 'margin-left': '15px' });
    ba.href = 'https://devtalk.kakao.com/t/flash-player-api-2020-11-10/110686';
    ba.target = '_blank';
    i(ba, {
      color: '#0000FF',
      'text-decoration': 'underline',
      cursor: 'pointer',
    });
    ba.innerHTML = '';
    ba.appendChild(
      document.createTextNode(
        '\ub370\ube0c\ud1a1 \uacf5\uc9c0 \ud655\uc778\ud558\uae30',
      ),
    );
    X.appendChild(ba);
    m.appendChild(X);
    g.appendChild(m);
    e.appendChild(g);
    var h, j;
    h = k(e, 'click', function () {
      i(g, { marginTop: '-100%' });
      i(e, { zIndex: -999 });
      setTimeout(function () {
        d.af(g);
        y(h);
        y(j);
        c = f;
      }, 1e3);
    });
    j = k(e, 'mousedown', aa);
  }
  function Ke(a, b) {
    if (a.Tg !== b) {
      var d = a.da.a;
      b ? ib(d) : Ra(d);
      a.Tg = b;
    }
  }
  function V(a, b) {
    cb.call(this, a);
    this.k = b || {};
    this.k.imageQuality = w(b && b.imageQuality, Pb ? 1 : 0);
    this.k.disableCSS3View = b && !!b.disableCSS3View;
    this.i = [];
    od(this);
    this.b = new Ub(a.clientWidth, a.clientHeight);
    (Le = Le || new Fb()).Nb(this);
    b && b.panoId && this.U(w(b.panoId, 0));
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
  }
  function Fb() {
    this.R = 0;
    this.i = [];
  }
  function S(a, b) {
    cb.call(this, a);
    this.k = b || {};
    this.k.imageQuality = w(b && b.imageQuality, Pb ? 1 : 0);
    this.k.disableCSS3View = b && !!b.disableCSS3View;
    this.i = [];
    od(this);
    this.b = new Ub(a.clientWidth, a.clientHeight);
    (Me = Me || new Gb()).Nb(this);
    b && b.panoId && this.U(w(b.panoId, 0));
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
  }
  function Gb() {
    this.R = 0;
    this.i = [];
  }
  function ja(a) {
    this.l = a;
  }
  function Oc(a) {
    var b,
      a = a || {};
    b =
      sc && !Na
        ? '//spi.maps.daum.net/rv/'
        : Ma + (Na ? 'ssl.daumcdn.net/' : '') + 'rv.maps.daum.net/';
    this.jj = a.panoramaDataUrl || b + 'roadview-search/searchNodeInfo.do';
  }
  function nb() {}
  function oa(a, b) {
    cb.call(this, a);
    this.b = new Lc(this.a.clientWidth, this.a.clientHeight);
    this.g = new $c(this.b);
    this.b.V(w(b.level, 3));
    var d = I(b.center);
    this.b.za(va(d, this.g));
    this.b.ca = this.b.B();
    this.xa = b.mapTypeId || 1;
    this.dg = b.format || '';
    this.gb = b.marker || [];
    this.Bi = b.hasOwnProperty('link');
    this.Ig = b.link || '';
    this.Gd = new pd();
    this.Gd.b = this.b;
    ca(this, this.Gd);
    this.Va();
  }
  function tc(a) {
    return a.b.C().W(a.g);
  }
  function jf(a) {
    a = a.b.C().W(a.g);
    return 'MX=' + String(a.e() | 0) + '&MY=' + String(a.c() | 0);
  }
  function pd() {
    this.o = {};
  }
  var T = void 0,
    l = !0,
    f = null,
    j = !1,
    c,
    N = Math.min,
    A = Math.max,
    z = Math.pow,
    Wb = Math.round,
    H = Math.floor,
    Ba = Math.abs,
    Ne = Math.PI,
    kf = Math.sin,
    lf = Math.cos,
    Pc = Math.sqrt,
    eb = 'ActiveXObject' in P,
    Oe = eb && 'Netscape' == navigator.appName,
    ob = eb && !P.HTMLCanvasElement,
    Bb = -1 == navigator.appVersion.indexOf('MSIE 7.') ? j : l,
    me = 7 === document.documentMode ? l : j,
    Hb = ob && !P.XMLHttpRequest;
  if (Hb)
    try {
      document.execCommand('BackgroundImageCache', j, l);
    } catch (zf) {}
  var Na = (P.kakao.maps.TUNNELING && l) || j,
    Pb = 1 < P.devicePixelRatio,
    sc = 'https:' == P.location.protocol,
    Ma = sc ? 'https://' : 'http://',
    bf = Ma + (Na ? 'ssl.daumcdn.net/' : 's1.daumcdn.net/') + 'dmaps/apis/',
    uc =
      Ma +
      (Na ? 'ssl.daumcdn.net/' : '') +
      't1.daumcdn.net/localimg/localimages/07/mapjsapi/',
    qa =
      Ma + (Na ? 'ssl.daumcdn.net/' : '') + 't1.daumcdn.net/mapjsapi/images/',
    Pe = Ma + (Na ? 'ssl.daumcdn.net/' : '') + 'dmaps.daum.net/apis/';
  Pb && ((uc += '2x/'), (qa += '2x/'));
  sc && !Na && (Pe = '//spi.maps.daum.net/imap/apis/');
  var Tb = qa + 'transparent.gif',
    Oa = 0 <= navigator.userAgent.indexOf('Android'),
    ta = !!navigator.msMaxTouchPoints,
    Qe = 0 <= navigator.userAgent.indexOf('Edge'),
    K =
      'ontouchstart' in document.documentElement &&
      (0 > navigator.userAgent.indexOf('Chrome') || Oa),
    kd = Array.isArray
      ? Array.isArray
      : function (a) {
          return '[object Array]' === Object.prototype.toString.call(a);
        },
    E = P.daum.maps.VERSION || {};
  E.Bf = E.ROADMAP || 'var2201';
  E.zf = E.HYBRID || 'var2201';
  E.Ch = E.ROADVIEW || '3.00';
  E.pk = E.SR || '2.00';
  E.Fh = '?v=' + (E.SKYVIEW_VERSION || '141021');
  E.Eh = '?v=' + (E.SKYVIEW_HD_VERSION || '160107');
  E.Dh = E.ROADVIEW_FLASH || '130422';
  E.Cf = 'DEFUNCT';
  E.Df = 'DEFUNCT';
  E.yf = E.BICYCLE || '2.00';
  E.Ff = E.USE_DISTRICT || '1.0.0';
  var Xb = P.daum.maps.RESOURCE_PATH || {};
  Xb.Cf =
    Xb.ROADVIEW_AJAX ||
    '//t1.daumcdn.net/roadviewjscore/core/css3d/190723/standard/1563862560801/roadview.js';
  Xb.Df =
    Xb.ROADVIEW_CSS ||
    't1.daumcdn.net/roadviewjscore/core/openapi/standard/201030/roadview.js';
  var Xa = P;
  [].indexOf ||
    (Qa = function (a, b) {
      for (var d = 0, c = a.length; d < c; ++d) if (a[d] === b) return d;
      return -1;
    });
  [].forEach ||
    (s = function (a, b, d) {
      for (var c = 0, e = a.length; c < e; ++c)
        c in a && b.call(d || a, a[c], c, a);
    });
  [].map ||
    (Ib = function (a, b, d) {
      for (var c = [], e = 0, g = a.length; e < g; ++e)
        c[e] = b.call(d || a, a[e]);
      return c;
    });
  var Dd = [],
    Yb = document.documentElement.style,
    fb =
      'cssFloat' in Yb
        ? function (a) {
            a.style.cssFloat = 'left';
          }
        : function (a) {
            i(a, { display: 'inline', styleFloat: 'left' });
          },
    $e = ['-webkit-', '-moz-', '-ms-', '-o-', ''],
    df =
      eb || Qe
        ? 'url(' + qa + 'cursor/openhand.cur.ico), default'
        : 'url(' +
          qa +
          'cursor/openhand.cur.ico) 7 5, url(' +
          qa +
          'cursor/openhand.cur.ico), default',
    he =
      eb || Qe
        ? 'url(' + qa + 'cursor/closedhand.cur.ico), move'
        : 'url(' +
          qa +
          'cursor/closedhand.cur.ico) 7 5, url(' +
          qa +
          'cursor/closedhand.cur.ico), move',
    Re = Hb
      ? function (a, b) {
          var d =
            'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            encodeURI(b) +
            '",sizingMethod=crop)';
          a.style.filter = d;
        }
      : function (a, b) {
          Wa(a, 'url(' + b + ') no-repeat');
        },
    qd =
      Yb.webkitTransition !== T
        ? 'webkitTransitionEnd'
        : Yb.transition !== T
        ? 'transitionend'
        : '',
    Fc =
      (Yb.webkitTransform !== T &&
        /iPad|iPhone|Android/i.test(navigator.userAgent)) ||
      ta
        ? function (a, b) {
            i(a, {
              transform: 'scale(' + b + ')',
              '-webkit-transform': 'scale(' + b + ')',
            });
          }
        : Q,
    vc =
      Yb.opacity !== T
        ? function (a, b) {
            a.style.opacity = b;
          }
        : function (a, b) {
            a.style.filter = 'alpha(opacity=' + ((100 * b) | 0) + ')';
          },
    mf = qd
      ? function (a, b, d, c) {
          d = (d || 0) + 's';
          c = c || 'ease';
          i(a, {
            '-webkit-transition-property': b,
            transitionProperty: b,
            '-webkit-transition-duration': d,
            transitionDuration: d,
            '-webkit-transition-timing-function': c,
            transitionTimingFunction: c,
          });
        }
      : Q,
    Yb = f,
    Vc = {},
    af = 0,
    rd = document.releaseCapture
      ? function (a) {
          a.setCapture();
        }
      : Q,
    id = document.releaseCapture
      ? function () {
          document.releaseCapture();
        }
      : Q;
  Fa.prototype.addListener = function (a, b, d) {
    var c = this.o;
    (c[a] = c[a] || []).push({ Pf: b, object: d || f });
  };
  Fa.prototype.removeListener = function (a, b, d) {
    if ((a = this.o[a])) {
      for (var d = d || f, c = 0, e = 0, g = a.length; e < g; ++e) {
        var m = a[e];
        if (m.Pf !== b || m.object !== d) (a[c] = m), ++c;
      }
      a.length = c;
    }
  };
  Fa.prototype.X = function () {
    this.o = f;
  };
  n(Ja, Fa);
  c = Ja.prototype;
  c.tc = function () {
    h(this, 'tick');
    this.ba = 0;
  };
  c.X = function () {
    this.stop();
    Ja.Wb.X.call(this);
  };
  c.cb = function () {
    return 0 !== this.ba;
  };
  c.ba = 0;
  c.start = function () {
    this.ba || (this.ba = setTimeout(xa(this.tc, this), this.Wh));
  };
  c.stop = function () {
    this.ba && (clearTimeout(this.ba), (this.ba = 0));
  };
  n(Ya, Ja);
  Ya.prototype.tc = function (a) {
    this.Of.call(Xa, this.ba);
    this.ba = this.pj.call(Xa, xa(this.tc, this));
    h(this, 'tick', a || 0);
  };
  Ya.prototype.start = function () {
    this.ba || this.tc();
  };
  Ya.prototype.stop = function () {
    this.cb() && (this.Of.call(Xa, this.ba), (this.ba = f));
  };
  Ya.prototype.cb = function () {
    return this.ba !== f;
  };
  n(Ga, Fa);
  c = Ga.prototype;
  c.a = f;
  c.Td = f;
  c.M = function () {
    this.a = q('div');
  };
  c.X = function () {
    Ga.Wb.X.call(this);
    this.a = f;
  };
  c.removeChild = function (a) {
    this.a.removeChild(a.a);
    a.Td = f;
  };
  c.getParent = p('Td');
  c.q = function () {
    this.a && this.Va();
  };
  c.show = function () {
    i(this.a, { display: '' });
  };
  c.P = function () {
    i(this.a, { display: 'none' });
  };
  c.Va = Q;
  c.b = f;
  n(Ac, Fa);
  var Bc = {
    LINEAR: function (a) {
      return a;
    },
    EASE_IN: function (a) {
      return a * a;
    },
    EASE_OUT: Id,
    EASE_IN_OUT: function (a) {
      return (a * a) / (a * a + (1 - a) * (1 - a));
    },
    QUARTIC_EASE_OUT: Jd,
  };
  c = Ac.prototype;
  c.start = function () {
    this.Ya = new Ya(this.zg);
    this.Ya.addListener('tick', this.Ca, this);
    this.Ya.start();
  };
  c.Ca = function (a) {
    this.qf = this.qf || a;
    this.zg > a - this.qf ||
      ((this.qf = 0),
      (this.ge = this.ge || a),
      (a = N(1, (a - this.ge) / this.ec) || 0),
      (a = this.rf(a)),
      this.Mi(a),
      1 <= a && (h(this, 'done'), this.X()));
  };
  c.reset = function () {
    this.ge = f;
  };
  c.X = function () {
    this.stop();
    Ac.Wb.X.call(this);
  };
  c.stop = function () {
    this.Ya && (this.Ya.X(), (this.Ya = f));
    this.ge = f;
  };
  n(Ka, Fa);
  Ka.prototype.start = function () {
    this.Ca ||
      ((this.Ca = new Ac({
        tj: xa(this.q, this),
        Zb: this.rf,
        duration: this.ec,
      })),
      this.Ca.addListener('done', this.$h, this));
    this.Ca.start();
  };
  Ka.prototype.q = Q;
  Ka.prototype.$h = function () {
    h(this, 'done');
    this.Ca = f;
  };
  Ka.prototype.cancel = function () {
    h(this, 'canceled');
    this.Ca && (this.Ca.X(), (this.Ca = f));
  };
  n(Wc, Ka);
  Wc.prototype.q = function (a) {
    h(this, 'tick', {
      Yg: a,
      yb: this.zb * a + this.vc * (1 - a),
      vb: this.Pa,
      wb: this.Qa,
      je: this.he * (1 - a) + this.te * a,
      ke: this.ie * (1 - a) + this.ve * a,
    });
  };
  n(Xc, Ka);
  Xc.prototype.q = function (a) {
    h(this, 'tick', {
      Yg: a,
      je: this.he + (this.te - this.he) * a,
      ke: this.ie + (this.ve - this.ie) * a,
    });
  };
  n(dc, Ka);
  dc.prototype.q = function (a) {
    this.Hg = a;
    h(this, 'tick', {
      Yg: a,
      yb: this.zb * a + this.vc * (1 - a),
      vb: this.Pa,
      wb: this.Qa,
    });
  };
  dc.prototype.reset = function (a) {
    this.vc = this.zb * this.Hg + this.vc * (1 - this.Hg);
    this.zb *= a;
    this.Ca.reset();
  };
  c = Cc.prototype;
  c.r = f;
  c.nd = Q;
  c.X = function () {
    this.r = f;
  };
  c.ja = Q;
  c.Ea = Q;
  c.Cb = Q;
  c.zc = Q;
  c.rd = Q;
  try {
    eval('document.namespaces');
  } catch (Af) {}
  n(Yc, Cc);
  c = Yc.prototype;
  c.nd = function () {
    return q('canvas');
  };
  c.create = function (a) {
    return {
      type: a,
      visible: l,
      Wg: [],
      closed: j,
      attachEvent: Q,
      detachEvent: Q,
    };
  };
  c.uc = function (a) {
    this.ee.push(a);
  };
  c.dc = function (a) {
    qb(this.ee, a);
    ec(this);
  };
  c.nb = function (a, b) {
    a.visible = !!b;
    ec(this);
  };
  c.ja = function (a, b) {
    J(this.r, a, b);
    this.r.width = a;
    this.r.height = b;
    this.Ea();
  };
  c.Ea = function () {
    var a = this.r.getContext('2d');
    a.setTransform(1, 0, 0, 1, 0, 0);
    a.clearRect(0, 0, this.r.width, this.r.height);
  };
  c.rc = function (a, b) {
    var d = (b.strokeColor || '#F10000').match(/\w\w/g);
    a.strokeStyle =
      'rgba(' +
      parseInt(d[0], 16) +
      ',' +
      parseInt(d[1], 16) +
      ',' +
      parseInt(d[2], 16) +
      ',' +
      w(b.strokeOpacity, 0.6) +
      ')';
    a.Kj = b.startArrow;
    a.ni = b.endArrow;
    a.lineCap = b.lineCap;
    a.ad = w(b.strokeWeight, 3);
    d = (b.fillColor || '#F10000').match(/\w\w/g);
    a.fillStyle =
      'rgba(' +
      parseInt(d[0], 16) +
      ',' +
      parseInt(d[1], 16) +
      ',' +
      parseInt(d[2], 16) +
      ',' +
      (b.fillOpacity || 0) +
      ')';
    a.zIndex = b.zIndex;
  };
  c.zc = function (a, b, d) {
    a.Wg = b;
    a.closed = d;
    ec(this);
  };
  c.rd = function (a, b, d, c, e) {
    a.x = b;
    a.y = d;
    a.nj = c;
    a.oj = e;
    ec(this);
  };
  c.wc = function (a, b) {
    a.zIndex = b;
    this.ee.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    });
    ec(this);
  };
  n(ub, Cc);
  var nf = 0;
  c = ub.prototype;
  c.create = function (a) {
    a = fc(a);
    a.id = this.Vd + '-shape-' + nf++;
    return a;
  };
  c.Vd = 'daum-maps';
  c.nd = function () {
    var a = fc('svg'),
      b = (this.pd = fc('defs'));
    a.appendChild(b);
    Jb(a, {
      version: '1.1',
      style:
        'stroke:none;stroke-dashoffset:0.5;stroke-linejoin:round;fill:none;transform:translateZ(0)',
    });
    return a;
  };
  c.uc = function (a) {
    this.r.appendChild(a);
  };
  c.dc = function (a) {
    var b = Number(a.id.match(/\d+/));
    this.r.removeChild(a);
    s(
      ['start', 'end'],
      function (a) {
        (a = document.getElementById(this.Vd + '-arrow-' + a + '-' + b)) &&
          this.pd.removeChild(a);
      },
      this,
    );
    Md(this, a.id, a.zIndex);
  };
  c.ja = function (a, b) {
    Jb(this.r, { viewBox: [0, 0, a, b].join(' ') });
    J(this.r, a, b);
  };
  c.nb = function (a, b) {
    b ? ib(a) : Ra(a);
  };
  c.Ea = function () {
    for (var a = this.r; a.firstChild != a.lastChild; )
      a.removeChild(a.lastChild);
  };
  var of = {
    dashed: [0.1, 1.9],
    shortdash: [2, 2],
    shortdot: [0.1, 1.9],
    shortdashdot: [2, 2, 0.1, 1.9],
    shortdashdotdot: [2, 2, 0.1, 1.9, 0.1, 1.9],
    dot: [0.1, 3.9],
    dash: [3, 4],
    dashdot: [3, 4, 0.1, 3.9],
    longdash: [7, 4],
    longdashdot: [7, 4, 0.1, 3.9],
    longdashdotdot: [7, 4, 0.1, 3.9, 0.1, 3.9],
  };
  ub.prototype.rc = function (a, b) {
    var d = Number(a.id.match(/\d+/)),
      c = '',
      e = w(b.strokeOpacity, 0.6);
    if (0 < e) {
      var g = b.strokeColor || '#F10000',
        m = w(b.strokeWeight, 3),
        f = of[b.strokeStyle],
        f =
          f &&
          f
            .map(function (a) {
              return a * m;
            })
            .join(','),
        c =
          c +
          ('stroke:' +
            g +
            ';stroke-opacity:' +
            e +
            ';stroke-width:' +
            m +
            'px' +
            (f ? ';stroke-dasharray:' + f : '') +
            ';color:' +
            g +
            ';stroke-linecap:' +
            (b.lineCap || 'round') +
            ';');
      b.startArrow &&
        (c += 'marker-start:url(#' + Ld(this, d, 'start', g) + ');');
      b.endArrow && (c += 'marker-end:url(#' + Ld(this, d, 'end', g) + ');');
    }
    d = b.fillOpacity || 0;
    0 < d &&
      (c +=
        'fill:' +
        (b.fillColor || '#F10000') +
        ';fill-opacity:' +
        d +
        ';fill-rule:evenodd;');
    Jb(a, { style: c });
  };
  ub.prototype.zc = function (a, b, d, c, e) {
    var g = '';
    s(b, function (a) {
      yc(a) && (a = a.match(/\d+/g));
      g +=
        ' M' +
        a[0] +
        ' ' +
        a[1] +
        ' L' +
        a.slice(2).join(' ') +
        (d ? ' Z' : '');
    });
    Jb(a, {
      d: g || 'M0 0',
      transform: 'translate(' + -(c || 0) + ',' + -(e || 0) + ')',
    });
    if (eb) {
      var m = Number(a.id.match(/\d+/));
      s(
        ['start', 'end'],
        function (a) {
          if ((a = document.getElementById(this.Vd + '-arrow-' + a + '-' + m)))
            this.pd.removeChild(a), this.pd.appendChild(a);
        },
        this,
      );
    }
  };
  ub.prototype.rd = function (a, b, d, c, e) {
    Jb(a, { cx: b, cy: d, rx: c, ry: e, gtype: 'oval' });
  };
  ub.prototype.wc = function (a, b, d) {
    var a = a.id,
      c = 0 > Qa(this.ob[d] || [], a);
    if (0 !== b - d || c)
      c
        ? (this.ob[b] = this.ob[b] || []).push(a)
        : ((this.ob[b] = this.ob[b] || []).push(a), Md(this, a, d)),
        (d = Object.keys(this.ob).sort(function (a, b) {
          return Number(a) - Number(b);
        })),
        (b = (b = this.ob[d[Qa(d, b.toString()) + 1]]) ? b[0] : f),
        this.r.insertBefore(
          document.getElementById(a),
          b ? document.getElementById(b) : f,
        );
  };
  n(Zc, Cc);
  c = Zc.prototype;
  c.nd = function () {
    var a = q('div');
    Aa(a, 0);
    return a;
  };
  c.create = function () {
    var a = q('div');
    M(a);
    return a;
  };
  c.uc = function (a) {
    this.r.appendChild(a);
  };
  c.dc = function (a) {
    this.r.removeChild(a);
  };
  c.ja = function (a, b) {
    J(this.r, a, b);
  };
  c.nb = function (a, b) {
    var d = a.firstChild;
    b ? ib(d) : Ra(d);
  };
  c.Ea = function () {
    this.r.innerHTML = '';
  };
  c.rc = function (a, b) {
    var d = b.strokeStyle || 'solid';
    'dashed' == d && (d = 'shortdot');
    var c = b.startArrow ? 'block' : 'none',
      e = b.endArrow ? 'block' : 'none',
      g = b.lineCap || 'round';
    'butt' == g && (g = 'flat');
    var m = w(b.strokeOpacity, 0.6),
      f = b.fillOpacity || 0,
      d = {
        color: b.strokeColor || '#F10000',
        opacity: m,
        endcap: g,
        weight: w(b.strokeWeight, 3) + 'px',
        startarrow: c,
        endarrow: e,
        dashstyle: d,
      },
      c = { color: b.fillColor || '#F10000', opacity: f },
      m =
        '<v:shape unselectable=on coordsize=1,1 style=position:absolute;width:1px;height:1px path="%PATH%">' +
        ((0 < m ? '<v:stroke ' + Nd(d) + ' />' : '<v:stroke on=False />') +
          (0 < f ? '<v:fill ' + Nd(c) + ' />' : '<v:fill on=False />')) +
        '</v:shape>';
    if (a.__tmpl__) {
      var f = a.getElementsByTagName('stroke')[0],
        e = a.getElementsByTagName('fill')[0],
        h;
      for (h in d) f[h] = d[h];
      for (h in c) e[h] = c[h];
    } else a.insertAdjacentHTML('beforeEnd', m);
    a.__tmpl__ = m;
  };
  c.zc = function (a, b, d) {
    var c = '';
    s(b, function (a) {
      yc(a) && (a = a.match(/\d+/g));
      c +=
        'm' + a[0] + ',' + a[1] + 'l' + a.slice(2).join(',') + (d ? 'x' : 'e');
    });
    c || (c = 'm 0,0 e');
    a.innerHTML = a.__tmpl__.replace(/%PATH%/, c);
  };
  c.rd = function (a, b, d, c, e) {
    b |= 0;
    d |= 0;
    c |= 0;
    e |= 0;
    a.innerHTML = a.__tmpl__.replace(
      /%PATH%/,
      'm' +
        b +
        ',' +
        (d - e) +
        ' qx' +
        (b - c) +
        ',' +
        d +
        ' ' +
        b +
        ',' +
        (d + e) +
        ' ' +
        (b + c) +
        ',' +
        d +
        ' ' +
        b +
        ',' +
        (d - e),
    );
  };
  c.wc = function (a, b) {
    Aa(a, b);
  };
  var t = {
    xf: { zoom_end: 'zoom_changed' },
    addListener: function (a, b, d) {
      b = t.xf[b] || b;
      a.addListener(b, d);
    },
    removeListener: function (a, b, d) {
      b = t.xf[b] || b;
      a.removeListener(b, d);
    },
    $e: j,
    Ua: function () {
      t.$e = l;
      setTimeout(t.Wa, 0);
    },
    fb: function () {
      return t.$e;
    },
    Wa: function () {
      t.$e = j;
    },
    Wj: function (a, b, d) {
      h(a, b, d);
    },
  };
  Ta.prototype.toString = function () {
    return '(' + this.m() + ', ' + this.h() + ')';
  };
  Ta.prototype.m = p('width');
  Ta.prototype.h = p('height');
  var ef = new Ta(0, 0);
  Ta.prototype.Ib = function (a) {
    return a instanceof Ta && this.m() == a.m() && this.h() == a.h();
  };
  Lb.prototype.lb = Q;
  Lb.prototype.Vf = Q;
  Lb.prototype.ab = Q;
  Lb.prototype.pe = Q;
  n(Ha, Lb);
  c = Ha.prototype;
  c.ph = function (a, b) {
    return new La(a, b);
  };
  c.qe = function (a, b) {
    return new L(a, b);
  };
  c.lb = function (a) {
    var a = I(a),
      b = this.b,
      a = va(a, this),
      d = b.B(),
      c = z(2, -b.j());
    return new B(
      H(a.e() * c) - H(d.e() * c) - ha(b),
      b.h() - H(a.c() * c) + H(d.c() * c) - ia(b),
    );
  };
  c.Vf = function (a) {
    a = new B(a.e() + ha(this.b), a.c() + ia(this.b));
    a = Db(this.b, a).W(this);
    return ua(a);
  };
  c.ab = function (a) {
    a = I(a);
    return cd(va(a, this), this.b);
  };
  c.pe = function (a) {
    a = Db(this.b, a).W(this);
    return ua(a);
  };
  n($c, Ha);
  n(Za, Lb);
  Za.prototype.lb = function (a, b, d) {
    var c = this.b,
      e = c.ib,
      g,
      m;
    if (!e || !e.getPointFromPanTilt) return new B(-1e4, -1e4);
    if (a instanceof Y)
      (d = w(a.pan, Number(e.getPan()) || 0)),
        (g = w(a.tilt, Number(e.getTilt()) || 0));
    else {
      m = c.v();
      c = a.e() - m.e();
      m = a.c() - m.c();
      a = 0.4 * Pc(Math.pow(c, 2) + Math.pow(m, 2));
      if (d && d < a) return new B(-1e4, -1e4);
      d = 90 - 180 * (Math.atan2(m, c) / Math.PI);
      b === T || (g = 180 * (Math.atan2(-b + 1.7, a) / Math.PI));
    }
    b = e.getPointFromPanTilt(d, g);
    return new B(b.x, b.y);
  };
  Za.prototype.ab = function (a, b, d) {
    return this.lb(a, b, d);
  };
  Za.prototype.$j = function (a, b) {
    var a = I(a),
      d = this.b.v(),
      c = a.e() - d.e(),
      e = a.c() - d.c(),
      d = 0.4 * Pc(Math.pow(c, 2) + Math.pow(e, 2)),
      g = 0,
      c = 90 - 180 * (Math.atan2(e, c) / Math.PI);
    b === T || (g = 180 * (Math.atan2(-b, d) / Math.PI));
    return new Y(c, g);
  };
  n($a, Ga);
  c = $a.prototype;
  c.M = function () {
    this.a = q('div');
    M(this.a);
    Aa(this.a, 1);
  };
  c.Od = 0;
  c.Pd = 0;
  c.Y = function (a, b) {
    this.Od = Wb(a);
    this.Pd = Wb(b);
    $(this.a, this.Od, this.Pd);
  };
  c.$b = function (a, b) {
    var d = (this.Od += Wb(a)),
      c = (this.Pd += Wb(b));
    $(this.a, d, c);
  };
  c.fj = function (a) {
    a.addListener('tick', this.Ta, this);
    a.addListener('done', this.Ye, this);
    a.addListener('canceled', this.Kh, this);
  };
  c.Ta = function (a) {
    this.Y(a.je, a.ke);
    h(this, 'pan', a);
  };
  c.Ye = function () {
    h(this, 'panned');
  };
  c.Kh = function () {
    h(this, 'canceled');
  };
  n(Mb, Ga);
  c = Mb.prototype;
  c.M = function () {
    this.a = q('button');
    fb(this.a);
    ra(this.a, 'pointer');
    J(this.a, this.S, this.O);
    Kb(this.a);
    this.a.style.border = 'none';
    Jb(this.a, { title: this.Fb, type: 'button' });
    ad(this, j);
    this.Je &&
      (k(this.a, 'mouseover', this.Lc, this),
      k(this.a, 'mouseout', this.Kc, this));
    k(this.a, 'mousedown', this.Qe, this);
    k(document, 'mouseup', this.ub, this);
    k(this.a, 'click', this.jd, this);
  };
  c.nc = j;
  c.Lc = function () {
    !this.nc && !this.Hb && rb(this.Je, this.a);
  };
  c.Kc = function () {
    !this.nc && !this.Hb && rb(this.jc, this.a);
  };
  c.Qe = function (a) {
    aa(a);
    Gd(a) && !this.nc && !this.Hb && rb(this.ci || this.jc, this.a);
  };
  c.ub = function () {
    !this.nc && !this.Hb && rb(this.jc, this.a);
  };
  c.jd = function () {
    !this.nc && !this.Hb && (rb(this.Je || this.jc, this.a), h(this, 'click'));
  };
  var sb = 116,
    tb = 264,
    cc = qa + 'control.png';
  n(hc, $a);
  c = hc.prototype;
  c.M = function () {
    hc.Wb.M.call(this);
    var a = this.G;
    a.r || (a.r = a.nd());
    this.r = a.r;
    M(this.r);
    k(this.r, 'mousedown', aa);
    Pd(this);
    this.a.appendChild(this.r);
  };
  c.Va = function () {
    Pd(this);
    s(
      this.Lb,
      function (a) {
        a.aa();
      },
      this,
    );
  };
  c.scale = function (a) {
    a.addListener('done', this.Ab, this);
    a.addListener('tick', this.cf, this);
    this.lj = { x: this.Sf, y: this.Tf };
  };
  c.cf = function (a) {
    var b = a.yb,
      d = a.vb,
      a = a.wb,
      c = this.lj,
      e = this.r,
      g = this.b,
      m = 5 * g.m(),
      g = 5 * g.h();
    $(e, (c.x - d) * b + d, (c.y - a) * b + a);
    J(e, Math.ceil(m * b), Math.ceil(g * b));
  };
  c.Ab = function () {
    this.q();
  };
  c.be = Zb('G');
  n(vb, $a);
  vb.prototype.M = function () {
    var a = (this.a = q('div'));
    M(a);
    Aa(a, 1);
    J(a, '100%', 0);
    i(a, { transform: 'translateZ(0)' });
  };
  n(Nb, Ga);
  Nb.prototype.M = function () {
    var a = (this.a = q('div'));
    ra(a, 'auto');
    M(a);
    Aa(a, 2);
    $(a, 0, 0);
  };
  Nb.prototype.le = function (a, b) {
    a.parentNode != this.a &&
      (Da(b) ? this.$[b].push(a) : this.$[sd].push({ mj: b, element: a }),
      this.a.appendChild(a),
      M(a),
      this.q());
  };
  Nb.prototype.Xd = function (a) {
    a.parentNode == this.a &&
      (s(this.$, function (b) {
        qb(b, a);
      }),
      this.a.removeChild(a),
      this.q());
  };
  Nb.prototype.Va = function () {
    if (0 != this.getParent().a.offsetHeight) {
      var a = this.b.m(),
        b = this.b.h() - 20,
        d = 0;
      s(this.$[wc], function (a) {
        d += 3;
        $(a, d, 3);
        d += a.offsetWidth;
      });
      d = 0;
      s(this.$[td], function (b) {
        d += 3;
        $(b, (a - b.offsetWidth) >> 1, d);
        d += b.offsetHeight;
      });
      d = 0;
      s(this.$[xc], function (b) {
        d += 3 + b.offsetWidth;
        $(b, a - d, 3);
      });
      d = this.$[wc].length ? this.$[wc][0].offsetHeight + 3 : 0;
      s(this.$[ud], function (a) {
        d += 3;
        $(a, 3, d);
        d += a.offsetHeight;
      });
      d = this.$[xc].length ? this.$[xc][0].offsetHeight + 3 : 0;
      s(this.$[Qc], function (b) {
        d += 3;
        $(b, a - 3 - b.offsetWidth, d);
        d += b.offsetHeight;
      });
      d = 0;
      s(this.$[vd], function (a) {
        d += 3;
        $(a, d, b - 3 - a.offsetHeight);
        d += a.offsetWidth;
      });
      d = b;
      s(this.$[wd], function (b) {
        d -= 3 + b.offsetHeight;
        $(b, (a - b.offsetWidth) >> 1, d);
      });
      d = 0;
      s(this.$[xd], function (c) {
        d += 3 + c.offsetWidth;
        $(c, a - d, b - 3 - c.offsetHeight);
      });
      s(this.$[sd], function (d) {
        var c = 0,
          g = 0,
          m = d.element,
          f = d.mj,
          h;
        if ((h = f.top)) g += h;
        if ((h = f.right)) c += a - m.offsetWidth - h;
        if ((h = f.bottom)) g += b + 20 - m.offsetHeight - h;
        if ((h = f.left)) c += h;
        $(d.element, c, g);
      });
    }
  };
  var wc = 0,
    td = 1,
    xc = 2,
    vd = 3,
    wd = 4,
    xd = 5,
    ud = 6,
    Qc = 7,
    sd = 8,
    gb = {
      sk: wc,
      rk: td,
      tk: xc,
      ik: vd,
      hk: wd,
      jk: xd,
      nk: ud,
      ok: Qc,
      kk: sd,
    };
  n(kb, Ga);
  kb.prototype.F = function (a) {
    this.f != a &&
      (a
        ? ((this.f = a),
          this.a ||
            ((this.a = q('div')),
            J(this.a, 106, 32),
            i(this.a, {
              'box-sizing': 'content-box',
              backgroundColor: '#fff',
              padding: '2px',
              'border-radius': '3px',
              'box-shadow': '0 2px 2px 0 rgba(0,0,0,.15)',
            }),
            (this.Nd = new Mb(43, 32, pf, f, f, f, qf, '\uc9c0\ub3c4')),
            (this.fe = new Mb(
              63,
              32,
              rf,
              f,
              f,
              f,
              sf,
              '\uc2a4\uce74\uc774\ubdf0',
            )),
            ca(this, this.Nd),
            ca(this, this.fe),
            this.Nd.addListener('click', this.Yi, this),
            this.fe.addListener('click', this.Hj, this)),
          this.L(),
          this.f.addListener('maptypeid_changed', this.L, this))
        : (this.f.removeListener('maptypeid_changed', this.L, this),
          (this.f = a)));
  };
  kb.prototype.L = function () {
    var a = this.f.ud(),
      b = a == ka.NORMAL,
      a = a == ka.SKYVIEW || a == ka.HYBRID;
    ad(this.Nd, b);
    ad(this.fe, a);
    i(this.Nd.a, {
      color: b ? '#fff' : '#000',
      'font-weight': b ? 'bold' : 'normal',
    });
    i(this.fe.a, {
      color: a ? '#fff' : '#000',
      'font-weight': a ? 'bold' : 'normal',
    });
  };
  kb.prototype.Yi = function () {
    this.f.Wc(ka.NORMAL);
    this.f.q();
  };
  kb.prototype.Hj = function () {
    this.f.Wc(ka.HYBRID);
    this.f.q();
  };
  var pf = new Sa(5, 225),
    qf = new Sa(5, 183),
    rf = new Sa(48, 183),
    sf = new Sa(48, 225);
  n(ic, Ga);
  c = ic.prototype;
  c.F = function (a) {
    if (this.f != a)
      if (a) {
        this.f = a;
        if (!this.a) {
          var b = (this.a = q('div'));
          J(b, 32);
          i(b, {
            'border-radius': '3px',
            'box-shadow': '0 2px 2px 0 rgba(0,0,0,.15)',
          });
          var d = (this.zh = new Mb(
              32,
              32,
              new Sa(40, 0, '#fff'),
              f,
              new Sa(72, 0, '#fff'),
              new Sa(72, 0, '#fff'),
              f,
              '\ud655\ub300',
            )),
            c = (this.wf = new Mb(
              32,
              32,
              new Sa(40, 32, '#fff'),
              f,
              new Sa(72, 32, '#fff'),
              new Sa(72, 32, '#fff'),
              f,
              '\ucd95\uc18c',
            ));
          ca(this, d);
          var e = d.a;
          i(e, {
            'border-bottom': '1px solid #e2e2e2',
            'border-radius': '3px 3px 0 0',
          });
          d.addListener('click', this.fk, this);
          ca(this, c);
          var g = c.a;
          i(g, {
            'border-top': '1px solid #e2e2e2',
            'border-radius': '0 0 3px 3px',
          });
          c.addListener('click', this.gk, this);
          ob &&
            setTimeout(function () {
              e.style.cssText = e.style.cssText;
              g.style.cssText = g.style.cssText;
            }, 0);
          c = q('div');
          fb(c);
          Wa(c, 'url(' + qa + 'bg_zoom_control.png) repeat');
          i(c, { padding: '7px 0', transition: 'height, margin 0.1s' });
          Uc(this.a, c, 1);
          d = this.xd = q('div');
          ra(d, 'pointer');
          d.style.position = 'relative';
          jb(d, sb, tb);
          i(d, { transition: 'height 0.1s', margin: '2px 0' });
          c.appendChild(d);
          k(d, 'click', this.rg, this);
          c = this.Ak = q('div');
          M(c);
          J(c, 4, '100%');
          i(c, { backgroundColor: '#3396FF', left: '50%' });
          za(c, 0, 0, 0, -2);
          d.appendChild(c);
          var m = q('div');
          J(m, 4, 2);
          i(m, { 'margin-bottom': '-2px', bottom: 0 });
          M(m);
          Wa(m, '-50px -127px url(' + cc + ')');
          jb(m, sb, tb);
          c.appendChild(m);
          m = q('div');
          J(m, 4, 2);
          i(m, { 'margin-top': '-2px', top: 0 });
          M(m);
          Wa(m, '-40px -100px url(' + cc + ')');
          jb(m, sb, tb);
          c.appendChild(m);
          c = this.sg = q('div');
          M(c);
          J(c, 4, '100%');
          i(c, {
            backgroundColor: '#ccc',
            transition: 'height 0.1s',
            left: '50%',
          });
          za(c, 0, 0, 0, -2);
          d.appendChild(c);
          c = this.mf = q('div');
          ra(c, 'row-resize');
          M(c);
          J(c, 20, 10);
          za(c, -4, 0, 0, -10);
          Wa(c, '-40px -80px url(' + cc + ')');
          jb(c, sb, tb);
          d.appendChild(c);
          i(c, { left: '50%', transition: 'top 0.1s' });
          k(c, 'mousedown', this.Ai, this);
          c = this.cd = q('div');
          Ra(c);
          M(c);
          za(c, 41, 0, 0, -30);
          jb(c, sb, tb);
          b.appendChild(c);
          this.We ||
            (this.sf = [
              k(d, 'mouseover', this.hh, this),
              k(d, 'mouseout', this.tg, this),
            ]);
          this.fd && k(P, 'resize', this.Qf, this);
        }
        a.addListener('zoom_changed', this.L, this);
        a.addListener('min_zoom_changed', this.L, this);
        a.addListener('max_zoom_changed', this.L, this);
        a.addListener('maptypeid_changed', this.L, this);
        this.Qf();
        this.L();
      } else
        this.f.removeListener('zoom_changed', this.L, this),
          this.f.removeListener('min_zoom_changed', this.L, this),
          this.f.removeListener('max_zoom_changed', this.L, this),
          this.f.removeListener('maptypeid_changed', this.L, this),
          (this.f = a);
  };
  c.hh = function (a) {
    bc(this.a, a.target) && ib(this.cd);
  };
  c.tg = function (a) {
    bc(this.a, a.target) && Ra(this.cd);
  };
  c.Ai = function (a) {
    aa(a);
    rd(this.mf);
    this.ih = [
      k(Va(), 'mousemove', this.gi, this),
      k(Va(), 'mouseup', this.qj, this),
    ];
  };
  c.gi = function (a) {
    aa(a);
    a = sa(a, this.xd);
    a = Qd(this, a.c());
    i(this.mf, { top: this.Jb * (a - this.Rb) + 'px' });
    J(this.sg, 4, this.Jb * (a - this.Rb));
  };
  c.qj = function (a) {
    id();
    s(this.ih, function (a) {
      y(a);
    });
    this.rg(a);
  };
  c.L = function () {
    var a = this.f.td(),
      b = this.f.b.D,
      d = this.f.b.Q;
    Ec(this.zh, j);
    Ec(this.wf, j);
    a == b && Ec(this.zh, l);
    a == d && Ec(this.wf, l);
    this.Nc |= b != this.Rb || d != this.Mg;
    if (!this.Le && this.Nc) {
      var c = this.Jb,
        e = c * (d - b);
      J(this.xd, 32, e);
      J(this.cd, 30, e);
      var e = 0,
        g;
      for (g in this.tf) Ea(this.tf[g]);
      for (var m = b; m <= d; m++) {
        if ((g = this.tf[m])) $(g, 0, e), this.cd.appendChild(g);
        e += c;
      }
      this.Nc = j;
    }
    this.Rb = b;
    this.Mg = d;
    i(this.mf, { top: this.Jb * (a - this.Rb) + 'px' });
    J(this.sg, 4, this.Jb * (a - this.Rb));
  };
  c.Qf = function () {
    !this.ye && this.fd
      ? (this.ag = this.f.gc().clientHeight <= this.Ni)
      : this.ye && (this.ag = this.ye);
    var a = this.ag;
    if (a !== this.Le) {
      this.Le = a;
      var b = this.xd,
        d = this.wf;
      a
        ? (Ra(b),
          za(d.a, -1, 0, 0),
          this.We ||
            (Ra(this.cd),
            s(this.sf, function (a) {
              y(a);
            })))
        : (ib(b),
          za(d.a, 0),
          this.We ||
            (this.sf = [
              k(this.a, 'mouseover', this.hh, this),
              k(this.a, 'mouseout', this.tg, this),
            ]),
          (this.Nc = l),
          this.L());
    }
  };
  c.rg = function (a) {
    a = sa(a, this.xd);
    a = Qd(this, a.c());
    this.f.mb(a, { animate: l });
  };
  c.fk = function () {
    var a = this.f;
    a.mb(a.b.j() - 1, { animate: l });
  };
  c.gk = function () {
    var a = this.f;
    a.mb(a.b.j() + 1, { animate: l });
  };
  B.prototype.toString = function () {
    return '(' + this.e() + ', ' + this.c() + ')';
  };
  B.prototype.e = p('x');
  B.prototype.c = p('y');
  var Se = new B(0, 0);
  B.prototype.Ib = function (a) {
    return a instanceof B && this.e() == a.e() && this.c() == a.c();
  };
  var pb = new Rd(6378137, 1 / 298.257223563, 5e5, 2e5, 1, 38, 127);
  Rd.prototype.inverse = function (a, b) {
    var d = Math.sin,
      c = Math.cos,
      e = Math.pow,
      g = Math.sqrt,
      m = this.Hf,
      f = this.xh,
      h = this.yh,
      j = this.Pg,
      l = this.Mf,
      k = this.Nf,
      v = 0,
      s = 0,
      G = 0,
      n = 0,
      r = 0,
      i = 0,
      p = 0,
      q = 0,
      o = 0,
      t = 0,
      u = 0,
      w = 0,
      z = 0,
      O = 0,
      G = this.bg;
    1 < G && (G = 1 / G);
    n = h;
    r = Math.atan(1) / 45;
    v = l * r;
    s = k * r;
    G = 1 / G;
    i = (m * (G - 1)) / G;
    p = (e(m, 2) - e(i, 2)) / e(m, 2);
    G = (e(m, 2) - e(i, 2)) / e(i, 2);
    i = (m - i) / (m + i);
    q =
      m *
      (1 - i + (5 * (e(i, 2) - e(i, 3))) / 4 + (81 * (e(i, 4) - e(i, 5))) / 64);
    o =
      (3 *
        m *
        (i - e(i, 2) + (7 * (e(i, 3) - e(i, 4))) / 8 + (55 * e(i, 5)) / 64)) /
      2;
    t = (15 * m * (e(i, 2) - e(i, 3) + (3 * (e(i, 4) - e(i, 5))) / 4)) / 16;
    u = (35 * m * (e(i, 3) - e(i, 4) + (11 * e(i, 5)) / 16)) / 48;
    w = (315 * m * (e(i, 4) - e(i, 5))) / 512;
    v = q * v - o * d(2 * v) + t * d(4 * v) - u * d(6 * v) + w * d(8 * v);
    z = (b + v * j - f) / j;
    O = (m * (1 - p)) / e(g(1 - p * e(d(0), 2)), 3);
    v = z / O;
    for (f = 1; 5 >= f; f++)
      (i = q * v - o * d(2 * v) + t * d(4 * v) - u * d(6 * v) + w * d(8 * v)),
        (O = (m * (1 - p)) / e(g(1 - p * e(d(v), 2)), 3)),
        (v += (z - i) / O);
    O = (m * (1 - p)) / e(g(1 - p * e(d(v), 2)), 3);
    q = m / g(1 - p * e(d(v), 2));
    i = d(v);
    p = c(v);
    o = i / p;
    G *= e(p, 2);
    n = a - n;
    i = o / (2 * O * q * e(j, 2));
    t =
      (o * (5 + 3 * e(o, 2) + G - 4 * e(G, 2) - 9 * e(o, 2) * G)) /
      (24 * O * e(q, 3) * e(j, 4));
    u =
      (o *
        (61 +
          90 * e(o, 2) +
          46 * G +
          45 * e(o, 4) -
          252 * e(o, 2) * G -
          3 * e(G, 2) +
          100 * e(G, 3) -
          66 * e(o, 2) * e(G, 2) -
          90 * e(o, 4) * G +
          88 * e(G, 4) +
          225 * e(o, 4) * e(G, 2) +
          84 * e(o, 2) * e(G, 3) -
          192 * e(o, 2) * e(G, 4))) /
      (720 * O * e(q, 5) * e(j, 6));
    O =
      (o * (1385 + 3633 * e(o, 2) + 4095 * e(o, 4) + 1575 * e(o, 6))) /
      (40320 * O * e(q, 7) * e(j, 8));
    v = v - e(n, 2) * i + e(n, 4) * t - e(n, 6) * u + e(n, 8) * O;
    i = 1 / (q * p * j);
    O = (1 + 2 * e(o, 2) + G) / (6 * e(q, 3) * p * e(j, 3));
    G =
      (5 +
        6 * G +
        28 * e(o, 2) -
        3 * e(G, 2) +
        8 * e(o, 2) * G +
        24 * e(o, 4) -
        4 * e(G, 3) +
        4 * e(o, 2) * e(G, 2) +
        24 * e(o, 2) * e(G, 3)) /
      (120 * e(q, 5) * p * e(j, 5));
    p =
      (61 + 662 * e(o, 2) + 1320 * e(o, 4) + 720 * e(o, 6)) /
      (5040 * e(q, 7) * p * e(j, 7));
    n = n * i - e(n, 3) * O + e(n, 5) * G - e(n, 7) * p;
    return [(s + n) / r, v / r];
  };
  c = ab.prototype;
  c.La = 0;
  c.Ma = 0;
  c.toString = function () {
    return '(' + this.La + ', ' + this.Ma + ')';
  };
  c.e = p('La');
  c.c = p('Ma');
  c.ua = function (a) {
    return this.La == a.La && this.Ma == a.Ma;
  };
  c.la = function (a, b) {
    return new this.constructor(this.La + a, this.Ma + b);
  };
  n(pa, ab);
  c = pa.prototype;
  c.toString = function () {
    return '(' + this.Ma + ', ' + this.La + ')';
  };
  c.n = f;
  c.jg = function () {
    return this.c();
  };
  c.lg = function () {
    return this.e();
  };
  c.W = function () {
    var a = Math.sin,
      b = Math.cos,
      d = Math.pow,
      c = Math.sqrt,
      e = pb.Hf,
      g = pb.bg,
      m = pb.xh,
      f = pb.Pg,
      h = 0,
      j = 0,
      l = 0,
      i = 0,
      v = 0,
      o = 0,
      k = 0,
      n = 0,
      p = 0,
      s = 0,
      q = 0,
      r = 0,
      t = 0,
      u = 0,
      l = pb.Mf,
      n = pb.Nf,
      o = pb.yh,
      v = g;
    1 < v && (v = 1 / v);
    i = Math.atan(1) / 45;
    h = this.jg() * i;
    j = this.lg() * i;
    l *= i;
    i *= n;
    v = 1 / v;
    k = (e * (v - 1)) / v;
    n = (d(e, 2) - d(k, 2)) / d(e, 2);
    v = (d(e, 2) - d(k, 2)) / d(k, 2);
    k = (e - k) / (e + k);
    p =
      e *
      (1 - k + (5 * (d(k, 2) - d(k, 3))) / 4 + (81 * (d(k, 4) - d(k, 5))) / 64);
    s =
      (3 *
        e *
        (k - d(k, 2) + (7 * (d(k, 3) - d(k, 4))) / 8 + (55 * d(k, 5)) / 64)) /
      2;
    q = (15 * e * (d(k, 2) - d(k, 3) + (3 * (d(k, 4) - d(k, 5))) / 4)) / 16;
    r = (35 * e * (d(k, 3) - d(k, 4) + (11 * d(k, 5)) / 16)) / 48;
    t = (315 * e * (d(k, 4) - d(k, 5))) / 512;
    j -= i;
    l = p * l - s * a(2 * l) + q * a(4 * l) - r * a(6 * l) + t * a(8 * l);
    k = l * f;
    u = a(h);
    l = b(h);
    i = u / l;
    v *= d(l, 2);
    n = e / c(1 - n * d(a(h), 2));
    h = p * h - s * a(2 * h) + q * a(4 * h) - r * a(6 * h) + t * a(8 * h);
    a = [];
    h *= f;
    p = (n * u * l * f) / 2;
    s = (n * u * d(l, 3) * f * (5 - d(i, 2) + 9 * v + 4 * d(v, 2))) / 24;
    q =
      (n *
        u *
        d(l, 5) *
        f *
        (61 -
          58 * d(i, 2) +
          d(i, 4) +
          270 * v -
          330 * d(i, 2) * v +
          445 * d(v, 2) +
          324 * d(v, 3) -
          680 * d(i, 2) * d(v, 2) +
          88 * d(v, 4) -
          600 * d(i, 2) * d(v, 3) -
          192 * d(i, 2) * d(v, 4))) /
      720;
    u =
      (n *
        u *
        d(l, 7) *
        f *
        (1385 - 3111 * d(i, 2) + 543 * d(i, 4) - d(i, 6))) /
      40320;
    h = h + d(j, 2) * p + d(j, 4) * s + d(j, 6) * q + d(j, 8) * u;
    a[1] = h - k + m;
    h = n * l * f;
    k = (n * d(l, 3) * f * (1 - d(i, 2) + v)) / 6;
    v =
      (n *
        d(l, 5) *
        f *
        (5 -
          18 * d(i, 2) +
          d(i, 4) +
          14 * v -
          58 * d(i, 2) * v +
          13 * d(v, 2) +
          4 * d(v, 3) -
          64 * d(i, 2) * d(v, 2) -
          25 * d(i, 2) * d(v, 3))) /
      120;
    l =
      (n * d(l, 7) * f * (61 - 479 * d(i, 2) + 179 * d(i, 4) - d(i, 6))) / 5040;
    a[0] = o + j * h + d(j, 3) * k + d(j, 5) * v + d(j, 7) * l;
    return new L(2.5 * a[0], 2.5 * a[1]);
  };
  n(L, ab);
  var db = new L(0, 0);
  L.prototype.sh = function () {
    var a = pb.inverse(0.4 * this.e(), 0.4 * this.c());
    return new pa(a[1], a[0]);
  };
  Y.prototype.toString = function () {
    return (
      '(' +
      this.pan +
      ', ' +
      this.tilt +
      ', ' +
      this.j() +
      ' ,' +
      this.N() +
      ')'
    );
  };
  Y.prototype.j = p('zoom');
  Y.prototype.N = p('panoId');
  var Rc = new Y(0, 0, 0);
  n(La, ab);
  La.prototype.W = function (a) {
    return a.qe(this.e(), this.c());
  };
  c = W.prototype;
  c.tb = function (a, b) {
    this.ha = N(a.e(), b.e());
    this.qa = N(a.c(), b.c());
    this.oa = A(a.e(), b.e());
    this.pa = A(a.c(), b.c());
  };
  c.ha = Infinity;
  c.qa = Infinity;
  c.oa = -Infinity;
  c.pa = -Infinity;
  c.toString = function () {
    return (
      '((' + this.ha + ', ' + this.qa + '), (' + this.oa + ', ' + this.pa + '))'
    );
  };
  c.B = function () {
    return new L(this.ha, this.qa);
  };
  c.rb = function () {
    return new L(this.oa, this.pa);
  };
  c.Gi = function (a) {
    return this.oa > a.ha && this.pa > a.qa && this.ha < a.oa && this.qa < a.pa;
  };
  c.kd = function (a) {
    return (
      this.ha <= a.e() && a.e() < this.oa && this.qa <= a.c() && a.c() < this.pa
    );
  };
  c.extend = function (a) {
    var b = a.e(),
      a = a.c();
    this.ha = N(b, this.ha);
    this.oa = A(b, this.oa);
    this.qa = N(a, this.qa);
    this.pa = A(a, this.pa);
    return this;
  };
  c.Bg = function () {
    return !isFinite(this.ha);
  };
  c.Ib = function (a) {
    return (
      a instanceof W &&
      this.ha == a.ha &&
      this.oa == a.oa &&
      this.qa == a.qa &&
      this.pa == a.pa
    );
  };
  var tf = new W(db);
  n(ga, W);
  ga.prototype.B = function () {
    return new pa(this.qa, this.ha);
  };
  ga.prototype.rb = function () {
    return new pa(this.pa, this.oa);
  };
  ga.prototype.toString = function () {
    return (
      '((' + this.qa + ', ' + this.ha + '), (' + this.pa + ', ' + this.oa + '))'
    );
  };
  kc.prototype.we = function (a, b) {
    b && (this.i.push({ Ke: a, url: b }), this.Ya.start(), (a.Tb = l));
  };
  kc.prototype.pause = function () {
    this.Ya.stop();
  };
  kc.prototype.tc = function () {
    for (var a = 4; 0 < a; ) {
      var b = this.i.pop();
      if (!b) {
        this.Ya.stop();
        break;
      }
      b.Ke.Tb && (this.Jc(b.Ke, b.url), (b.Ke.Tb = j), --a);
    }
  };
  kc.prototype.Jc = function (a, b) {
    Re(a, b);
  };
  var Ee = new kc();
  n(wb, Fa);
  var xb = q('img');
  xb.galleryimg = 'no';
  xb.src = Tb;
  xb.alt = '';
  M(xb);
  Kb(xb);
  ya(xb, 'min-width:0;min-height:0;max-width:none;max-height:none');
  var bb = { IDLE: 0, LOADING: 1, Af: 2, Bh: 3 },
    nd = l;
  c = wb.prototype;
  c.x = 0;
  c.y = 0;
  c.zoom = 0;
  c.Sa = f;
  c.aa = function () {
    this.R = bb.LOADING;
    !eb && qd && nd && (vc(this.a, 0), mf(this.a, 'opacity', 0.2));
    this.Fd = k(this.a, 'load', this.w, this);
    Td(this, 1);
    this.kf(this.Sa.He(this.x, this.y, this.zoom));
  };
  c.kf = function (a) {
    this.a.src = a || qa + 'nodata.png';
  };
  c.X = function () {
    wb.Wb.X.call(this);
    this.a && (y(this.Fd), Ea(this.a), (this.Fd = this.Sa = this.a = f));
  };
  c.cancel = function () {
    y(this.Fd);
    this.a.src = Tb;
    this.R = bb.Bh;
    h(this, 'canceled', this);
  };
  c.Nb = function () {
    this.a.src = Tb;
    this.R = bb.IDLE;
  };
  c.Y = function (a, b) {
    this.La = a;
    this.Ma = b;
    $(this.a, a, b);
  };
  c.w = function () {
    this.R = bb.Af;
    y(this.Fd);
    !eb && this.a && qd && nd && vc(this.a, 1);
    h(this, 'loaded', this);
  };
  n(lc, wb);
  var Te = bb;
  lc.prototype.aa = function () {
    this.R = Te.LOADING;
    this.Rj = setTimeout(xa(this.w, this), 0);
  };
  lc.prototype.X = function () {
    Fa.prototype.X.call(this);
    this.a && (clearTimeout(this.Rj), Ea(this.a), (this.Sa = this.a = f));
  };
  lc.prototype.w = function () {
    this.R = Te.Af;
    h(this, 'loaded', this);
  };
  n(lb, ab);
  lb.prototype.H = 0;
  lb.prototype.j = p('H');
  lb.prototype.ua = function (a) {
    return this.H == a.j() && lb.Wb.wk.call(this, a);
  };
  lb.prototype.la = function (a, b) {
    return new lb(this.e() + a, this.c() + b, this.H);
  };
  ea.prototype.m = p('S');
  ea.prototype.h = p('O');
  sc &&
    !Na &&
    (mc = function () {
      return '//spi.maps.daum.net/boundary';
    });
  var Sc = new W(new L(-310763.0075, 1248227.06), new L(1616006.44, 2802998)),
    Ue = new W(new L(281515, 157035), new L(531417.5, -133097.5)),
    dd,
    yd = (dd = new ea(
      256,
      256,
      Ob(function (a, b, d) {
        return (
          wa(a & 3) + '/map_2d/' + E.Bf + '/L' + d + '/' + b + '/' + a + '.png'
        );
      }),
      [
        new la(
          '\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0, OpenStreetMap',
          'NGII, OSM',
          3,
          Sc,
        ),
        new la('', ''),
      ],
      j,
      1,
      14,
    )),
    ed,
    zd = (ed = new ea(
      256,
      256,
      Ob(function (a, b, d) {
        return (
          wa(a & 3) + '/map_skyview/L' + d + '/' + b + '/' + a + '.jpg' + E.Fh
        );
      }),
      [
        new la('TerraMetrics', 'TerraMetrics', 9),
        new la(
          '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
          '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
          0,
          Ue,
        ),
        new la('\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0', 'NGII', 0),
      ],
      l,
      0,
      14,
    )),
    fd,
    Ve = (fd = new ea(
      256,
      256,
      function (a, b, d) {
        return (
          wa(a & 3) +
          '/map_hybrid/' +
          E.zf +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      },
      [new la('', '')],
    )),
    uf = new ea(
      256,
      256,
      function (a, b, d) {
        return (
          wa(a & 3) +
          '/map_roadviewline/' +
          E.Ch +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      },
      [new la('KnWorks', 'KnWorks')],
    ),
    vf = new ea(256, 256, function (a, b, d) {
      var c;
      c = d + 5;
      return !(
        -7488 >> c <= a &&
        a <= 68e4 >> c &&
        -102176 >> c <= b &&
        b <= 635e3 >> c
      )
        ? ''
        : Ma +
            (Na ? 'ssl.daumcdn.net/' : '') +
            'r' +
            (a & 3) +
            '.maps.daum-img.net/mapserver/file/realtimeroad/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.png?v=' +
            ((+new Date() / 6e4) | 0);
    }),
    wf = new ea(256, 256, function (a, b, d) {
      return (
        wa(a & 3) + '/map_shaded_relief/0.01/L' + d + '/' + b + '/' + a + '.png'
      );
    }),
    Ad,
    $d,
    ae,
    We =
      (Ad =
      $d =
      ae =
        new ea(
          256,
          256,
          function (a, b, d) {
            return (
              wa(a & 3) +
              '/map_bicycle/2d/' +
              E.yf +
              '/L' +
              d +
              '/' +
              b +
              '/' +
              a +
              '.png'
            );
          },
          [
            new la('', '', 0, Sc),
            new la(
              '\ud589\uc815\uc548\uc804\ubd80',
              '\ud589\uc815\uc548\uc804\ubd80',
              1,
            ),
          ],
        )),
    de,
    Xe = (de = new ea(256, 256, function (a, b, d) {
      return (
        wa(a & 3) +
        '/map_usedistrict/' +
        E.Ff +
        '/L' +
        d +
        '/' +
        b +
        '/' +
        a +
        '.png'
      );
    }));
  new ea(256, 256, function (a, b, d) {
    return mc() + '/mapserver/db/BBOUN_L/L' + d + '/' + b + '/' + a + '.png';
  });
  new ea(256, 256, function (a, b, d) {
    return mc() + '/mapserver/db/HBOUN_L/L' + d + '/' + b + '/' + a + '.png';
  });
  if (Pb) {
    var Xd,
      yd = (Xd = new ea(
        256,
        256,
        Ob(function (a, b, d) {
          return (
            wa(a & 3) +
            '/map_2d_hd/' +
            E.Bf +
            '/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.png'
          );
        }),
        [
          new la(
            '\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0, OpenStreetMap',
            'NGII, OSM',
            3,
            Sc,
          ),
          new la('', ''),
        ],
        j,
        1,
        14,
      )),
      Yd,
      zd = (Yd = new ea(
        256,
        256,
        Ob(function (a, b, d) {
          return (
            wa(a & 3) +
            '/map_skyview_hd/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.jpg' +
            E.Eh
          );
        }),
        [
          new la('TerraMetrics', 'TerraMetrics', 9),
          new la(
            '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
            '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
            0,
            Ue,
          ),
          new la('\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0', 'NGII', 0),
        ],
        l,
        1,
        14,
      )),
      Zd,
      Ve = (Zd = new ea(256, 256, function (a, b, d) {
        return (
          wa(a & 3) +
          '/map_hybrid_hd/' +
          E.zf +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      })),
      be,
      ce,
      We =
        (be =
        Ad =
        ce =
          new ea(
            256,
            256,
            function (a, b, d) {
              return (
                wa(a & 3) +
                '/map_bicycle/2dhd/' +
                E.yf +
                '/L' +
                d +
                '/' +
                b +
                '/' +
                a +
                '.png'
              );
            },
            [
              new la('', '', 0, Sc),
              new la(
                '\ud589\uc815\uc548\uc804\ubd80',
                '\ud589\uc815\uc548\uc804\ubd80',
                1,
              ),
            ],
          )),
      ee,
      Xe = (ee = new ea(256, 256, function (a, b, d) {
        return (
          wa(a & 3) +
          '/map_usedistrict_hd/' +
          E.Ff +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      }));
    new ea(256, 256, function (a, b, d) {
      return (
        mc() + '/mapserver/db/BBOUN_L_HD/L' + d + '/' + b + '/' + a + '.png'
      );
    });
    new ea(256, 256, function (a, b, d) {
      return (
        mc() + '/mapserver/db/HBOUN_L_HD/L' + d + '/' + b + '/' + a + '.png'
      );
    });
  }
  var ka = {
      ROADMAP: 1,
      NORMAL: 1,
      SKYVIEW: 2,
      HYBRID: 3,
      OVERLAY: 4,
      ROADVIEW: 5,
      TRAFFIC: 6,
      TERRAIN: 7,
      BICYCLE: 8,
      BICYCLE_HYBRID: 9,
      USE_DISTRICT: 10,
    },
    Ca = [yd, yd, zd, zd, Ve, uf, vf, wf, We, Ad, Xe];
  n(Gc, wb);
  Gc.prototype.kf = function (a) {
    this.a.src = a || Tb;
  };
  n(Hc, Gc);
  var gd = q('div');
  M(gd);
  Kb(gd);
  var fe = [];
  Hc.prototype.kf = function (a) {
    Ee.we(this.a, a);
  };
  Hc.prototype.X = function () {
    var a = this.a;
    Ea(a);
    a.style.filter = '';
    fe.push(a);
    this.Xb = this.a = f;
  };
  n(Qb, $a);
  c = Qb.prototype;
  c.Xb = f;
  c.Yc = function (a) {
    this.Ea();
    this.Xb = a;
  };
  c.sb = p('Xb');
  c.Ef = wb;
  c.Va = function () {
    var a = this.Xb;
    if (a) {
      var b = a.m(),
        d = a.h(),
        c = this.b,
        e = c.m(),
        g = c.h(),
        f = c.j(),
        h = z(2, -f),
        j = c.B(),
        i = new lb(H((j.e() / a.S) * z(2, -f)), H((j.c() / a.O) * z(2, -f)), f),
        k,
        n = i.j();
      k = new La((i.e() * a.S) / z(2, -n), (i.c() * a.O) / z(2, -n));
      var n = H(k.e() * h) - H(j.e() * z(2, -f)) - ha(c),
        c = H(j.c() * z(2, -f)) + H(-k.c() * h) + g - d - ia(c),
        g = 1 + (((g + d - 1) / d) | 0),
        o = i.c(),
        p = o + g,
        q = 1 + (((e + b - 1) / b) | 0),
        r = i.e(),
        u = r + q,
        t = [],
        w = [],
        A = q * g,
        y = this.hc,
        x = 0;
      s(
        y,
        function (a) {
          var b = a.x,
            d = a.y;
          r <= b && b < u && o <= d && d < p && f == a.zoom
            ? ((w[(d - o) * q + b - r] = l), --A, (y[x] = a), ++x)
            : t.push(a);
        },
        this,
      );
      if (0 < A) {
        for (var e = this.eg, i = [], B = 0, E = g * q; B < E; ++B)
          if (!w[B]) {
            var D = (B / q) | 0,
              O = B % q,
              C = ge(this, O + r, D + o, f, a);
            i.push(C);
            C.Y(O * b + n, c - D * d);
            e.appendChild(C.a);
            y[x++] = C;
          }
        this.re(i);
        this.a.appendChild(e);
      }
      y.length = x;
      this.yc(t);
      a = H((j.e() - k.e()) * h);
      h = H((j.c() - k.c()) * h);
      this.Oj = {
        Sh: r,
        Rh: q,
        Qh: o,
        Th: g,
        fh: a,
        gh: h,
        offsetX: n,
        offsetY: c,
        Qj: b,
        Pj: d,
        zoom: f,
      };
    }
  };
  c.zb = 1;
  c.xj = 0;
  c.yj = 0;
  c.xg = [];
  c.scale = function (a) {
    this.xg = Ib(this.hc, function (a) {
      return { x: a.La, y: a.Ma };
    });
    a.addListener('tick', this.cf, this);
    a.addListener('done', this.Ab, this);
  };
  c.cf = function (a) {
    var b = a.yb,
      d = a.vb,
      c = a.wb;
    512 < b ||
      s(
        this.hc,
        function (a, g) {
          var f = this.xg[g];
          a.Y((f.x - d) * b + d, (f.y - c) * b + c);
          Td(a, b);
        },
        this,
      );
  };
  c.Ab = function () {
    this.zb = 1;
    this.xj = this.yj = 0;
    h(this, 'scaled');
  };
  c.Ea = function () {
    this.yc(this.hc);
    this.uf = j;
  };
  c.sc = function (a, b) {
    var d = this.Xb,
      c = this.Oj,
      e = (c.fh -= a),
      g = (c.gh += b),
      f = c.Qj,
      h = c.Pj,
      j = H(e / f),
      i = H(g / h);
    if (this.uf || !(0 == j && 0 == i)) {
      this.uf = l;
      var k = c.Sh,
        n = c.Rh,
        o = c.Qh,
        p = c.Th,
        g = c.offsetX,
        e = c.offsetY,
        c = c.zoom,
        k = k + j,
        o = o + i,
        g = g + j * f,
        e = e - i * h,
        q = o + p,
        r = k + n,
        t = [],
        u = n * p,
        w = this.hc,
        z = [],
        y = [],
        A = 0;
      s(
        w,
        function (a) {
          var b = a.x,
            d = a.y;
          k <= b && b < r && o <= d && d < q
            ? ((t[(d - o) * n + b - k] = l), --u, (w[A] = a), ++A)
            : Bb || ob
            ? y.push(a)
            : z.push(a);
        },
        this,
      );
      if (0 < u) {
        for (var j = this.eg, i = [], B = 0, p = p * n; B < p; ++B)
          if (!t[B]) {
            var x = (B / n) | 0,
              C = B % n,
              O,
              D = C + k,
              E = x + o;
            y[0]
              ? ((O = y.pop()),
                O.Nb(),
                (O.x = D),
                (O.y = E),
                (O.zoom = c),
                (O.Sa = d))
              : ((O = ge(this, D, E, c, d)), j.appendChild(O.a));
            i.push(O);
            O.Y(C * f + g, e - x * h);
            w[A++] = O;
          }
        this.re(i);
        this.a.appendChild(j);
      }
      this.yc(z);
    }
  };
  c.re = function (a) {
    s(a, function (a) {
      a.aa();
    });
  };
  c.yc = function (a) {
    s(a, function (a) {
      a.X();
    });
    a.length = 0;
  };
  n(Rb, $a);
  Rb.prototype.Y = function (a, b) {
    s(this.Xa, function (d) {
      d.Y(a, b);
    });
  };
  Rb.prototype.q = function () {
    Rb.Wb.q.call(this);
    s(this.Xa, function (a) {
      a.q();
    });
  };
  Rb.prototype.sc = function (a, b) {
    s(this.Xa, function (d) {
      d.sc(a, b);
    });
  };
  n(hd, Qb);
  hd.prototype.Ef = Hb ? Hc : Gc;
  n(nc, $a);
  nc.prototype.M = function () {
    var a = this.k.opacity || '',
      b = this.k.background || '';
    this.a = q('div');
    M(this.a);
    J(this.a, '100%', '100%');
    b && Wa(this.a, b);
    a && vc(this.a, a);
  };
  nc.prototype.hf = function (a) {
    this.k.opacity = a;
    this.a && vc(this.a, a);
  };
  nc.prototype.mg = function () {
    return this.k.opacity;
  };
  n(Ic, $a);
  c = Ic.prototype;
  c.M = function () {
    var a = this.b,
      b = (this.S = a.m()),
      a = (this.O = a.h());
    this.a = q('div');
    this.ja(b, a);
    M(this.a);
    Aa(this.a, 1);
  };
  c.ja = function (a, b) {
    J(this.a, a, b);
  };
  c.me = function (a, b) {
    var d = ha(this.b),
      c = ia(this.b);
    b ? (this.ea.unshift(a), Hd(this, a)) : (this.ea.push(a), ca(this, a));
    a.Y(-d, -c);
  };
  c.af = function (a) {
    for (var b = this.ea.length - 1; 0 <= b; --b)
      if (this.ea[b] == a) {
        this.removeChild(this.ea[b]);
        this.ea.splice(b, 1);
        break;
      }
  };
  c.Y = function (a, b) {
    s(this.ea, function (d) {
      d.Y(a, b);
    });
  };
  c.$b = function (a, b) {
    s(this.ea, function (d) {
      d.$b(a, b);
    });
  };
  n(zb, $a);
  zb.prototype.M = function () {
    var a = (this.a = q('div'));
    M(a);
  };
  zb.prototype.Wf = j;
  zb.prototype.pc = function (a) {
    this.Wf = a;
    Jc(this, j);
  };
  zb.prototype.Xf = f;
  n(Ab, Qb);
  Ab.prototype.re = function (a) {
    s(
      a,
      function (a) {
        a.Tb || this.i.we(a);
      },
      this,
    );
    this.i.Jg();
  };
  Ab.prototype.yc = function (a) {
    s(
      a,
      function (a) {
        (a.R === bb.LOADING || a.Tb) && a.cancel();
        this.fg.push(a);
      },
      this,
    );
    a.length = 0;
  };
  Ab.prototype.Ea = function () {
    this.yc(this.hc);
    this.Rf();
    this.uf = j;
  };
  Ab.prototype.Rf = function () {
    for (var a; (a = this.fg.pop()); ) a.X();
  };
  n(Sb, Fa);
  Sb.prototype.we = function (a) {
    a.Tb = l;
    this.i.push(a);
  };
  Sb.prototype.remove = function (a) {
    this.i[this.i.indexOf(a)] = f;
    a.Tb = j;
  };
  Sb.prototype.Jg = function () {
    for (
      var a, b = N(64, this.i.length), b = A(b - this.Oc, 0), d = 0;
      d < b;
      d++
    )
      (a = this.i.pop()),
        a.R === bb.IDLE &&
          (this.Oc++,
          (a.Tb = j),
          a.addListener('loaded', this.w, this),
          a.addListener('canceled', this.w, this),
          a.aa());
  };
  Sb.prototype.w = function (a) {
    a.removeListener('loaded', this.w, this);
    a.removeListener('canceled', this.w, this);
    this.Oc--;
    0 == this.Oc &&
      (0 < this.i.length
        ? setTimeout(xa(this.Jg, this), 16)
        : 0 === this.Oc && 0 == this.i.length && h(this, 'tilesloaded'));
  };
  n(Z, Fa);
  Z.prototype.f = f;
  Z.prototype.F = function (a) {
    a != this.f && (this.f && this.f.$g(this), (this.f = a) && a.Jf(this));
  };
  Z.prototype.p = p('f');
  Z.prototype.jb = function () {
    this.onAdd();
  };
  Z.prototype.onAdd = Q;
  Z.prototype.kb = function () {
    this.onRemove();
  };
  Z.prototype.onRemove = Q;
  c = Z.prototype;
  c.ea = f;
  c.wd = p('ea');
  c.g = f;
  c.va = p('g');
  c.aa = function () {
    this.draw();
  };
  Z.prototype.draw = Q;
  oc.prototype.vd = p('Qd');
  var ie = new oc(
    qa + 'marker.png',
    new Ta(29, 42),
    new B(14, 39),
    'poly',
    '14,39,9,27,4,21,1,16,1,10,4,4,11,0,18,0,25,4,28,10,28,16,25,21,20,27',
  );
  n(o, Z);
  c = o.prototype;
  c.Aa = l;
  c.Za = j;
  c.Nj = 8;
  c.n = db;
  c.Rc = Se;
  c.s = function (a) {
    this.n = a instanceof Y ? a : I(a);
    this.z();
  };
  c.z = function () {
    var a = this.va();
    a &&
      ((a = this.Rc = a.lb(this.n, this.Ba, this.Ha)),
      $(this.a, a.e(), a.c()),
      this.Ka());
  };
  c.v = function () {
    return this.n instanceof Y ? this.n : ua(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof na && this.z();
  };
  c.Bc = p('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof na && this.z();
  };
  c.fc = p('Ba');
  var ke = 0;
  c = o.prototype;
  c.M = function () {
    var a = this.a;
    a || ((a = this.a = q('div')), M(a));
    za(a, -this.T.vd().c(), 0, 0, -this.T.vd().e());
    (a = this.fa) ||
      ((a = this.fa = q('img')),
      ya(
        a,
        'min-width:0;min-height:0;max-width:99999px;max-height:none;border:0;display:block',
      ),
      M(a),
      Kb(a),
      this.a.appendChild(a));
    var b = this.T.lf,
      d = this.T.Ij;
    i(a, {
      clip:
        'rect(' +
        d.y +
        'px ' +
        (d.x + b.width) +
        'px ' +
        (d.y + b.height) +
        'px ' +
        d.x +
        'px)',
      top: -d.y + 'px',
      left: -d.x + 'px',
    });
    b = this.T.Yj;
    d = this.fa;
    Hb &&
      /\.png$/i.test(b) &&
      ((d.onload = function () {
        this.onload = Q;
        this.src = Tb;
      }),
      (d.style.filter =
        'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
        b +
        '",sizingMethod="scale")'));
    d.src = b;
    this.fa.alt = this.T.Ih;
    b = this.T.Jj;
    J(a, b.width, b.height);
    this.Gb && je(this);
  };
  c.Sc = function () {
    y(this.Nh);
    y(this.ki);
    y(this.Ri);
    y(this.Qi);
    y(this.vj);
  };
  c.jd = function (a) {
    if (this.K || this.Na) aa(a), t.Ua(a);
  };
  c.Za = l;
  c.jb = function () {
    this.wd().Xe.appendChild(this.a);
    this.n instanceof Y && this.p() instanceof r && (this.n = db);
    this.p().addListener('idle', this.Ka, this);
    this.Gb && je(this);
    le(this);
  };
  c.kb = function () {
    Ea(this.a);
    this.p().removeListener('idle', this.Ka, this);
    this.Gb &&
      (this.Sc(),
      ne(this),
      Ea(this.Fc),
      Ea(this.zd),
      (this.zd = this.Ec = this.Fc = f));
  };
  c.aa = function () {
    Aa(this.a, this.$a);
    this.z();
  };
  c.nb = function (a) {
    this.Aa = !!a;
    this.Ka();
  };
  c.Ie = p('Aa');
  c.Cj = function (a) {
    a = a || ie;
    this.Sc();
    this.T = a;
    Ea(this.Fc);
    Ea(this.zd);
    this.Ec = this.zd = this.Fc = f;
    this.M();
    le(this);
  };
  c.vi = p('T');
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Aa(this.a, a);
  };
  c.wa = p('$a');
  c.Lc = function () {
    this.Ob ||
      (h(this, 'mouseover'),
      !this.K && !this.Na ? ra(this.fa, 'inherit') : ra(this.fa, 'pointer'));
  };
  c.Kc = function () {
    this.Ob || (h(this, 'mouseout'), ra(this.fa, ''));
  };
  c.Fb = '';
  c.eh = function (a) {
    this.Fb = String(a);
    this.T.de
      ? (this.fa && (this.fa.title = ''), (this.Ec.title = this.Fb))
      : (this.fa.title = this.Fb);
  };
  c.yi = p('Fb');
  c.Ka = function () {
    var a = this.p().b,
      b = this.n,
      d = this.Aa && a.ld(this.Rc);
    b instanceof Y && ((b = b.N()), (d = d && (!b || a.ua(b))));
    d != this.Za && ((this.Za = d) ? ib(this.a) : Ra(this.a));
  };
  c.li = function (a) {
    if (this.K || this.Na) t.Ua(), aa(a);
  };
  c.Yd = function (a) {
    t.Ua();
    !K && aa(a);
    this.Ob && (this.Zd = l);
    this.Na && h(this, 'rightclick');
  };
  c.Aj = function (a) {
    this.Na = !!a;
  };
  c.ui = p('Na');
  c.Kg = function (a) {
    this.Lg = this.K;
    this.K = !!a;
    this.Cg = l;
  };
  c.Zg = function () {
    this.Lg != T && (this.K = this.Lg);
    this.Cg = j;
  };
  c.df = function (a) {
    this.Cg || (this.K = !!a);
  };
  c.Fe = p('K');
  c.hi = function (a) {
    if (this.K || this.Na)
      if ((h(this, 'mousedown'), !this.Ob)) {
        aa(a);
        this.K ? t.Ua(a) : this.p().Ze();
        ra(this.fa, he || '');
        this.Ob = l;
        var a = K ? a.touches[0] : a,
          b = K ? 'touchmove' : ta ? 'MSPointerMove' : 'mousemove',
          d = K ? 'touchend' : ta ? 'MSPointerUp' : 'mouseup';
        this.mh = new B(a.clientX, a.clientY);
        this.lh = this.va().ab(this.n);
        this.fi = k(Va(this.a), b, this.ii, this);
        this.ji = k(Va(this.a), d, this.ei, this);
        K && this.bb.start();
      }
  };
  c.ii = function (a) {
    var b = K ? a.touches[0] : a,
      d = this.mh.e() - b.clientX,
      b = this.mh.c() - b.clientY,
      c = !!(Math.abs(d) + Math.abs(b) > this.Nj);
    this.K
      ? (aa(a),
        this.Ad
          ? (a = this.va()) &&
            this.s(a.pe(new B(this.lh.e() - d, this.lh.c() - b)))
          : c &&
            ((this.Ad = l),
            h(this, 'dragstart'),
            rd(this.a),
            K && this.bb.stop()))
      : c && (this.Ad = l);
  };
  c.ei = function (a) {
    h(this, 'mouseup');
    if (
      'which' in a
        ? 3 == a.which
        : 2 == a.button || (!a.preventDefault && 0 == a.button)
    )
      this.Zd = l;
    this.Ad
      ? this.K && h(this, 'dragend')
      : this.Na &&
        (this.p().Ze(),
        this.Ob && !this.Zd
          ? h(this, 'click')
          : this.Ob && (Bb || me) && this.Zd && h(this, 'rightclick'));
    ne(this);
    ra(this.fa, 'pointer');
  };
  c.hf = function (a) {
    Da(a) && ((this.Rg = a), vc(this.fa, this.Rg));
  };
  c.mg = p('Rg');
  n(D, Z);
  c = D.prototype;
  c.n = db;
  c.Rc = Se;
  c.s = function (a) {
    this.n = a instanceof Y ? a : I(a);
    this.z();
  };
  c.z = function () {
    var a = this.va();
    a &&
      ((a = this.Rc = a.lb(this.n, this.Ba, this.Ha)),
      $(this.a, a.e(), a.c()),
      this.Ka());
  };
  c.v = function () {
    return this.n instanceof Y ? this.n : ua(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof na && this.z();
  };
  c.Bc = p('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof na && this.z();
  };
  c.fc = p('Ba');
  c.jd = function () {
    h(this, 'click');
  };
  c.jb = function () {
    this.Za = j;
    this.Na &&
      (this.Ga = [
        k(this.a, 'click', t.Ua),
        k(this.a, 'mousedown', t.Ua),
        k(this.a, 'touchstart', t.Ua),
        k(this.a, 'MSPointerDown', t.Ua),
      ]);
    this.p().addListener('idle', this.Ka, this);
    this.Ka();
  };
  c.kb = function () {
    Ea(this.a);
    this.Na && (this.Ga.forEach(y), (this.Ga.length = 0));
    this.p().removeListener('idle', this.Ka, this);
  };
  c.aa = function () {
    this.z();
  };
  c.cc = f;
  c.ce = function (a) {
    var b = this.cc;
    this.cc = a;
    'string' == typeof a
      ? (this.a.innerHTML = a)
      : a && (b && (this.a.innerHTML = ''), this.a.appendChild(a));
    oe(this);
  };
  c.Ee = p('cc');
  c.Aa = l;
  c.Za = j;
  c.nb = function (a) {
    this.Aa = !!a;
    this.Ka();
  };
  c.Ie = p('Aa');
  c.Ka = function () {
    var a = this.Aa;
    if (this.p())
      var b = this.p().b,
        a = a && b.ld(this.Rc);
    var d = this.n;
    d instanceof Y && ((d = d.N()), (a = a && (!d || b.ua(d))));
    a != this.Za &&
      ((b = this.a),
      (this.Za = a) ? (this.wd().Xe.appendChild(b), oe(this)) : Ea(b));
  };
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Aa(this.a, a);
  };
  c.wa = p('$a');
  n(Ua, Z);
  c = Ua.prototype;
  c.F = function (a) {
    if (a != this.f) {
      if (this.f) {
        var b = this.f;
        0 <= Qa(b.Lb, this) &&
          (this.kb(), (this.g = this.ea = f), this.be(f), qb(b.Lb, this));
      }
      if ((this.f = a) && 0 > Qa(a.Lb, this))
        a.Lb.push(this),
          (this.ea = a.Ra),
          (this.g = a.g),
          this.be(a.G),
          this.jb(),
          a.A || this.aa();
    }
  };
  c.be = Zb('G');
  c.sj = function (a) {
    s(a, y);
  };
  c.di = function (a) {
    aa(a);
    var b = this.f,
      a = (this.Gf = K ? a.touches[0] : a),
      d = this.Fa(a);
    h(this, 'mousedown', d);
    this.ga = l;
    b = sa(a, b.gc());
    this.Pa = b.e();
    this.Qa = b.c();
  };
  c.Ue = function (a) {
    var b = this.f,
      a = (this.Gf = K ? a.touches[0] : a),
      b = sa(a, b.gc()),
      d = b.e() - this.Pa,
      c = b.c() - this.Qa;
    if (this.ga && (Ba(d) > Ye || Ba(c) > Ye)) this.ga = j;
    this.ga ||
      ((this.Pa = b.e()), (this.Qa = b.c()), h(this, 'mousemove', this.Fa(a)));
  };
  c.Xj = function (a) {
    a = this.Fa((K ? a.touches[0] : a) || this.Gf);
    h(this, 'mouseup', a);
    this.ga && h(this, 'click', a);
    this.ga = f;
  };
  var Ye = K ? 10 : 3;
  Ua.prototype.Fa = function (a) {
    var b = this.f,
      a = sa(a, b.gc()),
      b = Db(b.b, a).W(this.g);
    return new Od(a, b);
  };
  Ua.prototype.Vb = function (a) {
    s(
      'fillColor fillOpacity strokeWeight strokeColor strokeOpacity strokeStyle'.split(
        ' ',
      ),
      function (b) {
        a[b] === T || (this.Eb[b] = a[b]);
      },
      this,
    );
  };
  n(fa, Ua);
  c = fa.prototype;
  c.Db = function (a) {
    a.path && pe(this, a.path);
    a.pathHint &&
      ((a = a.pathHint || ''), yc(a) && (a = [a]), (this.kj = a), (this.Z = l));
  };
  c.Cb = function (a) {
    var b = this.k.zIndex;
    this.Db(a);
    this.Vb(a);
    this.f && (this.pb(), this.L());
    b !== a.zIndex && a.zIndex !== T && this.J(a.zIndex);
  };
  c.jb = function () {
    this.qd = l;
    this.pb();
    this.J(this.k.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.bc = j;
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.Eb,
        d = this.Ic,
        c = b.length,
        e = d.length;
      e > c &&
        ((c = d.splice(c, e - c)),
        s(c, a.dc, a),
        (c = this.Ga.splice(b.length)),
        s(c, this.sj, this));
      s(
        b,
        function (b, c) {
          var e = d[c],
            F = !!e;
          F ||
            ((e = a.create('path')),
            (e.zIndex = this.k.zIndex),
            d.push(e),
            this.Ga.push(jd(this, e)));
          a.rc(e, b);
          a.nb(e, this.qd);
          F || a.uc(e);
        },
        this,
      );
    }
  };
  c.Tc = function () {
    var a = this.Ic;
    if (a.length) {
      var b = this.Ga,
        d = this.G;
      s(b, function (a) {
        s(a, y);
      });
      s(a, d.dc, d);
      b.length = 0;
      a.length = 0;
      b = [];
      a = [];
    }
  };
  c.ng = function () {
    return this.Sg.slice();
  };
  c.dh = function (a) {
    pe(this, a);
    this.L();
  };
  c.aa = function () {
    this.Z = l;
    this.L();
  };
  c.L = function () {
    if (this.Z) {
      this.Z = j;
      var a = this.va();
      if (a) {
        var b = this.Xg;
        b.length = 0;
        var d = Infinity,
          c = Infinity,
          e = -Infinity,
          g = -Infinity,
          m = this.p().b.j(),
          h = 1 * z(2, m - 1),
          i,
          k = a.b,
          n = k.B(),
          o = n.e(),
          p = n.c(),
          q = z(2, -k.j());
        ol = ha(k);
        ot = k.h() - ia(k);
        i = function (b) {
          b = I(b);
          b = va(b, a);
          return new B(((b.e() - o) * q - ol) | 0, (ot - (b.c() - p) * q) | 0);
        };
        var r = this.kj || [];
        s(this.Ud, function (a, f) {
          var j = [],
            k = 0,
            l = NaN,
            n = NaN,
            o = r[f];
          s(a, function (a, b) {
            if (!(o && o[b] < m)) {
              var f = a.e(),
                p = a.c();
              if (!(Ba(f - l) + Ba(p - n) < h)) {
                l = f;
                n = p;
                var q = i(a),
                  f = q.x,
                  p = q.y;
                d = N(d, f);
                c = N(c, p);
                e = A(e, f);
                g = A(g, p);
                j[k++] = q;
              }
            }
          });
          b.push(j);
        });
        this.ha = d;
        this.qa = c;
        this.oa = e;
        this.pa = g;
        var t = Infinity,
          u = Infinity,
          w = -Infinity,
          y = -Infinity,
          x = this.p().b,
          C = x.m(),
          D = x.h();
        if (
          this.oa < -ha(x) - 2 * C ||
          this.pa < -ia(x) - 2 * D ||
          this.ha > -ha(x) + 3 * C ||
          this.qa > -ia(x) + 3 * D
        )
          qe(this, j);
        else {
          qe(this, l);
          var E = [];
          s(
            this.Xg,
            function (a) {
              var b = f,
                d = -2,
                c = f,
                e = 2 * C,
                g = 2 * D,
                F = ha(x) + e,
                m = ia(x) + g;
              s(
                a,
                function (a) {
                  var h = a.e() + F,
                    j = a.c() + m,
                    i;
                  if (!(i = this.bc))
                    if (!(i = x.ld(a, e, g)))
                      if ((i = c)) {
                        var k = c;
                        i = a.e() + ha(x);
                        var l = a.c() + ia(x),
                          n = k.e() + ha(x),
                          k = k.c() + ia(x),
                          o = x.S + 0,
                          p = x.O + 0;
                        i = !(
                          (0 > i && 0 > n) ||
                          (0 > l && 0 > k) ||
                          (i >= o && n >= o) ||
                          (l >= p && k >= p)
                        );
                      }
                  i
                    ? (b ||
                        (c
                          ? ((b = [c.e() + F, c.c() + m]),
                            (d = 2),
                            (t = N(t, c.e())),
                            (u = N(u, c.c())),
                            (w = A(w, c.e())),
                            (y = A(y, c.c())))
                          : ((b = []), (d = 0)),
                        E.push(b)),
                      (t = N(t, h)),
                      (u = N(u, j)),
                      (w = A(w, h)),
                      (y = A(y, j)),
                      (b[d] = h),
                      (b[d | 1] = j),
                      (d += 2))
                    : (b &&
                        ((t = N(t, h)),
                        (u = N(u, j)),
                        (w = A(w, h)),
                        (y = A(y, j)),
                        (b[d] = h),
                        (b[d | 1] = j)),
                      (b = f));
                  c = a;
                },
                this,
              );
            },
            this,
          );
          s(
            this.Ic,
            function (a) {
              s(
                E,
                function (a) {
                  4 > a.length && ((a[2] = a[0]), (a[3] = a[1]));
                },
                this,
              );
              this.G.zc(a, E, this.bc);
            },
            this,
          );
        }
      }
    }
  };
  c.qd = l;
  c.kg = function () {
    var a = 0;
    s(
      this.Ud,
      function (b) {
        var d = b.length;
        if (0 < d)
          for (
            var c = I(b[this.bc ? d - 1 : 0]), e = this.bc ? 0 : 1;
            e < d;
            ++e
          ) {
            var g = I(b[e]),
              f = g.e() - c.e(),
              c = g.c() - c.c();
            a += Pc(f * f + c * c);
            c = g;
          }
      },
      this,
    );
    return 0.4 * a;
  };
  c.wa = function () {
    return this.k.zIndex;
  };
  c.J = function (a) {
    var b = this.Ic,
      d = this.k.zIndex;
    this.G &&
      s(
        b,
        function (b) {
          this.G.wc(b, a, d);
          b.zIndex = a;
        },
        this,
      );
    this.k.zIndex = a;
  };
  c.Vb = function (a) {
    var b = (this.Eb[0] = this.Eb[0] || {}),
      d =
        'strokeWeight strokeColor strokeOpacity strokeStyle startArrow endArrow'.split(
          ' ',
        );
    this.bc && d.push('fillColor', 'fillOpacity');
    s(d, function (d) {
      a[d] === T || (b[d] = a[d]);
    });
    a.additionalStyles &&
      ((this.Eb = [b].concat(a.additionalStyles)), (this.Z = l));
  };
  n(da, fa);
  da.prototype.bc = l;
  da.prototype.ti = function () {
    var a = 0;
    s(this.Ud, function (b) {
      var d = b.length;
      if (0 < d)
        for (var c = I(b[d - 1]), e = 0; e < d; ++e) {
          var g = c,
            c = I(b[e]);
          a += c.e() * g.c() - g.e() * c.c();
        }
    });
    return 0.08 * Math.abs(a);
  };
  n(ma, Ua);
  c = ma.prototype;
  c.Db = function (a) {
    a.bounds && re(this, a.bounds);
  };
  c.Cb = function (a) {
    var b = this.k.zIndex;
    this.Db(a);
    this.Vb(a);
    this.f && (this.pb(), this.z());
    b !== a.zIndex && a.zIndex !== T && this.J(a.zIndex);
  };
  c.Da = tf;
  c.jb = function () {
    this.pb();
    this.J(this.k.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.xb,
        d = !!b;
      d || ((b = this.xb = a.create('path')), (this.Ga = jd(this, b)));
      a.rc(b, this.Eb);
      d || a.uc(b);
    }
  };
  c.Tc = function () {
    if (this.xb) {
      var a = this.Ga;
      s(a, y);
      this.G.dc(this.xb);
      a.length = 0;
      eventIds_ = [];
      this.xb = f;
    }
  };
  c.Vc = function (a) {
    re(this, a);
    this.z();
  };
  c.Kb = function () {
    return zc(this.Da.B(), this.Da.rb());
  };
  c.aa = function () {
    this.Z = l;
    this.z();
  };
  c.z = function () {
    if (this.Z) {
      this.Z = j;
      var a = this.va();
      if (a) {
        var b = a.ab(this.Da.B()),
          a = a.ab(this.Da.rb()),
          d = this.p().b,
          c = 2 * d.m(),
          e = 2 * d.h(),
          d = a.y + e,
          e = b.y + e,
          b = b.x + c,
          a = a.x + c;
        this.G.zc(this.xb, [[b, e, b, d, a, d, a, e]], l);
      }
    }
  };
  c.wa = function () {
    return this.k.zIndex;
  };
  c.J = function (a) {
    var b = this.k.zIndex;
    this.G && (this.G.wc(this.xb, a, b), (this.xb.zIndex = a));
    this.k.zIndex = a;
  };
  n(U, Ua);
  c = U.prototype;
  c.Db = function (a) {
    a.center && se(this, a.center);
    a.radius && this.qc(a.radius);
    a.rx && this.qc({ rx: a.rx });
    a.ry && this.qc({ ry: a.ry });
  };
  c.Cb = function (a) {
    var b = this.k.zIndex;
    this.Db(a);
    this.Vb(a);
    this.f && (this.pb(), this.z());
    b !== a.zIndex && a.zIndex !== T && this.J(a.zIndex);
  };
  c.Wd = 0;
  c.n = db;
  c.jb = function () {
    this.pb();
    this.J(this.k.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.qb,
        d = !!b;
      d || ((b = this.qb = a.create('ellipse')), (this.Ga = jd(this, b)));
      a.rc(b, this.Eb);
      d || a.uc(b);
    }
  };
  c.Tc = function () {
    if (this.qb) {
      var a = this.Ga;
      s(a, y);
      this.G.dc(this.qb);
      a.length = 0;
      eventIds_ = [];
      this.qb = f;
    }
  };
  c.s = function (a) {
    se(this, a);
    this.z();
  };
  c.v = function () {
    return ua(this.n);
  };
  c.qc = function (a) {
    var b = this.k.radius,
      a = 2.5 * a;
    b != a && ((this.Wd = a), (this.Z = l));
  };
  c.jf = function (a) {
    this.qc(a);
    this.z();
  };
  c.Ge = function () {
    return 0.4 * this.Wd;
  };
  c.aa = function () {
    this.Z = l;
    this.z();
  };
  c.z = function () {
    if (this.Z) {
      this.Z = j;
      var a = this.va();
      if (a) {
        var b = this.Hc ? this.lc : this.Wd,
          d = this.Hc ? this.mc : b,
          c = a.lb(this.n.la(-b, d)),
          b = a.lb(this.n.la(b, -d)),
          a = a.ab(this.n),
          d = this.p().b;
        this.G.rd(
          this.qb,
          a.x + 2 * d.m(),
          a.y + 2 * d.h(),
          (b.e() - c.e()) / 2,
          (b.c() - c.c()) / 2,
        );
      }
    }
  };
  c.Kb = function () {
    var a = this.Hc ? this.lc : this.Wd,
      b = this.Hc ? this.mc : a,
      c = this.n.la(-a, -b),
      a = this.n.la(a, b);
    return zc(c, a);
  };
  c.wa = function () {
    return this.k.zIndex;
  };
  c.J = function (a) {
    var b = this.k.zIndex;
    this.G && (this.G.wc(this.qb, a, b), (this.qb.zIndex = a));
    this.k.zIndex = a;
  };
  n(C, U);
  c = C.prototype;
  c.Hc = l;
  c.lc = 0;
  c.mc = 0;
  c.qc = function (a, b) {
    var c = {};
    'object' == typeof a ? (c = a) : ((c.rx = a), (c.ry = b));
    c.rx && this.lc != 2.5 * c.rx && ((this.lc = 2.5 * c.rx), (this.Z = l));
    c.ry && this.mc != 2.5 * c.ry && ((this.mc = 2.5 * c.ry), (this.Z = l));
  };
  c.jf = function (a, b) {
    this.qc(a, b);
    this.z();
  };
  c.Ge = function () {
    return { rx: 0.4 * this.lc, ry: 0.4 * this.mc };
  };
  c.og = function () {
    return 0.4 * this.lc;
  };
  c.pg = function () {
    return 0.4 * this.mc;
  };
  n(x, Z);
  x.prototype.Aa = l;
  x.prototype.Za = j;
  x.prototype.S = 0;
  x.prototype.O = 0;
  var xf =
    'touchstart mousedown MSPointerDown mousewheel DOMMouseScroll wheel contextmenu dblclick'.split(
      ' ',
    );
  c = x.prototype;
  c.M = function () {
    var a = (this.a = q('div'));
    ra(a, 'default');
    M(a);
    Wa(a, '#fff');
    ya(a, 'border:1px solid #7681A8');
    s(xf, function (b) {
      k(a, b, t.Ua);
    });
    var b = (this.Jh = q('div'));
    M(b);
    a.appendChild(b);
    J(b, 11, 9);
    b = this.Uf = q('div');
    M(b);
    $(b, 0, 0);
    a.appendChild(b);
    this.rj &&
      ((b = q('img')),
      (b.alt = 'close'),
      (b.width = 14),
      (b.height = 13),
      (b.src = uc + 'bt_close.gif'),
      M(b),
      i(b, { right: '5px', top: '5px' }),
      ra(b, 'pointer'),
      a.appendChild(b),
      k(b, 'click', this.close, this));
  };
  c.n = db;
  c.s = function (a) {
    this.n = a instanceof Y ? a : I(a);
    this.z();
  };
  c.v = function () {
    return this.n instanceof Y ? this.n : ua(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof na && this.z();
  };
  c.Bc = p('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof na && this.z();
  };
  c.fc = p('Ba');
  c.jb = function () {
    this.cg = l;
    this.wd().Xe.appendChild(this.a);
    ld(this);
  };
  c.kb = function () {
    Ea(this.a);
  };
  c.aa = function () {
    this.z();
  };
  c.z = function () {
    var a = this.va();
    if (a) {
      this.Ka();
      var b = this.p(),
        c = b.b,
        f = this.a,
        e = this.Jh,
        g = this.S,
        h = this.O,
        i = a.ab(this.n, this.Ba, this.Ha),
        k = this.gb,
        k = k ? -k.T.vd().c() : 0,
        c =
          this.Kf ||
          h + 30 < i.y + k ||
          i.y + h + 30 >= c.h() ||
          b instanceof na;
      this.If !== c &&
        (Re(e, c ? uc + 'triangle.png' : uc + 'triangle_down.png'),
        jb(e, 11, 9),
        (this.If = c));
      $(e, (g - 11) >> 1, c ? h : -9);
      e = [-(g >> 1), c ? -h - 9 : 9];
      a = a.lb(this.n, this.Ba, this.Ha);
      $(
        f,
        e[0] + a.e() + this.Qd.m(),
        e[1] + a.c() + this.Qd.h() + (c ? k : 0),
      );
      this.cg &&
        this.Kf &&
        ((this.cg = j),
        b.Rd(
          Math.max(0, i.e() - e[0] - b.b.m() + 11) +
            Math.min(0, i.e() + e[0] - 10),
          Math.min(0, i.c() + e[1] + k - 10),
        ));
    }
  };
  c.Ka = function () {
    var a = this.p().b,
      b = this.n,
      c = this.Aa;
    b instanceof Y && ((b = b.N()), (c = c && (!b || a.ua(b))));
    c != this.Za && ((this.Za = c) ? (ib(this.a), ld(this)) : Ra(this.a));
  };
  c.cc = f;
  c.ce = function (a) {
    te(this, a);
    ld(this);
    this.z();
  };
  c.Ee = p('cc');
  c.gb = f;
  c.open = function (a, b) {
    this.gb = b || f;
    b && (this.s(b.v()), this.oc(b.fc()));
    this.F(a);
  };
  c.close = function () {
    this.F(f);
  };
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Aa(this.a, a);
  };
  c.wa = p('$a');
  c.rc = Pa();
  n(Kc, Ga);
  Kc.prototype.M = function () {
    var a = (this.a = q('div'));
    ya(a, 'color:#000;text-align:center;font-size:10px');
    fb(a);
    var b = (this.Lf = q('div'));
    fb(b);
    za(b, 2, 3, 0, 4);
    i(b, {
      height: '6px',
      transition: 'width 0.1s',
      border: '2px solid #000',
      'border-top': 'none',
    });
    a.appendChild(b);
    var c = (this.$f = q('div'));
    fb(c);
    za(c, 0, 4, 0, 0);
    i(c, {
      'font-family': 'AppleSDGothicNeo-Regular,"\ub3cb\uc6c0",dotum,sans-serif',
      'font-weight': 'bold',
    });
    a.appendChild(c);
    ob &&
      setTimeout(function () {
        a.style.cssText = a.style.cssText;
        b.style.cssText = b.style.cssText;
      }, 0);
  };
  Kc.prototype.V = function (a) {
    var b = 0 > a ? Ze[0] / z(2, -a) : Ze[a];
    this.$f.innerHTML = 1e3 > b ? b + 'm' : b / 1e3 + 'km';
    b = 58;
    switch (a) {
      case 0:
      case 1:
        b = 76;
        break;
      case 2:
        b = 56;
        break;
      case 3:
      case 4:
        b = 46;
    }
    i(this.Lf, { width: b + 'px' });
  };
  var Ze = [
    10, 20, 30, 50, 100, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3, 32e3, 64e3, 128e3,
  ];
  n(Cb, Ga);
  Cb.prototype.M = function () {
    var a = (this.a = q('div'));
    M(a);
    ra(a, 'default');
    Aa(a, 1);
    za(a, 0, 6, 0);
    i(a, { height: '19px', 'line-height': '14px', left: '0', bottom: '0' });
    ca(this, this.Ub);
    this.Ub.P();
    var b = (this.Ph = q('div'));
    za(b, 0, 4, 0);
    fb(b);
    var c = (this.uk = q('a'));
    k(c, 'click', this.Oh, this);
    c.target = '_blank';
    c.href = 'http://map.kakao.com/';
    c.title =
      'Kakao \uc9c0\ub3c4\ub85c \ubcf4\uc2dc\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694.';
    fb(c);
    J(c, 32, 10);
    var f = (this.Mh = q('img'));
    fb(f);
    J(f, 32, 10);
    f.src = Ce;
    f.alt = 'Kakao \uc9c0\ub3c4\ub85c \uc774\ub3d9';
    i(f, { border: 'none' });
    c.appendChild(f);
    b.appendChild(c);
    c = this.Mj = q('div');
    i(c, { font: '11px/11px Arial, Tahoma, Dotum, sans-serif' });
    fb(c);
    b.appendChild(c);
    a.appendChild(b);
    k(a, 'mousedown', aa);
  };
  Cb.prototype.Oh = function (a) {
    aa(a);
    h(this, 'logo');
  };
  var ff = qa + 'm_bi_w.png',
    Ce = qa + 'm_bi_b.png';
  Cb.prototype.V = function (a) {
    this.Ub.V(a);
  };
  Cb.prototype.nb = function (a) {
    a = !!a;
    a != this.Aa && ((this.Aa = a) ? ib(this.a) : Ra(this.a));
  };
  Cb.prototype.s = function (a, b) {
    if (!(this.kc == a && this.ah == b)) {
      this.kc = a || 0;
      this.ah = b;
      var c = {},
        f = b ? 'right' : 'left';
      Da(a) ? ((c[this.Hh[a]] = 0), (c.bottom = 0)) : (c = a);
      s(['top', 'bottom', 'left', 'right'], function (a) {
        var b = c[a];
        c[a] = b === T ? '' : Da(b) ? b + 'px' : b;
      });
      i(this.a, c);
      i(this.Ub.a, { float: f });
      i(this.Ph, { float: f });
    }
  };
  n(cb, Ga);
  c = Lc.prototype;
  c.S = 640;
  c.O = 480;
  c.D = 0;
  c.Q = 14;
  c.ja = function (a, b) {
    this.S = a;
    this.O = b;
  };
  c.m = p('S');
  c.h = p('O');
  c.za = function (a) {
    var b = this.ca.e(),
      c = this.ca.c(),
      f = z(2, -this.H);
    this.ka = new La(
      b + H((a.e() - b) * f - this.S / 2) / f,
      c + H((a.c() - c) * f - this.O / 2) / f,
    );
  };
  c.C = function () {
    return this.ka.la(this.S / z(2, -this.H) / 2, this.O / z(2, -this.H) / 2);
  };
  c.ca = new La(1838720, 4066832);
  c.ka = new La(1838720, 4066832);
  c.B = p('ka');
  c.H = 3;
  c.V = function (a) {
    this.H = A(this.D, N(this.Q, a));
  };
  c.j = p('H');
  c.ld = function (a, b, c) {
    var f = a.e() + ha(this),
      a = a.c() + ia(this);
    return (
      f >= (-b || 0) &&
      a >= (-c || 0) &&
      f < this.S + (b || 0) &&
      a < this.O + (c || 0)
    );
  };
  c.moveBy = function (a, b) {
    var c = z(2, -this.H);
    this.ka = this.ka.la(a / c, b / c);
  };
  c.Yc = Zb('Xb');
  c = Ub.prototype;
  c.ja = function (a, b) {
    this.S = a;
    this.O = b;
  };
  c.m = p('S');
  c.h = p('O');
  c.s = Zb('kc');
  c.v = p('kc');
  c.ib = f;
  c.Sd = 0;
  c.U = Zb('Sd');
  c.N = p('Sd');
  c.H = 0;
  c.V = function (a) {
    this.H = A(N(a, 3), -3);
  };
  c.j = p('H');
  c.ld = function (a) {
    var b = a.e(),
      a = a.c();
    return 0 <= b && 0 <= a && b < this.S && a < this.O;
  };
  c.ua = function (a) {
    return this.Sd == a;
  };
  n(md, Fa);
  c = md.prototype;
  c.qi = 15;
  c.ec = 45;
  c.Ii = 16;
  c.Ui = 250;
  c.Di = 8;
  c.Ci = 400;
  c.Cd = { 33: 1, 34: 2, 35: 4, 36: 8 };
  c.Md = { 37: 1, 38: 2, 39: 4, 40: 8, 98: 8, 100: 1, 102: 4, 104: 2 };
  c.Ah = { 107: -1, 109: 1, 187: -1, 189: 1 };
  c.jh = {
    17: 'ctrl',
    18: 'alt',
    9: 'tab',
    91: 'left command window',
    92: 'right window',
    93: 'right command menu',
  };
  c.setActive = function (a) {
    this.Gb !== a &&
      (a
        ? (this.oi = Ib(
            ['click', 'focusin', 'focus'],
            function (a) {
              return k(document, a, this.pi, this, l);
            },
            this,
          ))
        : (s(
            this.oi,
            function (a) {
              y(a);
            },
            this,
          ),
          ve(this, j)),
      (this.Gb = a));
  };
  c.pi = function (a) {
    a = a.target;
    ve(
      this,
      (this.a == a || bc(this.a, a)) &&
        0 > Qa(['INPUT', 'BUTTON', 'TEXTAREA'], a.tagName),
    );
  };
  c.Ji = function (a) {
    var b = a.keyCode;
    if (t.fb()) t.Wa(a);
    else if (b in this.jh) this.$c = l;
    else if (!this.$c || this.hb.cb())
      b in this.Md
        ? ((this.ra |= this.Md[b]), this.Ue(), aa(a))
        : b in this.Cd
        ? ((this.eb |= this.Cd[b]), this.Pe(), aa(a))
        : b in this.Ah && this.H(b);
  };
  c.Li = function (a) {
    var b = a.keyCode;
    this.Zf.start();
    if (t.fb()) t.Wa(a);
    else if (b in this.jh) this.$c = j;
    else if (!this.$c || this.hb.cb())
      if (91 === b || 92 === b) we(this);
      else if (b in this.Md) {
        if (!this.hb.cb() && (this.Ld.stop(), !this.ic.cb())) {
          var c = this.Ci,
            a = (this.ra & 1 ? -c : 0) + (this.ra & 4 ? c : 0),
            c = (this.ra & 2 ? -c : 0) + (this.ra & 8 ? c : 0);
          this.Me = this.Di;
          this.Ne = a;
          this.Oe = c;
          this.ic.start();
        }
        this.ra &= ~this.Md[b];
        this.hb.cb() && !this.ra && (this.hb.stop(), (this.Kd = 0));
      } else b in this.Cd && (this.eb &= ~this.Cd[b]);
  };
  c.Yh = function () {
    h(this, 'keyup');
  };
  c.Ca = function () {
    var a = lf((Ne / 2) * (++this.Dg / this.Me)) / this.qi,
      b = {};
    0 >= a
      ? (this.ic.stop(), (this.Dg = 0))
      : ((b.x = this.Ne * a), (b.y = this.Oe * a), h(this, 'move', b));
  };
  c.L = function () {
    var a = (this.ra & 1 ? -1 : 0) + (this.ra & 4 ? 1 : 0),
      b = (this.ra & 2 ? -1 : 0) + (this.ra & 8 ? 1 : 0),
      c = {},
      f;
    if (a || b)
      (f =
        this.Kd < this.ec ? (kf(Ne * (++this.Kd / this.ec - 0.5)) + 1) / 2 : 1),
        (f *= this.kh),
        (c.x = a * f),
        (c.y = b * f),
        h(this, 'move', c);
  };
  c.Ti = function () {
    this.hb.start();
    this.Ld.stop();
  };
  c.Ue = function () {
    this.hb.cb() || this.Ld.start();
  };
  c.H = function (a) {
    h(this, 'zoom', this.Ah[a]);
  };
  c.Pe = function () {
    if (!this.ic.cb()) {
      var a = this.a.getBoundingClientRect(),
        b = a.right - a.left,
        a = a.bottom - a.top,
        b = (this.eb & 4 ? b : 0) + (this.eb & 8 ? -b : 0),
        a = (this.eb & 1 ? -a : 0) + (this.eb & 2 ? a : 0);
      this.Me = this.Ii;
      this.Ne = b;
      this.Oe = a;
      this.ic.start();
    }
  };
  n(qc, cb);
  c = qc.prototype;
  c.Lc = function (a) {
    bc(this.t.a, a.relatedTarget || a.fromElement) || h(this, 'mouseover');
  };
  c.Kc = function (a) {
    bc(this.t.a, a.relatedTarget || a.toElement) || h(this, 'mouseout');
  };
  c.Yd = function (a) {
    t.fb(a) ? t.Wa(a) : (aa(a), h(this, 'rightclick', this.Fa(a)));
  };
  c.K = j;
  c.Uc = j;
  c.yg = function () {
    this.Gc = this.Bd = j;
  };
  c.Lj = function (a) {
    if (this.A || 1 < a.touches.length) this.od.stop(), (this.Bd = this.Gc = j);
    else if (((a = this.Vh = a.touches[0]), (a = sa(a, this.a)), this.Bd)) {
      var b = a.c() - this.oh;
      Ba(a.e() - this.nh) > Tc || Ba(b) > Tc
        ? ((this.nh = a.e()), (this.oh = a.c()))
        : (this.Gc = l);
      this.od.stop();
      this.Bd = j;
    } else (this.nh = a.e()), (this.oh = a.c()), this.od.start(), (this.Bd = l);
  };
  c.bi = function () {
    this.Gc && (this.Yf(this.Vh), (this.Gc = j));
  };
  c.xa = 0;
  c.yd = j;
  c.ne = function (a, b) {
    var c = this.ia,
      f = Ca[a],
      e = new hd();
    e.b = c.b;
    b ? (c.Xa.unshift(e), Hd(c, e)) : (c.Xa.push(e), ca(c, e));
    e.Yc(f);
    e.q();
    Ia(this);
  };
  c.bf = function (a) {
    for (var b = this.ia, a = Ca[a], c = b.Xa.length - 1; 0 <= c; --c)
      if (b.Xa[c].sb() == a) {
        b.removeChild(b.Xa[c]);
        b.Xa.splice(c, 1);
        break;
      }
    Ia(this);
  };
  c.A = j;
  c.rh = 0;
  c.Bb = f;
  c.ga = f;
  c.Sb = j;
  c.Pa = 0;
  c.Qa = 0;
  c.ug = f;
  c.dd = j;
  c.Uj = function (a) {
    t.fb(a)
      ? t.Wa(a)
      : 1 == a.touches.length
      ? ((this.dd = l),
        (this.ug = this.Fa(a.touches[0])),
        this.bb.start(),
        De(this, a))
      : this.dd && (aa(a), (this.dd = j), this.ub(a.touches[0], l));
  };
  c.Qe = function (a) {
    t.fb(a)
      ? t.Wa(a)
      : (Gd(a) && De(this, a), this.A || h(this, 'mousedown', this.Fa(a)));
  };
  c.Tj = function (a) {
    aa(a);
    this.Jd(a.targetTouches[0]);
  };
  c.vh = function (a) {
    if (this.dd)
      return (
        (this.dd = j), this.ub(a.changedTouches[0], 'touchcancel' == a.type)
      );
  };
  c.vg = function (a) {
    this.ga === f && h(this, 'mousemove', this.Fa(a));
  };
  c.wg = function (a) {
    this.A || h(this, 'mouseup', this.Fa(a));
  };
  var Tc = K ? 10 : 3;
  c = qc.prototype;
  c.Jd = function (a) {
    var b = sa(a, this.a),
      c = b.e() - this.Pa,
      F = b.c() - this.Qa;
    ta &&
      ((this.Ng = b.e()),
      (this.Og = b.c()),
      this.De && a.Vj && ((c = Wb(a.Vj)), (F = Wb(a.Jk))));
    if (this.ga && (Ba(c) > Tc || Ba(F) > Tc)) {
      this.ga = j;
      rd(this.t.a);
      if (!this.K) return;
      h(this, 'dragstart');
      this.Sb = l;
      this.bb.stop();
      this.na.Yc(f);
    }
    !this.ga &&
      this.K &&
      ((this.Pa = b.e()),
      (this.Qa = b.c()),
      this.b.moveBy(-c, F),
      this.t.$b(c, F),
      this.ma.$b(-c, -F),
      !Hb && !K && (this.u.sc(c, F), this.ia.sc(c, F)),
      h(this, 'drag'),
      h(this, 'center_changed'),
      h(this, 'bounds_changed'),
      this.Yb.push({ time: a.timeStamp, x: b.e(), y: b.c() }),
      3 < this.Yb.length && this.Yb.shift());
  };
  c.Fa = function (a) {
    var a = sa(a, this.a),
      b = Db(this.b, a).W(this.g);
    return new Od(a, b);
  };
  c.ub = function (a, b) {
    id();
    this.Sc();
    if (!b)
      if (this.ga)
        this.hd ||
          (t.fb(a)
            ? t.Wa(a)
            : (h(this, 'click', this.Fa(a)),
              this.Ug &&
                (this.b.C().ua(this.Dd) ||
                  (h(this, 'center_changed'), h(this, 'bounds_changed')),
                mb(this)))),
          (this.Sb = j),
          Nc(this),
          (this.hd = j);
      else {
        var c = 0,
          F = 0,
          e = 1,
          g = 0;
        if (this.hj && 1 < this.Yb.length)
          var g = this.Yb[0],
            i = this.Yb[this.Yb.length - 1],
            c = i.x - g.x,
            F = i.y - g.y,
            e = Pc(z(c, 2) + z(F, 2)),
            g = 1e3 * (e / (i.time - g.time));
        if (500 <= g)
          (g = N(g, 1500)),
            Fe(this, ((-c / e) * g) / 2, ((-F / e) * g) / 2, g, Jd, l);
        else {
          this.Sb = j;
          Nc(this);
          if (Hb || K) this.u.q(), this.ia.q();
          this.I.q();
          Ia(this);
          mb(this);
        }
        this.yg();
        h(this, 'dragend');
      }
    this.Pc = 0;
    this.bb.stop();
    Jc(this.ta, j);
    this.ga = f;
  };
  c.Sc = function () {
    y(this.Re);
    y(this.Se);
    y(this.wh);
    y(this.uh);
    y(this.th);
    this.th = this.uh = this.wh = this.Se = this.Re = f;
  };
  c.Yf = function (a) {
    if (!this.A)
      if (t.fb(a)) t.Wa(a);
      else {
        var b = sa(a, this.a),
          c = this.Fa(a),
          a = new Ja(0);
        a.addListener(
          'tick',
          function () {
            h(this, 'dblclick', c);
            this.ai && rc(this, -1, b);
            this.Pc = 0;
          },
          this,
        );
        a.start();
      }
  };
  c.Ta = function (a) {
    var b = this.b,
      c = ha(b),
      f = ia(b),
      c = H(a.je - c),
      f = H(a.ke - f);
    if (c || f)
      b.moveBy(-c, f),
        this.ma.Y(-a.je, -a.ke),
        !Hb && !K && (this.A || Vb(this));
  };
  c.Ye = function () {
    Vb(this);
    Ia(this);
    this.Qc = f;
    this.Sb = j;
    Nc(this);
    this.A = j;
    h(this, 'center_changed');
    h(this, 'bounds_changed');
    mb(this);
  };
  c.ij = function () {
    Vb(this);
    Ia(this);
    this.Qc = f;
    this.A = j;
  };
  c.Mb = 0;
  c.Te = function (a) {
    if (t.fb(a)) t.Wa(a);
    else if ((aa(a), !this.Eg)) {
      var b = 10 * a.wheelDelta || -120 * (a.detail || a.deltaY);
      this.Mb = 120 > Ba(b) ? this.Mb + (a.wheelDelta || 0) : this.Mb + b;
      this.A && +new Date() < this.rh
        ? (this.Mb = 0)
        : a.axis == a.VERTICAL_AXIS &&
          120 <= Ba(this.Mb) &&
          ((this.Mb = 0),
          (b = 0 < (a.wheelDelta || -a.detail || -a.deltaY) ? -1 : 1),
          (a = sa(a, this.a)),
          rc(this, b, a));
    }
  };
  c.$d = function (a, b, c, f, e) {
    f = w(f, 300);
    0 === f
      ? (this.I.q(), this.Ab())
      : ((this.A = 0 !== f),
        (this.rh = +new Date() + 200),
        this.ia.P(),
        this.da.P(),
        (a = z(2, -a)),
        this.vf
          ? this.vf.reset(a, f)
          : ((b = this.vf =
              new dc({ duration: f, Zb: e, vb: b, wb: c, yb: a })),
            Bb || ob ? this.I.P() : this.I.scale(b),
            this.u.scale(b),
            b.start(),
            this.na.Ea()));
  };
  c.Pe = function (a, b, c, f, e, g, h, i, j) {
    0 === i
      ? (this.b.za(this.Bb),
        this.t.Y(g, h),
        this.ma.Y(-g, -h),
        this.I.q(),
        this.Ab())
      : ((this.Eg = this.A = l),
        this.ia.P(),
        this.da.P(),
        (a = z(2, -a)),
        (b = new Wc({
          duration: i,
          yb: a,
          Zb: j,
          vb: b,
          wb: c,
          nf: f,
          of: e,
          se: g,
          ue: h,
        })),
        Bb || ob ? this.I.P() : this.I.scale(b),
        (c = this.t),
        b.addListener('tick', c.Ta, c),
        this.u.scale(b),
        b.start(),
        this.na.Ea());
  };
  c.Ab = function () {
    Be(this);
    this.u.Yc(this.na.sb());
    this.u.q();
    this.ia.show();
    this.ia.q();
    if (Bb || ob) this.I.show(), this.I.q();
    this.da.show();
    s(this.sa, Mc);
    Ia(this);
    Nc(this);
    this.Eg = this.A = j;
    this.vf = this.Bb = f;
    this.oe();
    this.oe = Q;
    this.ed && h(this, 'zoom_changed');
    this.b.C().ua(this.Dd) || h(this, 'center_changed');
    h(this, 'bounds_changed');
    mb(this);
    this.Mb = 0;
    if (Bb || ob) {
      var a = this.a;
      setTimeout(function () {
        a.className = a.className;
      }, 0);
    }
  };
  c.ig = function (a) {
    if (!this.De && !this.A)
      if (t.fb(a)) t.Wa(a);
      else {
        Eb(this);
        var b = new B(this.b.m() / 2, this.b.h() / 2);
        if (ta) {
          this.Ve.addPointer(a.pointerId);
          b = sa(a, this.a);
          if (2 > ++this.Pc) {
            this.Ng = b.e();
            this.Og = b.c();
            return;
          }
          b = new B((b.e() + this.Ng) / 2, (b.c() + this.Og) / 2);
        } else if (Oa) {
          if (2 != a.touches.length) return;
          this.Zh = Ge(a.touches);
          var b = sa(a.touches[0], this.a),
            c = sa(a.touches[1], this.a),
            b = new B((b.e() + c.e()) / 2, (b.c() + c.c()) / 2);
        } else b = sa(a, this.a);
        this.Pa = b.e();
        this.Qa = b.c();
        this.De = l;
        this.ub(a, l);
        this.Dd = this.b.C();
        this.Ce = Db(this.b, b);
        Fd(this.u.a, b.e() - ha(this.b), b.c() - ia(this.b));
        Fd(this.I.a, b.e() - ha(this.b), b.c() - ia(this.b));
        this.na.P();
        this.ia.P();
        this.da.P();
        He(this);
        this.Be = ta
          ? k(this.t.a, 'MSGestureChange', this.gg, this)
          : k(this.t.a, Oa ? 'touchmove' : 'gesturechange', this.gg, this);
        this.hg = ta
          ? k(this.t.a, 'MSGestureEnd', this.sd, this)
          : k(this.t.a, Oa ? 'touchend' : 'gestureend', this.sd, this);
        ta && (this.Ae = k(this.t.a, 'MSPointerUp', this.sd, this));
        Oa && (this.Ae = k(this.t.a, 'touchcancel', this.sd, this));
      }
  };
  c.gg = function (a) {
    aa(a);
    var b = a.scale;
    Oa
      ? (b = this.Ed = Ge(a.touches) / this.Zh)
      : ta && (this.Ed = b *= this.Ed || 1);
    Fc(this.u.a, b);
    Fc(this.I.a, b);
    b = a;
    Oa &&
      ((b = a.touches[0]),
      (a = a.touches[1]),
      (b = { pageX: (b.pageX + a.pageX) / 2, pageY: (b.pageY + a.pageY) / 2 }));
    this.Jd(b);
  };
  c.sd = function (a) {
    aa(a);
    He(this);
    var b = Oa || ta ? this.Ed || 1 : a.scale;
    this.Ed = 1;
    this.Sb = j;
    var a = this.b,
      c = Math.round(Math.log(b) * Math.LOG2E),
      f = this.b.j(),
      a = A(a.D, N(a.Q, f - c)),
      f = f - a;
    (this.ed = !!f) && h(this, 'zoom_start');
    b = z(2, f) / b;
    f = bd(this.Ce, this.b).e();
    c = bd(this.Ce, this.b).c();
    this.A = l;
    b = new dc({ duration: 100, vb: f, wb: c, yb: b });
    this.u.scale(b);
    this.I.scale(b);
    b.start();
    this.ed && pc(this.b, a, this.Ce);
    this.De = j;
    this.Pc = 0;
  };
  c.mi = function () {
    this.hd = l;
    this.Gc = j;
    h(this, 'rightclick', this.ug);
  };
  c.ej = function () {
    var a = this.b.C().W(this.g);
    P.open(
      'http://map.kakao.com/?urlX=' +
        (a.e() | 0) +
        '&urlY=' +
        (a.c() | 0) +
        '&urlLevel=' +
        this.b.j() +
        '&map_type=' +
        (1 == this.xa ? 'TYPE_MAP' : 'TYPE_SKYVIEW') +
        '&map_hybrid=' +
        (3 == this.xa ? 'true' : 'false'),
      '_blank',
    );
  };
  c.qh = function () {
    this.Sb || this.A ? (this.Ag = l) : h(this, 'tilesloaded');
  };
  n(r, qc);
  c = r.prototype;
  c.gc = p('a');
  c.C = function () {
    var a = this.b.C().W(this.g);
    return ua(a);
  };
  c.za = function (a, b) {
    if (!this.A) {
      var a = I(a),
        b = b || {},
        c = this.b,
        f = c.C(),
        e = va(a, this.g),
        g = c.j(),
        i = z(2, -g),
        j;
      if ((j = b.offset))
        (g = this.b.j()), (e = e.la(j.x / i || 0, -j.y / i || 0));
      if (!Sd(e, f, g)) {
        Eb(this);
        c.za(e);
        f = ha(c);
        e = ia(c);
        if (-1e4 > f || 1e4 < f || -1e4 > e || 1e4 < e)
          (c.ca = c.B()), this.u.Ea(), (f = e = 0);
        this.na.P();
        this.t.Y(f, e);
        this.ma.Y(-f, -e);
        Vb(this);
        Ia(this);
        h(this, 'center_changed');
        h(this, 'bounds_changed');
        mb(this);
      }
    }
  };
  c.td = function () {
    return this.b.j();
  };
  c.mb = function (a, b) {
    if (!this.A) {
      Eb(this);
      var c = this.b,
        f = c.j(),
        e,
        g = z(2, -f),
        a = w(a, f),
        f = A(c.D, N(c.Q, a)) - f;
      if (0 != f) {
        var b = b || {},
          h = b.anchor,
          i = b.animate;
        e = (i = i == l ? 3 > Ba(f) : i || j) ? w(i.duration, 300) : 0;
        i = (i && i.complete) || Q;
        h
          ? ((this.Bb = h = va(I(h), this.g)),
            (c = new B(
              H((h.e() - c.ka.e()) * g),
              H((c.ka.c() - h.c()) * g) + c.h(),
            )))
          : ((this.Bb = c.C()), (c = new B(c.m() >> 1, c.h() >> 1)));
        rc(this, f, c, { duration: e, complete: i });
      }
    }
  };
  c.Ej = function (a) {
    this.Id = a;
    var a = this.b,
      b = A(this.Id, this.u.sb().D);
    a.D = b;
    a.j() < a.D && this.mb(a.D);
    h(this, 'min_zoom_changed');
  };
  c.Dj = function (a) {
    this.Hd = a;
    var a = this.b,
      b = N(this.Hd, this.u.sb().Q);
    a.Q = b;
    a.j() > a.Q && this.mb(a.Q);
    h(this, 'max_zoom_changed');
  };
  c.Kb = function () {
    var a = z(2, -this.b.j()),
      b = this.b.B(),
      a = b.la(this.b.m() / a, this.b.h() / a);
    return zc(b.W(this.g), a.W(this.g));
  };
  c.gd = function (a, b, c, f, e) {
    var b = 0 !== b ? b || 32 : 0,
      c = 0 !== c ? c || b : 0,
      f = 0 !== f ? f || b : 0,
      e = 0 !== e ? e || c : 0,
      g = this.b,
      h = I(a.B()),
      i = I(a.rb()),
      a = va(h, this.g),
      h = va(i, this.g),
      g = A(
        4,
        (h.e() - a.e()) / A(1, g.m() - c - e),
        (h.c() - a.c()) / A(1, g.h() - b - f),
      ),
      g = Math.ceil(Math.log(g) / Math.log(2)),
      i = z(2, -g);
    return {
      zoom: g,
      ac: new La(
        (a.e() + h.e() + (c - e) / i) / 2,
        (a.c() + h.c() + (b - f) / i) / 2,
      ),
    };
  };
  c.Vc = function (a, b, c, f, e) {
    if (!this.A) {
      Eb(this);
      var a = $b(a),
        g = this.b,
        b = this.gd(a, b, c, f, e),
        a = g.j() != b.zoom,
        c = g.C(),
        f = b.ac,
        c = c.e() != f.e() || c.c() != f.c();
      if (a || c) {
        a && h(this, 'zoom_start');
        g.V(b.zoom);
        g.za(b.ac);
        this.Oa.V(this.b.j());
        b = ha(g);
        f = ia(g);
        if (-1e4 > b || 1e4 < b || -1e4 > f || 1e4 < f)
          (g.ca = g.B()), this.u.Ea(), (b = f = 0);
        this.t.Y(b, f);
        this.ma.Y(-b, -f);
        Vb(this);
        Ia(this);
        c && h(this, 'center_changed');
        a && h(this, 'zoom_changed');
        h(this, 'bounds_changed');
        mb(this);
      }
    }
  };
  c.Wc = function (a) {
    Ae(this, a);
    h(this, 'maptypeid_changed');
  };
  c.ud = p('xa');
  c.le = function (a, b) {
    b = b === T ? Qc : b;
    if (a instanceof kb || a instanceof ic) a.F(this), (a = a.a);
    this.xc.le(a, b);
  };
  c.Xd = function (a) {
    a instanceof kb || a instanceof ic
      ? (a.F(f), (a = a.a) && this.xc.Xd(a))
      : this.xc.Xd(a);
  };
  c.Bj = function (a, b) {
    this.Oa.s(a, b);
  };
  c.Jf = function (a) {
    0 > Qa(this.sa, a) &&
      (this.sa.push(a), (a.ea = this.Ra), (a.g = this.g), a.jb(), a.aa());
  };
  c.$g = function (a) {
    0 <= Qa(this.sa, a) && (a.kb(), (a.ea = f), (a.g = f), qb(this.sa, a));
  };
  c.Rd = function (a, b, c) {
    var c = c || {},
      f = c.animate || {},
      c = w(f.duration || 300),
      e = f.timingFunc || Bc.EASE_OUT,
      f = hb(f.cancelable);
    Math.abs(a) < this.b.m() && Math.abs(b) < this.b.h() && 0 < c
      ? (Eb(this), Fe(this, a, b, c, e, f))
      : ((a = Db(this.b, new B((this.b.m() >> 1) + a, (this.b.h() >> 1) + b)).W(
          this.g,
        )),
        this.za(a));
  };
  c.Vg = function (a, b, c, f, e) {
    b =
      b !== T && 'number' !== b
        ? b
        : { padding: { top: b, right: c, bottom: f, left: e } };
    a instanceof W
      ? Ie(this, a, b)
      : a instanceof ga
      ? Ie(this, $b(a), b)
      : ((a = I(a)),
        (a = cd(va(a, this.g), this.b)),
        this.Rd(a.e() - (this.b.m() >> 1), a.c() - (this.b.h() >> 1), b));
  };
  c.Ia = function () {
    var a = this.b,
      b = this.a.clientWidth,
      c = this.a.clientHeight,
      f = z(2, -a.j());
    if (!(b == a.m() && c == a.h())) {
      f = (c - a.h()) / f;
      a.ja(b, c);
      var e = a.B(),
        e = e.la(0, -f);
      a.ka = e;
      e = a.ca;
      f = e.la(0, -f);
      a.ca = f;
      this.ma.ja(b, c);
      Vb(this);
      this.xc.q();
      Ia(this);
      h(this, 'center_changed');
      h(this, 'bounds_changed');
      mb(this);
    }
  };
  c.df = function (a) {
    xe(this, a);
  };
  c.Fe = p('K');
  c.Fj = function (a) {
    ye(this, a);
    ze(this, a);
  };
  c.zi = p('ae');
  c.pc = function (a) {
    var b = this.ta;
    b.Xf = a;
    Jc(b, j);
  };
  c.va = p('g');
  c.Ze = function () {
    this.hd = l;
    setTimeout(
      xa(function () {
        this.hd = j;
      }, this),
      0,
    );
  };
  c.bh = function (a) {
    this.Qb
      ? this.Qb.setActive(a)
      : ((this.Qb = new md(this.a, a)),
        this.Qb.addListener('move', this.Si, this),
        this.Qb.addListener('zoom', this.ek, this),
        this.Qb.addListener('keyup', this.uj, this));
  };
  c.wi = function () {
    return this.Qb.Gb;
  };
  c.Si = function (a) {
    var b = H(a.x),
      a = H(a.y);
    this.b.moveBy(b, -a);
    this.t.$b(-b, -a);
    this.ma.$b(b, a);
    this.u.sc(-b, -a);
    this.ia.sc(-b, -a);
    Ia(this);
    h(this, 'center_changed');
    h(this, 'bounds_changed');
    mb(this);
  };
  c.ek = function (a) {
    this.mb(this.b.j() + a, { animate: l });
  };
  c.uj = function () {
    this.A || this.I.q();
  };
  c.Hi = function (a, b, c) {
    c = c || {};
    if (!this.A) {
      a instanceof L || a instanceof pa
        ? ((c.center = a), (c.level = b))
        : (c = a);
      var b = this.b,
        f = b.j();
      c.level = w(c.level, f);
      var a = I(c.center),
        e = c.animate,
        g = e ? w(e.duration, 300) : 0,
        e = e ? e.timingFunc : Bc.EASE_OUT,
        h = b.C(),
        a = va(a, this.g),
        c = A(b.D, N(b.Q, c.level)) - f,
        i = z(2, -f);
      if (!Sd(a, h, f) || 0 !== c)
        (this.Bb = a),
          (f = new B(
            H((a.e() - b.ka.e()) * i),
            H((b.ka.c() - a.c()) * i) + b.h(),
          )),
          rc(this, c, f, { duration: g, Zb: e, Lh: l }),
          b.za(a);
    }
  };
  c.me = function (a, b) {
    this.ma.me(a, b);
  };
  c.af = function (a) {
    this.ma.af(a);
  };
  c.sb = function () {
    return this.u.sb();
  };
  n(na, cb);
  na.prototype.sa = [];
  var Je = 0,
    Bd = { qk: 0, mk: 1 };
  c = na.prototype;
  c.Mc = '';
  c.Jf = function (a) {
    0 > Qa(this.sa, a) &&
      (this.sa.push(a),
      (a.ea = this.Ra),
      (a.g = this.g),
      a.Kg && a.Kg(j),
      a.jb(),
      a.aa());
  };
  c.$g = function (a) {
    0 <= Qa(this.sa, a) &&
      (a.kb(), (a.ea = f), (a.g = f), a.Zg && a.Zg(), qb(this.sa, a));
  };
  c.Ja = function () {
    s(this.sa, gf);
  };
  c.Rd = Pa();
  c.va = p('g');
  c.Ze = Q;
  n(R, na);
  var hf = Pe + 'roadview2.0/RoadView.swf?v=' + E.Dh;
  c = R.prototype;
  c.i = [];
  c.ya = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0),
      h = this.b.ib;
    if (this.w) return h[c[0]].apply(h, c.slice(1));
    if (h) this.i.push(c);
    else if (this.b.N() || this.pf) {
      var h = this.Zj,
        e = this.b,
        c = q('object');
      c.id = 'daum:roadview:' + this.ba;
      M(c);
      eb && !Oe
        ? ((c.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'),
          (c.codebase =
            'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0'))
        : ((c.type = 'application/x-shockwave-flash'), (c.data = h));
      var g = e.m(),
        i = e.h();
      c.width = '100%';
      c.height = '100%';
      g = {
        width: g,
        height: i,
        jsNamespace: this.Mc,
        pan: this.Ta,
        tilt: this.bd,
        zoom: e.j(),
      };
      e = e.N();
      this.pf
        ? ((g.storeId = this.pf), e && (g.storePanoId = e))
        : ((g.panoId = e),
          (e = this.b.v()),
          (g.panoX = e.e()),
          (g.panoY = e.c()));
      this.vk && (g.poiSearchData = 'true');
      this.Gk && (g.findwayMode = 'true');
      this.k.serviceName || (g.serviceName = 'mapinternalapi');
      var j = [];
      s([g, this.k], function (a) {
        for (var b in a)
          a.hasOwnProperty(b) &&
            'viewerUrl' != b &&
            j.push(encodeURIComponent(b) + '=' + encodeURIComponent(a[b]));
      });
      var h = {
          movie: h,
          flashvars: j.join('&'),
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          allowNetworking: 'all',
          wmode: 'opaque',
          bgcolor: '#000000',
        },
        l;
      for (l in h)
        h.hasOwnProperty(l) &&
          ((e = q('param')), (e.name = l), (e.value = h[l]), c.appendChild(e));
      l = this.a;
      h = f;
      eb && !Oe
        ? (l.insertAdjacentHTML('beforeEnd', c.outerHTML), (h = l.lastChild))
        : (l.appendChild(c), (h = c));
      k(P, 'resize', xa(this.Ia, this));
      this.b.ib = h;
    }
  };
  c.w = j;
  c.ef = function () {
    for (this.w = l; this.i[0]; ) {
      var a = this.i.shift();
      this.ya.apply(this, a);
    }
    a = this.ya('getMapLocation');
    this.b.s(new L(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Pb = p('w');
  c.ak = j;
  c.Sd = 0;
  c.pf = 0;
  c.ff = function () {
    this.b.U(Number(this.ya('getPanoId')));
  };
  c.gf = function () {
    this.ak = l;
  };
  c.N = function () {
    return this.b.N();
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = I(b)), this.b.s(b), (c = b.e()), (f = b.c()));
    this.b.U(a);
    this.ya('moveRoadByPanoId', a, c, f);
  };
  c.Ta = 0;
  c.bd = 0;
  c.H = 0;
  c.show = function () {
    var a = this.b.ib;
    a && ya(a, 'left:auto;top:auto');
  };
  c.P = function () {
    var a = this.b.ib;
    a && (ya(a, 'left:-99999px;top:-99999px'), this.ya('hide'));
  };
  c.remove = function () {
    var a = this.b,
      b = a.ib;
    delete P[this.Mc];
    this.a.removeChild(b);
    a.ib = f;
  };
  c.Ia = function () {
    var a = this.a;
    this.b.ja(a.clientWidth, a.clientHeight);
    this.Ja();
  };
  c.Zc = function (a) {
    this.Ta = ((a.pan % 360) + 360) % 360;
    this.bd = A(-90, N(90, a.tilt));
    var b = A(-3, N(3, a.zoom | 0));
    this.b.V(b);
    a.panoId
      ? this.ya('moveRoad', a.panoId, this.Ta, this.bd, a.zoom)
      : this.ya('setPanTiltZoom', this.Ta, this.bd, b);
  };
  c.Cc = function () {
    return new Y(this.ya('getPan'), this.ya('getTilt'), this.ya('getZoom'));
  };
  c.Dc = function () {
    return new Y(
      this.ya('getPan'),
      this.ya('getTilt'),
      this.ya('getZoom'),
      this.b.N(),
    );
  };
  c.s = function (a) {
    this.b.v().ua(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return ua(this.b.v());
  };
  n(V, na);
  c = V.prototype;
  c.tb = function (a) {
    if (!this.l) {
      var b = this.a;
      b.innerHTML =
        '<div style="overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;margin:0;border:0;padding:0"></div>';
      i(b, { overflow: 'hidden' });
      b.firstChild.offsetParent !== b && i(b, { position: 'relative' });
      this.da = new vb();
      ca(this, this.da);
      var c = this.da;
      i(c.a, { top: 0 });
      this.Ra = new Dc();
      gc(this.Ra, c);
      var c = b.clientWidth,
        f = b.clientHeight;
      this.b = new Ub(c, f);
      this.b.V(w(a.zoom, 0));
      this.b.U(w(a.panoId, 0));
      this.b.s(new L(a.panoX || 0), new L(a.panoY || 0));
      this.g = new Za(this.b);
      a.jsNamespace = this.Mc;
      a.width = c;
      a.height = f;
      ac(this.k, function (b, c) {
        b in a || (a[b] = c);
      });
      b = this.l = new P.daum.maps.RoadviewAjax(b.firstChild, a);
      this.b.ib = b;
      k(P, 'resize', xa(this.Ia, this));
    }
  };
  c.Ia = function () {
    if (this.l) {
      var a = this.a,
        b = a.clientWidth,
        a = a.clientHeight;
      this.b.ja(b, a);
      this.l.setSize(b, a);
      this.Ja();
    }
  };
  c.Cc = function () {
    var a;
    return (a = this.l) ? new Y(a.getPan(), a.getTilt(), a.getZoom()) : Rc;
  };
  c.Dc = function () {
    var a = this.l;
    return a ? new Y(a.getPan(), a.getTilt(), a.getZoom(), this.b.N()) : Rc;
  };
  c.ff = function () {
    this.l && this.b.U(Number(this.l.getPanoId() || 0));
  };
  c.gf = Pa();
  c.kc = db;
  c.s = function (a) {
    this.b.v().ua(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return ua(this.b.v());
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = I(b)), (c = b.e()), (f = b.c()));
    this.i
      ? this.i.push(arguments)
      : this.l
      ? (this.b.U(a), this.l.setPanoId(a, c, f))
      : this.tb({ panoId: a, panoX: c, panoY: f });
  };
  c.Zc = function (a, b) {
    if (this.i) this.i.push(arguments);
    else {
      var c = this.l;
      this.b.V(a.zoom);
      a.panoId && c.setPanoId(a.panoId);
      c.setViewpoint(a.pan, a.tilt, a.zoom, b);
    }
  };
  c.N = function () {
    return this.b.N();
  };
  c.w = j;
  c.ef = function () {
    this.w = l;
    var a = this.l.getMapLocation();
    this.b.s(new L(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Pb = p('w');
  c.show = Pa();
  c.P = Pa();
  c.remove = Pa();
  c.Ac = function () {
    var a = this.i;
    this.i = f;
    s(
      a,
      function (a) {
        a.callee.apply(this, Array.prototype.slice.call(a, 0));
      },
      this,
    );
  };
  Fb.SCRIPT_URL = Ma + Xb.Cf;
  var Le = f;
  Fb.prototype.Nb = function (a) {
    switch (this.R) {
      case 0:
        this.Jc();
      case 1:
        this.i.push(a);
        break;
      case 2:
        a.Ac();
    }
  };
  Fb.prototype.Jc = function () {
    this.R = 1;
    var a = q('script');
    a.charset = 'UTF-8';
    a.onload = xa(this.w, this);
    a.onerror = xa(this.xe, this);
    a.src = Fb.SCRIPT_URL;
    Va(a).getElementsByTagName('head')[0].appendChild(a);
  };
  Fb.prototype.w = function () {
    this.R = 2;
    s(this.i, function (a) {
      a.Ac();
    });
    this.i.length = 0;
  };
  Fb.prototype.xe = function () {
    this.R = 3;
  };
  n(S, na);
  c = S.prototype;
  c.Nb = function () {
    this.tb();
  };
  c.tb = function (a) {
    if (!this.l) {
      var a = a || {},
        b = this.a;
      b.innerHTML =
        '<div style="overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;margin:0;border:0;padding:0"></div>';
      i(b, { overflow: 'hidden' });
      b.firstChild.offsetParent !== b && i(b, { position: 'relative' });
      this.da = new vb();
      ca(this, this.da);
      var c = this.da;
      i(c.a, { top: 0 });
      this.Ra = new Dc();
      gc(this.Ra, c);
      var c = b.clientWidth,
        f = b.clientHeight;
      this.b = new Ub(c, f);
      this.b.V(w(a.zoom, 0));
      this.b.U(w(a.panoId, 0));
      this.b.s(new L(a.panoX || 0), new L(a.panoY || 0));
      this.g = new Za(this.b);
      a.jsNamespace = this.Mc;
      a.width = c;
      a.height = f;
      ac(this.k, function (b, c) {
        b in a || (a[b] = c);
      });
      b = this.l = new P.daum.maps.RoadviewAjax(b.firstChild, a);
      this.b.ib = b;
      this.Ac();
      k(P, 'resize', xa(this.Ia, this));
    }
  };
  c.Ia = function () {
    if (this.l) {
      var a = this.a,
        b = a.clientWidth,
        a = a.clientHeight;
      this.b.ja(b, a);
      this.l.setSize(b, a);
      this.Ja();
    }
  };
  c.Cc = function () {
    var a;
    return (a = this.l) ? new Y(a.getPan(), a.getTilt(), a.getZoom()) : Rc;
  };
  c.Dc = function () {
    var a = this.l;
    return a ? new Y(a.getPan(), a.getTilt(), a.getZoom(), this.b.N()) : Rc;
  };
  c.ff = function () {
    this.l && this.b.U(Number(this.l.getPanoId() || 0));
  };
  c.gf = Pa();
  c.kc = db;
  c.s = function (a) {
    this.b.v().ua(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return ua(this.b.v());
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = I(b)), (c = b.e()), (f = b.c()));
    this.i
      ? this.i.push(arguments)
      : (this.tb(), this.b.U(a), this.l.setPanoId(a, c, f));
  };
  c.Zc = function (a, b) {
    if (this.i) this.i.push(arguments);
    else {
      this.tb();
      var c = this.l;
      this.b.V(a.zoom);
      a.panoId && c.setPanoId(a.panoId);
      c.setViewpoint(a.pan, a.tilt, a.zoom, b);
    }
  };
  c.N = function () {
    return this.b.N();
  };
  c.w = j;
  c.ef = function () {
    this.w = l;
    var a = this.l.getMapLocation();
    this.b.s(new L(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Pb = p('w');
  c.show = Pa();
  c.P = Pa();
  c.remove = Pa();
  c.Ac = function () {
    if (this.i !== f) {
      var a = this.i;
      this.i = f;
      s(
        a,
        function (a) {
          a.callee.apply(this, Array.prototype.slice.call(a, 0));
        },
        this,
      );
    }
  };
  Gb.SCRIPT_URL = Ma + Xb.Df.replace(/^\/\//g, '');
  var Me = f;
  Gb.prototype.Nb = function (a) {
    switch (this.R) {
      case 0:
        this.Jc();
      case 1:
        this.i.push(a);
        break;
      case 2:
        a.Ac();
    }
  };
  Gb.prototype.Jc = function () {
    this.R = 1;
    var a = q('script');
    a.charset = 'UTF-8';
    a.onload = xa(this.w, this);
    a.onerror = xa(this.xe, this);
    a.src = Gb.SCRIPT_URL;
    Va(a).getElementsByTagName('head')[0].appendChild(a);
  };
  Gb.prototype.w = function () {
    this.R = 2;
    s(this.i, function (a) {
      a.Nb();
    });
    this.i.length = 0;
  };
  Gb.prototype.xe = function () {
    this.R = 3;
  };
  c = ja.prototype;
  c.cj = function () {
    this.l.ef();
    this.l.Ia();
  };
  c.aj = function (a) {
    h(this.l, 'error', a);
  };
  c.Zi = function (a) {
    this.l.Pb() &&
      ((this.l.Ta = a.pan),
      (this.l.bd = a.tilt),
      h(this.l, 'viewpoint_changed', T));
  };
  c.Qg = function (a) {
    this.l.Pb() && (this.l.b.V(a), h(this.l, 'viewpoint_changed', T));
  };
  c.$i = function (a) {
    this.l.ff();
    this.l.gf();
    this.l.s(new L(a.photox, a.photoy));
  };
  c.dj = function () {
    Ke(this.l, j);
  };
  c.bj = function () {
    Ke(this.l, l);
  };
  Oc.prototype.xi = function (a, b, c) {
    var a = I(a),
      h =
        this.jj +
        '?SEARCH_TYPE=2&PX=%x&PY=%y&RAD=%r&OUTPUT=json&TYPE=wcong&CALLBACK=',
      b = (h = h
        .replace(/%x/g, String(a.e()))
        .replace(/%y/g, String(a.c()))
        .replace(/%r/g, String(b))),
      h = '__dj$' + (+new Date()).toString(36),
      a = q('script');
    a.type = 'text/javascript';
    a.charset = 'UTF-8';
    a.setAttribute('data-key', h);
    a.onload = Cd;
    a.onerror = Cd;
    a.src = b + h;
    P[h] = function (a) {
      var b = { service: j };
      Number(a.street_view[0].cnt)
        ? ((b.service = l),
          (a = a.street_view[1].street[0]),
          (b.id = a.id),
          (b.photox = a.photox),
          (b.photoy = a.photoy),
          (b.addr = a.addr),
          (b.st_name = a.st_name),
          (b.st_type = a.st_type),
          (b.date = a.date),
          c(b.id, b))
        : c(f);
    };
    Dd[h] = a;
    b = Va();
    Uc(b.getElementsByTagName('head')[0] || b.documentElement, a, 0);
  };
  nb.prototype.f = f;
  nb.prototype.F = function (a) {
    this.f && this.f.bf(5);
    a && a.ne(5);
    this.f = a;
  };
  nb.prototype.p = p('f');
  n(oa, cb);
  var yf =
    (sc ? 'https://spi.maps.daum.net/map2' : 'http://map2.daum.net') + '/map/';
  c = oa.prototype;
  c.C = function () {
    return ua(tc(this));
  };
  c.za = function (a) {
    a = I(a);
    this.b.za(va(a, this.g));
    this.b.ca = this.b.B();
    this.Va();
  };
  c.td = function () {
    return this.b.j();
  };
  c.mb = function (a) {
    pc(this.b, a, this.b.C());
    this.Va();
  };
  c.Vc = function (a, b, c, f, e) {
    a = $b(a);
    a = this.gd(a, b, c, f, e);
    this.b.V(a.zoom);
    this.b.za(a.ac);
    this.Va();
  };
  c.Kb = function () {
    var a = z(2, -this.b.j()),
      b = this.b.B(),
      a = b.la(this.b.m() / a, this.b.h() / a);
    return zc(b.W(this.g), a.W(this.g));
  };
  c.ud = p('xa');
  c.Wc = function (a) {
    this.xa = a;
    this.Va();
  };
  c.gd = function (a, b, c, f, e) {
    var b = 0 !== b ? b || 32 : 0,
      c = 0 !== c ? c || b : 0,
      f = 0 !== f ? f || b : 0,
      e = 0 !== e ? e || c : 0,
      g = this.b,
      h = va(a.B(), this.g),
      a = va(a.rb(), this.g),
      g = A(
        4,
        (a.e() - h.e()) / A(1, g.m() - c - e),
        (a.c() - h.c()) / A(1, g.h() - b - f),
      ),
      g = Math.ceil(Math.log(g) / Math.log(2));
    z(2, -g);
    return {
      zoom: g,
      ac: new La(
        (h.e() + a.e() + (c - e) / g) / 2,
        (h.c() + a.c() + (b - f) / g) / 2,
      ),
    };
  };
  c.Va = function () {
    var a = this.Gd,
      b = [];
    b.push('IW=' + String(this.b.m() | 0) + '&IH=' + String(this.b.h() | 0));
    b.push(jf(this));
    b.push('SCALE=' + String(0.3125 * (1 << this.b.j())));
    /png|gif|bmp/i.test(this.dg) &&
      b.push('FORMAT=' + String(this.dg).toUpperCase());
    var c,
      f = [],
      e = kd(this.gb) ? this.gb : [this.gb];
    ac(
      e,
      function (a, b) {
        var c = I(b.position || tc(this)),
          d;
        f.push('CX=' + String(c.e() | 0) + '&CY=' + String(c.c() | 0));
        (d = b.text) &&
          f.push(
            'TX=%x&TY=%y&TEXT=%text'
              .replace(/%x/, String(c.e() | 0))
              .replace(/%y/, String((18.4375 * (1 << this.b.j()) + c.c()) | 0))
              .replace(/%text/, encodeURI(String(d))),
          );
      },
      this,
    );
    (c = f.join('&')) && b.push(c);
    b.push('service=open');
    c = 'imageservice?';
    if (2 == this.xa || 3 == this.xa) c = 'skyview' + c;
    3 == this.xa && (c += 'RDR=HybridRender&');
    a.T.src = yf + c + b.join('&');
    if (!this.Bi || this.Ig) {
      a = this.Gd;
      if (!(b = this.Ig)) {
        b =
          '"mapCenterX":' +
          tc(this).e() +
          ',"mapCenterY":' +
          tc(this).c() +
          ',"mapLevel":' +
          this.b.j() +
          ',"coordinate":"wcongnamul"';
        c = 'TYPE_MAP';
        e = 'false';
        1 != this.xa && ((c = 'TYPE_SKYVIEW'), 3 == this.xa && (e = 'true'));
        var b = b + (',"map_type":"' + c + '"') + (',"map_hybrid":"' + e + '"'),
          g = '';
        c = kd(this.gb) ? this.gb : [this.gb];
        ac(
          c,
          function (a, b) {
            0 < a && (g += ',');
            var c = I(b.position || tc(this));
            g += '{"coordinate":"wcongnamul","x":' + c.e() + ',"y":' + c.c();
            b.text && (g += ',"content":"' + b.text + '"');
            g += '}';
          },
          this,
        );
        if ((c = g)) b += ',"markInfo":[' + c + ']';
        b = 'http://map.daum.net?mapJson=' + encodeURIComponent('{' + b + '}');
      }
      a.a.href = b;
    }
  };
  n(pd, Ga);
  pd.prototype.M = function () {
    var a = (this.a = q('a'));
    a.target = '_blank';
    var b = (this.T = q('img'));
    i(b, { border: 0 });
    a.appendChild(b);
    J(b, this.b.m(), this.b.h());
  };
  var u = P,
    u = (u.kakao = u.kakao || {}),
    u = (u.maps = u.maps || {});
  u.Point = B;
  B.prototype.equals = B.prototype.Ib;
  u.Viewpoint = Y;
  u.Coords = L;
  L.prototype.getX = L.prototype.e;
  L.prototype.getY = L.prototype.c;
  L.prototype.toLatLng = L.prototype.sh;
  L.prototype.equals = L.prototype.ua;
  u.LatLng = pa;
  pa.prototype.getLat = pa.prototype.jg;
  pa.prototype.getLng = pa.prototype.lg;
  pa.prototype.toCoords = pa.prototype.W;
  pa.prototype.equals = pa.prototype.ua;
  u.CoordsBounds = W;
  W.prototype.getSouthWest = W.prototype.B;
  W.prototype.getNorthEast = W.prototype.rb;
  W.prototype.extend = W.prototype.extend;
  W.prototype.isEmpty = W.prototype.Bg;
  W.prototype.intersects = W.prototype.Gi;
  W.prototype.contain = W.prototype.kd;
  W.prototype.equals = W.prototype.Ib;
  u.LatLngBounds = ga;
  ga.prototype.getSouthWest = ga.prototype.B;
  ga.prototype.getNorthEast = ga.prototype.rb;
  ga.prototype.extend = ga.prototype.extend;
  ga.prototype.isEmpty = ga.prototype.Bg;
  ga.prototype.contain = ga.prototype.kd;
  ga.prototype.equals = ga.prototype.Ib;
  u.Size = Ta;
  Ta.prototype.equals = Ta.prototype.Ib;
  u.Map = r;
  r.prototype.getNode = r.prototype.gc;
  r.prototype.getMapTypeId = r.prototype.ud;
  r.prototype.setMapTypeId = r.prototype.Wc;
  r.prototype.getLevel = r.prototype.td;
  r.prototype.setLevel = r.prototype.mb;
  r.prototype.getCenter = r.prototype.C;
  r.prototype.setCenter = r.prototype.za;
  r.prototype.panBy = r.prototype.Rd;
  r.prototype.panTo = r.prototype.Vg;
  r.prototype.jump = r.prototype.Hi;
  r.prototype.getBounds = r.prototype.Kb;
  r.prototype.setBounds = r.prototype.Vc;
  r.prototype.relayout = r.prototype.Ia;
  r.prototype.addControl = r.prototype.le;
  r.prototype.removeControl = r.prototype.Xd;
  r.prototype.addOverlayMapTypeId = r.prototype.ne;
  r.prototype.removeOverlayMapTypeId = r.prototype.bf;
  r.prototype.getDraggable = r.prototype.Fe;
  r.prototype.setDraggable = r.prototype.df;
  r.prototype.getZoomable = r.prototype.zi;
  r.prototype.setZoomable = r.prototype.Fj;
  r.prototype.setCursor = r.prototype.pc;
  r.prototype.getProjection = r.prototype.va;
  r.prototype.setCopyrightPosition = r.prototype.Bj;
  r.prototype.setKeyboardShortcuts = r.prototype.bh;
  r.prototype.getKeyboardShortcuts = r.prototype.wi;
  r.prototype.setMaxLevel = r.prototype.Dj;
  r.prototype.setMinLevel = r.prototype.Ej;
  u.MapTypeId = ka;
  Ha.prototype.pointFromCoords = Ha.prototype.lb;
  Ha.prototype.coordsFromPoint = Ha.prototype.Vf;
  Ha.prototype.containerPointFromCoords = Ha.prototype.ab;
  Ha.prototype.coordsFromContainerPoint = Ha.prototype.pe;
  Za.prototype.viewpointFromCoords = Za.prototype.$j;
  u.ControlPosition = gb;
  gb.TOPLEFT = wc;
  gb.TOP = td;
  gb.TOPRIGHT = xc;
  gb.BOTTOMLEFT = vd;
  gb.BOTTOM = wd;
  gb.BOTTOMRIGHT = xd;
  gb.LEFT = ud;
  gb.RIGHT = Qc;
  u.CopyrightPosition = { BOTTOMLEFT: 0, BOTTOMRIGHT: 1 };
  u.MapTypeControl = kb;
  u.ZoomControl = ic;
  u.AbstractOverlay = Z;
  Z.prototype.getMap = Z.prototype.p;
  Z.prototype.setMap = Z.prototype.F;
  Z.prototype.getPanels = Z.prototype.wd;
  Z.prototype.getProjection = Z.prototype.va;
  u.Marker = o;
  o.prototype.setMap = o.prototype.F;
  o.prototype.getMap = o.prototype.p;
  o.prototype.setImage = o.prototype.Cj;
  o.prototype.getImage = o.prototype.vi;
  o.prototype.setPosition = o.prototype.s;
  o.prototype.getPosition = o.prototype.v;
  o.prototype.setVisible = o.prototype.nb;
  o.prototype.getVisible = o.prototype.Ie;
  o.prototype.setZIndex = o.prototype.J;
  o.prototype.getZIndex = o.prototype.wa;
  o.prototype.setTitle = o.prototype.eh;
  o.prototype.getTitle = o.prototype.yi;
  o.prototype.setClickable = o.prototype.Aj;
  o.prototype.getClickable = o.prototype.ui;
  o.prototype.setDraggable = o.prototype.df;
  o.prototype.getDraggable = o.prototype.Fe;
  o.prototype.setAltitude = o.prototype.oc;
  o.prototype.getAltitude = o.prototype.fc;
  o.prototype.setRange = o.prototype.Xc;
  o.prototype.getRange = o.prototype.Bc;
  o.prototype.setOpacity = o.prototype.hf;
  o.prototype.getOpacity = o.prototype.mg;
  u.MarkerImage = oc;
  oc.prototype.getOffset = oc.prototype.vd;
  u.InfoWindow = x;
  x.prototype.open = x.prototype.open;
  x.prototype.close = x.prototype.close;
  x.prototype.getMap = x.prototype.p;
  x.prototype.setPosition = x.prototype.s;
  x.prototype.getPosition = x.prototype.v;
  x.prototype.setContent = x.prototype.ce;
  x.prototype.getContent = x.prototype.Ee;
  x.prototype.setZIndex = x.prototype.J;
  x.prototype.getZIndex = x.prototype.wa;
  x.prototype.setAltitude = x.prototype.oc;
  x.prototype.getAltitude = x.prototype.fc;
  x.prototype.setRange = x.prototype.Xc;
  x.prototype.getRange = x.prototype.Bc;
  u.CustomOverlay = u.Billboard = D;
  D.prototype.setMap = D.prototype.F;
  D.prototype.getMap = D.prototype.p;
  D.prototype.setPosition = D.prototype.s;
  D.prototype.getPosition = D.prototype.v;
  D.prototype.setContent = D.prototype.ce;
  D.prototype.getContent = D.prototype.Ee;
  D.prototype.setVisible = D.prototype.nb;
  D.prototype.getVisible = D.prototype.Ie;
  D.prototype.setZIndex = D.prototype.J;
  D.prototype.getZIndex = D.prototype.wa;
  D.prototype.setAltitude = D.prototype.oc;
  D.prototype.getAltitude = D.prototype.fc;
  D.prototype.setRange = D.prototype.Xc;
  D.prototype.getRange = D.prototype.Bc;
  u.Polyline = fa;
  fa.prototype.setMap = fa.prototype.F;
  fa.prototype.getMap = fa.prototype.p;
  fa.prototype.setOptions = fa.prototype.Cb;
  fa.prototype.setPath = fa.prototype.dh;
  fa.prototype.getPath = fa.prototype.ng;
  fa.prototype.getLength = fa.prototype.kg;
  fa.prototype.setZIndex = fa.prototype.J;
  fa.prototype.getZIndex = fa.prototype.wa;
  u.Polygon = da;
  da.prototype.setMap = da.prototype.F;
  da.prototype.getMap = da.prototype.p;
  da.prototype.setOptions = da.prototype.Cb;
  da.prototype.setPath = da.prototype.dh;
  da.prototype.getPath = da.prototype.ng;
  da.prototype.getLength = da.prototype.kg;
  da.prototype.getArea = da.prototype.ti;
  da.prototype.setZIndex = da.prototype.J;
  da.prototype.getZIndex = da.prototype.wa;
  u.Rectangle = ma;
  ma.prototype.setMap = ma.prototype.F;
  ma.prototype.getMap = ma.prototype.p;
  ma.prototype.setOptions = ma.prototype.Cb;
  ma.prototype.setBounds = ma.prototype.Vc;
  ma.prototype.getBounds = ma.prototype.Kb;
  ma.prototype.setZIndex = ma.prototype.J;
  ma.prototype.getZIndex = ma.prototype.wa;
  u.Circle = U;
  U.prototype.setMap = U.prototype.F;
  U.prototype.getMap = U.prototype.p;
  U.prototype.setOptions = U.prototype.Cb;
  U.prototype.setPosition = U.prototype.s;
  U.prototype.getPosition = U.prototype.v;
  U.prototype.setRadius = U.prototype.jf;
  U.prototype.getRadius = U.prototype.Ge;
  U.prototype.getBounds = U.prototype.Kb;
  U.prototype.setZIndex = U.prototype.J;
  U.prototype.getZIndex = U.prototype.wa;
  u.Ellipse = C;
  C.prototype.setMap = C.prototype.F;
  C.prototype.getMap = C.prototype.p;
  C.prototype.setOptions = C.prototype.Cb;
  C.prototype.setPosition = C.prototype.s;
  C.prototype.getPosition = C.prototype.v;
  C.prototype.setRadius = C.prototype.jf;
  C.prototype.getRadius = C.prototype.Ge;
  C.prototype.setRadiusX = C.prototype.og;
  C.prototype.getRadiusX = C.prototype.og;
  C.prototype.setRadiusY = C.prototype.pg;
  C.prototype.getRadiusY = C.prototype.pg;
  C.prototype.getBounds = C.prototype.Kb;
  C.prototype.setZIndex = C.prototype.J;
  C.prototype.getZIndex = C.prototype.wa;
  u.event = t;
  t.addListener = t.addListener;
  t.removeListener = t.removeListener;
  t.trigger = t.Wj;
  t.preventMap = t.Ua;
  u.Roadview = na;
  na.prototype.getProjection = na.prototype.va;
  na.ImageQuality = Bd;
  Bd.STANDARD = 0;
  Bd.HIGH = 1;
  u.FlashRoadview = R;
  R.prototype.isLoaded = R.prototype.Pb;
  R.prototype.getPanoId = R.prototype.N;
  R.prototype.setPanoId = R.prototype.U;
  R.prototype.getViewpoint = R.prototype.Cc;
  R.prototype.getViewpointWithPanoId = R.prototype.Dc;
  R.prototype.setViewpoint = R.prototype.Zc;
  R.prototype.getPosition = R.prototype.v;
  R.prototype.getInfo = R.prototype.xk;
  R.prototype.show = R.prototype.show;
  R.prototype.hide = R.prototype.P;
  R.prototype.remove = R.prototype.remove;
  R.prototype.relayout = R.prototype.Ia;
  u.AjaxRoadview = V;
  V.prototype.isLoaded = V.prototype.Pb;
  V.prototype.getPanoId = V.prototype.N;
  V.prototype.setPanoId = V.prototype.U;
  V.prototype.getViewpoint = V.prototype.Cc;
  V.prototype.getViewpointWithPanoId = V.prototype.Dc;
  V.prototype.setViewpoint = V.prototype.Zc;
  V.prototype.getPosition = V.prototype.v;
  V.prototype.show = V.prototype.show;
  V.prototype.hide = V.prototype.P;
  V.prototype.remove = V.prototype.remove;
  V.prototype.relayout = V.prototype.Ia;
  u.CSSRoadview = S;
  S.prototype.isLoaded = S.prototype.Pb;
  S.prototype.getPanoId = S.prototype.N;
  S.prototype.setPanoId = S.prototype.U;
  S.prototype.getViewpoint = S.prototype.Cc;
  S.prototype.getViewpointWithPanoId = S.prototype.Dc;
  S.prototype.setViewpoint = S.prototype.Zc;
  S.prototype.getPosition = S.prototype.v;
  S.prototype.show = S.prototype.show;
  S.prototype.hide = S.prototype.P;
  S.prototype.remove = S.prototype.remove;
  S.prototype.relayout = S.prototype.Ia;
  u.RoadviewClient = Oc;
  Oc.prototype.getNearestPanoId = Oc.prototype.xi;
  u.RoadviewBridge = ja;
  ja.prototype.onFinishedInitialize = ja.prototype.cj;
  ja.prototype.onError = ja.prototype.aj;
  ja.prototype.onChangedDirection = ja.prototype.Zi;
  ja.prototype.onChangedZoom = ja.prototype.Qg;
  ja.prototype.onChangingZoom = ja.prototype.Qg;
  ja.prototype.onChangedMapPosition = ja.prototype.$i;
  ja.prototype.onStartAutoDrive = ja.prototype.dj;
  ja.prototype.onFinishAutoDrive = ja.prototype.bj;
  u.RoadviewOverlay = nb;
  nb.prototype.setMap = nb.prototype.F;
  nb.prototype.getMap = nb.prototype.p;
  u.StaticMap = oa;
  oa.prototype.getNode = oa.prototype.gc;
  oa.prototype.getMapTypeId = oa.prototype.ud;
  oa.prototype.setMapTypeId = oa.prototype.Wc;
  oa.prototype.getLevel = oa.prototype.td;
  oa.prototype.setLevel = oa.prototype.mb;
  oa.prototype.getCenter = oa.prototype.C;
  oa.prototype.setCenter = oa.prototype.za;
  u.Tileset = ea;
  ea.add = yb;
  u.disableBusSymbol = function () {
    dd.He = Ob(function (a, b, c) {
      return wa(a & 3) + '/map_office/2d/L' + c + '/' + b + '/' + a + '.png';
    });
    fd.He = Ob(function (a, b, c) {
      return (
        wa(a & 3) + '/map_office/hybrid/L' + c + '/' + b + '/' + a + '.png'
      );
    });
    Pb && Wd();
  };
  u.disableHD = Wd;
  u.TilesetCopyright = la;
  u.TimingFunc = Bc;
})(global);
