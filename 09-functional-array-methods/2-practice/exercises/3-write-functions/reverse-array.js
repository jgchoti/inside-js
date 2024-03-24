// #todo
/**
 * Reverses the elements in an array without modifying the original array.
 *
 * @param {Array} [arr=[]] - The array to reverse.
 * @returns {Array} A new array with the elements reversed.
 */
export const reverseArray = (arr = []) => {
  let reverseArray = arr.slice().reverse();
  return reverseArray
};
