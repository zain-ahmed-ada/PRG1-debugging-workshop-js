# 🌡️ Temperature Converter

## Problem Statement

Temperature is commonly measured in two different scales: Celsius and Fahrenheit. Many countries use Celsius for everyday temperature measurements, while others, like the United States, primarily use Fahrenheit. This difference can lead to confusion when sharing temperature information across different regions or in international contexts. We need a way to easily convert temperatures between these two scales to facilitate clear communication and understanding.

## 📋 Function Specification

We're going to implement a function called `convertTemperature` to solve this problem statement.

### Expected Behaviour

The function should convert the input temperature from one unit to another, adhering to the following rules:

1. It should be able to convert from Celsius to Fahrenheit and vice versa.
2. The conversion should use the correct formula for each direction:
   - Celsius to Fahrenheit: (C \* 9/5) + 32
   - Fahrenheit to Celsius: (F - 32) \* 5/9
3. The result should be rounded to two decimal places.
4. If the input and output units are the same, it should return the input temperature (rounded to two decimal places).
5. The function should throw an error for unsupported unit conversions.

### Function Signature

```javascript
function convertTemperature(temperature, fromUnit, toUnit)
```

### Parameters

- `temperature` (number): The temperature value to be converted
- `fromUnit` (string): The unit of the input temperature ('C' for Celsius, 'F' for Fahrenheit)
- `toUnit` (string): The unit to convert the temperature to ('C' for Celsius, 'F' for Fahrenheit)

### Return Value

- (number): The converted temperature, rounded to two decimal places

## Examples

```javascript
convertTemperature(0, "C", "F"); // should return 32
convertTemperature(100, "C", "F"); // should return 212
convertTemperature(32, "F", "C"); // should return 0
convertTemperature(98.6, "F", "C"); // should return 37
convertTemperature(25, "C", "C"); // should return 25
convertTemperature(-40, "C", "F"); // should return -40
convertTemperature(-40, "F", "C"); // should return -40

// Error case
convertTemperature(20, "K", "C"); // should throw an error
```
