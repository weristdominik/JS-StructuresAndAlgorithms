/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    

    const digit = digits.join('');
    let bigInt = BigInt(digit);
    bigInt++;

    return bigInt.toString().split('');
};

//const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const digits = [1, 9, 9];
console.log(plusOne(digits));
