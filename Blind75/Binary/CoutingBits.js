/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = []
    for (let i = 0; i <= n; i++) {
        let count = 0
        for (let char of i.toString(2)) {
            if (char == '1') count++
        }
        res.push(count)
    }
    return res
};