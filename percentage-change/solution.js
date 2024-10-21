function calculatePercentageChange(original, newAmount) {
  if (original - newAmount !== 0) {
    const difference = newAmount - original;
    let percentageDifference = (difference / original) * 100;
    return parseInt(percentageDifference.toFixed(0));
  } else {
    return 0;
  }
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(50, 40)); // should return -20 as there's been a 20% decrease from 50 to 40
