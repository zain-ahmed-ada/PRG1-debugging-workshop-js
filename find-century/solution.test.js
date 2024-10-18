const { findCentury, getOrdinalSuffix } = require("./solution.js");

describe("findCentury function", () => {
  test("correctly identifies centuries for given years", () => {
    expect(findCentury(101)).toBe("2nd");
    expect(findCentury(300)).toBe("3rd");
    expect(findCentury(1066)).toBe("11th");
    expect(findCentury(1776)).toBe("18th");
    expect(findCentury(2023)).toBe("21st");
  });

  test("handles edge cases for years 1-100", () => {
    expect(findCentury(1)).toBe("1st");
    expect(findCentury(50)).toBe("1st");
    expect(findCentury(100)).toBe("1st");
  });

  test("correctly handles centuries ending in 0", () => {
    expect(findCentury(1000)).toBe("10th");
    expect(findCentury(2000)).toBe("20th");
  });

  test("correctly handles special cases for 11th, 12th, 13th centuries", () => {
    expect(findCentury(1050)).toBe("11th");
    expect(findCentury(1150)).toBe("12th");
    expect(findCentury(1250)).toBe("13th");
  });

  test("handles large year numbers", () => {
    expect(findCentury(10000)).toBe("100th");
    expect(findCentury(100000)).toBe("1000th");
  });
});

describe("getOrdinalSuffix function", () => {
  test("returns correct suffix for numbers ending in 1", () => {
    expect(getOrdinalSuffix(1)).toBe("st");
    expect(getOrdinalSuffix(21)).toBe("st");
    expect(getOrdinalSuffix(31)).toBe("st");
  });

  test("returns correct suffix for numbers ending in 2", () => {
    expect(getOrdinalSuffix(2)).toBe("nd");
    expect(getOrdinalSuffix(22)).toBe("nd");
    expect(getOrdinalSuffix(32)).toBe("nd");
  });

  test("returns correct suffix for numbers ending in 3", () => {
    expect(getOrdinalSuffix(3)).toBe("rd");
    expect(getOrdinalSuffix(23)).toBe("rd");
    expect(getOrdinalSuffix(33)).toBe("rd");
  });

  test('returns "th" for numbers ending in 11, 12, 13', () => {
    expect(getOrdinalSuffix(11)).toBe("th");
    expect(getOrdinalSuffix(12)).toBe("th");
    expect(getOrdinalSuffix(13)).toBe("th");
    expect(getOrdinalSuffix(111)).toBe("th");
    expect(getOrdinalSuffix(212)).toBe("th");
    expect(getOrdinalSuffix(313)).toBe("th");
  });

  test('returns "th" for all other numbers', () => {
    expect(getOrdinalSuffix(4)).toBe("th");
    expect(getOrdinalSuffix(20)).toBe("th");
    expect(getOrdinalSuffix(100)).toBe("th");
  });
});
