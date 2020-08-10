
function findMaxForm(strs, m, n) {
    let len = strs.length
    if(len<=0)return 0
    let dp = Array.from(new Array(m+1), ()=>new Array(n+1).fill(0))

    for(let str of strs) {
        let cou = getZeroOne(str)
        for(let i=m; i>=cou[0]; i--) {
            for(let j=n; j>=cou[1]; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i-cou[0]][j-cou[1]]+1)
            }
        }
    }
    return dp[m][n]

    function getZeroOne(str) {
        let cou = [0,0]
        for(let s of str) {
            cou[s-'0']++
        }
        return cou
    }
}
let strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
console.log(findMaxForm(strs, m, n))