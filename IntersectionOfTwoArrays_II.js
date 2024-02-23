/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);

    let i = 0, j = 0
    let res = []

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            res.push(nums1[i]);
            j++;
            i++;
        }
    }

    return res

};

const nums1 = [3, 1, 2], nums2 = [1];
console.log(intersect(nums1, nums2));