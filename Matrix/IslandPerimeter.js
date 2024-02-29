/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            //Best Case All Sites are valid:
            if (grid[row][col] == 1) {
                count += 4 //count up all 4x Sites

                if (row > 0 && grid[row - 1][col] == 1) { //When Land is above
                    count -= 2
                }

                if (col > 0 && grid[row][col - 1] == 1) { //When Land is next to Land
                    count -= 2
                }
            }
        }
    }

    return count

};

const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
console.log(islandPerimeter(grid))