/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {

    let outputMatrix = []
    let res = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            res.push(mat[i][j])
        }
    }

    //Check if new Matrix is possible
    if (res.length != (r * c)) return mat

    //Build new Matrix
    let cols = res.length / r
    for (let row = 0; row < r; row++) {
        let tmp = []
        for (let col = 0; col < cols; col++) {
            tmp.push(res[row * cols + col])
        }
        outputMatrix.push(tmp)
    }

    return outputMatrix
};

const mat = [[1, 2], [3, 4]], r = 1, c = 4
console.log(matrixReshape(mat, r, c))