/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let set1 = new Set(nums)
    nums = [...set1].sort((a, b) => a - b).reverse()

    if (nums.length < 3) {
        return nums[0]
    } else {
        return nums[2]
    }
};

const nums = [3, 2, 1]
console.log(thirdMax(nums))