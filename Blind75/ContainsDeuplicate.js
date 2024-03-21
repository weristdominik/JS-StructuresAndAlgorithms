/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return true
        }
        hashMap[nums[i]] = i
    }
    return false
};

const nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums))