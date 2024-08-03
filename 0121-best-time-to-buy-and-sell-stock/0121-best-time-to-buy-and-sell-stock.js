/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = prices[0];
    var profit = 0;
    var maxProfit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        var nowPrice = prices[i];
        profit = prices[i] - minPrice;
        maxProfit = Math.max(profit, maxProfit);
        minPrice = Math.min(nowPrice, minPrice);
    }
    return maxProfit;
};