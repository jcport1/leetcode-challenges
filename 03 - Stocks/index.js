// 121. Best Time to Buy and Sell Stock
// LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

//to run js in vscode use node js
//simply run node <filename.js>
var maxProfit = function(prices) {

    //selling price needs to be larger than buying price
    //so you can't buy high and sell low
    
    //temporarily buy the first one
    let buy = prices[0]
    //if i buy and sell the same day
    let profit = 0


    for(let i = 0; i < prices.length; i++){
        //if buy price is higher than price[i]
        //set buy price equally to what is effectively the lower price
        //for loop will iterate through every value
        //if buy price is not lower than current value, 
        //the else condition which calculates profit will run, 
        //but will only update the profit value if higher than current profit

        if (buy > prices[i]) {
            buy = prices[i]
        } else {
         
            profit = Math.max(prices[i]-buy, profit)
        }
    }
    return profit;
};

prices = [7,1,5,3,6,4]

maxProfit(prices);

