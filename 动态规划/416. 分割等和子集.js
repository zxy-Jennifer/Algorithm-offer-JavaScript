
function canPartition(nums) {
    let len = nums.length
    if(len<=0)return false
    let sum = 0
    for(let i=0; i<len; i++) {
        sum += nums[i]
    }
    let target = Math.floor(sum/2)
    if(target*2 !== sum)return false
    // dp[i][j]：从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j。
    let dp = Array.from(new Array(len), ()=>new Array(target+1))
    if(nums[0]<target) dp[0][0] = true
    for(let i=1; i<len; i++) {
        for(let j=1; j<=target; j++) {
            dp[i][j] = nums[i] === j || dp[i-1][j]
            if(nums[i]<j) {
                dp[i][j] = dp[i][j] || dp[i-1][j-nums[i]]
            }
        }
    }
    console.log('dp')
    console.log(dp)
    return dp[len-1][target]
}

let nums = [1,5,11,5]
console.log(canPartition(nums))