const { findClosingParenthesis } = require("./solution.js");

describe("findClosingParenthesis function", () => {
  test("returns -1 for empty string", () => {
    expect(findClosingParenthesis("", 1)).toBe(-1);
  });

  test("returns -1 for string without parentheses", () => {
    expect(findClosingParenthesis("hello", 1)).toBe(-1);
  });

  test("finds closing parenthesis in simple case", () => {
    expect(findClosingParenthesis("(hello)", 1)).toBe(6);
  });

  test("finds closing parenthesis with multiple pairs", () => {
    expect(findClosingParenthesis("Hello, (world). (Something Else).", 2)).toBe(
      31,
    );
  });

  test("handles nested parentheses correctly", () => {
    expect(
      findClosingParenthesis(
        "Hello, (world, (foo) bar (something) else), foo (bar) cat",
        3,
      ),
    ).toBe(35);
  });

  test("returns -1 when n is greater than number of opening parentheses", () => {
    expect(findClosingParenthesis("(hello)", 2)).toBe(-1);
  });

  test("handles case with no closing parenthesis", () => {
    expect(findClosingParenthesis("(hello", 1)).toBe(-1);
  });

  test("ignores non-parenthesis characters", () => {
    expect(findClosingParenthesis("a(b)c(d)e(f)", 2)).toBe(7);
  });

  test("handles deeply nested parentheses", () => {
    expect(findClosingParenthesis("(((((hello)))))", 1)).toBe(14);
    expect(findClosingParenthesis("(((((hello)))))", 5)).toBe(10);
  });

  test("handles case where n is 0", () => {
    expect(findClosingParenthesis("(hello)", 0)).toBe(-1);
  });

  test("handles case with only opening parentheses", () => {
    expect(findClosingParenthesis("((((", 1)).toBe(-1);
  });

  test("handles case with only closing parentheses", () => {
    expect(findClosingParenthesis("))))", 1)).toBe(-1);
  });
});
