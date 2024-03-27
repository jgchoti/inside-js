/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  if (isTriangle(nums) === true) {
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
      return 'equilateral';
    } else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  } else {
    return 'none';
  }
};

const isTriangle = (nums) => {
  let twoSide1 = nums[0] + nums[1];
  let twoSide2 = nums[0] + nums[2];
  let twoSide3 = nums[1] + nums[2];
  if (twoSide1 > nums[2] && twoSide2 > nums[1] && twoSide3 > nums[0]) {
    return true;
  } else {
    return false;
  }
};

describe('Rconvert Celsius into Kelvin and Fahrenheit and return it as an array', () => {
  it('Example 1', () => {
    const output = triangleType([3, 3, 3]);
    expect(output).toEqual('equilateral');
  });
  it('Example 2', () => {
    const output = triangleType([3, 4, 5]);
    expect(output).toEqual('scalene');
  });
  it('Example 3', () => {
    const output = triangleType([5, 5, 8]);
    expect(output).toEqual('isosceles');
  });
  it('Example 4', () => {
    const output = triangleType([0, 2, 8]);
    expect(output).toEqual('none');
  });
});
