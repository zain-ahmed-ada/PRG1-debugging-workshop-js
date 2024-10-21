function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);

  if (newAngle >= 360) {
    return newAngle - 360;
  } else if (newAngle < 0) {
    return newAngle + 360;
  } else {
    return newAngle;
  }
}

module.exports = { rotateAngleByDegrees };
