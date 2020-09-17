function PredictTheWinner1(nums) {
    let len = nums.length
    let dp = Array.from(new Array(len), () => new Array(len))
    return recur(0, len - 1) >= 0

    function recur(i, j) {
        if (dp[i][j]) {
            return dp[i][j]
        }
        if (i === j) {
            dp[i][j] = nums[i]
            return nums[i]
        }
        let left = nums[i] - recur(i + 1, j)
        let right = nums[j] - recur(i, j - 1)
        dp[i][j] = Math.max(left, right)
        return dp[i][j]
    }
}
/**
 * 动态规划：dp[i][j]=max(nums[i]−dp[i+1][j],nums[j]−dp[i][j−1])
 * @param {*} nums 
 */
function PredictTheWinner(nums) {
    let len = nums.length
    let dp = Array.from(new Array(len), () => new Array(len))
    for (let i = 0; i < len; i++) {
        dp[i][i] = nums[i]
    }
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            let left = nums[i] - dp[i + 1][j]
            let right = nums[j] - dp[i][j - 1]
            dp[i][j] = Math.max(left, right)
        }
    }
    return dp[0][len - 1] >= 0
}
let nums = [1, 5, 233, 7]
console.log(PredictTheWinner(nums))