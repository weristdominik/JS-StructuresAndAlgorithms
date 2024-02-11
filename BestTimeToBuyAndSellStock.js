/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = prices[0];

    for (i = 1; i < prices.length; i++) {
        const profit = prices[i] - buy;
        max = Math.max(profit, max);
        buy = Math.min(buy, prices[i]);
    }

    return max;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

/*
Following Solution is not recommanded - 2x Array Interrations are to slow:

let max = 0;
    for (i = 0; i < prices.length; i++) {
        
        for (j = i + 1; j < prices.length; j++) {
            if(prices[j] >= prices[i]) {
                max = Math.max(prices[j]-prices[i], max);
            }
        }
    }
    return max;
*/