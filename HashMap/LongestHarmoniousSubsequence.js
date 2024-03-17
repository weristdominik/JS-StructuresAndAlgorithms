/* @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map()
    let maxCount = 0


    //init map
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    //if all nums are same
    if (map.size <= 1) return 0

    for (const [k, v] of map) {
        console.log(k + " " + v)
        if (map.has(k + 1)) {
            maxCount = Math.max(maxCount, v + map.get(k + 1))
        }
    }

    return maxCount

};

const nums = [1, 3, 2, 2, 5, 2, 3, 7]
console.log(findLHS(nums))