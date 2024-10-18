function countChar(string, char) {
  let i = 0;
  let count = 0;
  do {
    if ((string[i] = char)) {
      count++;
      i++;
    }
  } while (i < char.length);
  return count;
}

module.exports = { countChar };
