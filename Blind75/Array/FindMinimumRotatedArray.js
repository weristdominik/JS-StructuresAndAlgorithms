
/**
 * @param {number[]} nums
 * @return {number}
 */

/*##########################################################################################
                                        O(n) Solution: 
##########################################################################################*/
var findMin1 = function (nums) {
    let j = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] < nums[i]) return nums[j]
        j++
    }

    return nums[0]
};

const nums1 = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin1(nums1))



/*##########################################################################################
                                    O( log n) Solution: 
##########################################################################################*/
var findMin2 = function (nums) {
    let low = 0
    let high = nums.length - 1

    //if we have asc ordered List return
    if (nums[low] <= nums[high]) return nums[low]

    //Binary Search
    while (low < high) { //0 < last element of Array nums
        //calculate the mid
        let mid = Math.floor((low + high) / 2)

        //is bigger then last value in Array
        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return nums[low]

};
const nums = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin2(nums))