/**
 * 地板类型：2*1、2*3
 * @param {*} n 
 */
function getMethods(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1, dp[1]=1, dp[2]=2
    for(let i=3; i<=n; i++) {
        // dp[i-1]：先铺前i-1块，最后一块放一个2*1
        // dp[i-2]：先铺前i-2块，最后两块横着放两个1*2
        // dp[i-3]：先铺前i-3块，最后一块放一个2*3
        dp[i] = (dp[i-1]+dp[i-2]+dp[i-3]) % 10007
    }
    return dp[n] % 10007
}
/**
 * 4 1 2 3 5
 * 1
 */
let n= 5
console.log(getMethods(n))