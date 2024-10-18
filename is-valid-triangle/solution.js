function isValidTriangle(a, b, c) {
  // Check if all sides are positive
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  // Check the triangle inequality
  if (a + b >= c && b + c >= a && c + a > b) {
    return true;
  }

  return false;
}

module.exports = { isValidTriangle };
