/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    const res = []
    const s1 = new Set(nums1) //Convert nums1 Array into Set to drop out duplicates!
    const s2 = new Set(nums2)

    for (num of [...s1]) { //[...s1] => Converts Set back into Array
        if (s2.has(num)) res.push(num);
    }
    return res;
};

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersection(nums1, nums2));