/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let tmp = 0
    let square_root = num / 2

    while (square_root != tmp) {
        tmp = square_root
        square_root = (num / square_root + square_root) / 2
    }

    return Number.isInteger(square_root) ? true : false
};

const num = 16
console.log(isPerfectSquare(num));