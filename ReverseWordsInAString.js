/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')
    let res = []

    //For each word
    for (let word of arr) {
        res.push(word.split('').reverse().join(''))
    }

    return res.join(' ')
};

const s = "Let's take LeetCode contest"
console.log(reverseWords(s))