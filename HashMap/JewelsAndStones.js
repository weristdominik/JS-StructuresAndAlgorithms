/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let count = 0
    let map1 = new Map()
    //Create Stones HashMap:
    for (let i = 0; i < stones.length; i++) {
        map1.set(stones[i], (map1.get(stones[i]) || 0) + 1)
    }

    //Check Jewels against Stones:
    for (let j of jewels) {
        if (map1.has(j)) {
            count += map1.get(j)
        }
    }

    return count

};

const jewels = "aA", stones = "aAAbbbb"
console.log(numJewelsInStones(jewels, stones))