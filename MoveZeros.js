/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;
    const len = nums.length;

    while (i < len) {
        if (nums[i] !== 0) {
            let tmpj = nums[j];
            let tmpi = nums[i];
            nums[i] = tmpj;
            nums[j] = tmpi;
            j++;
        }
        i++;
    }

    return nums;
};

const nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums))