function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);

  return newAngle;
}

module.exports = { rotateAngleByDegrees };
