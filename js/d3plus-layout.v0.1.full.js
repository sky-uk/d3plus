(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
	typeof define === 'function' && define.amd ? define('d3plus-layout', ['exports', 'd3'], factory) :
	(factory((global.d3plus_layout = {}),global.d3));
}(this, function (exports,d3) { 'use strict';

	d3 = 'default' in d3 ? d3['default'] : d3;

	var babelHelpers_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	var version = "0.1.1";

	function Color() {};

	var darker = 0.7;
	var brighter = 1 / darker;

	var reHex3 = /^#([0-9a-f]{3})$/;
	var reHex6 = /^#([0-9a-f]{6})$/;
	var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	var named = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};

	color.prototype = Color.prototype = {
	  displayable: function displayable() {
	    return this.rgb().displayable();
	  },
	  toString: function toString() {
	    return this.rgb() + "";
	  }
	};

	function color(format) {
	  var m;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf) // #f00
	  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3]) // rgb(255,0,0)
	  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100) // rgb(100%,0%,0%)
	  : (m = reHslPercent.exec(format)) ? new Hsl(m[1], m[2] / 100, m[3] / 100) // hsl(120,50%,50%)
	  : named.hasOwnProperty(format) ? rgbn(named[format]) : null;
	};

	function rgbn(n) {
	  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff);
	}

	function rgb(r, g, b) {
	  if (arguments.length === 1) {
	    if (!(r instanceof Color)) r = color(r);
	    if (r) {
	      r = r.rgb();
	      b = r.b;
	      g = r.g;
	      r = r.r;
	    } else {
	      r = g = b = NaN;
	    }
	  }
	  return new Rgb(r, g, b);
	};

	function Rgb(r, g, b) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	};

	var _rgb = rgb.prototype = Rgb.prototype = new Color();

	_rgb.brighter = function (k) {
	  k = k == null ? brighter : Math.pow(brighter, k);
	  return new Rgb(this.r * k, this.g * k, this.b * k);
	};

	_rgb.darker = function (k) {
	  k = k == null ? darker : Math.pow(darker, k);
	  return new Rgb(this.r * k, this.g * k, this.b * k);
	};

	_rgb.rgb = function () {
	  return this;
	};

	_rgb.displayable = function () {
	  return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255;
	};

	_rgb.toString = function () {
	  var r = Math.round(this.r),
	      g = Math.round(this.g),
	      b = Math.round(this.b);
	  return "#" + (isNaN(r) || r <= 0 ? "00" : r < 16 ? "0" + r.toString(16) : r >= 255 ? "ff" : r.toString(16)) + (isNaN(g) || g <= 0 ? "00" : g < 16 ? "0" + g.toString(16) : g >= 255 ? "ff" : g.toString(16)) + (isNaN(b) || b <= 0 ? "00" : b < 16 ? "0" + b.toString(16) : b >= 255 ? "ff" : b.toString(16));
	};

	function hsl(h, s, l) {
	  if (arguments.length === 1) {
	    if (h instanceof Hsl) {
	      l = h.l;
	      s = h.s;
	      h = h.h;
	    } else {
	      if (!(h instanceof Color)) h = color(h);
	      if (h) {
	        if (h instanceof Hsl) return h;
	        h = h.rgb();
	        var r = h.r / 255,
	            g = h.g / 255,
	            b = h.b / 255,
	            min = Math.min(r, g, b),
	            max = Math.max(r, g, b),
	            range = max - min;
	        l = (max + min) / 2;
	        if (range) {
	          s = l < 0.5 ? range / (max + min) : range / (2 - max - min);
	          if (r === max) h = (g - b) / range + (g < b) * 6;else if (g === max) h = (b - r) / range + 2;else h = (r - g) / range + 4;
	          h *= 60;
	        } else {
	          h = NaN;
	          s = l > 0 && l < 1 ? 0 : h;
	        }
	      } else {
	        h = s = l = NaN;
	      }
	    }
	  }
	  return new Hsl(h, s, l);
	};

	function Hsl(h, s, l) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	};

	var _hsl = hsl.prototype = Hsl.prototype = new Color();

	_hsl.brighter = function (k) {
	  k = k == null ? brighter : Math.pow(brighter, k);
	  return new Hsl(this.h, this.s, this.l * k);
	};

	_hsl.darker = function (k) {
	  k = k == null ? darker : Math.pow(darker, k);
	  return new Hsl(this.h, this.s, this.l * k);
	};

	_hsl.rgb = function () {
	  var h = this.h % 360 + (this.h < 0) * 360,
	      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	      l = this.l,
	      m2 = l + (l < 0.5 ? l : 1 - l) * s,
	      m1 = 2 * l - m2;
	  return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2));
	};

	_hsl.displayable = function () {
	  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1;
	};

	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
	}

	var deg2rad = Math.PI / 180;
	var rad2deg = 180 / Math.PI;

	var Kn = 18;
	var Xn = 0.950470;
	var Yn = 1;
	var Zn = 1.088830;
	var t0 = 4 / 29;
	var t1 = 6 / 29;
	var t2 = 3 * t1 * t1;
	var t3 = t1 * t1 * t1;
	function lab(l, a, b) {
	  if (arguments.length === 1) {
	    if (l instanceof Lab) {
	      b = l.b;
	      a = l.a;
	      l = l.l;
	    } else if (l instanceof Hcl) {
	      var h = l.h * deg2rad;
	      b = Math.sin(h) * l.c;
	      a = Math.cos(h) * l.c;
	      l = l.l;
	    } else {
	      if (!(l instanceof Rgb)) l = rgb(l);
	      var r = rgb2xyz(l.r),
	          g = rgb2xyz(l.g),
	          b = rgb2xyz(l.b),
	          x = xyz2lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / Xn),
	          y = xyz2lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / Yn),
	          z = xyz2lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / Zn);
	      b = 200 * (y - z);
	      a = 500 * (x - y);
	      l = 116 * y - 16;
	    }
	  }
	  return new Lab(l, a, b);
	};

	function Lab(l, a, b) {
	  this.l = +l;
	  this.a = +a;
	  this.b = +b;
	};

	var _lab = lab.prototype = Lab.prototype = new Color();

	_lab.brighter = function (k) {
	  return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b);
	};

	_lab.darker = function (k) {
	  return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b);
	};

	_lab.rgb = function () {
	  var y = (this.l + 16) / 116,
	      x = isNaN(this.a) ? y : y + this.a / 500,
	      z = isNaN(this.b) ? y : y - this.b / 200;
	  y = Yn * lab2xyz(y);
	  x = Xn * lab2xyz(x);
	  z = Zn * lab2xyz(z);
	  return new Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	  xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z));
	};

	function xyz2lab(t) {
	  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	}

	function lab2xyz(t) {
	  return t > t1 ? t * t * t : t2 * (t - t0);
	}

	function xyz2rgb(x) {
	  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	}

	function rgb2xyz(x) {
	  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	}

	function hcl(h, c, l) {
	  if (arguments.length === 1) {
	    if (h instanceof Hcl) {
	      l = h.l;
	      c = h.c;
	      h = h.h;
	    } else {
	      if (!(h instanceof Lab)) h = lab(h);
	      l = h.l;
	      c = Math.sqrt(h.a * h.a + h.b * h.b);
	      h = Math.atan2(h.b, h.a) * rad2deg;
	      if (h < 0) h += 360;
	    }
	  }
	  return new Hcl(h, c, l);
	};

	function Hcl(h, c, l) {
	  this.h = +h;
	  this.c = +c;
	  this.l = +l;
	};

	var _hcl = hcl.prototype = Hcl.prototype = new Color();

	_hcl.brighter = function (k) {
	  return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k));
	};

	_hcl.darker = function (k) {
	  return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k));
	};

	_hcl.rgb = function () {
	  return lab(this).rgb();
	};

	var A = -0.14861;
	var B = +1.78277;
	var C = -0.29227;
	var D = -0.90649;
	var E = +1.97294;
	var ED = E * D;
	var EB = E * B;
	var BC_DA = B * C - D * A;
	function cubehelix(h, s, l) {
	  if (arguments.length === 1) {
	    if (h instanceof Cubehelix) {
	      l = h.l;
	      s = h.s;
	      h = h.h;
	    } else {
	      if (!(h instanceof Rgb)) h = rgb(h);
	      var r = h.r / 255,
	          g = h.g / 255,
	          b = h.b / 255;
	      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB);
	      var bl = b - l,
	          k = (E * (g - l) - C * bl) / D;
	      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)); // NaN if l=0 or l=1
	      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	      if (h < 0) h += 360;
	    }
	  }
	  return new Cubehelix(h, s, l);
	};

	function Cubehelix(h, s, l) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	};

	var _cubehelix = cubehelix.prototype = Cubehelix.prototype = new Color();

	_cubehelix.brighter = function (k) {
	  k = k == null ? brighter : Math.pow(brighter, k);
	  return new Cubehelix(this.h, this.s, this.l * k);
	};

	_cubehelix.darker = function (k) {
	  k = k == null ? darker : Math.pow(darker, k);
	  return new Cubehelix(this.h, this.s, this.l * k);
	};

	_cubehelix.rgb = function () {
	  var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	      l = +this.l,
	      a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	      cosh = Math.cos(h),
	      sinh = Math.sin(h);
	  return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)));
	};

	var prefix = "$";

	function Map() {}

	Map.prototype = map$1.prototype = {
	  has: function has(key) {
	    return prefix + key in this;
	  },
	  get: function get(key) {
	    return this[prefix + key];
	  },
	  set: function set(key, value) {
	    this[prefix + key] = value;
	    return this;
	  },
	  remove: function remove(key) {
	    var property = prefix + key;
	    return property in this && delete this[property];
	  },
	  clear: function clear() {
	    for (var property in this) {
	      if (property[0] === prefix) delete this[property];
	    }
	  },
	  keys: function keys() {
	    var keys = [];
	    for (var property in this) {
	      if (property[0] === prefix) keys.push(property.slice(1));
	    }return keys;
	  },
	  values: function values() {
	    var values = [];
	    for (var property in this) {
	      if (property[0] === prefix) values.push(this[property]);
	    }return values;
	  },
	  entries: function entries() {
	    var entries = [];
	    for (var property in this) {
	      if (property[0] === prefix) entries.push({ key: property.slice(1), value: this[property] });
	    }return entries;
	  },
	  size: function size() {
	    var size = 0;
	    for (var property in this) {
	      if (property[0] === prefix) ++size;
	    }return size;
	  },
	  empty: function empty() {
	    for (var property in this) {
	      if (property[0] === prefix) return false;
	    }return true;
	  },
	  each: function each(f) {
	    for (var property in this) {
	      if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  }
	};

	function map$1(object, f) {
	  var map = new Map();

	  // Copy constructor.
	  if (object instanceof Map) object.each(function (value, key) {
	    map.set(key, value);
	  });

	  // Index array by numeric index or specified key function.
	  else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;

	      if (arguments.length === 1) while (++i < n) {
	        map.set(i, object[i]);
	      } else while (++i < n) {
	        map.set(f(o = object[i], i, object), o);
	      }
	    }

	    // Convert object to map.
	    else if (object) for (var key in object) {
	        map.set(key, object[key]);
	      }return map;
	}

	var proto = map$1.prototype;

	var array = Array.prototype;

	var slice = array.slice;

	var implicit = { name: "implicit" };

	function ordinal() {
	  var index = map$1(),
	      domain = [],
	      range = [],
	      unknown = implicit;

	  function scale(d) {
	    var key = d + "",
	        i = index.get(key);
	    if (!i) {
	      if (unknown !== implicit) return unknown;
	      index.set(key, i = domain.push(d));
	    }
	    return range[(i - 1) % range.length];
	  }

	  scale.domain = function (_) {
	    if (!arguments.length) return domain.slice();
	    domain = [], index = map$1();
	    var i = -1,
	        n = _.length,
	        d,
	        key;
	    while (++i < n) {
	      if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	    }return scale;
	  };

	  scale.range = function (_) {
	    return arguments.length ? (range = slice.call(_), scale) : range.slice();
	  };

	  scale.unknown = function (_) {
	    return arguments.length ? (unknown = _, scale) : unknown;
	  };

	  scale.copy = function () {
	    return ordinal().domain(domain).range(range).unknown(unknown);
	  };

	  return scale;
	};

	function ascending (a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	};

	function bisector (compare) {
	  if (compare.length === 1) compare = ascendingComparator(compare);
	  return {
	    left: function left(a, x, lo, hi) {
	      if (arguments.length < 3) lo = 0;
	      if (arguments.length < 4) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
	      }
	      return lo;
	    },
	    right: function right(a, x, lo, hi) {
	      if (arguments.length < 3) lo = 0;
	      if (arguments.length < 4) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
	      }
	      return lo;
	    }
	  };
	};

	function ascendingComparator(f) {
	  return function (d, x) {
	    return ascending(f(d), x);
	  };
	}

	var ascendingBisect = bisector(ascending);

	function interpolateCubehelixLong (a, b, gamma) {
	  if (arguments.length < 3) gamma = 1;
	  a = cubehelix(a);
	  b = cubehelix(b);
	  var ah = isNaN(a.h) ? b.h : a.h,
	      as = isNaN(a.s) ? b.s : a.s,
	      al = a.l,
	      bh = isNaN(b.h) ? 0 : b.h - ah,
	      bs = isNaN(b.s) ? 0 : b.s - as,
	      bl = b.l - al;
	  return function (t) {
	    a.h = ah + bh * t;
	    a.s = as + bs * t;
	    a.l = al + bl * Math.pow(t, gamma);
	    return a + "";
	  };
	};

	// Computes the decimal coefficient and exponent of the specified number x with
	// significant digits p, where x is positive and p is in [1, 21] or undefined.
	// For example, formatDecimal(1.23) returns ["123", 0].
	function formatDecimal (x, p) {
	  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	  var i,
	      coefficient = x.slice(0, i);

	  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
	};

	function exponent (x) {
	  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	};

	function formatGroup (grouping, thousands) {
	  return function (value, width) {
	    var i = value.length,
	        t = [],
	        j = 0,
	        g = grouping[0],
	        length = 0;

	    while (i > 0 && g > 0) {
	      if (length + g + 1 > width) g = Math.max(1, width - length);
	      t.push(value.substring(i -= g, i + g));
	      if ((length += g + 1) > width) break;
	      g = grouping[j = (j + 1) % grouping.length];
	    }

	    return t.reverse().join(thousands);
	  };
	};

	var prefixExponent;

	function formatPrefixAuto (x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	};

	function formatRounded (x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	};

	function formatDefault (x, p) {
	  x = x.toPrecision(p);

	  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	    switch (x[i]) {
	      case ".":
	        i0 = i1 = i;break;
	      case "0":
	        if (i0 === 0) i0 = i;i1 = i;break;
	      case "e":
	        break out;
	      default:
	        if (i0 > 0) i0 = 0;break;
	    }
	  }

	  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	};

	var formatTypes = {
	  "": formatDefault,
	  "%": function _(x, p) {
	    return (x * 100).toFixed(p);
	  },
	  "b": function b(x) {
	    return Math.round(x).toString(2);
	  },
	  "c": function c(x) {
	    return x + "";
	  },
	  "d": function d(x) {
	    return Math.round(x).toString(10);
	  },
	  "e": function e(x, p) {
	    return x.toExponential(p);
	  },
	  "f": function f(x, p) {
	    return x.toFixed(p);
	  },
	  "g": function g(x, p) {
	    return x.toPrecision(p);
	  },
	  "o": function o(x) {
	    return Math.round(x).toString(8);
	  },
	  "p": function p(x, _p) {
	    return formatRounded(x * 100, _p);
	  },
	  "r": formatRounded,
	  "s": formatPrefixAuto,
	  "X": function X(x) {
	    return Math.round(x).toString(16).toUpperCase();
	  },
	  "x": function x(_x) {
	    return Math.round(_x).toString(16);
	  }
	};

	// [[fill]align][sign][symbol][0][width][,][.precision][type]
	var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

	function formatSpecifier (specifier) {
	  return new FormatSpecifier(specifier);
	};

	function FormatSpecifier(specifier) {
	  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

	  var match,
	      fill = match[1] || " ",
	      align = match[2] || ">",
	      sign = match[3] || "-",
	      symbol = match[4] || "",
	      zero = !!match[5],
	      width = match[6] && +match[6],
	      comma = !!match[7],
	      precision = match[8] && +match[8].slice(1),
	      type = match[9] || "";

	  // The "n" type is an alias for ",g".
	  if (type === "n") comma = true, type = "g";

	  // Map invalid types to the default format.
	  else if (!formatTypes[type]) type = "";

	  // If zero fill is specified, padding goes after sign and before digits.
	  if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

	  this.fill = fill;
	  this.align = align;
	  this.sign = sign;
	  this.symbol = symbol;
	  this.zero = zero;
	  this.width = width;
	  this.comma = comma;
	  this.precision = precision;
	  this.type = type;
	}

	FormatSpecifier.prototype.toString = function () {
	  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
	};

	var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

	function identity$2(x) {
	  return x;
	}

	function locale (locale) {
	  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$2,
	      currency = locale.currency,
	      decimal = locale.decimal;

	  function newFormat(specifier) {
	    specifier = formatSpecifier(specifier);

	    var fill = specifier.fill,
	        align = specifier.align,
	        sign = specifier.sign,
	        symbol = specifier.symbol,
	        zero = specifier.zero,
	        width = specifier.width,
	        comma = specifier.comma,
	        precision = specifier.precision,
	        type = specifier.type;

	    // Compute the prefix and suffix.
	    // For SI-prefix, the suffix is lazily computed.
	    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

	    // What format function should we use?
	    // Is this an integer type?
	    // Can this type generate exponential notation?
	    var formatType = formatTypes[type],
	        maybeSuffix = !type || /[defgprs%]/.test(type);

	    // Set the default precision if not specified,
	    // or clamp the specified precision to the supported range.
	    // For significant precision, it must be in [1, 21].
	    // For fixed precision, it must be in [0, 20].
	    precision = precision == null ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

	    function format(value) {
	      var valuePrefix = prefix,
	          valueSuffix = suffix;

	      if (type === "c") {
	        valueSuffix = formatType(value) + valueSuffix;
	        value = "";
	      } else {
	        value = +value;

	        // Convert negative to positive, and compute the prefix.
	        // Note that -0 is not less than 0, but 1 / -0 is!
	        var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

	        // Perform the initial formatting.
	        value = formatType(value, precision);

	        // If the original value was negative, it may be rounded to zero during
	        // formatting; treat this as (positive) zero.
	        if (valueNegative) {
	          var i = -1,
	              n = value.length,
	              c;
	          valueNegative = false;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 < c && c < 58 || type === "x" && 96 < c && c < 103 || type === "X" && 64 < c && c < 71) {
	              valueNegative = true;
	              break;
	            }
	          }
	        }

	        // Compute the prefix and suffix.
	        valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

	        // Break the formatted value into the integer “value” part that can be
	        // grouped, and fractional or exponential “suffix” part that is not.
	        if (maybeSuffix) {
	          var i = -1,
	              n = value.length,
	              c;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 > c || c > 57) {
	              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	              value = value.slice(0, i);
	              break;
	            }
	          }
	        }
	      }

	      // If the fill character is not "0", grouping is applied before padding.
	      if (comma && !zero) value = group(value, Infinity);

	      // Compute the padding.
	      var length = valuePrefix.length + value.length + valueSuffix.length,
	          padding = length < width ? new Array(width - length + 1).join(fill) : "";

	      // If the fill character is "0", grouping is applied after padding.
	      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

	      // Reconstruct the final output based on the desired alignment.
	      switch (align) {
	        case "<":
	          return valuePrefix + value + valueSuffix + padding;
	        case "=":
	          return valuePrefix + padding + value + valueSuffix;
	        case "^":
	          return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	      }
	      return padding + valuePrefix + value + valueSuffix;
	    };

	    format.toString = function () {
	      return specifier + "";
	    };

	    return format;
	  }

	  function formatPrefix(specifier, value) {
	    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
	        k = Math.pow(10, -e),
	        prefix = prefixes[8 + e / 3];
	    return function (value) {
	      return f(k * value) + prefix;
	    };
	  }

	  return {
	    format: newFormat,
	    formatPrefix: formatPrefix
	  };
	};

	var defaultLocale = locale({
	  decimal: ".",
	  thousands: ",",
	  grouping: [3],
	  currency: ["$", ""]
	});

	var format = defaultLocale.format;

	var tickFormat10 = format(".0e");
	var tickFormatOther = format(",");

	var t0$1 = new Date();
	var t1$1 = new Date();
	function newInterval(floori, offseti, count, field) {

	  function interval(date) {
	    return floori(date = new Date(+date)), date;
	  }

	  interval.floor = interval;

	  interval.round = function (date) {
	    var d0 = new Date(+date),
	        d1 = new Date(date - 1);
	    floori(d0), floori(d1), offseti(d1, 1);
	    return date - d0 < d1 - date ? d0 : d1;
	  };

	  interval.ceil = function (date) {
	    return floori(date = new Date(date - 1)), offseti(date, 1), date;
	  };

	  interval.offset = function (date, step) {
	    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	  };

	  interval.range = function (start, stop, step) {
	    var range = [];
	    start = new Date(start - 1);
	    stop = new Date(+stop);
	    step = step == null ? 1 : Math.floor(step);
	    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	    offseti(start, 1), floori(start);
	    if (start < stop) range.push(new Date(+start));
	    while (offseti(start, step), floori(start), start < stop) {
	      range.push(new Date(+start));
	    }return range;
	  };

	  interval.filter = function (test) {
	    return newInterval(function (date) {
	      while (floori(date), !test(date)) {
	        date.setTime(date - 1);
	      }
	    }, function (date, step) {
	      while (--step >= 0) {
	        while (offseti(date, 1), !test(date)) {}
	      }
	    });
	  };

	  if (count) {
	    interval.count = function (start, end) {
	      t0$1.setTime(+start), t1$1.setTime(+end);
	      floori(t0$1), floori(t1$1);
	      return Math.floor(count(t0$1, t1$1));
	    };

	    interval.every = function (step) {
	      step = Math.floor(step);
	      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
	        return field(d) % step === 0;
	      } : function (d) {
	        return interval.count(0, d) % step === 0;
	      });
	    };
	  }

	  return interval;
	};

	var millisecond = newInterval(function () {
	  // noop
	}, function (date, step) {
	  date.setTime(+date + step);
	}, function (start, end) {
	  return end - start;
	});

	// An optimized implementation for this simple case.
	millisecond.every = function (k) {
	  k = Math.floor(k);
	  if (!isFinite(k) || !(k > 0)) return null;
	  if (!(k > 1)) return millisecond;
	  return newInterval(function (date) {
	    date.setTime(Math.floor(date / k) * k);
	  }, function (date, step) {
	    date.setTime(+date + step * k);
	  }, function (start, end) {
	    return (end - start) / k;
	  });
	};

	var timeDay = newInterval(function (date) {
	  date.setHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setDate(date.getDate() + step);
	}, function (start, end) {
	  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
	}, function (date) {
	  return date.getDate() - 1;
	});

	function weekday(i) {
	  return newInterval(function (date) {
	    date.setHours(0, 0, 0, 0);
	    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	  }, function (date, step) {
	    date.setDate(date.getDate() + step * 7);
	  }, function (start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 6048e5;
	  });
	}

	var timeSunday = weekday(0);
	var timeMonday = weekday(1);

	var timeYear = newInterval(function (date) {
	  date.setHours(0, 0, 0, 0);
	  date.setMonth(0, 1);
	}, function (date, step) {
	  date.setFullYear(date.getFullYear() + step);
	}, function (start, end) {
	  return end.getFullYear() - start.getFullYear();
	}, function (date) {
	  return date.getFullYear();
	});

	var utcDay = newInterval(function (date) {
	  date.setUTCHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setUTCDate(date.getUTCDate() + step);
	}, function (start, end) {
	  return (end - start) / 864e5;
	}, function (date) {
	  return date.getUTCDate() - 1;
	});

	function utcWeekday(i) {
	  return newInterval(function (date) {
	    date.setUTCHours(0, 0, 0, 0);
	    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	  }, function (date, step) {
	    date.setUTCDate(date.getUTCDate() + step * 7);
	  }, function (start, end) {
	    return (end - start) / 6048e5;
	  });
	}

	var utcSunday = utcWeekday(0);
	var utcMonday = utcWeekday(1);

	var utcYear = newInterval(function (date) {
	  date.setUTCHours(0, 0, 0, 0);
	  date.setUTCMonth(0, 1);
	}, function (date, step) {
	  date.setUTCFullYear(date.getUTCFullYear() + step);
	}, function (start, end) {
	  return end.getUTCFullYear() - start.getUTCFullYear();
	}, function (date) {
	  return date.getUTCFullYear();
	});

	function localDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	    date.setFullYear(d.y);
	    return date;
	  }
	  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	}

	function utcDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	    date.setUTCFullYear(d.y);
	    return date;
	  }
	  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	}

	function newYear(y) {
	  return { y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
	}

	function locale$1 (locale) {
	  var locale_dateTime = locale.dateTime,
	      locale_date = locale.date,
	      locale_time = locale.time,
	      locale_periods = locale.periods,
	      locale_weekdays = locale.days,
	      locale_shortWeekdays = locale.shortDays,
	      locale_months = locale.months,
	      locale_shortMonths = locale.shortMonths;

	  var periodRe = formatRe(locale_periods),
	      periodLookup = formatLookup(locale_periods),
	      weekdayRe = formatRe(locale_weekdays),
	      weekdayLookup = formatLookup(locale_weekdays),
	      shortWeekdayRe = formatRe(locale_shortWeekdays),
	      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	      monthRe = formatRe(locale_months),
	      monthLookup = formatLookup(locale_months),
	      shortMonthRe = formatRe(locale_shortMonths),
	      shortMonthLookup = formatLookup(locale_shortMonths);

	  var formats = {
	    "a": formatShortWeekday,
	    "A": formatWeekday,
	    "b": formatShortMonth,
	    "B": formatMonth,
	    "c": null,
	    "d": formatDayOfMonth,
	    "e": formatDayOfMonth,
	    "H": formatHour24,
	    "I": formatHour12,
	    "j": formatDayOfYear,
	    "L": formatMilliseconds,
	    "m": formatMonthNumber,
	    "M": formatMinutes,
	    "p": formatPeriod,
	    "S": formatSeconds,
	    "U": formatWeekNumberSunday,
	    "w": formatWeekdayNumber,
	    "W": formatWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatYear,
	    "Y": formatFullYear,
	    "Z": formatZone,
	    "%": formatLiteralPercent
	  };

	  var utcFormats = {
	    "a": formatUTCShortWeekday,
	    "A": formatUTCWeekday,
	    "b": formatUTCShortMonth,
	    "B": formatUTCMonth,
	    "c": null,
	    "d": formatUTCDayOfMonth,
	    "e": formatUTCDayOfMonth,
	    "H": formatUTCHour24,
	    "I": formatUTCHour12,
	    "j": formatUTCDayOfYear,
	    "L": formatUTCMilliseconds,
	    "m": formatUTCMonthNumber,
	    "M": formatUTCMinutes,
	    "p": formatUTCPeriod,
	    "S": formatUTCSeconds,
	    "U": formatUTCWeekNumberSunday,
	    "w": formatUTCWeekdayNumber,
	    "W": formatUTCWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatUTCYear,
	    "Y": formatUTCFullYear,
	    "Z": formatUTCZone,
	    "%": formatLiteralPercent
	  };

	  var parses = {
	    "a": parseShortWeekday,
	    "A": parseWeekday,
	    "b": parseShortMonth,
	    "B": parseMonth,
	    "c": parseLocaleDateTime,
	    "d": parseDayOfMonth,
	    "e": parseDayOfMonth,
	    "H": parseHour24,
	    "I": parseHour24,
	    "j": parseDayOfYear,
	    "L": parseMilliseconds,
	    "m": parseMonthNumber,
	    "M": parseMinutes,
	    "p": parsePeriod,
	    "S": parseSeconds,
	    "U": parseWeekNumberSunday,
	    "w": parseWeekdayNumber,
	    "W": parseWeekNumberMonday,
	    "x": parseLocaleDate,
	    "X": parseLocaleTime,
	    "y": parseYear,
	    "Y": parseFullYear,
	    "Z": parseZone,
	    "%": parseLiteralPercent
	  };

	  // These recursive directive definitions must be deferred.
	  formats.x = newFormat(locale_date, formats);
	  formats.X = newFormat(locale_time, formats);
	  formats.c = newFormat(locale_dateTime, formats);
	  utcFormats.x = newFormat(locale_date, utcFormats);
	  utcFormats.X = newFormat(locale_time, utcFormats);
	  utcFormats.c = newFormat(locale_dateTime, utcFormats);

	  function newFormat(specifier, formats) {
	    return function (date) {
	      var string = [],
	          i = -1,
	          j = 0,
	          n = specifier.length,
	          c,
	          pad,
	          format;

	      if (!(date instanceof Date)) date = new Date(+date);

	      while (++i < n) {
	        if (specifier.charCodeAt(i) === 37) {
	          string.push(specifier.slice(j, i));
	          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
	          if (format = formats[c]) c = format(date, pad);
	          string.push(c);
	          j = i + 1;
	        }
	      }

	      string.push(specifier.slice(j, i));
	      return string.join("");
	    };
	  }

	  function newParse(specifier, newDate) {
	    return function (string) {
	      var d = newYear(1900),
	          i = parseSpecifier(d, specifier, string += "", 0);
	      if (i != string.length) return null;

	      // The am-pm flag is 0 for AM, and 1 for PM.
	      if ("p" in d) d.H = d.H % 12 + d.p * 12;

	      // Convert day-of-week and week-of-year to day-of-year.
	      if ("W" in d || "U" in d) {
	        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	        d.m = 0;
	        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	      }

	      // If a time zone is specified, all fields are interpreted as UTC and then
	      // offset according to the specified time zone.
	      if ("Z" in d) {
	        d.H += d.Z / 100 | 0;
	        d.M += d.Z % 100;
	        return utcDate(d);
	      }

	      // Otherwise, all fields are in local time.
	      return newDate(d);
	    };
	  }

	  function parseSpecifier(d, specifier, string, j) {
	    var i = 0,
	        n = specifier.length,
	        m = string.length,
	        c,
	        parse;

	    while (i < n) {
	      if (j >= m) return -1;
	      c = specifier.charCodeAt(i++);
	      if (c === 37) {
	        c = specifier.charAt(i++);
	        parse = parses[c in pads ? specifier.charAt(i++) : c];
	        if (!parse || (j = parse(d, string, j)) < 0) return -1;
	      } else if (c != string.charCodeAt(j++)) {
	        return -1;
	      }
	    }

	    return j;
	  }

	  function parsePeriod(d, string, i) {
	    var n = periodRe.exec(string.slice(i));
	    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }

	  function parseShortWeekday(d, string, i) {
	    var n = shortWeekdayRe.exec(string.slice(i));
	    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }

	  function parseWeekday(d, string, i) {
	    var n = weekdayRe.exec(string.slice(i));
	    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }

	  function parseShortMonth(d, string, i) {
	    var n = shortMonthRe.exec(string.slice(i));
	    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }

	  function parseMonth(d, string, i) {
	    var n = monthRe.exec(string.slice(i));
	    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }

	  function parseLocaleDateTime(d, string, i) {
	    return parseSpecifier(d, locale_dateTime, string, i);
	  }

	  function parseLocaleDate(d, string, i) {
	    return parseSpecifier(d, locale_date, string, i);
	  }

	  function parseLocaleTime(d, string, i) {
	    return parseSpecifier(d, locale_time, string, i);
	  }

	  function formatShortWeekday(d) {
	    return locale_shortWeekdays[d.getDay()];
	  }

	  function formatWeekday(d) {
	    return locale_weekdays[d.getDay()];
	  }

	  function formatShortMonth(d) {
	    return locale_shortMonths[d.getMonth()];
	  }

	  function formatMonth(d) {
	    return locale_months[d.getMonth()];
	  }

	  function formatPeriod(d) {
	    return locale_periods[+(d.getHours() >= 12)];
	  }

	  function formatUTCShortWeekday(d) {
	    return locale_shortWeekdays[d.getUTCDay()];
	  }

	  function formatUTCWeekday(d) {
	    return locale_weekdays[d.getUTCDay()];
	  }

	  function formatUTCShortMonth(d) {
	    return locale_shortMonths[d.getUTCMonth()];
	  }

	  function formatUTCMonth(d) {
	    return locale_months[d.getUTCMonth()];
	  }

	  function formatUTCPeriod(d) {
	    return locale_periods[+(d.getUTCHours() >= 12)];
	  }

	  return {
	    format: function format(specifier) {
	      var f = newFormat(specifier += "", formats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    parse: function parse(specifier) {
	      var p = newParse(specifier += "", localDate);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    },
	    utcFormat: function utcFormat(specifier) {
	      var f = newFormat(specifier += "", utcFormats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    utcParse: function utcParse(specifier) {
	      var p = newParse(specifier, utcDate);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    }
	  };
	};

	var pads = { "-": "", "_": " ", "0": "0" };
	var numberRe = /^\s*\d+/;
	var percentRe = /^%/;
	var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	function pad(value, fill, width) {
	  var sign = value < 0 ? "-" : "",
	      string = (sign ? -value : value) + "",
	      length = string.length;
	  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	}

	function requote(s) {
	  return s.replace(requoteRe, "\\$&");
	}

	function formatRe(names) {
	  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	}

	function formatLookup(names) {
	  var map = {},
	      i = -1,
	      n = names.length;
	  while (++i < n) {
	    map[names[i].toLowerCase()] = i;
	  }return map;
	}

	function parseWeekdayNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.w = +n[0], i + n[0].length) : -1;
	}

	function parseWeekNumberSunday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.U = +n[0], i + n[0].length) : -1;
	}

	function parseWeekNumberMonday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.W = +n[0], i + n[0].length) : -1;
	}

	function parseFullYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 4));
	  return n ? (d.y = +n[0], i + n[0].length) : -1;
	}

	function parseYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	}

	function parseZone(d, string, i) {
	  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	}

	function parseMonthNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	}

	function parseDayOfMonth(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.d = +n[0], i + n[0].length) : -1;
	}

	function parseDayOfYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	}

	function parseHour24(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.H = +n[0], i + n[0].length) : -1;
	}

	function parseMinutes(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.M = +n[0], i + n[0].length) : -1;
	}

	function parseSeconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.S = +n[0], i + n[0].length) : -1;
	}

	function parseMilliseconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.L = +n[0], i + n[0].length) : -1;
	}

	function parseLiteralPercent(d, string, i) {
	  var n = percentRe.exec(string.slice(i, i + 1));
	  return n ? i + n[0].length : -1;
	}

	function formatDayOfMonth(d, p) {
	  return pad(d.getDate(), p, 2);
	}

	function formatHour24(d, p) {
	  return pad(d.getHours(), p, 2);
	}

	function formatHour12(d, p) {
	  return pad(d.getHours() % 12 || 12, p, 2);
	}

	function formatDayOfYear(d, p) {
	  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
	}

	function formatMilliseconds(d, p) {
	  return pad(d.getMilliseconds(), p, 3);
	}

	function formatMonthNumber(d, p) {
	  return pad(d.getMonth() + 1, p, 2);
	}

	function formatMinutes(d, p) {
	  return pad(d.getMinutes(), p, 2);
	}

	function formatSeconds(d, p) {
	  return pad(d.getSeconds(), p, 2);
	}

	function formatWeekNumberSunday(d, p) {
	  return pad(timeSunday.count(timeYear(d), d), p, 2);
	}

	function formatWeekdayNumber(d) {
	  return d.getDay();
	}

	function formatWeekNumberMonday(d, p) {
	  return pad(timeMonday.count(timeYear(d), d), p, 2);
	}

	function formatYear(d, p) {
	  return pad(d.getFullYear() % 100, p, 2);
	}

	function formatFullYear(d, p) {
	  return pad(d.getFullYear() % 10000, p, 4);
	}

	function formatZone(d) {
	  var z = d.getTimezoneOffset();
	  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
	}

	function formatUTCDayOfMonth(d, p) {
	  return pad(d.getUTCDate(), p, 2);
	}

	function formatUTCHour24(d, p) {
	  return pad(d.getUTCHours(), p, 2);
	}

	function formatUTCHour12(d, p) {
	  return pad(d.getUTCHours() % 12 || 12, p, 2);
	}

	function formatUTCDayOfYear(d, p) {
	  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
	}

	function formatUTCMilliseconds(d, p) {
	  return pad(d.getUTCMilliseconds(), p, 3);
	}

	function formatUTCMonthNumber(d, p) {
	  return pad(d.getUTCMonth() + 1, p, 2);
	}

	function formatUTCMinutes(d, p) {
	  return pad(d.getUTCMinutes(), p, 2);
	}

	function formatUTCSeconds(d, p) {
	  return pad(d.getUTCSeconds(), p, 2);
	}

	function formatUTCWeekNumberSunday(d, p) {
	  return pad(utcSunday.count(utcYear(d), d), p, 2);
	}

	function formatUTCWeekdayNumber(d) {
	  return d.getUTCDay();
	}

	function formatUTCWeekNumberMonday(d, p) {
	  return pad(utcMonday.count(utcYear(d), d), p, 2);
	}

	function formatUTCYear(d, p) {
	  return pad(d.getUTCFullYear() % 100, p, 2);
	}

	function formatUTCFullYear(d, p) {
	  return pad(d.getUTCFullYear() % 10000, p, 4);
	}

	function formatUTCZone() {
	  return "+0000";
	}

	function formatLiteralPercent() {
	  return "%";
	}

	var locale$2 = locale$1({
	  dateTime: "%a %b %e %X %Y",
	  date: "%m/%d/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});

	locale$1({
	  dateTime: "%A, %e de %B de %Y, %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
	  shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
	  months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
	  shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
	});

	locale$1({
	  dateTime: "%A, der %e. %B %Y, %X",
	  date: "%d.%m.%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	  shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	  months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	  shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	});

	locale$1({
	  dateTime: "%A, der %e. %B %Y, %X",
	  date: "%d.%m.%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	  shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	  months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	  shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	});

	locale$1({
	  dateTime: "%a %b %e %X %Y",
	  date: "%Y-%m-%d",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});

	locale$1({
	  dateTime: "%a %e %b %X %Y",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});

	locale$1({
	  dateTime: "%A, %e de %B de %Y, %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
	  shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
	  months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
	  shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
	});

	locale$1({
	  dateTime: "%A, %-d. %Bta %Y klo %X",
	  date: "%-d.%-m.%Y",
	  time: "%H:%M:%S",
	  periods: ["a.m.", "p.m."],
	  days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
	  shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
	  months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
	  shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
	});

	locale$1({
	  dateTime: "%a %e %b %Y %X",
	  date: "%Y-%m-%d",
	  time: "%H:%M:%S",
	  periods: ["", ""],
	  days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	  shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
	  months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	  shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
	});

	locale$1({
	  dateTime: "%A, le %e %B %Y, %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	  shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
	  months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	  shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
	});

	locale$1({
	  dateTime: "%A, %e ב%B %Y %X",
	  date: "%d.%m.%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
	  shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
	  months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
	  shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
	});

	locale$1({
	  dateTime: "%Y. %B %-e., %A %X",
	  date: "%Y. %m. %d.",
	  time: "%H:%M:%S",
	  periods: ["de.", "du."], // unused
	  days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
	  shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
	  months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
	  shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
	});

	locale$1({
	  dateTime: "%A %e %B %Y, %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
	  shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
	  months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
	  shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
	});

	locale$1({
	  dateTime: "%Y %b %e %a %X",
	  date: "%Y/%m/%d",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
	  shortDays: ["日", "月", "火", "水", "木", "金", "土"],
	  months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
	  shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
	});

	locale$1({
	  dateTime: "%Y/%m/%d %a %X",
	  date: "%Y/%m/%d",
	  time: "%H:%M:%S",
	  periods: ["오전", "오후"],
	  days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
	  shortDays: ["일", "월", "화", "수", "목", "금", "토"],
	  months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
	  shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
	});

	locale$1({
	  dateTime: "%A, %e %B %Y г. %X",
	  date: "%d.%m.%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
	  shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
	  months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
	  shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
	});

	locale$1({
	  dateTime: "%a %e %B %Y %T",
	  date: "%d-%m-%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
	  shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
	  months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
	  shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
	});

	locale$1({
	  dateTime: "%A, %e %B %Y, %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"], // unused
	  days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
	  shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
	  months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
	  shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."] /* In Polish language abbraviated months are not commonly used so there is a dispute about the proper abbraviations. */
	});

	locale$1({
	  dateTime: "%A, %e de %B de %Y. %X",
	  date: "%d/%m/%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
	  shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
	  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
	});

	locale$1({
	  dateTime: "%A, %e %B %Y г. %X",
	  date: "%d.%m.%Y",
	  time: "%H:%M:%S",
	  periods: ["AM", "PM"],
	  days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
	  shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
	  months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
	  shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
	});

	locale$1({
	  dateTime: "%A den %d %B %Y %X",
	  date: "%Y-%m-%d",
	  time: "%H:%M:%S",
	  periods: ["fm", "em"],
	  days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
	  shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
	  months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
	});

	locale$1({
	  dateTime: "%a %b %e %X %Y",
	  date: "%Y/%-m/%-d",
	  time: "%H:%M:%S",
	  periods: ["上午", "下午"],
	  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	  shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	  shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
	});

	var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

	function formatIsoNative(date) {
	    return date.toISOString();
	}

	var formatIso = Date.prototype.toISOString ? formatIsoNative : locale$2.utcFormat(isoSpecifier);

	function parseIsoNative(string) {
	  var date = new Date(string);
	  return isNaN(date) ? null : date;
	}

	var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : locale$2.utcParse(isoSpecifier);

	var bisectTickIntervals = bisector(function (method) {
	  return method[2];
	}).right;

	function colors (s) {
	  return s.match(/.{6}/g).map(function (x) {
	    return "#" + x;
	  });
	};

	var a = cubehelix(-100, 0.75, 0.35);
	var b = cubehelix(80, 1.50, 0.8);
	var c = cubehelix(260, 0.75, 0.35);
	var d = cubehelix();
	var interpolateWarm = interpolateCubehelixLong(a, b);
	var interpolateCool = interpolateCubehelixLong(c, b);

	var rangeViridis = colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725");
	var rangeMagma = colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf");
	var rangeInferno = colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4");
	var rangePlasma = colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921");

	/**
	    @module {Object} defaults
	    @desc A set of default color values used when assigning colors based on data.
	      *
	      * | Name | Default | Description |
	      * |---|---|---|
	      * | dark | #444444 | Used in the [contrast](#contrast) function when the color given is very light. |
	      * | light | #f7f7f7 | Used in the [contrast](#contrast) function when the color given is very dark. |
	      * | missing | #cccccc | Used in the [assign](#assign) function when the value passed is `null` or `undefined`. |
	      * | off | #b22200 | Used in the [assign](#assign) function when the value passed is `false`. |
	      * | on | #224f20 | Used in the [assign](#assign) function when the value passed is `true`. |
	      * | scale | `scale.ordinal().range([ "#b22200", "#eace3f", "#282f6b", "#b35c1e", "#224f20", "#5f487c", "#759143", "#419391", "#993c88", "#e89c89", "#ffee8d", "#afd5e8", "#f7ba77", "#a5c697", "#c5b5e5", "#d1d392", "#bbefd0", "#e099cf"])` | An ordinal scale used in the [assign](#assign) function for non-valid color strings and numbers. |
	*/
	var defaults = {
	  "dark": "#444444",
	  "light": "#f7f7f7",
	  "missing": "#cccccc",
	  "off": "#b22200",
	  "on": "#224f20",
	  "scale": ordinal().range(["#b22200", "#eace3f", "#282f6b", "#b35c1e", "#224f20", "#5f487c", "#759143", "#419391", "#993c88", "#e89c89", "#ffee8d", "#afd5e8", "#f7ba77", "#a5c697", "#c5b5e5", "#d1d392", "#bbefd0", "#e099cf"])
	};

	function getColor(k, u) {
	  return k in u ? u[k] : defaults[k];
	}

	/**
	    @function assign
	    @desc Assigns a color to a value using a predefined set of defaults.
	    @param {String} c A valid CSS color string.
	    @param {Object} [u = defaults] An object containing overrides of the default colors.
	    @returns {String}
	*/
	function assign (c, u) {
	  if (u === void 0) {
	    u = {};
	  }

	  // If the value is null or undefined, set to grey.
	  if ([null, void 0].indexOf(c) >= 0) {
	    return getColor("missing", u);
	  }
	  // Else if the value is true, set to green.
	  else if (c === true) {
	      return getColor("on", u);
	    }
	    // Else if the value is false, set to red.
	    else if (c === false) {
	        return getColor("off", u);
	      }

	  var p = color(c);
	  // If the value is not a valid color string, use the color scale.
	  if (!p) {
	    return getColor("scale", u)(c);
	  }

	  return c.toString();
	}

	function getColor$1(k, u) {
	  return k in u ? u[k] : defaults[k];
	}

	/**
	    @function contrast
	    @desc A set of default color values used when assigning colors based on data.
	    @param {String} c A valid CSS color string.
	    @param {Object} [u = defaults] An object containing overrides of the default colors.
	    @returns {String}
	*/
	function contrast (c, u) {
	  if (u === void 0) {
	    u = {};
	  }
	  c = rgb(c);
	  var yiq = (c.r * 299 + c.g * 587 + c.b * 114) / 1000;
	  return yiq >= 128 ? getColor$1("dark", u) : getColor$1("light", u);
	}

	/**
	    Wraps non-function variables in a simple return function.
	    @private
	*/
	function constant (x) {
	  return function constant() {
	    return x;
	  };
	}

	/**
	  Given an HTMLElement and a "width" or "height" string, this function returns the current calculated size for the DOM element.
	  @private
	*/
	function elementSize(element, s) {

	  if (element.tagName === undefined || ["BODY", "HTML"].indexOf(element.tagName) >= 0) {

	    var val = window["inner" + (s.charAt(0).toUpperCase() + s.slice(1))];
	    var elem = d3.select(element);

	    if (s === "width") {
	      val -= parseFloat(elem.style("margin-left"), 10);
	      val -= parseFloat(elem.style("margin-right"), 10);
	      val -= parseFloat(elem.style("padding-left"), 10);
	      val -= parseFloat(elem.style("padding-right"), 10);
	    } else {
	      val -= parseFloat(elem.style("margin-top"), 10);
	      val -= parseFloat(elem.style("margin-bottom"), 10);
	      val -= parseFloat(elem.style("padding-top"), 10);
	      val -= parseFloat(elem.style("padding-bottom"), 10);
	    }

	    return val;
	  } else {

	    var val = parseFloat(d3.select(element).style(s), 10);
	    if (typeof val === "number" && val > 0) return val;else return elementSize(element.parentNode, s);
	  }
	}

	/**
	  Uses the container element for the following:
	    * Sets the position style of the container element to either "absolute", "fixed", or "relative".
	    * Calculates potential width and height for layout.
	    * Appends an <svg> to the container if it does not exist.
	    * Fades out all existing <g> elements.
	    * Appends a new empty <g> element.
	    * Returns an object with the new group, width, and height.
	  @private
	*/
	function selectSetup (select) {
	  var timing = arguments.length <= 1 || arguments[1] === undefined ? 600 : arguments[1];

	  select.style("position", function () {
	    var current = select.style("position");
	    var remain = ["absolute", "fixed"].indexOf(current) >= 0;
	    return remain ? current : "relative";
	  });

	  var h = elementSize(select.node(), "height"),
	      svg = select.selectAll("svg").data([0]),
	      w = elementSize(select.node(), "width");

	  svg.enter().append("svg");

	  svg.attr("height", h + "px").attr("width", w + "px").selectAll("g").transition().duration(timing).attr("opacity", 0).remove();

	  return {
	    "group": svg.append("g"),
	    "height": h,
	    "width": w
	  };
	}

	function constant$1 (x) {
	  return function constant() {
	    return x;
	  };
	}

	var requoteRe$1 = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	function requote$1 (string) {
	  return string.replace(requoteRe$1, "\\$&");
	};

	var filterEvents = {};

	var event = null;

	if (typeof document !== "undefined") {
	  var element = document.documentElement;
	  if (!("onmouseenter" in element)) {
	    filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
	  }
	}

	function selection_on (type, listener, capture) {
	  var n = arguments.length,
	      key = "__on" + type,
	      filter,
	      root = this._root;

	  if (n < 2) return (n = this.node()[key]) && n._listener;

	  if (n < 3) capture = false;
	  if ((n = type.indexOf(".")) > 0) type = type.slice(0, n);
	  if (filter = filterEvents.hasOwnProperty(type)) type = filterEvents[type];

	  function add() {
	    var ancestor = root,
	        i = arguments.length >> 1,
	        ancestors = new Array(i);
	    while (--i >= 0) {
	      ancestor = ancestor[arguments[(i << 1) + 1]], ancestors[i] = i ? ancestor._parent : ancestor;
	    }var l = listenerOf(listener, ancestors, arguments);
	    if (filter) l = filterListenerOf(l);
	    remove.call(this);
	    this.addEventListener(type, this[key] = l, l._capture = capture);
	    l._listener = listener;
	  }

	  function remove() {
	    var l = this[key];
	    if (l) {
	      this.removeEventListener(type, l, l._capture);
	      delete this[key];
	    }
	  }

	  function removeAll() {
	    var re = new RegExp("^__on([^.]+)" + requote$1(type) + "$"),
	        match;
	    for (var name in this) {
	      if (match = name.match(re)) {
	        var l = this[name];
	        this.removeEventListener(match[1], l, l._capture);
	        delete this[name];
	      }
	    }
	  }

	  return this.each(listener ? n ? add : noop : // Attempt to add untyped listener is ignored.
	  n ? remove : removeAll);
	};

	function listenerOf(listener, ancestors, args) {
	  return function (event1) {
	    var i = ancestors.length,
	        event0 = event; // Events can be reentrant (e.g., focus).
	    while (--i >= 0) {
	      args[i << 1] = ancestors[i].__data__;
	    }event = event1;
	    try {
	      listener.apply(ancestors[0], args);
	    } finally {
	      event = event0;
	    }
	  };
	}

	function filterListenerOf(listener) {
	  return function (event) {
	    var related = event.relatedTarget;
	    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
	      listener(event);
	    }
	  };
	}

	function noop() {}

	function defaultView$1 (node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
	    node.document && node // node is a Window
	     || node.defaultView); // node is a Document
	};

	function selection_dispatch (type, params) {

	  function dispatchConstant() {
	    return dispatchEvent(this, type, params);
	  }

	  function dispatchFunction() {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  }

	  return this.each(typeof params === "function" ? dispatchFunction : dispatchConstant);
	};

	function dispatchEvent(node, type, params) {
	  var window = defaultView$1(node),
	      event = window.CustomEvent;

	  if (event) {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
	  }

	  node.dispatchEvent(event);
	}

	function selection_datum (value) {
	  return arguments.length ? this.property("__data__", value) : this.node().__data__;
	};

	function selection_remove () {
	  return this.each(function () {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  });
	};

	var namespaces = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: "http://www.w3.org/1999/xhtml",
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	function namespace (name) {
	  var i = name.indexOf(":"),
	      prefix = name;
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
	};

	function selectorOf (selector) {
	  return function () {
	    return this.querySelector(selector);
	  };
	};

	function selection_append (creator, selector) {
	  if (typeof creator !== "function") creator = creatorOf(creator);

	  function append() {
	    return this.appendChild(creator.apply(this, arguments));
	  }

	  function insert() {
	    return this.insertBefore(creator.apply(this, arguments), selector.apply(this, arguments) || null);
	  }

	  return this.select(arguments.length < 2 ? append : (typeof selector !== "function" && (selector = selectorOf(selector)), insert));
	};

	function creatorOf(name) {
	  name = namespace(name);

	  function creator() {
	    var document = this.ownerDocument,
	        uri = this.namespaceURI;
	    return uri ? document.createElementNS(uri, name) : document.createElement(name);
	  }

	  function creatorNS() {
	    return this.ownerDocument.createElementNS(name.space, name.local);
	  }

	  return name.local ? creatorNS : creator;
	}

	function selection_html (value) {
	  if (!arguments.length) return this.node().innerHTML;

	  function setConstant() {
	    this.innerHTML = value;
	  }

	  function setFunction() {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  }

	  if (value == null) value = "";

	  return this.each(typeof value === "function" ? setFunction : setConstant);
	};

	function selection_text (value) {
	  if (!arguments.length) return this.node().textContent;

	  function setConstant() {
	    this.textContent = value;
	  }

	  function setFunction() {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  }

	  if (value == null) value = "";

	  return this.each(typeof value === "function" ? setFunction : setConstant);
	};

	function selection_classed (name, value) {
	  name = (name + "").trim().split(/^|\s+/);
	  var n = name.length;

	  if (arguments.length < 2) {
	    var node = this.node(),
	        i = -1;
	    if (value = node.classList) {
	      // SVG elements may not support DOMTokenList!
	      while (++i < n) {
	        if (!value.contains(name[i])) return false;
	      }
	    } else {
	      value = node.getAttribute("class");
	      while (++i < n) {
	        if (!classedRe(name[i]).test(value)) return false;
	      }
	    }
	    return true;
	  }

	  name = name.map(classerOf);

	  function setConstant() {
	    var i = -1;
	    while (++i < n) {
	      name[i](this, value);
	    }
	  }

	  function setFunction() {
	    var i = -1,
	        x = value.apply(this, arguments);
	    while (++i < n) {
	      name[i](this, x);
	    }
	  }

	  return this.each(typeof value === "function" ? setFunction : setConstant);
	};

	function classerOf(name) {
	  var re;
	  return function (node, value) {
	    if (c = node.classList) return value ? c.add(name) : c.remove(name);
	    if (!re) re = classedRe(name);
	    var c = node.getAttribute("class") || "";
	    if (value) {
	      re.lastIndex = 0;
	      if (!re.test(c)) node.setAttribute("class", collapse(c + " " + name));
	    } else {
	      node.setAttribute("class", collapse(c.replace(re, " ")));
	    }
	  };
	}

	function collapse(string) {
	  return string.trim().replace(/\s+/g, " ");
	}

	function classedRe(name) {
	  return new RegExp("(?:^|\\s+)" + requote$1(name) + "(?:\\s+|$)", "g");
	}

	function selection_property (name, value) {
	  if (arguments.length < 2) return this.node()[name];

	  function remove() {
	    delete this[name];
	  }

	  function setConstant() {
	    this[name] = value;
	  }

	  function setFunction() {
	    var x = value.apply(this, arguments);
	    if (x == null) delete this[name];else this[name] = x;
	  }

	  return this.each(value == null ? remove : typeof value === "function" ? setFunction : setConstant);
	};

	function selection_style (name, value, priority) {
	  var n = arguments.length;

	  if (n < 2) return defaultView$1(n = this.node()).getComputedStyle(n, null).getPropertyValue(name);

	  if (n < 3) priority = "";

	  function remove() {
	    this.style.removeProperty(name);
	  }

	  function setConstant() {
	    this.style.setProperty(name, value, priority);
	  }

	  function setFunction() {
	    var x = value.apply(this, arguments);
	    if (x == null) this.style.removeProperty(name);else this.style.setProperty(name, x, priority);
	  }

	  return this.each(value == null ? remove : typeof value === "function" ? setFunction : setConstant);
	};

	function selection_attr (name, value) {
	  name = namespace(name);

	  if (arguments.length < 2) {
	    var node = this.node();
	    return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	  }

	  function remove() {
	    this.removeAttribute(name);
	  }

	  function removeNS() {
	    this.removeAttributeNS(name.space, name.local);
	  }

	  function setConstant() {
	    this.setAttribute(name, value);
	  }

	  function setConstantNS() {
	    this.setAttributeNS(name.space, name.local, value);
	  }

	  function setFunction() {
	    var x = value.apply(this, arguments);
	    if (x == null) this.removeAttribute(name);else this.setAttribute(name, x);
	  }

	  function setFunctionNS() {
	    var x = value.apply(this, arguments);
	    if (x == null) this.removeAttributeNS(name.space, name.local);else this.setAttributeNS(name.space, name.local, x);
	  }

	  return this.each(value == null ? name.local ? removeNS : remove : typeof value === "function" ? name.local ? setFunctionNS : setFunction : name.local ? setConstantNS : setConstant);
	};

	function selection_each (callback) {
	  var depth = this._depth,
	      stack = new Array(depth);

	  function visit(nodes, depth) {
	    var i = -1,
	        n = nodes.length,
	        node;

	    if (--depth) {
	      var stack0 = depth * 2,
	          stack1 = stack0 + 1;
	      while (++i < n) {
	        if (node = nodes[i]) {
	          stack[stack0] = node._parent.__data__, stack[stack1] = i;
	          visit(node, depth);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (node = nodes[i]) {
	          stack[0] = node.__data__, stack[1] = i;
	          callback.apply(node, stack);
	        }
	      }
	    }
	  }

	  visit(this._root, depth);
	  return this;
	};

	function selection_empty () {
	  return !this.node();
	};

	function selection_size () {
	  var size = 0;
	  this.each(function () {
	    ++size;
	  });
	  return size;
	};

	function selection_node () {
	  return firstNode(this._root, this._depth);
	};

	function firstNode(nodes, depth) {
	  var i = -1,
	      n = nodes.length,
	      node;

	  if (--depth) {
	    while (++i < n) {
	      if (node = nodes[i]) {
	        if (node = firstNode(node, depth)) {
	          return node;
	        }
	      }
	    }
	  } else {
	    while (++i < n) {
	      if (node = nodes[i]) {
	        return node;
	      }
	    }
	  }
	}

	function selection_nodes () {
	  var nodes = new Array(this.size()),
	      i = -1;
	  this.each(function () {
	    nodes[++i] = this;
	  });
	  return nodes;
	};

	function selection_call () {
	  var callback = arguments[0];
	  callback.apply(arguments[0] = this, arguments);
	  return this;
	};

	// The leaf groups of the selection hierarchy are initially NodeList,
	// and then lazily converted to arrays when mutation is required.
	function arrayify (selection) {
	  return selection._root = arrayifyNode(selection._root, selection._depth);
	};

	function arrayifyNode(nodes, depth) {
	  var i = -1,
	      n = nodes.length,
	      node;

	  if (--depth) {
	    while (++i < n) {
	      if (node = nodes[i]) {
	        nodes[i] = arrayifyNode(node, depth);
	      }
	    }
	  } else if (!Array.isArray(nodes)) {
	    var array = new Array(n);
	    while (++i < n) {
	      array[i] = nodes[i];
	    }array._parent = nodes._parent;
	    nodes = array;
	  }

	  return nodes;
	}

	function selection_sort (comparator) {
	  if (!comparator) comparator = ascending$1;

	  function compare(a, b) {
	    return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	  }

	  function visit(nodes, depth) {
	    if (--depth) {
	      var i = -1,
	          n = nodes.length,
	          node;
	      while (++i < n) {
	        if (node = nodes[i]) {
	          visit(node, depth);
	        }
	      }
	    } else {
	      nodes.sort(compare);
	    }
	  }

	  visit(arrayify(this), this._depth);
	  return this.order();
	};

	function ascending$1(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function selection_order () {
	  orderNode(this._root, this._depth);
	  return this;
	};

	function orderNode(nodes, depth) {
	  var i = nodes.length,
	      node,
	      next;

	  if (--depth) {
	    while (--i >= 0) {
	      if (node = nodes[i]) {
	        orderNode(node, depth);
	      }
	    }
	  } else {
	    next = nodes[--i];
	    while (--i >= 0) {
	      if (node = nodes[i]) {
	        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	}

	function emptyOf (selection) {
	  return new Selection(emptyNode(arrayify(selection), selection._depth), selection._depth);
	};

	function emptyNode(nodes, depth) {
	  var i = -1,
	      n = nodes.length,
	      node,
	      empty = new Array(n);

	  if (--depth) {
	    while (++i < n) {
	      if (node = nodes[i]) {
	        empty[i] = emptyNode(node, depth);
	      }
	    }
	  }

	  empty._parent = nodes._parent;
	  return empty;
	}

	// Lazily constructs the exit selection for this (update) selection.
	// Until this selection is joined to data, the exit selection will be empty.
	function selection_exit () {
	  return this._exit || (this._exit = emptyOf(this));
	};

	// Lazily constructs the enter selection for this (update) selection.
	// Until this selection is joined to data, the enter selection will be empty.
	function selection_enter () {
	  if (!this._enter) {
	    this._enter = emptyOf(this);
	    this._enter._update = this;
	  }
	  return this._enter;
	};

	function constant$5 (x) {
	  return function () {
	    return x;
	  };
	};

	var keyPrefix = "$";

	// The value may either be an array or a function that returns an array.
	// An optional key function may be specified to control how data is bound;
	// if no key function is specified, data is bound to nodes by index.
	// Or, if no arguments are specified, this method returns all bound data.
	function selection_data (value, key) {
	  if (!value) {
	    var data = new Array(this.size()),
	        i = -1;
	    this.each(function (d) {
	      data[++i] = d;
	    });
	    return data;
	  }

	  var depth = this._depth - 1,
	      stack = new Array(depth * 2),
	      bind = key ? bindKey : bindIndex,
	      enter = this.enter(),
	      // Note: arrayify’s!
	  exit = this.exit();

	  if (typeof value !== "function") value = constant$5(value);

	  visit(this._root, enter._root, exit._root, depth);

	  function visit(update, enter, exit, depth) {
	    var i = -1,
	        n,
	        node;

	    if (depth--) {
	      var stack0 = depth * 2,
	          stack1 = stack0 + 1;

	      n = update.length;

	      while (++i < n) {
	        if (node = update[i]) {
	          stack[stack0] = node._parent.__data__, stack[stack1] = i;
	          visit(node, enter[i], exit[i], depth);
	        }
	      }
	    } else {
	      var j = 0,
	          before;

	      bind(update, enter, exit, value.apply(update._parent, stack));
	      n = update.length;

	      // Now connect the enter nodes to their following update node, such that
	      // appendChild can insert the materialized enter node before this node,
	      // rather than at the end of the parent node.
	      while (++i < n) {
	        if (before = enter[i]) {
	          if (i >= j) j = i + 1;
	          while (!(node = update[j]) && ++j < n) {}
	          before._next = node || null;
	        }
	      }
	    }
	  }

	  function bindIndex(update, enter, exit, data) {
	    var i = 0,
	        node,
	        nodeLength = update.length,
	        dataLength = data.length,
	        minLength = Math.min(nodeLength, dataLength);

	    // Clear the enter and exit arrays, and then initialize to the new length.
	    enter.length = 0, enter.length = dataLength;
	    exit.length = 0, exit.length = nodeLength;

	    for (; i < minLength; ++i) {
	      if (node = update[i]) {
	        node.__data__ = data[i];
	      } else {
	        enter[i] = new EnterNode(update._parent, data[i]);
	      }
	    }

	    // Note: we don’t need to delete update[i] here because this loop only
	    // runs when the data length is greater than the node length.
	    for (; i < dataLength; ++i) {
	      enter[i] = new EnterNode(update._parent, data[i]);
	    }

	    // Note: and, we don’t need to delete update[i] here because immediately
	    // following this loop we set the update length to data length.
	    for (; i < nodeLength; ++i) {
	      if (node = update[i]) {
	        exit[i] = update[i];
	      }
	    }

	    update.length = dataLength;
	  }

	  function bindKey(update, enter, exit, data) {
	    var i,
	        node,
	        dataLength = data.length,
	        nodeLength = update.length,
	        nodeByKeyValue = {},
	        keyStack = new Array(2).concat(stack),
	        keyValues = new Array(nodeLength),
	        keyValue;

	    // Clear the enter and exit arrays, and then initialize to the new length.
	    enter.length = 0, enter.length = dataLength;
	    exit.length = 0, exit.length = nodeLength;

	    // Compute the keys for each node.
	    for (i = 0; i < nodeLength; ++i) {
	      if (node = update[i]) {
	        keyStack[0] = node.__data__, keyStack[1] = i;
	        keyValues[i] = keyValue = keyPrefix + key.apply(node, keyStack);

	        // Is this a duplicate of a key we’ve previously seen?
	        // If so, this node is moved to the exit selection.
	        if (nodeByKeyValue[keyValue]) {
	          exit[i] = node;
	        }

	        // Otherwise, record the mapping from key to node.
	        else {
	            nodeByKeyValue[keyValue] = node;
	          }
	      }
	    }

	    // Now clear the update array and initialize to the new length.
	    update.length = 0, update.length = dataLength;

	    // Compute the keys for each datum.
	    for (i = 0; i < dataLength; ++i) {
	      keyStack[0] = data[i], keyStack[1] = i;
	      keyValue = keyPrefix + key.apply(update._parent, keyStack);

	      // Is there a node associated with this key?
	      // If not, this datum is added to the enter selection.
	      if (!(node = nodeByKeyValue[keyValue])) {
	        enter[i] = new EnterNode(update._parent, data[i]);
	      }

	      // Did we already bind a node using this key? (Or is a duplicate?)
	      // If unique, the node and datum are joined in the update selection.
	      // Otherwise, the datum is ignored, neither entering nor exiting.
	      else if (node !== true) {
	          update[i] = node;
	          node.__data__ = data[i];
	        }

	      // Record that we consumed this key, either to enter or update.
	      nodeByKeyValue[keyValue] = true;
	    }

	    // Take any remaining nodes that were not bound to data,
	    // and place them in the exit selection.
	    for (i = 0; i < nodeLength; ++i) {
	      if ((node = nodeByKeyValue[keyValues[i]]) !== true) {
	        exit[i] = node;
	      }
	    }
	  }

	  return this;
	};

	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}

	EnterNode.prototype = {
	  appendChild: function appendChild(child) {
	    return this._parent.insertBefore(child, this._next);
	  },
	  insertBefore: function insertBefore(child, next) {
	    return this._parent.insertBefore(child, next || this._next);
	  },
	  querySelector: function querySelector(selector) {
	    return this._parent.querySelector(selector);
	  }
	};

	// The filter may either be a selector string (e.g., ".foo")
	// or a function that returns a boolean.
	function selection_filter (filter) {
	  var depth = this._depth,
	      stack = new Array(depth * 2);

	  if (typeof filter !== "function") filter = filterOf(filter);

	  function visit(nodes, depth) {
	    var i = -1,
	        n = nodes.length,
	        node,
	        subnodes;

	    if (--depth) {
	      var stack0 = depth * 2,
	          stack1 = stack0 + 1;
	      subnodes = new Array(n);
	      while (++i < n) {
	        if (node = nodes[i]) {
	          stack[stack0] = node._parent.__data__, stack[stack1] = i;
	          subnodes[i] = visit(node, depth);
	        }
	      }
	    }

	    // The filter operation does not preserve the original index,
	    // so the resulting leaf groups are dense (not sparse).
	    else {
	        subnodes = [];
	        while (++i < n) {
	          if (node = nodes[i]) {
	            stack[0] = node.__data__, stack[1] = i;
	            if (filter.apply(node, stack)) {
	              subnodes.push(node);
	            }
	          }
	        }
	      }

	    subnodes._parent = nodes._parent;
	    return subnodes;
	  }

	  return new Selection(visit(this._root, depth), depth);
	};

	var filterOf = function filterOf(selector) {
	  return function () {
	    return this.matches(selector);
	  };
	};

	if (typeof document !== "undefined") {
	  var element$1 = document.documentElement;
	  if (!element$1.matches) {
	    var vendorMatches = element$1.webkitMatchesSelector || element$1.msMatchesSelector || element$1.mozMatchesSelector || element$1.oMatchesSelector;
	    filterOf = function filterOf(selector) {
	      return function () {
	        return vendorMatches.call(this, selector);
	      };
	    };
	  }
	}

	// The selector may either be a selector string (e.g., ".foo")
	// or a function that optionally returns an array of nodes to select.
	// This is the only operation that increases the depth of a selection.
	function selection_selectAll (selector) {
	  var depth = this._depth,
	      stack = new Array(depth * 2);

	  if (typeof selector !== "function") selector = selectorAllOf(selector);

	  function visit(nodes, depth) {
	    var i = -1,
	        n = nodes.length,
	        node,
	        subnode,
	        subnodes = new Array(n);

	    if (--depth) {
	      var stack0 = depth * 2,
	          stack1 = stack0 + 1;
	      while (++i < n) {
	        if (node = nodes[i]) {
	          stack[stack0] = node._parent.__data__, stack[stack1] = i;
	          subnodes[i] = visit(node, depth);
	        }
	      }
	    }

	    // Data is not propagated since there is a one-to-many mapping.
	    // The parent of the new leaf group is the old node.
	    else {
	        while (++i < n) {
	          if (node = nodes[i]) {
	            stack[0] = node.__data__, stack[1] = i;
	            subnodes[i] = subnode = selector.apply(node, stack);
	            subnode._parent = node;
	          }
	        }
	      }

	    subnodes._parent = nodes._parent;
	    return subnodes;
	  }

	  return new Selection(visit(this._root, depth), depth + 1);
	};

	function selectorAllOf(selector) {
	  return function () {
	    return this.querySelectorAll(selector);
	  };
	}

	// The selector may either be a selector string (e.g., ".foo")
	// or a function that optionally returns the node to select.
	function selection_select (selector) {
	  var depth = this._depth,
	      stack = new Array(depth * 2);

	  if (typeof selector !== "function") selector = selectorOf(selector);

	  function visit(nodes, update, depth) {
	    var i = -1,
	        n = nodes.length,
	        node,
	        subnode,
	        subnodes = new Array(n);

	    if (--depth) {
	      var stack0 = depth * 2,
	          stack1 = stack0 + 1;
	      while (++i < n) {
	        if (node = nodes[i]) {
	          stack[stack0] = node._parent.__data__, stack[stack1] = i;
	          subnodes[i] = visit(node, update && update[i], depth);
	        }
	      }
	    }

	    // The leaf group may be sparse if the selector returns a falsey value;
	    // this preserves the index of nodes (unlike selection.filter).
	    // Propagate data to the new node only if it is defined on the old.
	    // If this is an enter selection, materialized nodes are moved to update.
	    else {
	        while (++i < n) {
	          if (node = nodes[i]) {
	            stack[0] = node.__data__, stack[1] = i;
	            if (subnode = selector.apply(node, stack)) {
	              if ("__data__" in node) subnode.__data__ = node.__data__;
	              if (update) update[i] = subnode, delete nodes[i];
	              subnodes[i] = subnode;
	            }
	          }
	        }
	      }

	    subnodes._parent = nodes._parent;
	    return subnodes;
	  }

	  return new Selection(visit(this._root, this._update && this._update._root, depth), depth);
	};

	// When depth = 1, root = [Node, …].
	// When depth = 2, root = [[Node, …], …].
	// When depth = 3, root = [[[Node, …], …], …]. etc.
	// Note that [Node, …] and NodeList are used interchangeably; see arrayify.
	function Selection(root, depth) {
	  this._root = root;
	  this._depth = depth;
	  this._enter = this._update = this._exit = null;
	};

	function selection() {
	  return new Selection([document.documentElement], 1);
	}

	Selection.prototype = selection.prototype = {
	  select: selection_select,
	  selectAll: selection_selectAll,
	  filter: selection_filter,
	  data: selection_data,
	  enter: selection_enter,
	  exit: selection_exit,
	  order: selection_order,
	  sort: selection_sort,
	  call: selection_call,
	  nodes: selection_nodes,
	  node: selection_node,
	  size: selection_size,
	  empty: selection_empty,
	  each: selection_each,
	  attr: selection_attr,
	  style: selection_style,
	  property: selection_property,
	  classed: selection_classed,
	  text: selection_text,
	  html: selection_html,
	  append: selection_append,
	  remove: selection_remove,
	  datum: selection_datum,
	  on: selection_on,
	  dispatch: selection_dispatch
	};

	function select (selector) {
	  return new Selection([typeof selector === "string" ? document.querySelector(selector) : selector], 1);
	};

	var bug44083 = typeof navigator !== "undefined" && /WebKit/.test(navigator.userAgent) ? -1 : 0;

	function constant$3 (x) {
	  return function constant() {
	    return x;
	  };
	}

	function boxEllipsis(_) {
	  if (_.includes(" ")) {
	    var a = _.split(/\s+/);
	    return _.replace(" " + a[a.length - 1], "...");
	  }
	  return "...";
	}

	var splitChars = ["-", "/", ";", ":", "&"];
	var splitRegex = new RegExp("[^\\s\\" + splitChars.join("\\") + "]+\\" + splitChars.join("?\\") + "?", "g");
	function boxSplit(_) {
	  return _.match(splitRegex);
	}

	function box () {

	  var ellipsis = boxEllipsis,
	      fontColor,
	      fontFamily,
	      fontSize,
	      height = constant$3(200),
	      lineHeight,
	      select$$,
	      split = boxSplit,
	      text,
	      width = constant$3(200),
	      x = constant$3(0),
	      y = constant$3(0);

	  function box() {

	    var fS = fontSize(),
	        h = height(select$$),
	        l = 1,
	        lH = lineHeight(),
	        p = "",
	        t = text(select$$),
	        w = width(select$$),
	        xP = x(select$$);

	    select$$.attr("y", y(select$$) + "px").attr("fill", fontColor()).attr("font-family", fontFamily()).attr("font-size", fS + "px").size("font-size", fS + "px");

	    function tspanStyle(tspan) {
	      tspan.attr("x", xP + "px").attr("dx", "0px").attr("dy", lH + "px").attr("dominant-baseline", "alphabetic").style("baseline-shift", "0%");
	    }

	    var tspan = select$$.html("").append("tspan").call(tspanStyle);
	    function addWord(word) {
	      var temp = p + word,
	          curr = tspan.html(),
	          join = t.charAt(temp.length);
	      tspan.html(curr + word);

	      if (select$$.node().getBBox().height > h) {
	        tspan.remove();
	        tspan = select(select$$.node().lastChild);
	        if (tspan.size()) {
	          t = tspan.html();
	          var e = ellipsis(t);
	          tspan.html(e ? e : t);
	        }
	        return false;
	      } else if (tspan.node().getComputedTextLength() > w) {
	        tspan.html(curr.trimRight());
	        tspan = select$$.append("tspan").call(tspanStyle);
	        l++;
	        return addWord(word);
	      } else {
	        var char = join === " " ? " " : "";
	        p = temp + char;
	        tspan.html(curr + word + char);
	        return true;
	      }
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = split(t)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var word = _step.value;

	        var r = addWord(word);
	        if (!r) {
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }

	  box.ellipsis = function (_) {
	    return arguments.length ? (ellipsis = typeof _ === "function" ? _ : constant$3(_), box) : ellipsis;
	  };

	  box.fontColor = function (_) {
	    return arguments.length ? (fontColor = typeof _ === "function" ? _ : constant$3(_), box) : fontColor;
	  };

	  box.fontFamily = function (_) {
	    return arguments.length ? (fontFamily = typeof _ === "function" ? _ : constant$3(_), box) : fontFamily;
	  };

	  box.fontSize = function (_) {
	    return arguments.length ? (fontSize = typeof _ === "function" ? _ : constant$3(_), box) : fontSize;
	  };

	  box.height = function (_) {
	    return arguments.length ? (height = typeof _ === "function" ? _ : constant$3(_), box) : height;
	  };

	  box.select = function (_) {
	    if (arguments.length) {
	      select$$ = select(_);
	      if (text === void 0) {
	        text = constant$3(select$$.text());
	        if (fontColor === void 0) {
	          fontColor = constant$3(select$$.style("font-color"));
	        }
	        if (fontFamily === void 0) {
	          fontFamily = constant$3(select$$.style("font-family"));
	        }
	        if (fontSize === void 0) {
	          fontSize = constant$3(parseFloat(select$$.style("font-size"), 10));
	          lineHeight = constant$3(Math.ceil(fontSize() * 1.1));
	        }
	      }
	      return box;
	    }
	    return select$$;
	  };

	  box.split = function (_) {
	    return arguments.length ? (split = _, box) : split;
	  };

	  box.text = function (_) {
	    return arguments.length ? (text = typeof _ === "function" ? _ : constant$3(_), box) : text;
	  };

	  box.width = function (_) {
	    return arguments.length ? (width = typeof _ === "function" ? _ : constant$3(_), box) : width;
	  };

	  box.x = function (_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : constant$3(_), box) : x;
	  };

	  box.y = function (_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : constant$3(_), box) : y;
	  };

	  return box;
	}

	function rectHeight(d) {
	  return d.height;
	}

	function rectId(d) {
	  return d.id;
	}

	function rectInnerBounds(w, h) {
	  return { "width": w, "height": h, "x": -w / 2, "y": -h / 2 };
	}

	function rectWidth(d) {
	  return d.width;
	}

	function rectX(d) {
	  return d.x;
	}

	function rectY(d) {
	  return d.y;
	}

	/**
	    @function rect
	*/
	function rect () {

	  var fill = constant$1("black"),
	      data = [],
	      id = rectId,
	      innerBounds = rectInnerBounds,
	      height = rectHeight,
	      label,
	      select,
	      timing = 600,
	      width = rectWidth,
	      x = rectX,
	      y = rectY;

	  function rect() {

	    /* Bind data array to elements using provided id matching. */
	    var groups = select.selectAll(".d3plus-shape-rect").data(data, id);

	    /* Enter */
	    var enter = groups.enter().append("g").attr("class", "d3plus-shape-rect").attr("id", function (d) {
	      return "d3plus-shape-rect-" + id(d);
	    }).attr("transform", function (d) {
	      return "translate(" + x(d) + "," + y(d) + ")";
	    });

	    enter.append("rect").attr("width", 0).attr("height", 0).attr("x", 0).attr("y", 0).attr("fill", function (d) {
	      return fill(d);
	    });

	    /* Update */
	    groups.transition().duration(timing).attr("transform", function (d) {
	      return "translate(" + x(d) + "," + y(d) + ")";
	    });

	    groups.selectAll("rect").transition().duration(timing).attr("width", function (d) {
	      return width(d);
	    }).attr("height", function (d) {
	      return height(d);
	    }).attr("x", function (d) {
	      return -width(d) / 2;
	    }).attr("y", function (d) {
	      return -height(d) / 2;
	    }).attr("fill", function (d) {
	      return fill(d);
	    });

	    /* Exit */
	    groups.exit().transition().delay(timing).remove();

	    groups.exit().selectAll("rect").transition().duration(timing).attr("width", 0).attr("height", 0).attr("x", function (d) {
	      return x(d);
	    }).attr("y", function (d) {
	      return y(d);
	    });

	    /* Draw labels based on inner bounds */
	    groups.each(function (d) {
	      if (label !== void 0) {
	        var b = innerBounds(width(d), height(d));
	        if (b) {

	          var elem = d3.select(this).selectAll("text").data([0]);
	          elem.enter().append("text").html(label(d));

	          box().fontColor(function () {
	            return contrast(fill(d));
	          }).height(b.height).select(elem.node()).width(b.width).x(b.x).y(b.y)();
	        } else {
	          d3.select(this).select("text").remove();
	        }
	      } else {
	        d3.select(this).select("text").remove();
	      }
	    });

	    return rect;
	  }

	  /**
	      @memberof rect
	      @desc If *data* is specified, sets the data array to the specified array and returns this rectangle generator. If *data* is not specified, returns the current data array. A rectangle will be drawn for each object in the array.
	      @param {Array} [*data* = []]
	  */
	  rect.data = function (_) {
	    return arguments.length ? (data = _, rect) : data;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the fill accessor to the specified function or string and returns this rectangle generator. If *value* is not specified, returns the current fill accessor.
	      @param {Function|String} [*value* = "black"]
	  */
	  rect.fill = function (_) {
	    return arguments.length ? (fill = typeof _ === "function" ? _ : constant$1(_), rect) : fill;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the height accessor to the specified function or number and returns this rectangle generator. If *value* is not specified, returns the current height accessor.
	      @param {Function|Number} [*value*]
	      @example
	  function(d) {
	  return d.height;
	  }
	  */
	  rect.height = function (_) {
	    return arguments.length ? (height = typeof _ === "function" ? _ : constant$1(_), rect) : height;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the id accessor to the specified function and returns this rectangle generator. If *value* is not specified, returns the current id accessor.
	      @param {Function} [*value*]
	      @example
	  function(d) {
	  return d.id;
	  }
	  */
	  rect.id = function (_) {
	    return arguments.length ? (id = _, rect) : id;
	  };

	  /**
	      @memberof rect
	      @desc If *bounds* is specified, sets the inner bounds to the specified function and returns this rectangle generator. If *bounds* is not specified, returns the current inner bounds accessor.
	      @example
	  function(w, h) {
	  return {
	    "width": w,
	    "height": h,
	    "x": -w / 2,
	    "y": -h / 2
	  };
	  }
	      @param {Function} [*bounds*] Given a rectangle's width and height, the function should return an object containing the following values: `width`, `height`, `x`, `y`.
	  */
	  rect.innerBounds = function (_) {
	    return arguments.length ? (innerBounds = _, rect) : innerBounds;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the label accessor to the specified function or string and returns this rectangle generator. If *value* is not specified, returns the current text accessor, which is `undefined` by default.
	      @param {Function|String} [*value*]
	  */
	  rect.label = function (_) {
	    return arguments.length ? (label = typeof _ === "function" ? _ : constant$1(_), rect) : label;
	  };

	  /**
	      @memberof rect
	      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns this rectangle generator. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
	      @param {String|HTMLElement} [*selector*]
	  */
	  rect.select = function (_) {
	    return arguments.length ? (select = d3.select(_), rect) : select;
	  };

	  /**
	      @memberof rect
	      @desc If *ms* is specified, sets the animation timing to the specified number and returns this rectangle generator. If *ms* is not specified, returns the current animation timing.
	      @param {Number} [*ms* = 600]
	  */
	  rect.timing = function (_) {
	    return arguments.length ? (timing = _, rect) : timing;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the width accessor to the specified function or number and returns this rectangle generator. If *value* is not specified, returns the current width accessor.
	      @param {Function|Number} [*value*]
	      @example
	  function(d) {
	  return d.width;
	  }
	  */
	  rect.width = function (_) {
	    return arguments.length ? (width = typeof _ === "function" ? _ : constant$1(_), rect) : width;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the x accessor to the specified function or number and returns this rectangle generator. If *value* is not specified, returns the current x accessor.
	      @param {Function|Number} [*value*]
	      @example
	  function(d) {
	  return d.x;
	  }
	  */
	  rect.x = function (_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : constant$1(_), rect) : x;
	  };

	  /**
	      @memberof rect
	      @desc If *value* is specified, sets the y accessor to the specified function or number and returns this rectangle generator. If *value* is not specified, returns the current y accessor.
	      @param {Function|Number} [*value*]
	      @example
	  function(d) {
	  return d.y;
	  }
	  */
	  rect.y = function (_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : constant$1(_), rect) : y;
	  };

	  return rect;
	}

	/**
	    The default id accessor function.
	    @private
	*/
	function treemapId(d) {
	  return d.id;
	}

	/**
	    The default label accessor function.
	    @private
	*/
	function treemapLabel(d) {
	  return d.id;
	}

	/**
	    The default value accessor function.
	    @private
	*/
	function treemapValue(d) {
	  return d.value;
	}

	/**
	    @function treemap
	    @desc Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. If *data* is specified, immediately draws the tree map based on the specified array and returns this generator. If *data* is not specified on instantiation, it can be passed/updated after instantiation using the [data](#treemap.data) method.
	    @param {Array} [data = []]
	    @example <caption>using default key accessors</caption>
	var data = [
	  {"id": 0, "value": 100},
	  {"id": 1, "value": 50}
	];

	treemap(data);
	@example <caption>using non-default key accessors</caption>
	var data = [
	  {"name": 0, "value": 20},
	  {"name": 1, "value": 10}
	];

	treemap()
	  .id(function(d) {
	    return d.name;
	  })
	  .value(function(d) {
	    return d.value * 5;
	  })();
	*/
	function treemap () {
	  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  /**
	  The default value accessor function.
	  @private
	  */
	  function treemapFill(d) {
	    return assign(id(d));
	  }

	  /**
	  The default value accessor function.
	  @private
	  */
	  function treemapSort(a, b) {
	    return value(a) - value(b);
	  }

	  var shapes = rect().height(function (d) {
	    return d.dy;
	  }).x(function (d) {
	    return d.x + d.dx / 2;
	  }).y(function (d) {
	    return d.y + d.dy / 2;
	  }).width(function (d) {
	    return d.dx;
	  });

	  var changed = [],
	      fill = treemapFill,
	      group = undefined,
	      id = treemapId,
	      label = treemapLabel,
	      select = undefined,
	      size = undefined,
	      sort = treemapSort,
	      timing = 600,
	      value = treemapValue;

	  /**
	      The inner return object and draw function that gets assigned the public methods.
	      @private
	  */
	  function treemap() {

	    if (select === void 0) {
	      select = d3.select("body");
	      changed.push("select");
	    }

	    if (changed.indexOf("select") >= 0) {
	      var a = selectSetup(select, timing);
	      group = a.group;
	      if (size === void 0) size = [a.width, a.height];
	      shapes.select(group.node());
	    }

	    var layout = d3.layout.treemap().size(size).sort(sort).value(value).nodes({ "children": data }).filter(function (d) {
	      return !d.children && d.area;
	    });

	    shapes.data(layout).fill(fill).id(id).label(label).timing(timing)();

	    changed = [];
	  }

	  /**
	      @memberof treemap
	      @desc If *data* is specified, sets the data array to the specified array and returns this treemap generator. If *data* is not specified, returns the current data array.
	      @param {Array} [*data* = []]
	  */
	  treemap.data = function (_) {
	    return arguments.length ? (data = _, treemap) : data;
	  };

	  /**
	      @memberof treemap
	      @desc If *value* is specified, sets the fill accessor to the specified function or string and returns this treemap generator. If *value* is not specified, returns the current fill accessor. By default, colors are assigned using the [d3plus-color assign](https://github.com/d3plus/d3plus-color/#assign) function based on each data point's unique id.
	      @param {Function|String} [*value*]
	      @example
	  function value(d) {
	  return d3plus_color.assign(d.id);
	  }
	  */
	  treemap.fill = function (_) {
	    return arguments.length ? (fill = typeof _ === "function" ? _ : constant(_), treemap) : fill;
	  };

	  /**
	      @memberof treemap
	      @desc If *value* is specified, sets the id accessor to the specified function and returns this treemap generator. If *value* is not specified, returns the current id accessor.
	      @param {Function} [*value*]
	      @example
	  function value(d) {
	  return d.id;
	  }
	  */
	  treemap.id = function (_) {
	    return arguments.length ? (id = _, treemap) : id;
	  };

	  /**
	      @memberof treemap
	      @desc If *value* is specified, sets the label accessor to the specified function or string and returns this treemap generator. If *value* is not specified, returns the current text accessor, which is `undefined` by default.
	      @param {Function|String} [*value*]
	  */
	  treemap.label = function (_) {
	    return arguments.length ? (label = typeof _ === "function" ? _ : constant(_), treemap) : label;
	  };

	  /**
	      @memberof treemap
	      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns this treemap generator. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
	      @param {String|HTMLElement} [*selector*]
	  */
	  treemap.select = function (_) {
	    if (arguments.length) {
	      select = d3.select(_);
	      changed.push("select");
	      return treemap;
	    }
	    return select;
	  };

	  /**
	      @memberof treemap
	      @desc If *comparator* is specified, sets the sort order for the layout using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.
	      @param {Array} [*comparator*]
	      @example
	  function comparator(a, b) {
	  return b.value - a.value;
	  }
	  */
	  treemap.sort = function (_) {
	    return arguments.length ? (sort = _, treemap) : sort;
	  };

	  /**
	      @memberof treemap
	      @desc If *size* is specified, sets the available layout size to the specified two-element array of numbers representing x and y. If *size* is not specified, returns the current size. If no *size* is given before running the generator, it is determined by analyzing the element passed to [select](#treemap.select).
	      @param {Array} [*size*]
	  */
	  treemap.size = function (_) {
	    return arguments.length ? (size = _, treemap) : size;
	  };

	  /**
	      @memberof treemap
	      @desc If *ms* is specified, sets the animation timing to the specified number and returns this treemap generator. If *ms* is not specified, returns the current animation timing.
	      @param {Number} [*ms* = 600]
	  */
	  treemap.timing = function (_) {
	    return arguments.length ? (timing = _, treemap) : timing;
	  };

	  /**
	      @memberof treemap
	      @desc If *value* is specified, sets the width accessor to the specified function or number and returns this treemap generator. If *value* is not specified, returns the current width accessor.
	      @param {Function|Number} [*value*]
	      @example
	  function value(d) {
	  return d.value;
	  }
	  */
	  treemap.value = function (_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), treemap) : value;
	  };

	  return data.length ? treemap() : treemap;
	}

	exports.version = version;
	exports.treemap = treemap;

}));