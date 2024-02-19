/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    const map1 = new Map();
    for (let i = 0; i < t.length; i++) {
        map1.set(t[i], (map1.get(t[i]) || 0) + 1);
    }

    console.log(map1)

    for (let j = 0; j < s.length; j++) {
        if (map1.has(s[j])) {
            map1.set(s[j], map1.get(s[j]) - 1);
            if (map1.get(s[j]) === 0) {
                map1.delete(s[j]);
            }
        } else {
            return false;
        }
    }

    return map1.size === 0;

};

const s = "aacc", t = "ccac";
//const s = "anagram", t = "nagaram";

console.log(isAnagram(s, t));