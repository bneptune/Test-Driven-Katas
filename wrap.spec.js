const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns an empty string if empty string is passed in", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Returns string if column is greater than string length", () => {
    expect(wrap("Hello", 7)).to.equal("Hello");
  });

  it("Returns string with breaks if column is greater than string length", () => {
    expect(wrap("Hello world", 7)).to.equal("Hello\nworld");
  });
});
