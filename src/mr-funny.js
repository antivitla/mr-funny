import random from "./mr-random";

const funny = {
  word: function () {
    return random(this.dictionary).word;
  },
  interpolate: function (template) {
    if ((template).constructor.name.toLowerCase() == "string") {
      return template;
    }
    let type;
    return template.map(function (part) {
      let choice;
      switch ((part).constructor.name.toLowerCase()) {
        case "array":
          choice = random(part);
          break;
        case "object":
          type = type ? type : random(Object.keys(part));
          if (part[type].constructor.name.toLowerCase() == "array") {
            choice = random(part[type]);
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
    })
    .reduce((prev, curr) => {
      if (curr == "." || curr == "," || curr == "?" || curr == "!" || curr == ";" || curr == ":" || curr == "...") {
        return prev + curr;
      } else {
        return prev + (prev ? " " : "") + curr;
      }
    }, "");
  },
  phrase: function (template) {
    return this.interpolate(template);
  },
  dictionary: [
    { word: "трактор" },
    { word: "пассатижи", plural: true },
    { word: "ёжик" },
    { word: "алкоголь" }
  ],
  choose: random
};

export default funny;
