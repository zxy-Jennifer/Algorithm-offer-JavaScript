/**
 * 
 * @param {*} n 
 */
function minDays(n) {
    let dp = new Array(n+1).fill(-1)
    return dfs(n, 0)
    function dfs(n, current) {
        if(dp[n] !== -1)return dp[n]
        if(n===1)return 1
        let res = Infinity
        if(n%3===0) {
            res = Math.min(res, dfs(Math.floor(n/3), 0)+1)
        }
        if(n%2 === 0) {
            res = Math.min(res, dfs(Math.floor(n/2), 0)+1)
        }
        if(current>=3 && res === Infinity) {
            return Infinity
        }else {
            res = Math.min(res, dfs(n-1, current+1) + 1)
        }
        dp[n] = res
        return res
    }
}
console.log(minDays(61455274))