/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let count = 0;
    let sub = 1;
    while (n - sub >= 0) {
        n = n - sub;
        sub++;
        count++;
    }

    return count

};
const n = 5
console.log(arrangeCoins(n))