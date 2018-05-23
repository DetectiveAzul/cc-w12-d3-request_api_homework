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

eval("const Handler = __webpack_require__(/*! ./models/handler.js */ \"./src/models/handler.js\");\nconst NumberFormView = __webpack_require__(/*! ./views/number_form_view */ \"./src/views/number_form_view.js\");\nconst NumberInfoView = __webpack_require__(/*! ./views/number_info_view */ \"./src/views/number_info_view.js\");\n\nconsole.log('JS loaded');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  //Handler\n  const handler = new Handler();\n  handler.bindEvents();\n\n  //Form\n  const numberForm = document.querySelector('form#number-form');\n  const numberFormView = new NumberFormView(numberForm);\n  numberFormView.bindEvents();\n\n  //Info view\n  const numberInfo = document.querySelector('#number-fact');\n  const numberInfoView = new NumberInfoView(numberInfo);\n  numberInfoView.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function(onComplete) {\n  //Initiate the request\n  const xhr = new XMLHttpRequest();\n\n  //Set a listener which trigger once get the response\n  xhr.addEventListener('load', () => {\n    if (xhr.status !== 200) {\n      return;\n    }\n\n    //If we receive a response, store the response on a variable\n    const jsonString = xhr.responseText;\n    //Turn the string into a JS object\n    const data = JSON.parse(jsonString);\n    //Run the callback using the data\n    onComplete(data);\n\n  });\n\n  //Make the request\n  xhr.open('GET', this.url);\n  xhr.setRequestHeader('Accept', 'application/json');\n  xhr.send();\n\n};\n\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/handler.js":
/*!*******************************!*\
  !*** ./src/models/handler.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\")\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst Handler = function() {\n};\n\nHandler.prototype.bindEvents = function () {\n  PubSub.subscribe('NumberFormView:submit', (evt) => {\n    this.requestToAPI(evt.detail);\n  })\n};\n\nHandler.prototype.requestToAPI = function (number) {\n  request = new Request(`http://numbersapi.com/${number}?json`);\n  request.get((data) => {\n    PubSub.publish('Handler:number-object-ready', data);\n  });\n};\n\n\nmodule.exports = Handler;\n\n\n//# sourceURL=webpack:///./src/models/handler.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst NumberInfoView = function(container) {\n  this.container = container;\n};\n\nNumberInfoView.prototype.bindEvents = function () {\n  PubSub.subscribe('Handler:number-object-ready', (evt) => {\n    this.render(evt.detail);\n  });\n};\n\nNumberInfoView.prototype.render = function(numberObject) {\n  this.container.innerHTML = '';\n  this.renderNumber(numberObject);\n  this.renderNumberFact(numberObject);\n};\n\nNumberInfoView.prototype.renderNumber = function(numberObject) {\n  const line = document.createElement('p');\n  line.classList.add(\"bold\");\n  line.textContent = `Number: ${numberObject.number}`\n  this.container.appendChild(line);\n};\n\nNumberInfoView.prototype.renderNumberFact = function (numberObject) {\n  const line = document.createElement('p');\n  line.classList.add(\"pink\");\n  line.classList.add(\"bold\");\n  line.textContent = `Fact: ${numberObject.text}`\n  this.container.appendChild(line);\n\n};\n\nmodule.exports = NumberInfoView;\n\n\n//# sourceURL=webpack:///./src/views/number_info_view.js?");

/***/ })

/******/ });