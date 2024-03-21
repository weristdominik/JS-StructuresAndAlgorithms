/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    let buy = prices[0]

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - buy
        max = Math.max(profit, max)
        buy = Math.min(buy, prices[i])
    }

    return max
};

const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))