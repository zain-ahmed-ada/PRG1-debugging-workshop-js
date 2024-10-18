# 💯 Calculate percentage change

## Problem statement

In many real-world scenarios, we need to understand how a value has changed relative to its original amount. This change is often expressed as a percentage. For example, if a stock price goes from $100 to $120, we might say it increased by 20%. We need a way to calculate this percentage change between two values, whether it's an increase or a decrease.

## 📋 Function Specification

We're implementing a function called `calculatePercentageChange` to solve the problem statement.

### Expected Behaviour

The function should:

1. Calculate the percentage change between the original value and the new value
2. Return the result as a number, positive for increases and negative for decreases
3. Round the result to the nearest whole number
4. Not include the percentage symbol in the return value

### Rules

- The function should handle both increases and decreases in value
- The result should be rounded to the nearest whole number
- Positive changes (increases) should return positive numbers
- Negative changes (decreases) should return negative numbers
- No change should return 0
- The function should not include the percentage symbol in its return value

### Function Signature

```javascript
function calculatePercentageChange(original, new)
```

### Parameters

- `originalValue` (number): The initial value
- `newValue` (number): The final value

### Return Value

- (number): The percentage change rounded to the nearest whole number

## Examples

```javascript
calculatePercentageChange(100, 120); // should return 20 (because it's a 20% increase)
calculatePercentageChange(50, 40); // should return -20 (because it's a 20% decrease)
calculatePercentageChange(200, 200); // should return 0 (because there's no change)
calculatePercentageChange(100, 150); // should return 50 (because it's a 50% increase)
calculatePercentageChange(80, 100); // should return 25 (because it's a 25% increase)
calculatePercentageChange(75, 50); // should return -33 (because it's a 33.33% decrease, rounded to 33)
```
