/**
 * 
 * @param {*} mat 
 * @param {*} K 
 */
function matrixBlockSum(mat, K) {
    let row = mat.length
    let col = mat[0].length
    let res = Array.from(new Array(row), () => new Array(col).fill(0))
    // 存放矩阵的区域和
    let dp = Array.from(new Array(row + 1), () => new Array(col + 1).fill(0))
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            dp[i][j] = mat[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1]
        }
    }
    // console.log(res, ',,,,,', dp)
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            let r1 = Math.max(0, i - K - 1)
            let r2 = Math.min(row, i + K)
            let c1 = Math.max(0, j - K - 1)
            let c2 = Math.min(col, j + K)
            res[i - 1][j - 1] = dp[r2][c2] - dp[r2][c1] - dp[r1][c2] + dp[r1][c1]
        }
    }
    return res
}
let mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    K = 1
console.log(matrixBlockSum(mat, K))