function maxProfit(prices) {
    let minPrice1 = Infinity;         
    let maxProfit1 = 0;                        
    let maxProfitAfterBuy = -Infinity; 
    let maxProfit2 = 0;                        
    for(let price of prices) {
        // 1.第一次最小购买价格
        minPrice1 = Math.min(price, minPrice1)

        // 2.第一次卖出的最大利润
        maxProfit1 = Math.max(maxProfit1, price - minPrice1)

        // 3.今天是第二次购买    剩余净利润为：
        maxProfitAfterBuy = Math.max(maxProfitAfterBuy, maxProfit1-price)

        // 4.今天是第二次卖出，  总共获得的最大利润（第3步的净利润 + 第4步卖出的股票钱）
        maxProfit2 = Math.max(maxProfit2, price + maxProfitAfterBuy)
    }
    return maxProfit2;
}
let prices = [3,3,5,0,0,3,1,4]
console.log(maxProfit(prices))