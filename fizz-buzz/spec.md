# 🌟 Fizz buzz!

## Problem statement

FizzBuzz is a classic programming problem often used in coding interviews. The task is to print a sequence of numbers, but with a twist. For multiples of three, instead of the number, print "Fizz". For multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". This problem tests a programmer's ability to handle multiple conditions and loop structures, as well as their understanding of divisibility rules.

## 📋 Function Specification

We're implementing a function called `fizzBuzz` to solve this problem statement.

### Function Signature

```javascript
function fizzBuzz(n)
```

### Parameters

- `n` (number): A positive integer representing the number of elements in the sequence to process

### Return Value

- This function does not return a value. It prints output to the console.

### Expected Behaviour

The function should:

1. Process numbers from 1 to n (inclusive)
2. For each number:
   - If the number is a multiple of both 3 and 5, print "FizzBuzz"
   - If the number is a multiple of 3 (but not 5), print "Fizz"
   - If the number is a multiple of 5 (but not 3), print "Buzz"
   - If the number is not a multiple of 3 or 5, print the number itself
3. Each output should be on a new line

## Examples

```js
fizzBuzz(5); // should print:
```

```raw
1
2
Fizz
4
Buzz
```

```js
fizzBuzz(15); // should print:
```

```raw
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```
