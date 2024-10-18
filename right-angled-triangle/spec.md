# 📐 Draw right angled triangle

## Problem statement

In programming, we often need to create visual patterns using text characters. One common shape is a right-angled triangle. This triangle is characterized by having one 90-degree angle, with the right angle positioned at the bottom-left corner when drawn with text characters. The challenge is to create a function that can draw such a triangle of any size, using a simple character like 'x' to form the shape.

## 📋Function Specification

We're implementing a function called `drawRightAngledTriangle` to solve the problem statement.

### Expected Behaviour

The function should:

1. Accept a positive integer `n` as input
2. Print a right-angled triangle made of '\*' characters to the console
3. The triangle should have `n` rows
4. Each row should be printed on a new line

### Rules

- The first row should have one '\*' character
- Each subsequent row should have one more '\*' than the previous row
- The last row should have 'n' number of '\*' characters
- The right angle of the triangle should be at the bottom-left corner
- The function should work for any positive integer input

### Function Signature

```javascript
function drawRightAngledTriangle(n)
```

### Parameters

- `n` (number): An integer representing the height of the triangle (which will also be the length of the base)

### Return Value

- This function does not return a value. It prints output to the console.

## Examples

```javascript
drawRightAngledTriangle(3) // should print:
*
**
***

drawRightAngledTriangle(5) // should print:
*
**
***
****
*****

drawRightAngledTriangle(1) // should print:
*
```
