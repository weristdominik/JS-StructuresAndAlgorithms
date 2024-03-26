/**
 * @param {string} s
 * @return {boolean}
 */

/*####################################################
This is used to Find a complete string in another String
not for finding only chars in another String
See => CommonCharsInString.js
####################################################*/

var repeatedSubstringPattern = function (s) {
    res = s + s
    res = res.slice(1, -1)

    return res.includes(s)
};

const s = "abab"
console.log(repeatedSubstringPattern(s))