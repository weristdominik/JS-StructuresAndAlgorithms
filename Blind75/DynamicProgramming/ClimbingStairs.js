/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let nums = [];

    for (i = 0; i <= n; i++) {
        if (i == 0 || i == 1) {
            nums.push(1);
        } else {
            nums.push(nums[i - 2] + nums[i - 1]);
        }
    }
    return nums[nums.length - 1];
};