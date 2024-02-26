/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num >= 0) {
        return num.toString(16)
    } else {
        num = num | 0;

        return (num >>> 0).toString(16).padStart(8, 'f');
    }
};

const num = -123455
console.log(toHex(num))

