/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svg_paint_block_svg_paint_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-paint-block/svg-paint-block */ \"./assets/src/svg-paint-block/svg-paint-block.js\");\n\n\n//# sourceURL=webpack:///./assets/src/index.js?");

/***/ }),

/***/ "./assets/src/svg-paint-block/components/SVGCanvas.js":
/*!************************************************************!*\
  !*** ./assets/src/svg-paint-block/components/SVGCanvas.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SVGCanvas; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getSVGPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getSVGPath */ \"./assets/src/svg-paint-block/getSVGPath.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar SVGCanvas =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SVGCanvas, _React$Component);\n\n  function SVGCanvas(props) {\n    var _this;\n\n    _classCallCheck(this, SVGCanvas);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SVGCanvas).call(this, props));\n    _this.state = {\n      isDrawing: false,\n      inProgressLine: []\n    };\n    _this.mouseDownHandler = _this.mouseDownHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.mouseMoveHandler = _this.mouseMoveHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.mouseUpHandler = _this.mouseUpHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(SVGCanvas, [{\n    key: \"mouseDownHandler\",\n    value: function mouseDownHandler() {\n      this.setState({\n        isDrawing: true\n      });\n    }\n  }, {\n    key: \"mouseMoveHandler\",\n    value: function mouseMoveHandler(event) {\n      // Need to refer to a ref of the container because event.target\n      // will recognize the path element and mess up calculations\n      var domRect = this.refs.canvas.getBoundingClientRect();\n      var top = domRect.top; // TODO: Why does left give decimal precision?\n\n      var left = Math.round(domRect.left);\n      var point = {\n        x: event.clientX - left,\n        y: event.clientY - top\n      };\n\n      if (this.state.isDrawing) {\n        this.setState({\n          inProgressLine: [].concat(_toConsumableArray(this.state.inProgressLine), [point])\n        });\n      }\n    }\n  }, {\n    key: \"mouseUpHandler\",\n    value: function mouseUpHandler() {\n      this.props.addStroke(this.state.inProgressLine);\n      this.setState({\n        isDrawing: false,\n        inProgressLine: []\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseDown: this.mouseDownHandler,\n        onMouseMove: this.mouseMoveHandler,\n        onMouseUp: this.mouseUpHandler,\n        style: {\n          width: '300px',\n          height: '300px'\n        },\n        ref: \"canvas\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n        viewBox: \"0 0 300 300\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        style: {\n          width: '100%',\n          height: '100%',\n          fill: 'none',\n          stroke: '#000',\n          strokeLinecap: 'round',\n          strokeLinejoin: 'round',\n          strokeWidth: '10'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n        d: Object(_getSVGPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.state.inProgressLine)\n      }), this.props.strokeList.length > 0 && this.props.strokeList.map(function (stroke) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n          d: Object(_getSVGPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stroke)\n        });\n      })));\n    }\n  }]);\n\n  return SVGCanvas;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./assets/src/svg-paint-block/components/SVGCanvas.js?");

/***/ }),

/***/ "./assets/src/svg-paint-block/getSVGPath.js":
/*!**************************************************!*\
  !*** ./assets/src/svg-paint-block/getSVGPath.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (arrayOfPoints) {\n  var pathString = '';\n\n  if (arrayOfPoints.length < 1) {\n    return pathString;\n  }\n\n  var firstPoint = arrayOfPoints[0];\n  pathString += \"M\".concat(firstPoint.x, \",\").concat(firstPoint.y, \" \");\n\n  for (var i = 1; i < arrayOfPoints.length; i++) {\n    var point = arrayOfPoints[i];\n    pathString += \"L\".concat(point.x, \",\").concat(point.y, \" \");\n  }\n\n  return pathString;\n});\n\n//# sourceURL=webpack:///./assets/src/svg-paint-block/getSVGPath.js?");

/***/ }),

/***/ "./assets/src/svg-paint-block/svg-paint-block.js":
/*!*******************************************************!*\
  !*** ./assets/src/svg-paint-block/svg-paint-block.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_SVGCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SVGCanvas */ \"./assets/src/svg-paint-block/components/SVGCanvas.js\");\n/* harmony import */ var _getSVGPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSVGPath */ \"./assets/src/svg-paint-block/getSVGPath.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\nregisterBlockType('svg-paint-block/block', {\n  title: 'SVG Paint Block',\n  icon: 'admin-customizer',\n  category: 'common',\n  attributes: {\n    backgroundColor: {\n      type: String,\n      default: 'blue'\n    },\n    strokeList: {\n      type: Array,\n      default: []\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        setAttributes = props.setAttributes;\n    var _props$attributes = props.attributes,\n        backgroundColorStroke = _props$attributes.backgroundColorStroke,\n        strokeList = _props$attributes.strokeList;\n\n    function addStroke(stroke) {\n      setAttributes({\n        strokeList: [].concat(_toConsumableArray(strokeList), [stroke])\n      });\n    }\n\n    return [React.createElement(InspectorControls, null, React.createElement(\"div\", {\n      style: {\n        padding: '1em 0'\n      }\n    }, \"Options\")), React.createElement(\"div\", {\n      className: className\n    }, React.createElement(_components_SVGCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      addStroke: addStroke,\n      strokeList: strokeList\n    }))];\n  },\n  save: function save(props) {\n    var className = props.className;\n    var _props$attributes2 = props.attributes,\n        backgroundColor = _props$attributes2.backgroundColor,\n        strokeList = _props$attributes2.strokeList;\n    return React.createElement(\"div\", {\n      style: {\n        width: '300px',\n        height: '300px'\n      }\n    }, React.createElement(\"svg\", {\n      viewBox: \"0 0 300 300\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      style: {\n        width: '100%',\n        height: '100%',\n        fill: 'none',\n        stroke: '#000',\n        strokeLinecap: 'round',\n        strokeLinejoin: 'round',\n        strokeWidth: '10'\n      }\n    }, strokeList.length > 0 && strokeList.map(function (stroke) {\n      return React.createElement(\"path\", {\n        d: Object(_getSVGPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stroke)\n      });\n    })));\n  }\n});\n\n//# sourceURL=webpack:///./assets/src/svg-paint-block/svg-paint-block.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ });