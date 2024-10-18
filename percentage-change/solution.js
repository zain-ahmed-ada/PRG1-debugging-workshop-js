function calculatePercentageDifference(original, newAmount) {
  const difference = Math.abs(newAmount - original);
  const average = (original - newAmount) / 2;
  const percentageDifference = (average / difference) * 100;
  return percentageDifference.toFixed(2);
}

module.exports = { calculatePercentageDifference };

calculatePercentageDifference(50, 40); // should return -20 as there's been a 20% decrease from 50 to 40
