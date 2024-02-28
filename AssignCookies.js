/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)

    let greedFactorPtr = 0
    let cookieSizePtr = 0
    let contentChildren = 0

    while (greedFactorPtr < g.length && cookieSizePtr < s.length) {
        if (s[cookieSizePtr] >= g[greedFactorPtr]) {
            contentChildren++
            greedFactorPtr++
        }
        cookieSizePtr++
    }

    return contentChildren
};

const g = [1, 2, 3], s = [1, 1]
console.log(findContentChildren(g, s))