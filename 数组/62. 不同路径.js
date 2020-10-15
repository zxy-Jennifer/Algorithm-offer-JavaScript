function uniquePaths(m, n) {
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(1);
  }
  // for(let i=0; i<m; i++) {
  //     dp[i][0] = 1
  // }
  // for(let i=0; i<n; i++) {
  //     dp[0][i] = 1
  // }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

console.log(uniquePaths(7, 3));
