"use strict";

var funny = {
  word: function word() {
    var word = this.random(this.dictionary.words);
    while (word == this.last.word) {
      word = this.random(this.dictionary.words);
    }
    this.last.word = word;
    return word;
  },
  random: function random(array) {
    return array[parseInt(Math.random() * array.length)];
  },
  last: {},
  dictionary: {
    words: ["трактор", "пассатижи", "орангутанг"]
  }
};