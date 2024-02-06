/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    //Check if positive:
    if (x < 0) {
        return "negative not allowed";
    }

    //starting the calculation from half of the number
    let square_root = x / 2
    let temp = 0

    // Iterating while square_root is not equal to temp
    while (square_root != temp) {
        temp = square_root

        // smalling the square_root value to find square root
        square_root = (x / square_root + square_root) / 2
    }

    //return Math.floor(square_root);
    return square_root;

};

const x = 8;
console.log(mySqrt(x));