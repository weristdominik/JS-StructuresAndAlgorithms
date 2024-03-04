/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    //Check if a equals b
    if(a == b) return -1

    //Rest
    return Math.max(a.length, b.length)
};

const a = "aaa", b = "bbb"
console.log(findLUSlength(a, b))