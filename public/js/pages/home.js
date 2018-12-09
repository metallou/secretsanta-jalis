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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#start').on('click', function (e) {
    $('#step1').removeClass('d-none');
  });
  $('#step1check').on('click', function (e) {
    var fResult = function fResult(data) {
      data.forEach(function (elem, index, array) {
        var glyph = elem.glyph;
        var row = $(".step1row[data-glyph=\"".concat(glyph, "\"]"));

        if (elem.found) {
          row.removeClass('step1row').removeClass('bg-danger').addClass('bg-success');
          row.find('.code').first().html(elem.code);
          row.find('.key2').first().html(elem.key2);
        } else {
          var code = elem.code || '';

          if (code.trim() !== '') {
            row.addClass('bg-danger');
          }
        }
      });
    };

    var fSuccess = function fSuccess(data) {
      fResult(data);

      var fSuccess = function fSuccess(html) {
        $('#step1btn').replaceWith(html);
      };

      jQuery.ajax({
        "url": '/step1next'
      }).then(fThen(fSuccess)).catch(fFailure);
    };

    var fError = function fError(data) {
      fResult(data);
    };

    var fFailure = function fFailure(err) {
      console.error(err);
      alert('Step1 Ajax Error');
    };

    var fCheck = function fCheck(data) {
      jQuery.ajax({
        "url": '/step1check',
        "data": data
      }).then(fThen(fSuccess, fError)).catch(fFailure);
    };

    var datas = [];
    $('.step1row').each(function (index, elem) {
      datas.push({
        "glyph": $(this).data('glyph'),
        "code": $(this).find('.form-control').first().val()
      });
    });
    var data = {
      "data": datas
    };
    fCheck(data);
  }).trigger('click');
});

/***/ })

/******/ });