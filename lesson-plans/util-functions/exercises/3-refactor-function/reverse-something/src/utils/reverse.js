/**
 *
 */
export const reverse = (text) => {
  let textArray = text.split('')
  let reversed = textArray.reverse().join('')
  return reversed;
};
