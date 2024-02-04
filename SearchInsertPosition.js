/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    //Look for matching Element:
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }

    //If not found matching Element - insert and return possition:
    nums.push(target);
    nums.sort((a, b) => a - b);
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
};

const nums = [1, 3, 5, 6];
const target = 7;
console.log(searchInsert(nums, target));