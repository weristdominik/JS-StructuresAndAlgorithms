/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function (nums) {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]

    let dp = Array(nums.length + 1).fill(0)
    dp[0] = 0
    dp[1] = nums[0]


    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
        //console.log(dp)
    }

    return dp[nums.length]
};

const nums = [2, 7, 9, 3, 1]
console.log(rob(nums))