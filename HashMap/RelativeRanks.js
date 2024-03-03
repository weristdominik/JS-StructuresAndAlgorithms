/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let rank = {}
    score.sort((a, b) => b - a).forEach((x, i) => {
        if (i == 0) return rank[x] = 'Gold Medal'
        if (i == 1) return rank[x] = 'Silver Medal'
        if (i == 2) return rank[x] = 'Bronze Medal'
        rank[x] = String(i + 1)
    })

    return score.map(x => rank[x])
};

const score = [5, 4, 3, 2, 1]
console.log(findRelativeRanks(score))