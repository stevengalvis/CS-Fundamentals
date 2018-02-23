// Linear BinarySearchTree
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

// Binary Search
// only works on Sorted Arrays
// divides the range in half each time
// known as divide and conquer approach
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end == undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// Depth- first Search
// Traverse as far as you can down the tree before back-tracking
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  dfs(values=[]) {
          if (this.left) {
              values = this.left.dfs(values);
          }
          values.push(this.value);

          if (this.right) {
              values = this.right.dfs(values);
          }
          return values;
      }
