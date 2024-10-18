const { calculatePercentageChange } = require("./solution.js");

describe("calculatePercentageChange()", () => {
  test("calculates percentage increase correctly", () => {
    expect(calculatePercentageChange(100, 120)).toBe(20);
    expect(calculatePercentageChange(80, 100)).toBe(25);
    expect(calculatePercentageChange(100, 150)).toBe(50);
  });

  test("calculates percentage decrease correctly", () => {
    expect(calculatePercentageChange(50, 40)).toBe(-20);
    expect(calculatePercentageChange(75, 50)).toBe(-33);
    expect(calculatePercentageChange(100, 75)).toBe(-25);
  });

  test("returns 0 for no change", () => {
    expect(calculatePercentageChange(200, 200)).toBe(0);
    expect(calculatePercentageChange(0, 0)).toBe(0);
  });
});
