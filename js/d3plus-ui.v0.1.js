(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3'), require('d3plus-shape')) :
	typeof define === 'function' && define.amd ? define('d3plus-ui', ['exports', 'd3', 'd3plus-shape'], factory) :
	(factory((global.d3plus_ui = {}),global.d3,global.d3plus_shape));
}(this, function (exports,d3,shape) { 'use strict';

	d3 = 'default' in d3 ? d3['default'] : d3;
	shape = 'default' in shape ? shape['default'] : shape;

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
	    The default id accessor function.
	    @private
	*/
	function legendColor(d) {
	  return d.color;
	}

	/**
	    The default id accessor function.
	    @private
	*/
	function legendId(d) {
	  return d.id;
	}

	/**
	    @function legend
	    @desc Creates an SVG color legend based on an array of data. If *data* is specified, immediately draws based on the specified array and returns this legend generator. If *data* is not specified on instantiation, it can be passed/updated after instantiation using the [data](#legend.data) method.
	    @param {Array} [data = []]
	    @example <caption>a sample dataset</caption>
	var data = [
	  {"id": 0, "color": "brickred"},
	  {"id": 1, "color": "cornflowerblue"}
	];
	@example <caption>passed to the generator</caption>
	rect([data]);
	@example <caption>creates the following</caption>
	<g class="d3plus-shape-rect" id="d3plus-shape-rect-0" transform="translate(100,50)">
	  <rect width="200" height="100" x="-100" y="-50" fill="black"></rect>
	</g>
	*/
	function legend () {
	  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  /**
	      The default x accessor function.
	      @private
	  */
	  function legendX(d, i) {
	    var s = size(d, i);
	    return orient === "vertical" ? s / 2 : i * s + s / 2 + padding * i;
	  }

	  /**
	      The default y accessor function.
	      @private
	  */
	  function legendY(d, i) {
	    var s = size(d, i);
	    return orient === "horizontal" ? s / 2 : i * s + s / 2 + padding * i;
	  }

	  var color = legendColor,
	      id = legendId,
	      label = legendId,
	      orient = "vertical",
	      padding = 10,
	      select = undefined,
	      size = constant(20),
	      x = legendX,
	      y = legendY;

	  /**
	    The inner return object and draw function that gets assigned the public methods.
	    @private
	  */
	  function legend() {

	    if (select === void 0) select = d3.select("body").append("svg").style("width", window.innerWidth + "px").style("height", window.innerHeight + "px");

	    shape.rect().data(data).fill(color).height(size).id(id).label(label).select(select.node()).width(size).x(x).y(y).timing(0)();

	    return legend;
	  }

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the color accessor to the specified function and returns this legend generator. If *value* is not specified, returns the current color accessor.
	      @param {Function} [*value*]
	      @example
	  function value(d) {
	  return d.color;
	  }
	  */
	  legend.color = function (_) {
	    return arguments.length ? (color = _, legend) : color;
	  };

	  /**
	      @memberof legend
	      @desc If *data* is specified, sets the data array to the specified array and returns this legend generator. If *data* is not specified, returns the current data array. A legend key will be drawn for each object in the array.
	      @param {Array} [*data* = []]
	  */
	  legend.data = function (_) {
	    return arguments.length ? (data = _, legend) : data;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the id accessor to the specified function and returns this legend generator. If *value* is not specified, returns the current id accessor.
	      @param {Function} [*value*]
	      @example
	  function value(d) {
	  return d.id;
	  }
	  */
	  legend.id = function (_) {
	    return arguments.length ? (id = _, legend) : id;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the label accessor to the specified function or string and returns this legend generator. If *value* is not specified, returns the current label accessor, which is the [id](#legend.id) accessor by default.
	      @param {Function|String} [*value*]
	  */
	  legend.label = function (_) {
	    return arguments.length ? (label = typeof _ === "function" ? _ : constant(_), legend) : label;
	  };

	  /**
	      @memberof legend
	      @desc If *orient* is specified, sets the orientation of the legend and returns this legend generator. If *orient* is not specified, returns the current orientation.
	      @param {String} [*orient* = "vertical"] Supports `"horizontal"` and `"vertical"` orientations.
	  */
	  legend.orient = function (_) {
	    return arguments.length ? (orient = _, legend) : orient;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the padding between each key to the specified number and returns this legend generator. If *value* is not specified, returns the current padding value.
	      @param {Number} [*value* = 10]
	  */
	  legend.padding = function (_) {
	    return arguments.length ? (padding = _, legend) : padding;
	  };

	  /**
	      @memberof legend
	      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns this legend generator. If *selector* is not specified, returns the current SVG container element.
	      @param {String|HTMLElement} [*selector* = d3.select("body").append("svg")]
	  */
	  legend.select = function (_) {
	    return arguments.length ? (select = d3.select(_), legend) : select;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the size accessor to the specified function or number and returns this legend generator. If *value* is not specified, returns the current size accessor.
	      @param {Function|Number} [*value* = 20]
	  */
	  legend.size = function (_) {
	    return arguments.length ? (size = typeof _ === "function" ? _ : constant(_), legend) : size;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the x accessor to the specified function or number and returns this legend generator. If *value* is not specified, returns the current x accessor.
	      @param {Function|Number} [*value*]
	  */
	  legend.x = function (_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : constant(_), legend) : x;
	  };

	  /**
	      @memberof legend
	      @desc If *value* is specified, sets the y accessor to the specified function or number and returns this legend generator. If *value* is not specified, returns the current y accessor.
	      @param {Function|Number} [*value*]
	  */
	  legend.y = function (_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : constant(_), legend) : y;
	  };

	  return data.length ? legend() : legend;
	}

	exports.version = version;
	exports.legend = legend;

}));