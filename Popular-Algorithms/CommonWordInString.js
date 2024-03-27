/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*################################################
            1. Dynamic Programming
################################################*/
var wordBreak = function (s, wordDict) {
    let dp = Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === false) continue
        for (let j = i + 1; j < dp.length; j++) {
            console.log(s.slice(i, j))
            if (wordDict.includes(s.slice(i, j))) {
                dp[j] = true
            }
            console.log(dp)
        }
    }

    return dp[dp.length - 1]


};


const s = "leetcode", wordDict = ["leet", "code"]
console.log("Dynamic Programming:")
console.log(wordBreak(s, wordDict))