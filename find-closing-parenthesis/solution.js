function findClosingParenthesis(str, n) {
  let count = 0;
  let i = n;

  while (i < str.length) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }

    if (count === 0) {
      return i;
    }

    i++;
  }

  return -1;
}

module.exports = { findClosingParenthesis };

console.log(findClosingParenthesis("Hello, (world). (Something Else).", 2)); // should return 31
