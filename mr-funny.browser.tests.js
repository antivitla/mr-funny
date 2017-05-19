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

	var _mrRandom = __webpack_require__(2);

	var _mrRandom2 = _interopRequireDefault(_mrRandom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe("mr-funny (may the " + _mrFunny2.default.word() + " be with you) test suite", function () {
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
	    console.log("May the " + _mrFunny2.default.word() + " be with you!");
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
	      console.log("\u0414\u043B\u0438\u043D\u0430 \u0441\u043B\u043E\u0432\u0430\u0440\u044F: " + _mrFunny2.default.dictionary.length);
	      expect(_mrFunny2.default.dictionary.length).toBeGreaterThan(1);
	    });

	    it("Can form simple phrase", function () {
	      var phrase = ["may the", _mrFunny2.default.word(), "be with you!"];
	      expect(_mrFunny2.default.phrase(phrase)).toBe(phrase.join(" "));
	    });

	    it("Can be used in different forms with different other", function () {
	      var template = ["да", {
	        a: "пребудет",
	        b: "пребудут"
	      }, "c тобой", {
	        a: ["карлсон", "петрушка", "алкоголь", "мама", "слива", "сила печенья"],
	        b: ["штаны", "куклы", "деньги"]
	      }, "и", function () {
	        return _mrFunny2.default.word();
	      }, "!"];
	      console.log("Фраза 1:", _mrFunny2.default.interpolate(template));
	      console.log("Фраза 2:", _mrFunny2.default.interpolate(template));
	      expect(_mrFunny2.default.interpolate(template)).not.toEqual(_mrFunny2.default.interpolate(template));
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
	    return (0, _mrRandom2.default)(this.dictionary).word;
	  },
	  interpolate: function interpolate(template) {
	    if (template.constructor.name.toLowerCase() == "string") {
	      return template;
	    }
	    var type = void 0;
	    return template.map(function (part) {
	      var choice = void 0;
	      switch (part.constructor.name.toLowerCase()) {
	        case "array":
	          choice = (0, _mrRandom2.default)(part);
	          break;
	        case "object":
	          type = type ? type : (0, _mrRandom2.default)(Object.keys(part));
	          if (part[type].constructor.name.toLowerCase() == "array") {
	            choice = (0, _mrRandom2.default)(part[type]);
	          } else if (part[type].constructor.name.toLowerCase() == "function") {
	            choice = funny.interpolate([part[type]()]);
	          } else {
	            choice = part[type];
	          }
	          break;
	        case "function":
	          choice = funny.interpolate([part()]);
	          break;
	        case "string":
	        default:
	          choice = part;
	          break;
	      }

	      return choice;
	    }).reduce(function (prev, curr) {
	      if (curr == "." || curr == "," || curr == "?" || curr == "!" || curr == ";" || curr == ":" || curr == "...") {
	        return prev + curr;
	      } else {
	        return prev + (prev ? " " : "") + curr;
	      }
	    }, "");
	  },
	  phrase: function phrase(template) {
	    return this.interpolate(template);
	  },
	  dictionary: [{ word: "трактор" }, { word: "пассатижи", plural: true }, { word: "ёжик" }, { word: "алкоголь" }],
	  choose: _mrRandom2.default
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