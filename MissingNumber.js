/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    //calc n
    let n = nums.length
    //console.log("length " + n)

    nums = nums.sort((b, a) => b - a)
    //console.log(nums)

    for (let i = 0; i < nums.length + 1; i++) {
        //console.log(nums[i] + " !== " + i)
        if (nums[i] !== i) return i;
    }

}

const nums = [3, 0, 1]
console.log(missingNumber(nums))