/**
 * 
 * Number of Cominations:
 * First Two Combinations are always 1 => Then Each Combination is the sum of the two previouse combinations
 * https://www.youtube.com/watch?v=Y0lT9Fck7qI
 * 
 * 
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

const n = 4;
console.log(climbStairs(n));