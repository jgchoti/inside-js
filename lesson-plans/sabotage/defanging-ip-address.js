/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let result = address.replaceAll('.', '[.]');
  return result;
};

describe('A defanged IP address replaces every period "." with "[.]".', () => {
  it('Example 1', () => {
    const output = defangIPaddr('1.1.1.1');
    expect(output).toEqual('1[.]1[.]1[.]1');
  });
  it('Example 2', () => {
    const output = defangIPaddr('255.100.50.0');
    expect(output).toEqual('255[.]100[.]50[.]0');
  });
});


// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".



//   Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
