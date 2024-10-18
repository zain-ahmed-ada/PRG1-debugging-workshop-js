const { drawRightAngledTriangle } = require("./solution.js");

describe("drawRightAngledTriangle()", () => {
  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);
  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  test("draws a triangle with height 3", () => {
    drawRightAngledTriangle(3);
    expect(consoleOutput).toEqual(["*", "**", "***"]);
  });

  test("draws a triangle with height 5", () => {
    drawRightAngledTriangle(5);
    expect(consoleOutput).toEqual(["*", "**", "***", "****", "*****"]);
  });

  test("draws a triangle with height 1", () => {
    drawRightAngledTriangle(1);
    expect(consoleOutput).toEqual(["*"]);
  });

  test("draws a triangle with height 7", () => {
    drawRightAngledTriangle(7);
    expect(consoleOutput).toEqual([
      "*",
      "**",
      "***",
      "****",
      "*****",
      "******",
      "*******",
    ]);
  });
});
