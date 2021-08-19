// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0

    let current
    let profit
    for (let i = 1; i < prices.length; i++) {
        current = prices[i]

        if (current < min) {
            min = current
        } else {
            profit = current - min
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }


    return maxProfit
};
