/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let res = []

    for (let row = 0; row < img.length; row++) {
        res.push([])
        for (let column = 0; column < img[row].length; column++) {

            let count = 0
            let val = 0

            // Loop through surrounding pixels
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let newRow = row + i
                    let newColumn = column + j

                    if (newRow >= 0 && newRow < img.length && newColumn >= 0 && newColumn < img[row].length) {
                        count++
                        val += img[newRow][newColumn]
                    }
                }
            }
            res[row].push(Math.floor(val / count))
        }
    }

    return res
};

const img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]]
console.log(imageSmoother(img))