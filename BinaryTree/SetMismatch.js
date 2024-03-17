/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = (nums) => {
    let res = []
    let set1 = new Set()

    //duplicate
    for (let num of nums) {
        if (set1.has(num)) {
            res.push(num)
            break
        }
        set1.add(num)
    }

    //Missing Number
    let set2 = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!set2.has(i)) res.push(i)
    }

    return res
}
const nums = [1, 1]
console.log(oneTime(nums))