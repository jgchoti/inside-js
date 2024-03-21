/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str) => {
  let strArray = str.split('');
  let reversed = strArray.reverse().join('');
  return reversed;
};
