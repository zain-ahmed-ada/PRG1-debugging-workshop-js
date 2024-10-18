const { textInDiv } = require("./solution.js");

describe("textInDiv()", () => {
  test("formats short text with width 15", () => {
    const result = textInDiv("Ada National College for Digital Skills", 15);
    expect(result).toBe("Ada National\nCollege for\nDigital Skills");
  });

  test("formats short text with width 20", () => {
    const result = textInDiv("Ada National College for Digital Skills", 20);
    expect(result).toBe("Ada National College\nfor Digital Skills");
  });

  test("formats short text with width 30", () => {
    const result = textInDiv("Ada National College for Digital Skills", 30);
    expect(result).toBe("Ada National College for\nDigital Skills");
  });

  it("with a width of 30", () => {
    const str =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a " +
      "tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. " +
      "Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.";
    const expectedResult =
      "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nAliquam nec consectetur risus.\nCras vel urna a tellus dapibus\nconsequat. Duis bibendum\ntincidunt viverra. Phasellus\ndictum efficitur sem quis\nporttitor. Mauris luctus\nauctor diam id ultrices.\nPraesent laoreet in enim ut\nplacerat. Praesent a facilisis\nturpis.";
    expect(textInDiv(str, 30)).toBe(expectedResult);
  });

  it("with a width of 50", () => {
    const str =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a " +
      "tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. " +
      "Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.";
    const expectedResult =
      "Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Aliquam nec consectetur risus. Cras vel urna\na tellus dapibus consequat. Duis bibendum\ntincidunt viverra. Phasellus dictum efficitur sem\nquis porttitor. Mauris luctus auctor diam id\nultrices. Praesent laoreet in enim ut placerat.\nPraesent a facilisis turpis.";
    expect(textInDiv(str, 50)).toBe(expectedResult);
  });

  test("handles single word longer than maxWidth", () => {
    const result = textInDiv("Supercalifragilisticexpialidocious", 10);
    expect(result).toBe("Supercalifragilisticexpialidocious");
  });
});
