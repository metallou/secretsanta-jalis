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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

var STEP = 'node';

var fGetSession = function fGetSession() {
  var item = appStorage.getItem(STEP);
  var data;

  if (item === null) {
    data = {
      "glyph": '',
      "key1": '',
      "key2": ''
    };
  } else {
    data = JSON.parse(item);
  }

  return data;
};

var fSaveSession = function fSaveSession(data) {
  appStorage.setItem(STEP, JSON.stringify(data));
};

var fLoadSession = function fLoadSession() {
  var data = fGetSession();
  $('#glyph').val(data.glyph);
  $('#key1').val(data.key1);
  $('#key2').val(data.key2);
};

var fElem = function fElem(text) {
  return "<span class=\"d-block\">".concat(text, "</span>");
};

var fSuccess = function fSuccess(data) {
  $('#form').removeClass('bg-danger').addClass('bg-success');
  $('#glyph').replaceWith(fElem(data.name));
  $('#key1').replaceWith(fElem(data.key1));
  $('#key2').replaceWith(fElem(data.key2));
  $('#code').replaceWith(fElem(data.code));
  fSaveSession(data);
  fNext();
};

var fError = function fError(data) {
  if (data.glyph) {
    $('#form').addClass('bg-danger');
  }
};

var fFailure = function fFailure(err) {
  console.error(err);
  alert("".concat(STEP, " Ajax Error"));
};

var fGetData = function fGetData() {
  return {
    "data": {
      "glyph": $('#glyph').val(),
      "key1": $('#key1').val(),
      "key2": $('#key2').val()
    }
  };
};

var fCheck = function fCheck(e) {
  jQuery.ajax({
    "url": "/".concat(STEP),
    "data": fGetData()
  }).then(fThen(fSuccess, fError)).catch(fFailure);
};

var fNext = function fNext() {
  $('#check').parent().addClass('d-none');
};

$(document).ready(function () {
  fLoadSession();
  $("#check").on('click', fCheck).trigger('click');
});

/***/ })

/******/ });