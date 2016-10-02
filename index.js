"use strict";

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
    expect(funny.word()).toBeFunny();
  });

  describe("Words", function () {
    it("Be different", function () {
      expect(funny.word()).not.toEqual(funny.word());
    });

    it("Be many", function () {
      console.log("\u0414\u043B\u0438\u043D\u0430 \u0441\u043B\u043E\u0432\u0430\u0440\u044F: " + funny.dictionary.words.length);
      expect(funny.dictionary.words.length).toBeGreaterThan(1);
    });
  });
});