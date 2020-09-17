function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let money = 1; money <= amount; money++) {
        for (let j = 0; j < coins.length; j++) {
            if (money - coins[j] >= 0) {
                dp[money] = Math.min(dp[money], dp[money - coins[j]] + 1)
            }
        }
    }
    return dp[amount] <= amount ? dp[amount] : -1
}
let coins = [1, 2, 5],
    amount = 11
console.log(coinChange(coins, amount))