const { rotateAngleByDegrees } = require("./solution.js");

describe("rotateAngleByDegrees()", () => {
  test("rotates angles correctly within 0-359 range", () => {
    expect(rotateAngleByDegrees(45, 45)).toBe(90);
    expect(rotateAngleByDegrees(350, 15)).toBe(5);
    expect(rotateAngleByDegrees(270, 180)).toBe(90);
    expect(rotateAngleByDegrees(90, -100)).toBe(350);
  });

  test("handles full rotations correctly", () => {
    expect(rotateAngleByDegrees(0, 360)).toBe(0);
    expect(rotateAngleByDegrees(180, 720)).toBe(180);
    expect(rotateAngleByDegrees(45, -360)).toBe(45);
  });

  test("normalizes results to 0-359 range", () => {
    expect(rotateAngleByDegrees(350, 20)).toBe(10);
    expect(rotateAngleByDegrees(10, -20)).toBe(350);
    expect(rotateAngleByDegrees(0, 400)).toBe(40);
  });

  test("handles large positive rotations", () => {
    expect(rotateAngleByDegrees(0, 1000)).toBe(280);
    expect(rotateAngleByDegrees(180, 3600)).toBe(180);
  });

  test("handles large negative rotations", () => {
    expect(rotateAngleByDegrees(0, -1000)).toBe(80);
    expect(rotateAngleByDegrees(180, -3600)).toBe(180);
  });

  test("handles edge cases", () => {
    expect(rotateAngleByDegrees(0, 0)).toBe(0);
    expect(rotateAngleByDegrees(359, 1)).toBe(0);
    expect(rotateAngleByDegrees(0, -1)).toBe(359);
  });
});
