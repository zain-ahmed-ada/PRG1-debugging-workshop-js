function findCentury(year) {
  const century = Math.floor((year - 1) / 100) + 1;
  return century + getOrdinalSuffix(century);
}

function getOrdinalSuffix(n) {
  const lastDigit = n % 10;

  if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
}

module.exports = { findCentury, getOrdinalSuffix };

// Hint: Start by calling findCentury with an input of 1066. What should you expect to see?
