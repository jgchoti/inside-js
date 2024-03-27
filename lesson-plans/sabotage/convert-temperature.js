/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;
  let output = [];
  output[0] = Number(kelvin.toFixed(5));
  output[1] = Number(fahrenheit.toFixed(5));
  return output;
};

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// Example 2:

// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

describe('Return a string representing the type of triangle', () => {
  it('Example 1', () => {
    const output = convertTemperature(36.5);
    expect(output).toEqual([309.65, 97.7]);
  });
  it('Example 2', () => {
    const output = convertTemperature(122.11);
    expect(output).toEqual([395.26, 251.798]);
  });
});
