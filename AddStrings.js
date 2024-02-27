/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    return (BigInt(num1) + BigInt(num2)).toString()
};

const num1 = "9333852702227987", num2 = "85731737104263"
console.log(addStrings(num1, num2))




