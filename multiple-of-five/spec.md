# 🧮 Is multiple of 5?

## Problem statement

In many programming scenarios, we need to determine if a number is divisible by another number without a remainder. A common case is checking if a number is a multiple of 5, which has various applications in mathematics and real-world problems. For example, this could be useful in problems involving currency (where the smallest unit is 5 cents), or in creating patterns or groupings based on multiples of 5. We need a function that can quickly and accurately determine whether a given integer is a multiple of 5.

## 📋 Function Specification

We're going to implement a function called `isMultipleOfFive` to solve this problem statement.

### Expected Behaviour

The function should:

1. Check if the input number is divisible by 5 without a remainder
2. Return `true` if it is divisible by 5, `false` otherwise

### Rules

- The function should work for any integer input (positive, negative, or zero)
- It should correctly identify multiples of 5 for both positive and negative numbers
- Zero should be considered a multiple of 5

### Function Signature

```javascript
function isMultipleOfFive(n)
```

### Parameters

- `number` (number): An integer (positive, negative, or zero)

### Return Value

- (boolean):
  - `true` if the input number is a multiple of 5
  - `false` if the input number is not a multiple of 5

## Examples

```javascript
isMultipleOfFive(0); // should return true
isMultipleOfFive(5); // should return true
isMultipleOfFive(10); // should return true
isMultipleOfFive(15); // should return true
isMultipleOfFive(100); // should return true
isMultipleOfFive(-25); // should return true
isMultipleOfFive(101); // should return false
isMultipleOfFive(-7); // should return false
isMultipleOfFive(3); // should return false
```
