/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sums = 0;
    let sumt = 0;

    for (let i = 0; i < s.length; i++) {
        sums = sums + s.charCodeAt(i);
    }

    for (let j = 0; j < t.length; j++) {
        sumt = sumt + t.charCodeAt(j);
    }

    return String.fromCharCode(sumt - sums)


};

const s = "abcd", t = "abcde"
console.log(findTheDifference(s, t))