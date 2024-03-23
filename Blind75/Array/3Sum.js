/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*##########################################################################################
                                    HashMap Solution
##########################################################################################*/
var threeSum = function (nums) {
    let map = new Map()
    let res = []

    nums = nums.sort((a, b) => a - b)

    if (nums.length < 3) return res

    if (nums[0] > 0) {
        return res;
    }

    //build map
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    //start compare
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;

        for (let j = i + 1; j < nums.length - 1; ++j) {
            let requre = -1 * (nums[i] + nums[j])
            if (map.has(requre) && map.get(requre) > j) {
                res.push([nums[i], nums[j], requre])
            }
            j = map.get(nums[j]);
        }
        i = map.get(nums[i])
    }

    return res
};

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))