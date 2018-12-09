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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

$(document).ready(function () {
  $('#start .next').first().on('click', function (e) {
    var id = $(this).data('next');
    $("#".concat(id)).removeClass('d-none');
    location.hash = id;
  });
  $('#step1 .next').first().on('click', function (e) {
    var id = $(this).data('next');
    $("#".concat(id)).removeClass('d-none');
    location.hash = id;
  });
  $('#step2 .next').first().on('click', function (e) {
    var id = $(this).data('next');
    $("#".concat(id)).removeClass('d-none');
    location.hash = id;
  });
  $('#step3 .next').first().on('click', function (e) {
    var id = $(this).data('next');
    $("#".concat(id)).removeClass('d-none');
    location.hash = id;
  });
  $('#step1').removeClass('d-none');
  $('#step2').removeClass('d-none');
  $('#step3').removeClass('d-none');
  $('#finish').removeClass('d-none');
});

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var nbTotal;
var nbCurrent = 0;
var STEP = 'step1';

var fGetSession = function fGetSession() {
  var data = appStorage.getItem(STEP) || JSON.stringify([]);
  return JSON.parse(data);
};

var fSaveSession = function fSaveSession(data) {
  var datas = fGetSession();
  datas.push.apply(datas, _toConsumableArray(data));
  appStorage.setItem(STEP, JSON.stringify(datas));
};

var fLoadSession = function fLoadSession() {
  fGetSession().forEach(function (elem, index, array) {
    $(".".concat(STEP, "row[data-glyph=\"").concat(elem.glyph, "\"]")).find('.form-control').first().val(elem.code);
  });
};

var fProgress = function fProgress(nb) {
  nbCurrent += nb;
  fillProgress(STEP, nbCurrent, nbTotal);
};

var fResult = function fResult(data) {
  var fFilter = function fFilter(data) {
    return data.success;
  };

  var fReduce = function fReduce(carry, data) {
    return carry + data.success;
  };

  data.forEach(function (elem, index, array) {
    var glyph = elem.glyph;
    var row = $(".".concat(STEP, "row[data-glyph=\"").concat(glyph, "\"]"));

    if (elem.success) {
      row.removeClass("".concat(STEP, "row")).removeClass('bg-danger').addClass('bg-success');
      row.find('[data-field="code"]').first().html(elem.code);
      row.find('[data-field="key2"]').first().html(elem.key2);
    } else {
      var code = elem.code || '';

      if (code.trim() !== '') {
        row.addClass('bg-danger');
      }
    }
  });
  fProgress(data.reduce(fReduce, 0));
  fSaveSession(data.filter(fFilter));
};

var fSuccess = function fSuccess(data) {
  fResult(data);
  fNext(STEP);
};

var fError = function fError(data) {
  fResult(data);
};

var fFailure = function fFailure(err) {
  console.error(err);
  alert("".concat(STEP, " Ajax Error"));
};

var fGetData = function fGetData() {
  var datas = [];
  $(".".concat(STEP, "row")).each(function (index, elem) {
    datas.push({
      "glyph": $(this).data('glyph'),
      "code": $(this).find('.form-control').first().val()
    });
  });
  return {
    "data": datas
  };
};

var fCheck = function fCheck(e) {
  jQuery.ajax({
    "url": "/".concat(STEP),
    "data": fGetData()
  }).then(fThen(fSuccess, fError)).catch(fFailure);
};

$(document).ready(function () {
  nbTotal = $(".".concat(STEP, "row")).length;
  fLoadSession();
  $("#".concat(STEP, " .check")).first().on('click', fCheck).trigger('click');
});

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var nbTotal = 3;
var nbCurrent = 0;
var STEP = 'step2';

var fGetSession = function fGetSession() {
  var data = appStorage.getItem(STEP) || JSON.stringify([]);
  return JSON.parse(data);
};

var fSaveSession = function fSaveSession(data) {
  var datas = fGetSession();
  datas.push.apply(datas, _toConsumableArray(data));
  appStorage.setItem(STEP, JSON.stringify(datas));
};

var fLoadSession = function fLoadSession() {
  fGetSession().forEach(function (elem, index, array) {
    var holder = $(".".concat(STEP, "slot[data-field=\"").concat(elem.field, "\"]"));
    var type = $(".".concat(STEP, "type[data-name=\"").concat(elem.name, "\"]"));
    holder.append(type);
  });
};

var fProgress = function fProgress(nb) {
  nbCurrent += nb;
  fillProgress(STEP, nbCurrent, nbTotal);
};

var fResult = function fResult(data) {
  var fFilter = function fFilter(data) {
    return data.success;
  };

  var fReduce = function fReduce(carry, data) {
    return carry + data.success;
  };

  data.forEach(function (elem, index, array) {
    var name = elem.name;
    var type = $(".".concat(STEP, "type[data-name=\"").concat(name, "\"]"));
    var slot = type.closest(".".concat(STEP, "slot"));

    if (elem.success) {
      type.removeClass("".concat(STEP, "type"));
      slot.removeClass("".concat(STEP, "slot")).removeClass('bg-danger').addClass('bg-success');
    } else {
      slot.addClass('bg-danger');
    }
  });
  fProgress(data.reduce(fReduce, 0));
  fSaveSession(data.filter(fFilter));
};

var fSuccess = function fSuccess(data) {
  fResult(data);
  fNext(STEP);
};

var fError = function fError(data) {
  fResult(data);
};

var fFailure = function fFailure(err) {
  console.error(err);
  alert("".concat(STEP, " Ajax Error"));
};

var fSelect = function fSelect(holder, jQelem) {
  holder.find(".".concat(STEP, "type")).each(function (index, elem) {
    fUnselect($(this));
  });
  holder.append(jQelem);
};

var fUnselect = function fUnselect(jQelem) {
  $("#".concat(STEP, "types")).append(jQelem);
};

var fGetData = function fGetData() {
  var datas = [];
  $(".".concat(STEP, "slot")).each(function (index, elem) {
    var type = $(this).find(".".concat(STEP, "type")).first();
    var name = type.length ? type.data('name') : '';
    datas.push({
      "name": name,
      "field": $(this).data('field')
    });
  });
  return {
    "data": datas
  };
};

var fCheck = function fCheck(e) {
  jQuery.ajax({
    "url": "/".concat(STEP),
    "data": fGetData()
  }).then(fThen(fSuccess, fError)).catch(fFailure);
};

$(document).ready(function () {
  fLoadSession();
  $("#".concat(STEP, " .check")).first().on('click', fCheck).trigger('click');
  $(".".concat(STEP, "type")).draggable({
    "cancel": 'a.ui-icon',
    "revert": 'invalid',
    "containment": 'document',
    "helper": 'clone',
    "cursor": 'move'
  });
  $(".".concat(STEP, "slot\u0300")).droppable({
    "accept": ".".concat(STEP, "type"),
    "greedy": true,
    "drop": function drop(event, ui) {
      fSelect($(this), ui.draggable);
    }
  });
  $("#".concat(STEP, "types")).droppable({
    "accept": ".".concat(STEP, "type"),
    "greedy": true,
    "drop": function drop(event, ui) {
      fUnselect(ui.draggable);
    }
  });
});

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

var nbTotal = 1;
var nbCurrent = 0;
var STEP = 'step3';

var fGetSession = function fGetSession() {
  var data = appStorage.getItem(STEP) || '';
  return data;
};

var fSaveSession = function fSaveSession(data) {
  appStorage.setItem(STEP, 'KCN');
};

var fLoadSession = function fLoadSession() {
  $("#".concat(STEP, "input")).val(fGetSession());
};

var fProgress = function fProgress(nb) {
  nbCurrent += nb;
  fillProgress(STEP, nbCurrent, nbTotal);
};

var fResult = function fResult(success) {
  var input = $("#".concat(STEP, "input"));
  var holder = input.parent();
  var value = input.val();
  fProgress(success ? 1 : 0);

  if (success) {
    var elem = "<span class=\"h2 p-3 bg-success rounded text-white\">KCN</span>";
    holder.removeClass('bg-danger').html(elem);
    appStorage.setItem(STEP, 'KCN');
  } else {
    if (value.trim() !== '') {
      holder.addClass('bg-danger');
    }
  }
};

var fSuccess = function fSuccess(data) {
  fResult(data);
  fNext(STEP);
};

var fError = function fError(data) {
  fResult(data);
};

var fFailure = function fFailure(err) {
  console.error(err);
  alert("".concat(STEP, " Ajax Error"));
};

var fGetData = function fGetData() {
  return {
    "data": $("#".concat(STEP, "input")).val()
  };
};

var fCheck = function fCheck(e) {
  jQuery.ajax({
    "url": "/".concat(STEP),
    "data": fGetData()
  }).then(fThen(fSuccess, fError)).catch(fFailure);
};

$(document).ready(function () {
  fLoadSession();
  $("#".concat(STEP, " .check")).first().on('click', fCheck).trigger('click');
  $("#".concat(STEP, "list")).sortable({
    "axis": 'y',
    "containment": 'parent'
  });
});

/***/ })

/******/ });