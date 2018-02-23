// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.

let numbers = [3, 4, 5, 6, 7, 8, 9, 10];

let removeLessThan = function(num, values) {
  let newNumbers = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 5) {
      newNumbers.push(values[i]);
    }
  }
  return newNumbers;
};

// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted.
let mergeArrays = function(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray.sort(function(a, b) {
    return a - b;
  });
};

// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.

let findProduct = function(nums) {
  let arrayofProducts = [];

  for (let i = 0; i < nums.length; i++) {
    let productValue;
    let valuesToMultiply = nums.splice(i, 1);
    console.log(valuesToMultiply);
    for (let j = 0; j < valuesToMultiply.length; j++) {
      productValue *= valuesToMultiply[j];
    }
    arrayofProducts.push(productValue);
  }
  return arrayofProducts;
};

console.log(findProduct([1, 3, 9, 4]));
