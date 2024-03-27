// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"


/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLowerCase()
};


describe('return the string after replacing every uppercase letter with the same lowercase letter', () => {
  it('Example 1', () => {
    const returned = toLowerCase("Hello");
    expect(returned).toEqual("hello");
  });
  it('Example 2', () => {
    const returned = toLowerCase("here");
    expect(returned).toEqual("here");
  });
  it('Example 3', () => {
    const returned = toLowerCase("LOVELY");
    expect(returned).toEqual('lovely');
  });
});
