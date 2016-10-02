describe("ma tes'suite",  function () {
  const funnyMatcher = {
    toBeFunny: () => ({
      compare: (actual, expected) => ({
        pass: Boolean(actual),
        message: (actual ? "\"" + expected + "\" is enough funny" : "\"" + expected + "\" is not enough funny")
      })
    })
  };

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
      console.log(`Длина словаря: ${funny.dictionary.words.length}`);
      expect(funny.dictionary.words.length).toBeGreaterThan(1);
    });
  });

});
