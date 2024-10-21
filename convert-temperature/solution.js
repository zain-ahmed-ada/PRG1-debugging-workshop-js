function convertTemperature(temperature, toUnit, fromUnit) {
  // Check if the units are the same
  if (fromUnit === toUnit) {
    return Number(temperature.toFixed(2));
  }

  let result;

  // Convert based on the fromUnit
  if (fromUnit === "C" && toUnit === "F") {
    result = (temperature - 32) * (5 / 9);
  } else if (fromUnit === "F" && toUnit === "C") {
    result = temperature * 1.8 + 32;
  } else {
    throw new Error("Unsupported unit conversion");
  }

  // Round to two decimal places
  return Number(result.toFixed(2));
}

module.exports = { convertTemperature };

// Test cases
console.log(convertTemperature(0, "C", "F")); // Should output: 32
console.log(convertTemperature(100, "C", "F")); // Should output: 212
console.log(convertTemperature(32, "F", "C")); // Should output: 0
console.log(convertTemperature(98.6, "F", "C")); // Should output: 37
