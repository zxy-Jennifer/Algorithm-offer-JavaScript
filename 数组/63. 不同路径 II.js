function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  if (m <= 0) return 0;
  let n = obstacleGrid[0].length;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0;
      break;
    } else {
      dp[i][0] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0;
      break;
    } else {
      dp[0][i] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
}

let obstacleGrid = [
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 0],
];

console.log(uniquePathsWithObstacles(obstacleGrid));
