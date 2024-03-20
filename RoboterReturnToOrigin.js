/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0
    let y = 0

    for (let move of moves) {
        switch (move) {
            case 'U':
                y += 1
                break;
            case 'D':
                y -= 1
                break;
            case 'L':
                x -= 1
                break;
            case 'R':
                x += 1
                break;
        }
    }
    if (x != 0 || y != 0) return false
    return true

};

const moves = "LL"
console.log(judgeCircle(moves))