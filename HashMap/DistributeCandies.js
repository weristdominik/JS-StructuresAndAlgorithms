/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let allowed = candyType.length / 2
    let map1 = new Map()

    for (let i = 0; i < candyType.length; i++) {
        map1.set(candyType[i], (map1.get(candyType[i]) || 0) + 1)
    }

    if (map1.size === allowed) return map1.size
    if (map1.size < allowed) return map1.size
    if (map1.size > allowed) return allowed
};

const candyType = [1, 1, 2, 2, 3, 3]
console.log(distributeCandies(candyType))