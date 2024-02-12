/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 1) return nums[0];

    let result = 0;

    for (i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
        console.log(result);
    }

    return result;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));