# 📜 Text in div

## Problem statement

This problem involves formatting some text to fit in a given width.

## 📋 Function Specification

We're implementing a function called `textInDiv` to solve this problem statement.

### Expected Behaviour

The function should:

1. Accept a string of text and a maximum line width as input
2. Split the input text into lines, ensuring that:
   - No line exceeds the specified maximum width
   - Words are not split across lines (break at spaces)
   - Lines are as long as possible within the width constraint (greedy approach)
3. Join the resulting lines with newline characters (\n)
4. Return the formatted text as a single string

### Function Signature

```javascript
function textInDiv(text, maxWidth)
```

### Parameters

- `text` (string): The input text to be formatted
- `maxWidth` (number): The maximum width of each line in characters

### Return Value

- (string): The formatted text with line breaks inserted

## Examples

```javascript
textInDiv("Ada National College for Digital Skills", 15);
// -> "Ada National\n
//     College for\n
//     Digital Skills"
```

```javascript
textInDiv("Ada National College for Digital Skills", 20);
// -> "Ada National College\n
//     for Digital Skills"
```

```javascript
textInDiv("Ada National College for Digital Skills", 30);
// -> "Ada National College for\n
//     Digital Skills"
```

```javascript
const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.";
```

```js
textInDiv(str, 30);
/* -> "Lorem ipsum dolor sit amet,\n
           consectetur adipiscing elit.\n
           Aliquam nec consectetur risus.\n
           Cras vel urna a tellus dapibus\n
           consequat. Duis bibendum\n
           tincidunt viverra. Phasellus\n
           dictum efficitur sem quis\n
           porttitor. Mauris luctus\n
           auctor diam id ultrices.\n
           Praesent laoreet in enim ut\n
           placerat. Praesent a facilisis\n
           turpis."
    */
```

```js
textInDiv(str, 50);
/* -> "Lorem ipsum dolor sit amet, consectetur adipiscing\n
           elit. Aliquam nec consectetur risus. Cras vel urna\n
           a tellus dapibus consequat. Duis bibendum\n
           tincidunt viverra. Phasellus dictum efficitur sem\n
           quis porttitor. Mauris luctus auctor diam id\n
           ultrices. Praesent laoreet in enim ut placerat.\n
           Praesent a facilisis turpis."
    */
```
