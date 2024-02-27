/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let ans = 0
    let map1 = new Map()

    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], (map1.get(s[i]) || 0) + 1)
        if (map1.get(s[i]) % 2 == 0) ans += 2
    }

    return s.length > ans ? ans + 1 : ans
};

const s = "abccccdd"
console.log(longestPalindrome(s))