/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const prevNums = {};
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const diffNum = target - curNum;
    if (prevNums[diffNum] != undefined) {
      return [prevNums[diffNum], i];
    } else {
      prevNums[curNum] = i;
    }
  }
};
