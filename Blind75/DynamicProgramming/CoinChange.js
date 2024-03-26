/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let res = Array(amount + 1).fill(Infinity)
    res[0] = 0
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            res[i] = Math.min(res[i], res[i - coin] + 1)
        }
    }

    return res[amount] === Infinity ? -1 : res[amount]
};

const coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount))