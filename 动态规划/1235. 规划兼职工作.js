var jobScheduling = function (startTime, endTime, profit) {
    let len = startTime.length
    let jobs = []
    for (let i = 0; i < len; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]])
    }
    jobs.sort((s1, s2) => s1[0] - s2[0])
    let prev = 0, // 第i个job开始之前的最大收益
        pos = 0, // 还没延续到下一个工作的最小位置
        res = 0
    let dp = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (jobs[i][0] >= jobs[j][1]) {
                // if (j === pos) pos++
                prev = Math.max(prev, dp[j])
            }
        }
        dp.push(prev + jobs[i][2])
        res = Math.max(res, dp[i])
    }
    console.log(dp)
    return res
};

let startTime = [1, 2, 3, 4, 6],
    endTime = [3, 5, 10, 6, 9],
    profit = [20, 20, 100, 70, 60]
console.log(jobScheduling(startTime, endTime, profit))