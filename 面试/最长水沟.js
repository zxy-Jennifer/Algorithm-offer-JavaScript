function getMaxArea(m, n, arr) {
    let maxLen = -1
    let dp = Array.from(new Array(m), () => new Array(n).fill(-1))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxLen = Math.max(maxLen, dfs(i, j, 1))
        }
    }
    return maxLen

    /**
     * 
     * @param {*} direction 流转的方向
     * @param {*} i 
     * @param {*} j 
     */
    function dfs(i, j, res) {
        // 向上流转
        let max = res
        let temp
        if (i > 0 && arr[i][j] > arr[i - 1][j]) {
            if (dp[i - 1][j] === -1) {
                dp[i - 1][j] = dfs(i - 1, j, res + 1)
            }
            temp = dp[i - 1][j]
            max = Math.max(temp, max)
        }
        if (i < m - 1 && arr[i][j] > arr[i + 1][j]) {
            // 向下流转
            if (dp[i + 1][j] === -1) {
                dp[i + 1][j] = dfs(i + 1, j, res + 1)
            }
            temp = dp[i + 1][j]
            max = Math.max(temp, max)
        }
        if (j > 0 && arr[i][j] > arr[i][j - 1]) {
            // 向左流转
            if (dp[i][j - 1] === -1) {
                dp[i][j - 1] = dfs(i, j - 1, res + 1)
            }
            temp = dp[i][j - 1]
            max = Math.max(temp, max)
        }
        if (j < n - 1 && arr[i][j] > arr[i][j + 1]) {
            // 向右流转
            if (dp[i][j + 1] === -1) {
                dp[i][j + 1] = dfs(i, j + 1, res + 1)
            }
            temp = dp[i][j + 1]
            max = Math.max(temp, max)
        }
        return max
    }
}

let arr = [
    [10, 8, 4, 3, 2],
    [2, 6, 5, 2, 1]
]
console.log(getMaxArea(2, 5, arr))