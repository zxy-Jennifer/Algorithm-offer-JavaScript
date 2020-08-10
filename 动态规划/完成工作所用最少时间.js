/**
 * 
 * @param {*} num 工人个数
 * @param {*} work 任务数量
 * @param {*} arr 
 */
function getMinTime(num, work, arr) {
    // dp[i][j]：i个工人完成j个任务所用的最小时间
    dp = Array.from(new Array(num+1), ()=> new Array(work+1).fill(Infinity));
    for(let i=0; i<=num; i++) {
        dp[i][0] = 0
    }
    for(let i=1; i<=num; i++) {
        for(let j=1; j<=work; j++) {
            // 第i个工人不干活
            dp[i][j] = dp[i-1][j]
            // k为第i个工人可以完成的工作数
            for(let k=1; k<arr[i-1].length; k++) {
                // 第i个工人可以完成j个任务
                if(j-k >= 0){
                    // arr[i][0] 为第i个工人可以完成的工作数
                    // 上一个个工人少干k个任务的时间为：dp[i-1][j-k]的
                    // arr[i-1][k] 第i个工人干k个任务的时间
                    dp[i][j] = Math.min(dp[i][j], dp[i-1][j-k] + arr[i-1][k])
                }
            }
        }
    }
    return dp[num][work]
}
let num = 2, work = 4, arr = [[2, 1, 2], [2, 2, 5]]
console.log(getMinTime(num, work, arr))
