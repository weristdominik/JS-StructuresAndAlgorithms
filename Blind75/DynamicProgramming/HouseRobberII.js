/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    const n = nums.length;

    if (nums.length <= 3) return Math.max(...nums)

    const maxAmount = (start, end) => {
        let prevMax = 0;
        let currMax = 0;
        for (let i = start; i <= end; i++) {
            const temp = currMax;
            currMax = Math.max(currMax, prevMax + nums[i]);
            prevMax = temp;
        }
        return currMax;
    };

    // You have two options:
    // 1. Rob houses from 0 to n-2
    // 2. Rob houses from 1 to n-1
    // Choose the maximum of these two options
    return Math.max(maxAmount(0, n - 2), maxAmount(1, n - 1));
};

const nums = [1, 2, 3, 1]
console.log(rob(nums))