/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;

    let map1 = new Map()

    for (let i = 0; i < magazine.length; i++) {
        map1.set(magazine[i], (map1.get(magazine[i]) || 0) + 1);
    }

    //iterate through ransomNote
    for (let j = 0; j < ransomNote.length; j++) {
        if (map1.has(ransomNote[j])) {
            map1.set(ransomNote[j], map1.get(ransomNote[j]) - 1);
            if (map1.get(ransomNote[j]) === 0) {
                map1.delete(ransomNote[j])
            }
        } else {
            return false
        }
    }

    return true;
};

const ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine))