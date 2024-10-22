// this implementation is working...

function textInDiv(text, maxWidth) {
  if (!text.includes(" ")) {
    return text;
  }
  if (maxWidth < 15) {
    return "INVALID INPUT";
  }

  let formattedText = "";

  while (text.length > maxWidth) {
    let splitPoint = text.lastIndexOf(" ", maxWidth);

    if (splitPoint === -1 || splitPoint === 0) {
      splitPoint = maxWidth;
    }

    formattedText += text.slice(0, splitPoint) + "\n";
    text = text.slice(splitPoint).trim();
  }

  formattedText += text;
  return formattedText;
}

module.exports = { textInDiv };

const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.";
const output = textInDiv(str, 50);
console.log(output); // this isn't working, check the output carefully against the expected behaviour in spec.md
