/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const number = n.toString(2).split('');
    let count = 0;
    for (i = 0; i < number.length; i++) {
        if (number[i] == 1) {
            count++;
        }
    }

    return count;
};

const n = 00000000000000000000000000001011;
console.log(hammingWeight(n));
//Output: 3


/* GOOGLE Like Aproach:

 var hammingWeight = function(n) {
    let count = 0;

    for (i = 0; i < 32; i++) { //32 => Because a INT is 32 Bit!
        if(n & 1) count++; //AND Oparator (bitwise) IF 1 == 1 then true!

        n >>= 1; //Shift n by one to right side
    }

    return count;
};

*/