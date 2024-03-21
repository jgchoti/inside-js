/**
 *
 */
export const reverse = (text = '') => {
  let reverseText = '';
  for (let i = 0; i < text.length; i++) {
    reverseText = text[i] + reverseText;
  }
  return reverseText;
};
