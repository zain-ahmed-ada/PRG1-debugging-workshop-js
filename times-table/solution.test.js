const { printTimesTable } = require("./solution.js");

describe("printTimesTable()", () => {
  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);
  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  test("prints correct multiplication table for 5", () => {
    printTimesTable(5);
    expect(consoleOutput).toEqual([
      "1 x 5 = 5",
      "2 x 5 = 10",
      "3 x 5 = 15",
      "4 x 5 = 20",
      "5 x 5 = 25",
      "6 x 5 = 30",
      "7 x 5 = 35",
      "8 x 5 = 40",
      "9 x 5 = 45",
      "10 x 5 = 50",
      "11 x 5 = 55",
      "12 x 5 = 60",
    ]);
  });

  test("prints correct multiplication table for 3", () => {
    printTimesTable(3);
    expect(consoleOutput).toEqual([
      "1 x 3 = 3",
      "2 x 3 = 6",
      "3 x 3 = 9",
      "4 x 3 = 12",
      "5 x 3 = 15",
      "6 x 3 = 18",
      "7 x 3 = 21",
      "8 x 3 = 24",
      "9 x 3 = 27",
      "10 x 3 = 30",
      "11 x 3 = 33",
      "12 x 3 = 36",
    ]);
  });

  test("prints correct multiplication table for 1", () => {
    printTimesTable(1);
    expect(consoleOutput).toEqual([
      "1 x 1 = 1",
      "2 x 1 = 2",
      "3 x 1 = 3",
      "4 x 1 = 4",
      "5 x 1 = 5",
      "6 x 1 = 6",
      "7 x 1 = 7",
      "8 x 1 = 8",
      "9 x 1 = 9",
      "10 x 1 = 10",
      "11 x 1 = 11",
      "12 x 1 = 12",
    ]);
  });

  test("prints correct multiplication table for 12", () => {
    printTimesTable(12);
    expect(consoleOutput).toEqual([
      "1 x 12 = 12",
      "2 x 12 = 24",
      "3 x 12 = 36",
      "4 x 12 = 48",
      "5 x 12 = 60",
      "6 x 12 = 72",
      "7 x 12 = 84",
      "8 x 12 = 96",
      "9 x 12 = 108",
      "10 x 12 = 120",
      "11 x 12 = 132",
      "12 x 12 = 144",
    ]);
  });
});
