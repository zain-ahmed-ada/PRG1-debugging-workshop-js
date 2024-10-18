# 📆 Find century

## Problem statement

We need to find the century for a given year with the appropriate ordinal suffix (e.g., "11th", "21st").

## 📋 Function Signature

We're going to implement a function called `findCentury` to solve this problem statement.

### Expected behaviour

1. The century is calculated by dividing the year minus 1 by 100 and rounding down, then adding 1.
2. The appropriate ordinal suffix is determined based on the last digit of the century.
3. The century number and its suffix are combined and returned.

```javascript
function findCentury(year)
```

### Parameters

- `year` (number): The year for which to find the century

### Return Value

- (string): The century with its ordinal suffix

## Helper Function: `getOrdinalSuffix`

This function determines the appropriate ordinal suffix for a number.

```javascript
function getOrdinalSuffix(n)
```

### Parameters

- `n` (number): The number for which to determine the ordinal suffix

### Return Value

- (string): The ordinal suffix ('st', 'nd', 'rd', or 'th')

## Examples

```javascript
findCentury(101); // Should return "2nd"
findCentury(300); // Should return "3rd"
findCentury(1066); // Should return "11th"
findCentury(1776); // Should return "18th"
findCentury(2023); // Should return "21st"
```

## Edge Cases

- Years from 1 to 100 are considered part of the 1st century.
- The function assumes positive integer inputs for years.

## Notes

- The function correctly handles the special cases for 11th, 12th, and 13th centuries, which all use the 'th' suffix regardless of their last digit.

## Hint for Testing

Start by calling `findCentury` with an input of 1066. You should expect to see "11th" as the result.

## Possible Extensions

- Add input validation to ensure the year is a positive integer.
- Extend the function to handle BC/BCE years.
- Create a version that works with different calendar systems.
