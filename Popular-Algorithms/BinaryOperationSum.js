/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b != 0) {
        let carry = a & b //AND Operation
        a = a ^ b //XOR Operation without carry!
        b = carry << 1
    }

    return a
};

const a = 1, b = 2
console.log(getSum(a, b))

/*############################################
                Code explained:
############################################

In binary representation, 3 is 011 and 5 is 101.
The first iteration of the loop:
carry = 3 & 5 = 001 (binary AND)
a is updated to 3 ^ 5 = 110 (binary XOR)
b is updated to carry << 1 = 010 (carry left-shifted by one position)
The second iteration:
carry = 110 & 010 = 010
a is updated to 110 ^ 010 = 100
b is updated to carry << 1 = 100
The third iteration:
carry = 100 & 100 = 100
a is updated to 100 ^ 100 = 000
b is updated to carry << 1 = 0
The loop terminates since b becomes zero.
The function returns the value of a, which is 000 in binary, representing 0 in decimal.
Therefore, getSum(3, 5) returns 8.

*/
