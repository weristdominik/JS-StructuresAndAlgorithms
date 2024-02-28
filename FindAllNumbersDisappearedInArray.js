/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let res = []
    let map1 = new Map()
    let len = nums.length

    for (let i = 0; i < nums.length; i++) {
        map1.set(nums[i], i)
    }

    while (len > 0) {
        if (!map1.has(len)) res.push(len);
        len--
    }

    return res
};

const nums = [1, 1]
console.log(findDisappearedNumbers(nums))