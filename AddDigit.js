/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let count = 0;
    num = num.toString().split('');

    do {
        count = 0;
        for (let i = 0; i < num.length; i++) {
            count = count + parseInt(num[i]);
        }
        num = count.toString().split('');
    } while (num.length != 1)

    return count
};

const num = 19;
console.log(addDigits(num));