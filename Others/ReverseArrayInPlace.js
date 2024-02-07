var reverseArrayInPlace = function (nums) {
    let j = nums.length - 1;
    let l;
    let r;

    for (i = 0; i < nums.length / 2; i++) {
        l = nums[i];
        r = nums[j];
        console.log("l = " + l + " | " + "r = " + r);
        nums[i] = r;
        nums[j] = l;
        j--;
    }

    return nums;
}
const nums = [1, 2, 3, 2, 5, 6];
console.log(reverseArrayInPlace(nums));