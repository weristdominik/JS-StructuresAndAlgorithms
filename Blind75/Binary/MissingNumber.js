/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let missing = nums.length; // Initialize missing as the last index
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i]; // XOR the index and the number
    }
    return missing;
};

const nums = [3, 0, 1]
console.log(missingNumber(nums))