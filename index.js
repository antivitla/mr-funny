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

  var funny = {
    word: function word() {
      var word = this.random(this.dictionary.words);
      while (word == this.last.word) {
        word = this.random(this.dictionary.words);
      }
      this.last.word = word;
      return word;
    },
    last: {
      word: ""
    },
    random: function random(array) {
      return array[parseInt(Math.random() * array.length)];
    },
    dictionary: {
      words: ["трактор", "пассатижи", "орангутанг"]
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
      expect(funny.dictionary.words.length).toBeGreaterThan(1);
    });
  });
});