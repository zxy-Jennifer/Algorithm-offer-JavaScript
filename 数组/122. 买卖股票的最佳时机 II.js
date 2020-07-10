
function maxProfit(prices) {
    let max = 0
    let len = prices.length
    for(let i=1; i<len; i++) {
        if(prices[i]>prices[i-1]) {
            max+=prices[i]-prices[i-1]
        }
    }
    return max
}