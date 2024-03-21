/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] < 0) {
      return arr[i];
    }
  }
  return undefined; 
};
