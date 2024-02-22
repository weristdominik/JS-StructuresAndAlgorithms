class NumArray {
    constructor(array) {
        this.nums = array
    }

    sumRange(left, right) {
        let sum = 0
        for (let num of nums.slice(left, right + 1)) {
            sum = (sum) + (num);
        }

        return sum;
    }
}

const nums = [-2, 0, 3, -5, 2, -1];
const left = 0, right = 2;
var obj = new NumArray(nums)
var param_1 = obj.sumRange(left, right)