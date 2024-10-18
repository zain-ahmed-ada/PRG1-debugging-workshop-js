const { increment } = require("./solution.js");

describe("increment function", () => {
  test("increments positive integers correctly", () => {
    expect(increment(5)).toBe(6);
    expect(increment(0)).toBe(1);
    expect(increment(99)).toBe(100);
    expect(increment(1000)).toBe(1001);
  });

  test("increments negative integers correctly", () => {
    expect(increment(-3)).toBe(-2);
    expect(increment(-1)).toBe(0);
    expect(increment(-100)).toBe(-99);
  });

  test("handles zero correctly", () => {
    expect(increment(0)).toBe(1);
  });
});
