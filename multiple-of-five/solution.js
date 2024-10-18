function getLastDigit(num) {
  return num.toString()[num];
}

function isMultipleOfFive(n) {
  console.log("The value of n -->", n);
  if (getLastDigit(n) === 5 || getLastDigit(n) === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isMultipleOfFive };
