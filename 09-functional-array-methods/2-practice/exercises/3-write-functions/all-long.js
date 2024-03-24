// #todo

/** checks if all the strings in an array are long
 * 
 * @param {string[]} strings - The array of strings to check.
 * @param {number} long - The length threshold for strings to be considered long.
 */
export const allLong = (strings = [], long = 0) => {
  // strings === [] will always evaluate to false,
  if (strings.length === 0) {
    return true
  }
  return strings.every(str => str.length >= long)
};
