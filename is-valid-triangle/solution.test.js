const { isValidTriangle } = require("./solution.js");

describe("isValidTriangle()", () => {
  test("correctly identifies valid triangles", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
    expect(isValidTriangle(5, 12, 13)).toBe(true);
    expect(isValidTriangle(1, 1, 1)).toBe(true);
    expect(isValidTriangle(5, 5, 5)).toBe(true);
  });

  test("correctly identifies invalid triangles", () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);
    expect(isValidTriangle(2, 4, 2)).toBe(false);
    expect(isValidTriangle(7, 3, 2)).toBe(false);
    expect(isValidTriangle(1, 2, 3)).toBe(false);
  });

  test("correctly identifies valid isosceles triangles", () => {
    expect(isValidTriangle(5, 5, 6)).toBe(true);
    expect(isValidTriangle(6, 5, 5)).toBe(true);
    expect(isValidTriangle(5, 6, 5)).toBe(true);
    expect(isValidTriangle(10, 10, 12)).toBe(true);
  });

  test("correctly identifies invalid isosceles triangles", () => {
    expect(isValidTriangle(5, 5, 10)).toBe(false);
    expect(isValidTriangle(10, 5, 5)).toBe(false);
    expect(isValidTriangle(5, 10, 5)).toBe(false);
  });

  test("handles isosceles triangles with floating-point sides", () => {
    expect(isValidTriangle(5.5, 5.5, 7)).toBe(true);
    expect(isValidTriangle(7, 5.5, 5.5)).toBe(true);
    expect(isValidTriangle(5.5, 7, 5.5)).toBe(true);
  });

  test("handles floating-point numbers correctly", () => {
    expect(isValidTriangle(3.5, 4.5, 5.5)).toBe(true);
    expect(isValidTriangle(1.5, 2.5, 4.5)).toBe(false);
  });

  test("returns false for zero values", () => {
    expect(isValidTriangle(0, 0, 0)).toBe(false);
    expect(isValidTriangle(0, 1, 1)).toBe(false);
  });

  test("returns false for negative values", () => {
    expect(isValidTriangle(-1, 2, 3)).toBe(false);
    expect(isValidTriangle(1, -2, 3)).toBe(false);
    expect(isValidTriangle(1, 2, -3)).toBe(false);
  });

  test("handles edge cases correctly", () => {
    expect(isValidTriangle(1, 1, 2)).toBe(false);
    expect(isValidTriangle(1, 2, 1)).toBe(false);
    expect(isValidTriangle(2, 1, 1)).toBe(false);
  });
});
