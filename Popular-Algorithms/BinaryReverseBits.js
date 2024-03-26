/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let ans = 0;
    for (let i = 1; i <= 32; i++) {
        ans = (ans << 1) | (n & 1);
        n >>>= 1;
    }
    return ans >>> 0; // To fix overflow.
};

const n = 00000010100101000001111010011100
console.log(reverseBits(n))