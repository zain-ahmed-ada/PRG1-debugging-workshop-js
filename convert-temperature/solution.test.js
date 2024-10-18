const { convertTemperature } = require("./solution.js");

describe("convertTemperature function", () => {
  test("converts Celsius to Fahrenheit correctly", () => {
    expect(convertTemperature(0, "C", "F")).toBe(32);
    expect(convertTemperature(100, "C", "F")).toBe(212);
    expect(convertTemperature(-40, "C", "F")).toBe(-40);
    expect(convertTemperature(25, "C", "F")).toBe(77);
  });

  test("converts Fahrenheit to Celsius correctly", () => {
    expect(convertTemperature(32, "F", "C")).toBe(0);
    expect(convertTemperature(212, "F", "C")).toBe(100);
    expect(convertTemperature(-40, "F", "C")).toBe(-40);
    expect(convertTemperature(98.6, "F", "C")).toBe(37);
  });

  test("rounds results to two decimal places", () => {
    expect(convertTemperature(30, "C", "F")).toBe(86);
    expect(convertTemperature(86, "F", "C")).toBe(30);
    expect(convertTemperature(37.77777, "C", "F")).toBe(100);
    expect(convertTemperature(100, "F", "C")).toBe(37.78);
  });

  test("returns the same temperature when input and output units are the same", () => {
    expect(convertTemperature(25, "C", "C")).toBe(25);
    expect(convertTemperature(77, "F", "F")).toBe(77);
    expect(convertTemperature(37.777, "C", "C")).toBe(37.78);
  });

  test("handles negative temperatures", () => {
    expect(convertTemperature(-10, "C", "F")).toBe(14);
    expect(convertTemperature(-4, "F", "C")).toBe(-20);
  });

  test("handles decimal inputs", () => {
    expect(convertTemperature(21.5, "C", "F")).toBe(70.7);
    expect(convertTemperature(70.7, "F", "C")).toBe(21.5);
  });
});
