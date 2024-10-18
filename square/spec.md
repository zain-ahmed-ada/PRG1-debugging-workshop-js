# 🟥 Square

## Problem statement

In mathematics, squaring a number means multiplying it by itself. This operation is fundamental in many areas of mathematics and has numerous practical applications in fields such as physics, engineering, and computer science. We need a simple function that can calculate the square of any given number. This function should work with both positive and negative numbers, as well as zero, and should be able to handle both integers and floating-point numbers.

## 📋Function Specification

We're implementing a function called `square` to solve this problem statement.

### Expected Behaviour

The function should:

1. Accept a single number as input (integer or floating-point)
2. Calculate the square of the input number (multiply the number by itself)
3. Return the result of this calculation

### Function Signature

```javascript
function square(num)
```

### Parameters

- `num` (number): The number to be squared (can be integer or floating-point)

### Return Value

- (number): The square of the input number

## Examples

```javascript
square(4); // should return 16
square(-3); // should return 9
square(0); // should return 0
square(2.5); // should return 6.25
square(-1.5); // should return 2.25
```
