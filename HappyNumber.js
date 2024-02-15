/**
 * @param {number} n
 * @return {boolean}
 * 
 * 
 * Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

 */
var isHappy = function (n) {

    const checked = [];
    while (n != 1) {
        let sum = 0;
        const nums = n.toString().split('');
        if (checked.includes(n)) return false;
        checked.push(n);
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i] ** 2;
        }
        n = sum;

    }
    return true;
};

const n = 2;
console.log(isHappy(n));