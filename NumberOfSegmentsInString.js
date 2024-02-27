/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    //return s.match(/([^\s]+)/g); Pro Solution!

    if (s == "") return 0

    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] != " " && s[i] == " ") {
            count++
        }
    }

    if (s[s.length - 1] != " ") count++

    return count
};

const s = "Hello , "
console.log(countSegments(s))