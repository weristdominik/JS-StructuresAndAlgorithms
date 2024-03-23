/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (n & 1) count++ //take least significant Bit (n.length -1) and perform AND Operation with 1

        n >>= 1 //shifts all bits of n one position to the right.
    }

    return count
};

const n = 2147483645
console.log(hammingWeight(n))