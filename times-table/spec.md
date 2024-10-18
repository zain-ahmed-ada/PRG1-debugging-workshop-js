# 🧮 Print multiplication table

## Problem statement

Multiplication tables are fundamental tools in mathematics education, helping students learn and memorize basic multiplication facts. These tables show the product of two numbers for a range of values, typically from 1 to 10 or 1 to 12. Creating such a table manually can be time-consuming and error-prone. We need a way to automatically generate a multiplication table for a given number, showing its products with a range of integers.

## 📋 Function Specification

We're implementing a function called `printTimesTable` to solve this problem statement.

### Expected Behaviour

The function should:

1. Generate a multiplication table for the given number
2. Print each line of the table to the console
3. The table should start at 1 and end at 12
4. Format each line as "a x b = c", where:
   - 'a' is the current number in the range (from 1 to the limit)
   - 'b' is the number for which the table is being generated
   - 'c' is their product

### Rules

- The function should work for any positive integer input
- Each line of the table should be printed on a new line
- The table should start from 1 and go up to 12

### Function Signature

```javascript
function printTimesTable(n)
```

### Parameters

- `number` (number): The number for which the multiplication table is to be generated

### Return Value

- This function does not return a value. It prints output to the console.

## Examples

```javascript
printTimesTable(5);
// should print:
```

```console
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
11 x 5 = 55
12 x 5 = 60
```

```js
printTimesTable(3);
// should print:
```

```console
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12
5 x 3 = 15
6 x 3 = 18
7 x 3 = 21
8 x 3 = 24
9 x 3 = 27
10 x 3 = 30
11 x 3 = 33
12 x 3 = 36
```
