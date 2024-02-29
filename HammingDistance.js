/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).padStart(32, '0');
    y = y.toString(2).padStart(32, '0');
    let count = 0

    for(let i = 0; i < x.length; i++) {
        if(x[i] != y[i]) count++
    }

    return count
};

const x = 3, y = 1
console.log(hammingDistance(x, y))
