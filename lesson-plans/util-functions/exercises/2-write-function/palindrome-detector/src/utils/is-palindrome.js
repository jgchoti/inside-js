/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = '') => {
  const cleanedString = toCheck.toLowerCase();
  const array = cleanedString.split('')
  let reversed = array.reverse()
  let reversedString = reversed.join('')
  return cleanedString === reversedString;
};
