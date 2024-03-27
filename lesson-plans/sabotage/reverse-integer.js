// Given a signed 32 - bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64 - bit integers(signed or unsigned).

//   Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverseX = 0
  let absoluteX = Math.abs(x)

  while (absoluteX > 0) {
    let digit = absoluteX % 10
    reverseX = reverseX * 10 + digit
    absoluteX = Math.floor(absoluteX / 10)
  }

  return (x < 0 ?  -reverseX : reverseX)
};


describe('return x with its digits reversed.', () => {
  it('Example 1', () => {
    const output = reverse(123);
    expect(output).toEqual(321);
  });
  it('Example 2', () => {
    const output = reverse(-123);
    expect(output).toEqual(-321);
  });
  it('Example 3', () => {
    const output = reverse(120);
    expect(output).toEqual(21);
  });
  it('Example 4', () => {
    const output = reverse(0);
    expect(output).toEqual(0);
  });
});
