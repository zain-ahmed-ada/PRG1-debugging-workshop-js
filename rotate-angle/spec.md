## 🔄 Rotate angle

## Problem statement

In many applications involving geometry, graphics, or physics, we often need to rotate angles. An angle is typically measured in degrees, with a full circle being 360 degrees. When we rotate an angle, we add or subtract degrees, but we need to ensure that the result always falls within the range of 0 to 359 degrees (inclusive). If the rotation results in an angle outside this range, we need to wrap it around, similar to how a clock face wraps around after 12 hours. We need a function that can perform this rotation calculation, handling both positive and negative rotations, and ensuring the result is always a valid angle between 0 and 359 degrees.

## 📋 Function Specification

We're going to implement a function called `rotateAngle` to solve this problem statement.

### Expected Behaviour

The function should:

1. Take the initial angle and apply the specified rotation
2. Normalize the result to fall between 0 and 359 degrees (inclusive)
3. Return the new angle as an integer

## Rules

- The initial angle should always be between 0 and 359 degrees (inclusive)
- The rotation can be any integer (positive, negative, or zero)
- Positive rotations move clockwise, negative rotations move counter-clockwise
- The result should always be normalized to fall between 0 and 359 degrees (inclusive)
- Full rotations (multiples of 360 degrees) should result in the same angle as the starting angle

### Function Signature

```javascript
function rotateAngleByDegrees(initialAngle, rotation)
```

### Parameters

- `initialAngle` (number): The initial angle in degrees (an integer between 0 and 359, inclusive)
- `rotation` (number): The rotation in degrees (an integer, positive or negative)

### Return Value

- (number): The new angle after rotation, as an integer between 0 and 359 (inclusive)

## Examples

```javascript
rotateAngleByDegrees(45, 45); // should return 90
rotateAngleByDegrees(350, 15); // should return 5
rotateAngleByDegrees(0, 360); // should return 0
rotateAngleByDegrees(180, -180); // should return 0
rotateAngleByDegrees(270, 180); // should return 90
rotateAngleByDegrees(90, -100); // should return 350
rotateAngleByDegrees(0, 720); // should return 0
rotateAngleByDegrees(45, -405); // should return 0
```
