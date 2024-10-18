const { capitalise } = require("./solution.js");

describe("capitalise function", () => {
  test("capitalizes the first letter of a lowercase word", () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("world")).toBe("World");
    expect(capitalise("javascript")).toBe("Javascript");
  });

  test("lowercases the rest of the word when first letter is already capitalized", () => {
    expect(capitalise("John")).toBe("John");
    expect(capitalise("Paris")).toBe("Paris");
  });

  test("handles all uppercase words", () => {
    expect(capitalise("HELLO")).toBe("Hello");
    expect(capitalise("WORLD")).toBe("World");
  });

  test("handles mixed case words", () => {
    expect(capitalise("jAvAsCrIpT")).toBe("Javascript");
    expect(capitalise("PyThOn")).toBe("Python");
  });

  test("handles single character inputs", () => {
    expect(capitalise("a")).toBe("A");
    expect(capitalise("Z")).toBe("Z");
  });

  test("handles strings with only spaces", () => {
    expect(capitalise("   ")).toBe("   ");
  });

  test("handles strings with special characters", () => {
    expect(capitalise("hello!")).toBe("Hello!");
    expect(capitalise("@world")).toBe("@world");
  });

  test("handles strings with numbers", () => {
    expect(capitalise("1hello")).toBe("1hello");
    expect(capitalise("hello2world")).toBe("Hello2world");
  });
});
