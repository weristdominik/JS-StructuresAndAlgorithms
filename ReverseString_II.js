/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split('')
    for(let i = 0; i < s.length; i += 2*k) {
        let start = i, end = Math.min(i + k -1, s.length -1)
        while (start < end) {
            [s[start], s[end] = s[end], s[start]]
            start++
            end--
        }
    }

    return s.join('')
};

const s = "abcdefg", k = 2
console.log(reverseStr(s, k))