/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const strs = haystack.split('');
    const str = needle.split('');
    var tmp = [];

    for (i = 0; i < strs.length; i++) {
        for (j = i; j < i + str.length; j++) {
            tmp.push(strs[j]);
        }
        if (tmp.join('') == needle) {
            return i
        }
        tmp = [];
    }

    return -1;

};

const haystack = "sadbutsad";
const needle = "sad";
console.log(strStr(haystack, needle));