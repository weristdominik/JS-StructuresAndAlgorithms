/**
 * @param {number} numRows
 * @return {number[][]}
 * 
 * 
 * (x+y)^n
 */
var generate = function(numRows) {
    let triangle = [[1]];

    if(numRows == 1) return triangle;
    
    for (i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let row = [];
        
        row.push(1);
        for (j = 1; j < prevRow.length; j++) {
            row[j] = prevRow[j] + prevRow[j - 1];
        }
        row.push(1);

        triangle.push(row);
    }

    return triangle;
};

const numRows = 5;
console.log(generate(numRows));