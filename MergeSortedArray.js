/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let j = 0;
    for (i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }

    nums1 = nums1.sort((a, b) => a - b);
};
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
console.log(merge(nums1, m, nums2, n));