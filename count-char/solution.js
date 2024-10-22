function countChar(string, char) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    string[i] === char ? count++ : null;
  }
  return count;
}

module.exports = { countChar };

console.log(countChar("zAin", "a"));
