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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

window.isFunction = function (functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

var fOUT = function fOUT() {
  alert('JSON failure');
};

window.fThen = function (fSuccess, fError) {
  return function (json) {
    var f = fOUT;

    switch (json.status) {
      case 'success':
        if (isFunction(fSuccess)) {
          f = fSuccess;
        } else {
          throw 'sucess function error';
        }

        break;

      case 'error':
        if (isFunction(fError)) {
          f = fError;
        } else {
          throw 'error function error';
        }

        break;
    }

    f(json.data);
  };
  return fReturn;
};

window.fillProgress = function (id, nbCurrent, nbTotal) {
  var jQelem = $("#".concat(id, " .progress")).first();
  var percent = Math.floor(100 * nbCurrent / nbTotal);

  if (nbCurrent === nbTotal) {
    percent = 100;
    jQelem.removeClass('bg-primary').addClass('bg-success');
  }

  jQelem.css('width', "".concat(percent, "%"));
};

window.fNext = function (step) {
  $("#".concat(step, " .check")).first().addClass('d-none');
  $("#".concat(step, " .next")).first().removeClass('d-none');
};

window.appStorage = sessionStorage;
var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
jQuery.ajaxSetup({
  "type": 'POST',
  "dataType": 'JSON',
  "headers": {
    'X-CSRF-TOKEN': CSRF_TOKEN
  }
});

/***/ })

/******/ });