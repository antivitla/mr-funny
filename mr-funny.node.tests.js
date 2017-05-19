var funny = require("./mr-funny.node");
var assert = require("assert");

describe("mr-funny (may the " + funny.word() + " be with you) test suite", function () {
  it("do fun", function () {
    console.log(funny.phrase(["сам ты", funny.word(), "!"]));
    assert.equal(funny.word() != funny.word(), true);
  });
});
