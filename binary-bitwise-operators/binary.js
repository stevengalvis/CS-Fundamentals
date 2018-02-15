// function getBinary(num) {
//   console.log("Binary Value of " + num + " " + num.toString(2));
//   let invertedValue = ~num + 1;
//   console.log(invertedValue);
//   console.log("Inverted Value " + invertedValue.toString(2));
// }
//
// getBinary(514);

function twosCompliment(num) {
  console.log("Binary Value of " + num + " " + num.toString(2));
  let invertedValue = ~num;
  console.log(invertedValue);
  return invertedValue.toString(2);
}

console.log(twosCompliment(3));

// TODO: Try this again later
//       break it into smaller steps
//       e.g how invert all the current bits
//         of a number
