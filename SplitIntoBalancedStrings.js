/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0
    let res = 0

    for (let i = 0; i < s.length; i++) {
        s[i] === "L" ? count += 1 : count -= 1

        if (count === 0) {
            res++
        }
    }

    return res
};

const s = "RLRRLLRLRL"
console.log(balancedStringSplit(s))

//output => 4