/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashMap = {};

    for (i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] == undefined) {
            hashMap[nums[i]] = i;
        } else {
            return true;
        }
    }
    return false;
};

const nums = [1, 2, 4, 5];
console.log(containsDuplicate(nums));