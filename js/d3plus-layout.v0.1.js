(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3plus-color'), require('d3'), require('d3plus-shape')) :
	typeof define === 'function' && define.amd ? define('d3plus-layout', ['exports', 'd3plus-color', 'd3', 'd3plus-shape'], factory) :
	(factory((global.d3plus_layout = {}),global.d3plus_color,global.d3,global.d3plus_shape));
}(this, function (exports,d3plusColor,d3,d3plusShape) { 'use strict';

	d3 = 'default' in d3 ? d3['default'] : d3;

	var version = "0.1.0";

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
	*/
	function treemap () {

	  /**
	  The default value accessor function.
	  @private
	  */
	  function treemapFill(d) {
	    return d3plusColor.assign(id(d));
	  }

	  /**
	  The default value accessor function.
	  @private
	  */
	  function treemapSort(a, b) {
	    return value(a) - value(b);
	  }

	  var shapes = d3plusShape.rect().height(function (d) {
	    return d.dy;
	  }).x(function (d) {
	    return d.x + d.dx / 2;
	  }).y(function (d) {
	    return d.y + d.dy / 2;
	  }).width(function (d) {
	    return d.dx;
	  });

	  var changed = [],
	      data = [],
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

	  return treemap;
	}

	exports.version = version;
	exports.treemap = treemap;

}));