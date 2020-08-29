/**
 * 
 * @param {*} n 
 * @param {*} rounds 
 */
function mostVisited(n, rounds) {
    let len = rounds.length
    let dp = new Array(n + 1).fill(0)
    for (let i = 0; i < len - 1; i++) {
        let j = rounds[i]
        while (j <= n && j !== rounds[i + 1]) {
            dp[j]++
            j = j % n
            j++
        }
    }
    dp[rounds[len - 1]]++
    let res = []
    let max = dp[1]
    res.push(1)
    for (let i = 2; i < dp.length; i++) {
        if (dp[i] === max) {
            res.push(i)
        } else if (dp[i] > max) {
            max = dp[i]
            res = [i]
        }
    }
    return res
}
let n = 3,
    rounds = [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1]
console.log(mostVisited(n, rounds))