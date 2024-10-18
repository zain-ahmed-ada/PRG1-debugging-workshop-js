const { fizzBuzz } = require("./solution.js");

describe("fizzBuzz function", () => {
  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);
  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  test("correctly handles input of 5", () => {
    fizzBuzz(5);
    expect(consoleOutput).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test("correctly handles input of 15", () => {
    fizzBuzz(15);
    expect(consoleOutput).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });

  test("correctly handles input of 1", () => {
    fizzBuzz(1);
    expect(consoleOutput).toEqual(["1"]);
  });

  test("correctly handles input of 3", () => {
    fizzBuzz(3);
    expect(consoleOutput).toEqual(["1", "2", "Fizz"]);
  });

  test("correctly handles input of 30", () => {
    fizzBuzz(30);
    const lastFive = consoleOutput.slice(-5);
    expect(lastFive).toEqual(["26", "Fizz", "28", "29", "FizzBuzz"]);
  });

  test("prints correct number of lines", () => {
    fizzBuzz(20);
    expect(consoleOutput.length).toBe(20);
  });

  test("correctly identifies Fizz (multiples of 3)", () => {
    fizzBuzz(6);
    expect(consoleOutput[2]).toBe("Fizz");
    expect(consoleOutput[5]).toBe("Fizz");
  });

  test("correctly identifies Buzz (multiples of 5)", () => {
    fizzBuzz(10);
    expect(consoleOutput[4]).toBe("Buzz");
    expect(consoleOutput[9]).toBe("Buzz");
  });

  test("correctly identifies FizzBuzz (multiples of 3 and 5)", () => {
    fizzBuzz(15);
    expect(consoleOutput[14]).toBe("FizzBuzz");
  });
});
