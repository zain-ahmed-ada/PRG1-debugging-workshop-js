const { isMultipleOfFive } = require("./solution.js");

describe("isMultipleOfFive function", () => {
  test("correctly identifies multiples of 5", () => {
    expect(isMultipleOfFive(0)).toBe(true);
    expect(isMultipleOfFive(5)).toBe(true);
    expect(isMultipleOfFive(10)).toBe(true);
    expect(isMultipleOfFive(15)).toBe(true);
    expect(isMultipleOfFive(100)).toBe(true);
    expect(isMultipleOfFive(-25)).toBe(true);
  });

  test("correctly identifies non-multiples of 5", () => {
    expect(isMultipleOfFive(1)).toBe(false);
    expect(isMultipleOfFive(3)).toBe(false);
    expect(isMultipleOfFive(7)).toBe(false);
    expect(isMultipleOfFive(101)).toBe(false);
    expect(isMultipleOfFive(-7)).toBe(false);
  });

  test("handles zero correctly", () => {
    expect(isMultipleOfFive(0)).toBe(true);
  });

  test("handles large positive numbers", () => {
    expect(isMultipleOfFive(1000000)).toBe(true);
    expect(isMultipleOfFive(1000001)).toBe(false);
  });

  test("handles large negative numbers", () => {
    expect(isMultipleOfFive(-1000000)).toBe(true);
    expect(isMultipleOfFive(-1000001)).toBe(false);
  });
});
