# 🪙 Pence to pounds

## Problem statement

In the United Kingdom and some other countries, the currency is divided into pounds (£) and pence (p), where 100 pence make up one pound. When dealing with financial calculations or displaying prices, it's often necessary to convert an amount given entirely in pence to its equivalent in pounds and pence. This conversion needs to accurately represent the amount with pounds as the whole number part and pence as the decimal part, formatted correctly as currency.

## 📋 Function Specification

We're implementing a function called `convertFromPenceToPounds` to solve this problem statement.

### Expected Behaviour

The function should:

1. Convert the input amount from pence to pounds
2. Format the result as a string representing currency in pounds and pence
3. Return the formatted string

### Rules

- The return string must start with the pound symbol (£)
- It should show the number of whole pounds
- Use a decimal point to separate pounds and pence
- Always show two decimal places for the pence, even if they're zero
- Correctly handle amounts less than one pound
- The function should work for any non-negative integer input

### Function Signature

```javascript
function convertFromPenceToPounds(pence)
```

### Parameters

- `pence` (number): An integer representing the amount in pence

### Return Value

- (string): A string representing the amount in pounds and pence, formatted as currency

## Examples

```javascript
convertFromPenceToPounds(1299); // should return "£12.99"
convertFromPenceToPounds(700); // should return "£7.00"
convertFromPenceToPounds(50); // should return "£0.50"
convertFromPenceToPounds(2000); // should return "£20.00"
convertFromPenceToPounds(199); // should return "£1.99"
convertFromPenceToPounds(1); // should return "£0.01"
convertFromPenceToPounds(0); // should return "£0.00"
```
