/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _mrFunny = __webpack_require__(1);

	var _mrFunny2 = _interopRequireDefault(_mrFunny);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe("ma tes'suite", function () {
	  var funnyMatcher = {
	    toBeFunny: function toBeFunny() {
	      return {
	        compare: function compare(actual, expected) {
	          return {
	            pass: Boolean(actual),
	            message: actual ? "\"" + expected + "\" is enough funny" : "\"" + expected + "\" is not enough funny"
	          };
	        }
	      };
	    }
	  };

	  beforeEach(function () {
	    jasmine.addMatchers(funnyMatcher);
	  });

	  it("Should give funny word", function () {
	    expect(_mrFunny2.default.word()).toBeFunny();
	  });

	  describe("Words", function () {
	    it("Be different", function () {
	      expect(_mrFunny2.default.word()).not.toEqual(_mrFunny2.default.word());
	      expect(_mrFunny2.default.word()).not.toEqual(_mrFunny2.default.word());
	      expect(_mrFunny2.default.word()).not.toEqual(_mrFunny2.default.word());
	      expect(_mrFunny2.default.word()).not.toEqual(_mrFunny2.default.word());
	    });

	    it("Be many", function () {
	      console.log("\u0414\u043B\u0438\u043D\u0430 \u0441\u043B\u043E\u0432\u0430\u0440\u044F: " + _mrFunny2.default.dictionary.words.length);
	      expect(_mrFunny2.default.dictionary.words.length).toBeGreaterThan(1);
	    });
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mrRandom = __webpack_require__(2);

	var _mrRandom2 = _interopRequireDefault(_mrRandom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var funny = {
	  word: function word() {
	    return (0, _mrRandom2.default)(this.dictionary.words);
	  },
	  dictionary: {
	    words: ["трактор", "пассатижи"]
	  }
	};

	exports.default = funny;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function singleton() {
	  var lastValue;

	  return function (array) {
	    var value = selectFrom(array);
	    while (value == lastValue) {
	      console.log(array, lastValue, value);
	      value = selectFrom(array);
	    }
	    lastValue = value;
	    return value;
	    function selectFrom(array) {
	      return array[parseInt(Math.random() * array.length)];
	    }
	  };
	}

	exports.default = singleton();

/***/ }
/******/ ]);