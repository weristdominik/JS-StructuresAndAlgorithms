/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let best_sum = -Infinity
    let current_sum = 0
    for (let num of nums) {
        current_sum = Math.max(num, current_sum + num)
        best_sum = Math.max(best_sum, current_sum)
    }

    return best_sum
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))