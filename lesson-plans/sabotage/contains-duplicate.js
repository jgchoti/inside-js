/**  Given an integer array nums,
 * return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let array = nums.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};

describe('Contains Duplicate: return true if any value appears at least twice in the array', () => {
  it('Example 1', () => {
    const duplicate = containsDuplicate([1, 2, 3, 1]);
    expect(duplicate).toEqual(true);
  });
  it('Example 2', () => {
    const duplicate = containsDuplicate([1, 2, 3, 4]);
    expect(duplicate).toEqual(false);
  });
  it('Example 3', () => {
    const duplicate = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(duplicate).toEqual(true);
  });
});
