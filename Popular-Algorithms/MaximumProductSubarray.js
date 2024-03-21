/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = Math.max(...nums) //Get Max Value of nums Array
    let max = 1, min = 1 //Initialize max & min

    //Loop through nums Array
    for (let num of nums) {
        //check if num equals 0
        if (num === 0) {
            //can`t multiply with 0
            max = 1
            min = 1
            //start new iterration: (break would destroy for loop)
            continue
        }

        let tmpmMax = max //safe org. value from max before changing it
        max = Math.max(num, (num * max), (num * min))
        min = Math.min(num, (num * tmpmMax), (num * min)) //use tmpMax to have original value from max
        res = Math.max(res, max)
    }

    return res
};

const nums = [-4, -3, -2]
console.log(maxProduct(nums))
//Output: 12