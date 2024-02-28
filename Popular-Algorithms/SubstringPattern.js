/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    res = s + s
    res = res.slice(1, -1)

    return res.includes(s)
};

const s = "abab"
console.log(repeatedSubstringPattern(s))