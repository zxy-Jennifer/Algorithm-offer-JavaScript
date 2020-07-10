
function maxProfit(prices) {
    let len = prices.length
    let max=0, min = Infinity
    for(let i=0; i<len; i++) {
        if(prices[i]<min) min = prices[i]
        if(prices[i]-min>max) max = prices[i]-min
    }
    return max
}

let prices = [7,9,5,6,6,4]
console.log(maxProfit(prices))