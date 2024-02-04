/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var prefix = strs[0];

    for (i = 1; i < strs.length; i++) {
        const char = strs[i].split('');

        for (j = 0; j < prefix.length; j++) {
            if (char[j] != prefix[j]) {
                prefix = prefix.slice(0, j);
            }
        }
    }

    return prefix;


};
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));