/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = [];
    let i = 0;
    while (i <= n) {
        let count = 0
        for (let char of i.toString(2)) {
            if (char == '1') count++;
        }
        ans.push(count)
        i++;
    }

    return ans;
};

const n = 5;
console.log(countBits(n));