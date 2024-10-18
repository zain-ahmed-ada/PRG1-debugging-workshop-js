# 🕥 12 hour clock

## Problem statement

Many countries use a 24-hour clock (also known as "military time") where the hours of the day are numbered from 0 to 23. However, in some countries, particularly English-speaking ones, the 12-hour clock system is more commonly used in everyday life. In this system, the day is divided into two periods: a.m. (ante meridiem, meaning "before midday") and p.m. (post meridiem, meaning "after midday"). We need a way to convert time from the 24-hour format to the 12-hour format.

## 📋 Function Specification

We're going to implement a function called `convertTo12HourClock` to solve this problem statement.

### Expected Behaviour

The function should convert the input 24-hour time to 12-hour time with AM/PM indicator, adhering to the following rules:

1. Midnight (00:00 in 24-hour time) should be converted to 12:00 AM
2. Noon (12:00 in 24-hour time) should be converted to 12:00 PM
3. Hours from 1:00 to 11:59 should be labelled AM
4. Hours from 13:00 to 23:59 should be converted to 1:00 PM to 11:59 PM respectively
5. The function should maintain the same minute value in the conversion
6. The output should always include the AM/PM indicator

### Function Signature

```javascript
function convertTo12HourClock(time)
```

### Parameters

- `time` (string): A string representing time in 24-hour format (HH:MM)

### Return Value

- (string): A string representing the same time in 12-hour format with AM/PM indicator

## Examples

```javascript
convertTo12HourClock("00:00"); // should return "12:00 AM"
convertTo12HourClock("12:00"); // should return "12:00 PM"
convertTo12HourClock("09:45"); // should return "9:45 AM"
convertTo12HourClock("14:25"); // should return "2:25 PM"
convertTo12HourClock("23:59"); // should return "11:59 PM"
convertTo12HourClock("01:30"); // should return "1:30 AM"
```
