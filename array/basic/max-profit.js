// Given an array prices[] of length N, representing the prices of the stocks on different days, 
// the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.
// Here one transaction means 1 buy + 1 Sell.

// Note: Stock must be bought before being sold.

function maxProfit(prices) {
    let n = prices.length;
    let res = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            res = Math.max(res, prices[j] - prices[i]);
        }
    }
    return res;
}

let prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));

function maxProfit2(prices) {
    let minSoFar = prices[0];
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);
        res = Math.max(res, prices[i] - minSoFar);
    }
    return res;
}

const prices2 = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit2(prices2));