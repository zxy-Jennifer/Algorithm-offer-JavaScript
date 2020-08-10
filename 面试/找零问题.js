
function getMin(price, coupons) {
    let dp = new Array(price+1).fill(price+1)
    coupons.sort((a,b)=>a-b)
    dp[0] = 0
    for(let cou of coupons) {
        for(let i=1; i <= price; i++) {
            if(i>=cou) {
                dp[i] = Math.min(dp[i], dp[i-cou]+1)
            }
        }
    }
    return dp[price] <= price ? dp[price] : -1
}
let price = 65, coupons = [4, 50, 30, 20, 5]
console.log(getMin(price, coupons))