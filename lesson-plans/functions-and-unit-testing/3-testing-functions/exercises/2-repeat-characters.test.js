'use strict';

/**
 * Repeats each character in a string a specific number of times.
 *
 * @param {string} text - The string with characters to repeat.
 * @param {number} repeats - How many times to repeat each character.
 * @returns {string} The string with repeated characters.
 */
const repeatCharacters = (text, repeats) => {
  // let result = '';
  // for (const chars of text) {
  //   result += chars.repeat(repeats);
  // }
  // return result;
  let result = '';

  for (let j = 0; j < text.length; j++) {
    for (let i = repeats - 1; i >= 0; i--) {
      result += text[j];
    }
  }
  return result;
};

describe('repeatCharacters: repeats each character in a string', () => {
  it('repeats characters 0 times', () => {
    const returned = repeatCharacters('hoy!', 0);
    expect(returned).toEqual('');
  });
  it('repeats characters 1 time', () => {
    const returned = repeatCharacters('aaaa', 1);
    expect(returned).toEqual('aaaa');
  });
  it('repeats characters 2 times', () => {
    const returned = repeatCharacters('Hi', 2);
    expect(returned).toEqual('HHii');
  });
  it('repeats characters 3 times', () => {
    const returned = repeatCharacters('abc', 3);
    expect(returned).toEqual('aaabbbccc');
  });
  it('repeats characters in an empty string 12 times', () => {
    const returned = repeatCharacters('', 12);
    expect(returned).toEqual('');
  });
});
