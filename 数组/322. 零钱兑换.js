
function coinChange(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1)
    dp[0]=0
    for(let i=1; i<=amount; i++) {
        for(let coin of coins) {
            if(coin<=i) {
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    return dp[amount]>amount?-1:dp[amount]
}


let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount))