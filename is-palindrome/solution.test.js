const { isPalindrome } = require("./solution.js");

describe("isPalindrome function", () => {
  test("identifies simple palindromes correctly", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    expect(isPalindrome("radar")).toBe(true);
  });

  test("identifies non-palindromes correctly", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("openai")).toBe(false);
    expect(isPalindrome("palindrome")).toBe(false);
  });

  test("ignores spaces in palindrome check", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("never odd or even")).toBe(true);
  });

  test("is case-insensitive", () => {
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("ABba")).toBe(true);
    expect(isPalindrome("No Lemon, No Melon")).toBe(true);
  });

  test("handles empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("handles single character string", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("Z")).toBe(true);
  });

  test("handles string with only spaces", () => {
    expect(isPalindrome("   ")).toBe(true);
  });

  test("handles alphanumeric palindromes", () => {
    expect(isPalindrome("A1B22B1A")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("A1B23C")).toBe(false);
  });
});
