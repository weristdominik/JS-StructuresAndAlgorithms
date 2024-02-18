/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();

    for (i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        } else {
            if (Math.abs(map.get(nums[i]) - i) <= k) return true;
            map.set(nums[i], i)
        }
    }

    return map;
};

const nums = [1, 2, 3, 1], k = 3;
console.log(containsNearbyDuplicate(nums, k));
