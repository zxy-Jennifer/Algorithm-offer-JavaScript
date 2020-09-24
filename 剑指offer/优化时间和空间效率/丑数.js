/**
 * 动态规划：合并三个有序数组
 * @param {*} n 
 */
function nthUglyNumber11(n) {
    let a = 0,
        b = 0,
        c = 0
    let dp = new Array(n)
    dp[0] = 1
    for (let i = 1; i < n; i++) {
        let n1 = dp[a] * 2
        let n2 = dp[b] * 3
        let n3 = dp[c] * 5
        dp[i] = Math.min(n1, Math.min(n2, n3))
        if (dp[i] === n1) {
            a++
        }
        if (dp[i] === n2) {
            b++
        }
        if (dp[i] === n3) {
            c++
        }
    }
    console.log(dp)
    return dp[n - 1]
}
var nthUglyNumber = function (n) {
    let c2 = 1,
        c3 = 1,
        c5 = 1
    let res = 1
    let count = 1
    while (count < n) {
        let n2 = c2 * 2
        let n3 = c3 * 3
        let n5 = c5 * 5
        res = Math.min(n2, n3, n5)
        console.log(n2, n3, n5, res)
        if (n2 === res) c2++
        if (n3 === res) c3++
        if (n5 === res) c5++
        count++
    }
    return res
};
console.log(nthUglyNumber11(11))