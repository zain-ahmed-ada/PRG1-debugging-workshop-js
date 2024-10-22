function isMultipleOfFive(n) {
  console.log("The value of n -->", n);
  return n % 5 === 0 ? true : false;
}

module.exports = { isMultipleOfFive };

console.log(isMultipleOfFive(10));
