const { sumDigits } = require("./solution.js");

describe("sumDigits function", () => {
  test("correctly sums digits of a three-digit number", () => {
    expect(sumDigits(103)).toBe(4);
    expect(sumDigits(257)).toBe(14);
  });

  test("correctly handles numbers with zeros", () => {
    expect(sumDigits(1000)).toBe(1);
    expect(sumDigits(2020)).toBe(4);
  });

  test("correctly handles single-digit numbers", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(9)).toBe(9);
  });

  test("correctly sums digits of larger numbers", () => {
    expect(sumDigits(12345)).toBe(15);
    expect(sumDigits(9876543210)).toBe(45);
  });

  test("returns zero for zero input", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("handles large numbers correctly", () => {
    expect(sumDigits(1000000000)).toBe(1);
    expect(sumDigits(9999999999)).toBe(90);
  });

  test("handles edge cases", () => {
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(100)).toBe(1);
    expect(sumDigits(101)).toBe(2);
  });
});
