import funny from "./mr-funny";
import random from "./mr-random";

describe("mr-funny (may the " + funny.word() + " be with you) test suite",  function () {
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
    console.log("May the " + funny.word() + " be with you!");
    expect(funny.word()).toBeFunny();
  });

  describe("Words", () => {
    it("Be different", () => {
      expect(funny.word()).not.toEqual(funny.word());
      expect(funny.word()).not.toEqual(funny.word());
      expect(funny.word()).not.toEqual(funny.word());
      expect(funny.word()).not.toEqual(funny.word());
    });

    it("Be many", () => {
      console.log(`Длина словаря: ${funny.dictionary.length}`);
      expect(funny.dictionary.length).toBeGreaterThan(1);
    });

    it("Can form simple phrase", () => {
      var phrase = ["may the", funny.word(), "be with you!"]
      expect(funny.phrase(phrase)).toBe(phrase.join(" "));
    });

    it("Can be used in different forms with different other", () => {
      var template = [
        "да",
        {
          a: "пребудет",
          b: "пребудут"
        },
        "c тобой",
        {
          a: ["карлсон", "петрушка", "алкоголь", "мама", "слива", "сила печенья"],
          b: ["штаны", "куклы", "деньги"]
        },
        "и",
        function () {
          return funny.word();
        },
        "!"
      ];
      console.log("Фраза 1:", funny.interpolate(template));
      console.log("Фраза 2:", funny.interpolate(template));
      expect(funny.interpolate(template)).not.toEqual(funny.interpolate(template));
    });
  });
});
