/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = [[1]];

    if(rowIndex === 0) return triangle;

    for (i = 1; i < rowIndex + 1; i++) {
        let prevRow = triangle[i - 1];
        let row = [];

        row.push(1);
        for (j = 1; j < prevRow.length; j++) {
            row[j] = prevRow[j] + prevRow[j - 1];
        }
        row.push(1);
        triangle.push(row);
    }

    return triangle[rowIndex];
};

const rowIndex = 1;
console.log(getRow(rowIndex));