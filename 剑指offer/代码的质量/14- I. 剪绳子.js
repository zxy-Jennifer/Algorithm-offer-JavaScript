
/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段, 每段相乘可能的最大乘积是多少
 * 
 * 贪心：
 * 得到尽可能多的 3
 * @param {*} n 
 */
function cuttingRope1(n) {
    if(n<=0)return 0
    if(n<=3)return n-1
    let res = 1
    let MAX_VALUE = 1e9+7;
    while(n>4) {
        res = (res % MAX_VALUE) * 3
        n-=3
    }
    res *= n
    return res % MAX_VALUE
}
/**
 * 动态规划：dp[i] = max(dp[i], max(j*(i-j), j*dp[i-j]))
 * @param {*} n 
 */
function cuttingRope(n) {
    let dp = new Array(n+1).fill(1)

    for(let i=3;i<=n;i++) {
        for(let j=1;j<i;j++) {
            // j*(i-j)：把绳子剪成两段，长度分别为j和i-j
            // j*dp[i-j]：先把绳子剪成两段，长度分别为j和i-j，再继续剪长度为i-j的绳子，求其乘积最大值
            let a = j*(i-j) % 1000000007
            let b = j*dp[i-j] % 1000000007
            dp[i] = Math.max(dp[i], Math.max(a, b))
            dp[i] %= 1000000007
        }
    }
    return dp[n]%1000000007
}
console.log(cuttingRope1(120))

console.log(cuttingRope(120))