const { convertFromPenceToPounds } = require("./solution.js");

describe("convertFromPenceToPounds()", () => {
  test("converts amounts over one pound correctly", () => {
    expect(convertFromPenceToPounds(1299)).toBe("£12.99");
    expect(convertFromPenceToPounds(2000)).toBe("£20.00");
    expect(convertFromPenceToPounds(199)).toBe("£1.99");
  });

  test("converts amounts less than one pound correctly", () => {
    expect(convertFromPenceToPounds(50)).toBe("£0.50");
    expect(convertFromPenceToPounds(1)).toBe("£0.01");
    expect(convertFromPenceToPounds(99)).toBe("£0.99");
  });

  test("handles zero correctly", () => {
    expect(convertFromPenceToPounds(0)).toBe("£0.00");
  });

  test("handles large amounts correctly", () => {
    expect(convertFromPenceToPounds(100000)).toBe("£1000.00");
    expect(convertFromPenceToPounds(9999999)).toBe("£99999.99");
  });

  test("always shows two decimal places", () => {
    expect(convertFromPenceToPounds(700)).toBe("£7.00");
    expect(convertFromPenceToPounds(100)).toBe("£1.00");
  });
});
