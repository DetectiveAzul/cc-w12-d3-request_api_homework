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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Handler = __webpack_require__(/*! ./models/handler.js */ \"./src/models/handler.js\");\nconst NumberFormView = __webpack_require__(/*! ./views/number_form_view */ \"./src/views/number_form_view.js\");\nconst NumberInfoView = __webpack_require__(/*! ./views/number_info_view */ \"./src/views/number_info_view.js\");\n\nconsole.log('JS loaded');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  //Handler\n  const handler = new Handler();\n  handler.bindEvents();\n  \n  //Form\n  const numberForm = document.querySelector('form#number-form');\n  const numberFormView = new NumberFormView(numberForm);\n  numberFormView.bindEvents();\n\n  //Info view\n  const numberInfo = document.querySelector('#number-fact');\n  const numberInfoView = new NumberInfoView(numberInfo);\n  numberFormView.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/handler.js":
/*!*******************************!*\
  !*** ./src/models/handler.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (24:0)\\nYou may need an appropriate loader to handle this file type.\\n| \\n| module.exports = Handler;\\n| \");\n\n//# sourceURL=webpack:///./src/models/handler.js?");

/***/ }),

/***/ "./src/views/number_form_view.js":
/*!***************************************!*\
  !*** ./src/views/number_form_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst NumberFormView = function (form) {\n  this.form = form;\n};\n\nNumberFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (evt) => {\n    this.handleSubmit(evt);\n  })\n};\n\nNumberFormView.prototype.handleSubmit = function (evt) {\n  evt.preventDefault();\n  PubSub.publish('NumberFormView:submit', evt.target.number.value);\n};\n\nmodule.exports = NumberFormView;\n\n\n//# sourceURL=webpack:///./src/views/number_form_view.js?");

/***/ }),

/***/ "./src/views/number_info_view.js":
/*!***************************************!*\
  !*** ./src/views/number_info_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst NumberInfoView = function(container) {\n  this.container = container;\n};\n\nNumberInfoView.prototype.bindEvents = function () {\n  PubSub.subscribe('Handler:number-object-ready', (evt) => {\n    console.log(evt.detail);\n  })\n};\n\nmodule.exports = NumberInfoView;\n\n\n//# sourceURL=webpack:///./src/views/number_info_view.js?");

/***/ })

/******/ });