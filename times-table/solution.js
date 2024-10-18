function printTimesTable(n) {
  let i = 0;
  while (i <= n) {
    console.log(`${i} x ${n} = ${i * 5}`);
    i++;
  }
}

module.exports = { printTimesTable };
