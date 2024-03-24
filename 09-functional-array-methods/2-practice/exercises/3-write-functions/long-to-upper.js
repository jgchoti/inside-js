// #todo

/** checks if all the strings in an array are long and return all long strings in an array upper case 
 * @param {string[]} strings - The array of strings to check.
 * @param {number} long - The length threshold for strings to be considered long.
 *  @returns {string[]} An array containing all long strings in uppercase.
 */
export const longToUpper = (strings = [], long = 0) => {
  let longStrings = strings.filter(str => str.length >= long)
  let toUpperCase = longStrings.map(str => str.toUpperCase())
  return toUpperCase
};
