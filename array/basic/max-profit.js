// Given an array prices[] of length N, representing the prices of the stocks on different days, 
// the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.
// Here one transaction means 1 buy + 1 Sell.

// Note: Stock must be bought before being sold.



function maxProfit(prices) {
    let n = prices.length;
    let res = 0;

    // Explore all possible ways to buy and sell stock
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            res = Math.max(res, prices[j] - prices[i]);
        }
    }
    return res;
}

let prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));