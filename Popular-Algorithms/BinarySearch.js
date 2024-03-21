/*##########################################################################################
First Example:
##########################################################################################*/
/* Find Smallest Number in Array: */
var findMin1 = function (nums) {
    let low = 0
    let high = nums.length - 1

    while (low > high) {
        let mid = Math.floor((low + high) / 2)

        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return nums[low]
}

const nums1 = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin1(nums1))

/*##########################################################################################
Second Example:
##########################################################################################*/
/* NUMBER Guessing Game */

var guess = function (num) {
    if (num === pick) return 0;
    if (num > pick) {
        return -1;
    } else {
        return 1
    }
}


var guessNumber = function (n) {
    if (n === 1) return 1

    let start = 1;
    let end = n;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        switch (guess(mid)) {
            case 0:
                return mid
            case 1:
                start = mid + 1 //move start to right
                break;
            case -1:
                end = mid - 1 //move end to left
                break;
        }
    }
};

const pick = 6
const n = 10;
console.log(guessNumber(n))