/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = Math.max(...nums)
    let max = 1, min = 1

    //Loop trough nums Array
    for (let num of nums) {
        //Check if num == 0
        if (num === 0) { //can`t multiply with 0
            max = 1
            min = 1
            continue //New iterration
        }
        let tmpMax = max
        max = Math.max(num, (num * max), (num * min))
        min = Math.min(num, (num * tmpMax), (num * min))
        res = Math.max(res, max)
    }

    return res
};

const nums = [-4, -3, -2]
console.log(maxProduct(nums))