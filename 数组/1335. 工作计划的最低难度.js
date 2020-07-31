
function minDifficulty1(jobDifficulty, d) {
    let len = jobDifficulty.length
    if(len<d)return -1
    let cache = new Map()
    let res = recur(0, d)
    console.log(cache)
    return res

    function recur(index, count) {
        let key = index*100 + count
        if(!cache.has(key)) {
            if(count === 1) {
                let max = 0
                for(let i=index; i<len; i++) {
                    jobDifficulty[i] > max && (max = jobDifficulty[i])
                }
                return max
            }
            let min = Infinity
            let curMax = 0
            for(let i=index; i<=len-count; i++) {
                if(jobDifficulty[i] > curMax)curMax = jobDifficulty[i]
                min = Math.min(min, curMax+recur(i+1, count-1))
            }
            cache.set(key, min)
        }
        return cache.get(key)
    }
}

/**
 * 动态规划
 * 从 j 开始还差 i 次拆分没有做，把当前状态下的这个最小值记作 dp[j][i]。
 */
function minDifficulty(jobDifficulty, d) {
    let len = jobDifficulty.length
    if(len<d)return -1
    let dp = new Array(len)
    let curMax = 0
    for(let i=len-1; i>=0; i--) {
        dp[i] = new Array(d+1).fill(Infinity)
        if(jobDifficulty[i]>curMax)curMax = jobDifficulty[i]
        dp[i][1] = curMax
    }
    console.log(dp)
    for(let i=2; i<=d; i++) {
        // 还剩i次拆分未做，则开始下标到数组末尾的元素个数至少有i个
        for(let j=0; j<=len-i; j++) {
            let max = 0
            for(let k=j; k<=len-i; k++) {
                jobDifficulty[k] > max && (max = jobDifficulty[k])
                dp[j][i] = Math.min(dp[j][i], dp[k + 1][i - 1] + max)
            }
        }
    }
    console.log(dp)
    return dp[0][d]
}

let jobDifficulty = [1,1,1], d = 3
console.log(minDifficulty(jobDifficulty, d))