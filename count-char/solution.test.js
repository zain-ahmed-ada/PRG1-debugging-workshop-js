const { countChar } = require("./solution.js");

describe("countChar function", () => {
  test("counts occurrences of a character correctly", () => {
    expect(countChar("hello", "l")).toBe(2);
    expect(countChar("Mississippi", "s")).toBe(4);
    expect(countChar("Mississippi", "p")).toBe(2);
  });

  test("is case-sensitive", () => {
    expect(countChar("Cassandra", "a")).toBe(3);
    expect(countChar("CAssandra", "A")).toBe(1);
  });

  test("handles long strings", () => {
    expect(countChar("The quick brown fox jumps over the lazy dog", "o")).toBe(
      4,
    );
  });

  test("handles empty strings", () => {
    expect(countChar("", "a")).toBe(0);
  });

  test("returns 0 when character is not found", () => {
    expect(countChar("No matches here", "z")).toBe(0);
  });

  test("counts consecutive occurrences", () => {
    expect(countChar("aaa", "a")).toBe(3);
    expect(countChar("aaabbb", "a")).toBe(3);
    expect(countChar("aaabbb", "b")).toBe(3);
  });

  test("works with numbers as characters", () => {
    expect(countChar("123123", "1")).toBe(2);
    expect(countChar("123123", "2")).toBe(2);
    expect(countChar("123123", "3")).toBe(2);
  });

  test("works with special characters", () => {
    expect(countChar("!@#!@#", "!")).toBe(2);
    expect(countChar("!@#!@#", "@")).toBe(2);
    expect(countChar("!@#!@#", "#")).toBe(2);
  });

  test("handles whitespace characters", () => {
    expect(countChar("  test  ", " ")).toBe(4);
    expect(countChar("\t\t\ttest\t\t\t", "\t")).toBe(6);
  });
});
