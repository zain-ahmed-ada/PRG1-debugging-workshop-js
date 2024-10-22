function sumDigits(num) {
  let sum = 0;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }
  return sum;
}

module.exports = { sumDigits };

console.log(sumDigits(2));
