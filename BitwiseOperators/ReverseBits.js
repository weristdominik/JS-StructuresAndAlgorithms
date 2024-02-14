/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    const number = n.toString(2).split('').reverse().join('').padEnd("32", 0);
    return Number.parseInt(number, 2);
};

const n = 00000010100101000001111010011100;
console.log(reverseBits(n));
//Output: 964176192 (00111001011110000010100101000000)