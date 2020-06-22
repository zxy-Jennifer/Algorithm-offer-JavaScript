
/**
 * 动态规划
 * @param {*} n 
 */
function waysToChange1(n) {
    let dp = new Array(n+1).fill(0)
    let coins = [1,5,10,25]
    dp[0]=1

    for(coin of coins) {
        for(let i=coin;i<=n;i++) {
            dp[i] = (dp[i] + dp[i-coin]) % 1000000007
        }
    }
    return dp[n]
}

function waysToChange2(n) {
    let res = 0
    for(let i=0;i<=n/25;i++) {
        let temp1 = n-i*25
        for(let j=0;j<=temp1/10;j++) {
            console.log(Math.floor((temp1 - j*10)/5) + 1)
            res += Math.floor((temp1 - j*10)/5) + 1
        }
    }
    return res % 1000000007
}

/**
 * 利用等差数列
 * @param {*} n 
 */
function waysToChange(n) {
    let res = 0
    for(let i=0;i<=n/25;i++) {
        let temp = n-i*25
        res = (res + Math.floor((Math.floor(temp/5)+1 + Math.floor((temp%10/5))+1) * (Math.floor(temp/10)+1) / 2)) % 1000000007
    }
    return res
}

console.log(waysToChange(61))