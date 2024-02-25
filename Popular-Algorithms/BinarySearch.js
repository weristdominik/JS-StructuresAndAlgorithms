/* NUMBER Guessing Game */

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
                start = mid + 1 //move start to right
                break;
            case -1:
                end = mid - 1 //move end to left
                break;
        }
    }
};

const pick = 6
const n = 10;
console.log(guessNumber(n))