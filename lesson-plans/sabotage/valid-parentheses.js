// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//   Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }

  let stack = [];
  let parentheses = { '(': ')', '{': '}', '[': ']' };
  for (let i = 0; i < s.length; i++)
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      let lastBracket = stack.pop();
      if (parentheses[lastBracket] !== s[i]) {
        return false;
      }
    }
  return stack.length === 0
};


describe('determine if the input string is valid', () => {
  it('Example 1', () => {
    const duplicate = isValid('()');
    expect(duplicate).toEqual(true);
  });
  it('Example 2', () => {
    const duplicate = isValid('()[]{}');
    expect(duplicate).toEqual(true);
  });
  it('Example 3', () => {
    const duplicate = isValid('(]');
    expect(duplicate).toEqual(false);
  });
});
