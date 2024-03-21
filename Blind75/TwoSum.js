/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] !== undefined) {
            return [hashMap[target - nums[i]], i]
        }
        hashMap[nums[i]] = i
    }
};

const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))