/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guess = function (num) {
    if (num === pick) return 0;
    if (num > pick) {
        return -1;
    } else {
        return 1
    }
}


var guessNumber = function (n) {
    if (n === 1) return 1

    let start = 1;
    let end = n;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        switch (guess(mid)) {
            case 0:
                return mid
            case 1:
                start = mid + 1
                break;
            case -1:
                end = mid - 1
                break;
        }
    }
};

const pick = 6
const n = 10;
console.log(guessNumber(n))