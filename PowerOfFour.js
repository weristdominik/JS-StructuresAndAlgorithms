/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return 4 ** parseInt(Math.log(n) / Math.log(4)) === n;
};

const n = 17;
console.log(isPowerOfFour(n));