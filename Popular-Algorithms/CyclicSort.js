const inPleaceReplace = (nums) => {
    let i = 0
    let n = nums.length
    while (i < n) {
      const j = nums[i] - 1
      if (nums[i] !== nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        i++
      }
    }
    return nums
}

const nums = [5,2,3,,4]
console.log(inPleaceReplace(nums))