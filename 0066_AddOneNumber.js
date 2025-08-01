function addOneNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr; // Return the full array after increment
    }
    arr[i] = 0; // Set to 0 and continue to carry
  }
  // If all digits were 9, we need to add a 1 at the beginning
  arr.unshift(1);
  return arr;
}

const arr = [1, 2, 3];
console.log(addOneNumber(arr));
// Output: [1, 2, 4]
console.log(addOneNumber([9]));
// [ 1, 0 ]
