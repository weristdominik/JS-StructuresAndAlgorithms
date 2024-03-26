/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let res = Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (res[j] + 1 > res[i]) {
                    res[i] = res[j] + 1
                }
            }
        }
    }

    return Math.max(...res)
};

const nums = [3, 4, -1, 0, 6, 2, 3]
console.log(lengthOfLIS(nums))