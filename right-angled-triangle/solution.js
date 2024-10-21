function drawRightAngledTriangle(n) {
  let i = 1;
  while (i <= n) {
    console.log("*".repeat(i));
    i++;
  }
}

drawRightAngledTriangle(5);

module.exports = { drawRightAngledTriangle };
