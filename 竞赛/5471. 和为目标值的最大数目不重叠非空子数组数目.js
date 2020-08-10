/**
 * 贪心算法 => 超时
 * @param {*} nums 
 * @param {*} target 
 */
function maxNonOverlapping1(nums, target) {
    let len = nums.length
    let dp = new Array(len).fill(0)
    // let res=0
    let sum=0, i=len-1
    while(i>=0) {
        let j=i
        sum=0
        let flag=false
        while(j<len) {
            sum+=nums[j]
            if(sum===target){
                flag=true
                // console.log('i, j', i, j)
                dp[i] = j+1<len ? dp[j+1]+1 : 1
                // (i+1<len ? Math.max(dp[j+1]+1, dp[i+1]) : dp[j+1]+1)
                if(i+1<len)dp[i] = Math.max(dp[i], dp[i+1])
                break
            }
            j++
        }
        if(!flag)dp[i] = i+1>=len?0:dp[i+1]
        // res = Math.max(dp[i],res)
        i--
    }
    // console.log(dp)
    return dp[0]
}
/**
 * 贪心 + 前缀和
 * @param {*} nums 
 * @param {*} target 
 */
function maxNonOverlapping(nums, target) {
    let len = nums.length
    //  计算前缀和
    let sum=0
    let map = new Map()
    let res=0
    map.set(0,1)
    for(let i=0; i<len; i++) {
        sum+=nums[i]
        if(map.has(sum-target)) {
            res++
            map = new Map()
            sum=0
        }
        map.set(sum, 1)
        console.log(map)
    }
    return res
}

let nums = [-1,3,5,1,4,2,-9], target = 6
console.log(maxNonOverlapping1(nums, target))
console.log(maxNonOverlapping(nums, target))