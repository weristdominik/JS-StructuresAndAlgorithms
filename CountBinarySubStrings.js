/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0
    let prev = 0
    let current = 1

    for(let i = 1; i < s.length; i++) {
        if(s[i] == s[i-1]) {
            current++
        } else {
            count += Math.min(prev, current)
            prev = current
            current = 1
        }
    }

    count += Math.min(prev, current)

    return count
};

const s = "00110011"
console.log(countBinarySubstrings(s))