describe("ma tes'suite",  function () {
  const funnyMatcher = {
    toBeFunny: () => ({
      compare: (actual, expected) => ({
        pass: Boolean(actual),
        message: (actual ? "\"" + expected + "\" is enough funny" : "\"" + expected + "\" is not enough funny")
      })
    })
  };

  var funny = {
    word: function () {
      let word = this.random(this.dictionary.words);
      while(word == this.last.word) {
        word = this.random(this.dictionary.words);
      }
      this.last.word = word;
      return word;
    },
    last: {
      word: ""
    },
    random: (array) => {
      return array[parseInt(Math.random() * array.length)];
    },
    dictionary: {
      words: ["трактор", "пассатижи", "орангутанг"]
    }
  }

  beforeEach(() => {
    jasmine.addMatchers(funnyMatcher);
  });

  it("Should give funny word", function () {
    expect(funny.word()).toBeFunny();
  });

  describe("Words", () => {
    it("Be different", () => {
      expect(funny.word()).not.toEqual(funny.word())
    });

    it("Be many", () => {
      expect(funny.dictionary.words.length).toBeGreaterThan(1);
    });
  });

});
