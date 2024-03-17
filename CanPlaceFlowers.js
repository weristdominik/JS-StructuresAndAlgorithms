/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i] === 0) {
            if (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) { //Prove if reached end of Array OR i+1 == 0
                count++
            } else {
                i++
            }
        }
    }

    return count >= n
};

const flowerbed = [0, 0, 0, 0, 1], n = 1
//output = 2
console.log(canPlaceFlowers(flowerbed, n))