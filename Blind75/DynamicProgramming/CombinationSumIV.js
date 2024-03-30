/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*###############################################
The Challenge is to get duplicated combinations
even if nums has distinct values!

-> backTracking gives You Time Limit exeeded!
-> DP is the key to success!
###############################################*/

/*Finished Solution */
var combinationSumIV = function (nums, target) {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
};

/*This solution is a little bit to RAM ineffective because of duplicates in result array */
var combinationSum4 = function (nums, target) {
    let index = 0
    let tmp = []
    let result = []

    var backTrack = (index, target, tmp) => {
        if (target === 0) {
            result.push([...tmp])
            return
        }

        if (target < 0) return

        for (let i = 0; i < nums.length; i++) {
            tmp.push(nums[i])
            backTrack(index, target - nums[i], tmp)
            tmp.pop()
        }
    };

    backTrack(index, target, tmp)
    return result.length
};

const nums = [4, 2, 1], target = 32
console.log(combinationSumIV(nums, target))