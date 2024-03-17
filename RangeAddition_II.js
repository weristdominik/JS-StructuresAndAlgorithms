/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {

    if (ops.length === 0) {
        return m * n;
    }

    let minRow = m;
    let minCol = n;

    for (let operation of ops) {
        minRow = Math.min(minRow, operation[0]);
        minCol = Math.min(minCol, operation[1]);
    }

    return minRow * minCol;
};

const m = 3, n = 3, ops = [[2, 2], [3, 3]]
//const m = 40000, n = 40000, ops = []
console.log(maxCount(m, n, ops))