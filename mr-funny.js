import random from "./mr-random";

const funny = {
  word: function () {
    return random(this.dictionary.words);
  },
  dictionary: {
    words: ["трактор", "пассатижи", "землячок", "алконавт"]
  }
};

export default funny;
