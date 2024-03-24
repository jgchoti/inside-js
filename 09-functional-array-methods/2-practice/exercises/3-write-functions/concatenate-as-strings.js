// #todo

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {string} The concatenated string
 */
export const concatenateAsStrings = (arr = []) => {
  let result = arr.map(str => String(str)).join('')
  return result
};
