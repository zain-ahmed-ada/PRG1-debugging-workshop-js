const { convertTo12HourClock } = require("./solution.js");

describe("convertTo12HourClock function", () => {
  test("converts midnight correctly", () => {
    expect(convertTo12HourClock("00:00")).toBe("12:00 AM");
  });

  test("converts noon correctly", () => {
    expect(convertTo12HourClock("12:00")).toBe("12:00 PM");
  });

  test("converts AM times correctly", () => {
    expect(convertTo12HourClock("01:30")).toBe("1:30 AM");
    expect(convertTo12HourClock("09:45")).toBe("9:45 AM");
    expect(convertTo12HourClock("11:59")).toBe("11:59 AM");
  });

  test("converts PM times correctly", () => {
    expect(convertTo12HourClock("13:00")).toBe("1:00 PM");
    expect(convertTo12HourClock("14:25")).toBe("2:25 PM");
    expect(convertTo12HourClock("23:59")).toBe("11:59 PM");
  });

  test("maintains the same minute value", () => {
    expect(convertTo12HourClock("15:07")).toBe("3:07 PM");
    expect(convertTo12HourClock("08:59")).toBe("8:59 AM");
  });

  test("handles edge cases", () => {
    expect(convertTo12HourClock("00:01")).toBe("12:01 AM");
    expect(convertTo12HourClock("23:59")).toBe("11:59 PM");
    expect(convertTo12HourClock("12:01")).toBe("12:01 PM");
    expect(convertTo12HourClock("11:59")).toBe("11:59 AM");
  });
});
