/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // return x === parseInt(x.toString().split('').reverse().join(''));
  let stringX = x.toString();
  let left = 0;
  let right = stringX.length - 1;

  while (left < right) {
    if (stringX[left] !== stringX[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
