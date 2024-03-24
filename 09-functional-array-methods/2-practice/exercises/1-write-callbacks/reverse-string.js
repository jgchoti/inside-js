// #todo

/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str) => {
  let reverse = '';
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse
  }
  return reverse
};


// export const reverseString = (str) => {
//   let reverse = '';
//   for (const char of str) {
//     reverse = char + reverse
//   }
//   return reverse
// };
