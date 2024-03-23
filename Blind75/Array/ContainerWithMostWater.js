/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let i = 0
    let j = height.length - 1

    //Two Pointers
    while (i < j) {
        //get difference
        let x = j - i
        let y = Math.min(height[i], height[j])

        //Calc and compare to max
        max = Math.max((x * y), max)

        //decide which Pointer to move
        if (height[i] < height[j]) { //if right height is bigger
            i++
        } else {
            j--
        }
    }

    return max
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))