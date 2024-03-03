/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    num = num.toString(2).split('')

    for (let i = 0; i < num.length; i++) {
        if (num[i] == 1) {
            num[i] = 0
        } else {
            num[i] = 1
        }
    }

    return parseInt(num.join(''), 2)

    return num
};

const num = 5
console.log(findComplement(num))