function convertFromPenceToPounds(pence) {
  let pounds = pence / 100;
  pounds = pounds.toFixed(2);
  return `£${pounds}`; // Format to two decimal places
}

module.exports = { convertFromPenceToPounds };

console.log(convertFromPenceToPounds(1299)); // should return "£12.99"
