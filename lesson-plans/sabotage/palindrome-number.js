// Given an integer x, return true if x is a
// palindrome
//   , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//   Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//   Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   x = String(x);
//   if (x.length < 2) {
//     return false;
//   }
//   let reversedX = '';
//   for (let i = x.length - 1; i >= 0; i--) {
//     reversedX += x[i];
//   }
//   return x === reversedX;
// };

var isPalindrome = function (x) {
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  let reversedX = 0;
  let originalX = x;

  while (x > 0) {
    const digit = x % 10;
    reversedX = reversedX * 10 + digit;
    x = x - digit
    x = Math.floor(x / 10);
  }

  return originalX === reversedX;
};

describe('return indices of the two numbers such that they add up to target', () => {
  it('Example 1', () => {
    const output = isPalindrome(121);
    expect(output).toEqual(true);
  });
  it('Example 2', () => {
    const output = isPalindrome(-121);
    expect(output).toEqual(false);
  });
  it('Example 3', () => {
    const output = isPalindrome(10);
    expect(output).toEqual(false);
  });
  it('Example 4', () => {
    const output = isPalindrome(0);
    expect(output).toEqual(false);
  });
});
