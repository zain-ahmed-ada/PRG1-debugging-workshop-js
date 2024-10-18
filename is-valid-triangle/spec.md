# 📐 Is it a valid triangle?

## Problem statement

In geometry, a triangle is a shape with three sides. However, not every combination of three lengths can form a valid triangle. A fundamental rule in triangle construction is that the sum of the lengths of any two sides must be greater than the length of the remaining side. This rule ensures that the triangle can be closed. We need a function that can determine whether three given lengths can form a valid triangle. This function could be useful in various geometric applications, including computer graphics, game development, or mathematical problem-solving.

## 📋 Function Specification

We're going to implement a function called `isValidTriangle` to solve this problem statement.

### Function Signature

```javascript
function isValidTriangle(a, b, c)
```

### Parameters

- `a` (number): Length of the first side of the triangle
- `b` (number): Length of the second side of the triangle
- `c` (number): Length of the third side of the triangle

### Return Value

- (boolean):
  - `true` if the three lengths can form a valid triangle
  - `false` if the three lengths cannot form a valid triangle

### Expected Behaviour

The function should:

1. Check if all three input values are positive numbers greater than zero
2. Verify that the triangle inequality theorem is satisfied for all three combinations of sides:
   - a + b > c
   - b + c > a
   - c + a > b
3. Return `true` if both conditions above are met, `false` otherwise

## Examples

```javascript
isValidTriangle(3, 4, 5); // should return true
isValidTriangle(5, 12, 13); // should return true
isValidTriangle(1, 1, 1); // should return true
isValidTriangle(1, 2, 3); // should return false
isValidTriangle(2, 4, 2); // should return false
isValidTriangle(7, 3, 2); // should return false
isValidTriangle(0, 0, 0); // should return false
isValidTriangle(-1, 2, 3); // should return false
```

## Additional Considerations

- The function should work with both integer and floating-point numbers
- The function should return `false` for any invalid inputs (negative numbers or zero)
- This function helps reinforce understanding of geometric principles and conditional logic
- It's a good exercise for students learning about both mathematics and programming
