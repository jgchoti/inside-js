
/**
 * Finds all strings in an array that include the search query.
 * 
 * @param {string[]} [strings=[]] - The array of strings to search through.
 * @param {string} [query=''] - The search query.
 * @returns {string[]} A new array containing strings that include the search query.
 */
export const search = (strings = [], query = '') => {
  return strings.filter(str => str.includes(query))
};
