/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 1) return 0

    let map1 = new Map()

    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], (map1.get(s[i]) || 0) + 1)
    }

    for (let j = 0; j < s.length; j++) {
        if (map1.get(s[j]) === 1) {
            return j;
        }
    }

    return -1


};

const s = "leetcode"
console.log(firstUniqChar(s))