const { square } = require("./solution.js"); // Assuming the square function is in a file named square.js

describe("square function", () => {
  test("squares positive integers correctly", () => {
    expect(square(4)).toBe(16);
    expect(square(10)).toBe(100);
    expect(square(1)).toBe(1);
  });

  test("squares negative integers correctly", () => {
    expect(square(-3)).toBe(9);
    expect(square(-5)).toBe(25);
    expect(square(-1)).toBe(1);
  });

  test("squares zero correctly", () => {
    expect(square(0)).toBe(0);
  });

  test("squares positive floating-point numbers correctly", () => {
    expect(square(2.5)).toBeCloseTo(6.25);
    expect(square(1.1)).toBeCloseTo(1.21);
    expect(square(0.1)).toBeCloseTo(0.01);
  });

  test("squares negative floating-point numbers correctly", () => {
    expect(square(-1.5)).toBeCloseTo(2.25);
    expect(square(-3.3)).toBeCloseTo(10.89);
    expect(square(-0.7)).toBeCloseTo(0.49);
  });
});
