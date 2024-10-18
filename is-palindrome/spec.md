# isPalindrome Function

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization. We need to determine whether a given string is a palindrome.

## 📋 Function specification

We're implementing a function called `isPalindrome` to solve this problem statement.

### Expected Behaviour

- The function should return `true` for palindromes and `false` for non-palindromes.
- The function should ignore spaces, punctuation, and capitalization.
- An empty string should be considered a palindrome.

### Function Signature

```javascript
function isPalindrome(str)
```

### Parameters

- `str` (string): The input string to check for palindrome property.

### Return Value

- (boolean): Returns `true` if the input string is a palindrome, `false` otherwise.

## Use cases

```javascript
isPalindrome("racecar"); // should return true
isPalindrome("hello"); // should return false
isPalindrome("A man a plan a canal Panama"); // should return true
isPalindrome("race a car"); // should return false
isPalindrome(""); // should return true
```
