/**
 * 深度优先遍历
 * @param {*} nums 
 * @param {*} S 
 */
function findTargetSumWays1(nums, S) {
    let len = nums.length
    if(len<=0)return 0
    let count = 0
    dfs(nums, 0, 0, S)
    return count

    function dfs(nums, index, sum ,s) {
        if(index === nums.length) {
            if(sum === S)count++
            return
        }

        dfs(nums, index+1, sum+nums[index], S)
        dfs(nums, index+1, sum-nums[index], S)
    }
}
/**
 * 动态规划：
 * dp[i][j]定义为从数组nums中 0 - i 的元素进行加减可以得到 j 的方法数量
 * j有可能小于0，j的区间在[-1000, 1000]，因为数组下标不可以为负，所以要转换为[0,2000]
 * 状态转移方程：dp[i][j] = dp[i-1][j-nums[i]] + dp[i-1][j+nums[i]]
 * 
 * 第i次运算完之后，结果为 arr[i] = obj{0:1, 1:y, ...}
 * obj 依赖于上一次的运算结果
 * 若上一次运算结果为 obj[i-1] = obj2{k1:v1, k2:v2,....}
 * 那么此次：
 *      k1-nums[i] 次数为 v1，
 *      k1+nums[i] 次数也为 v1,
 * 
 *      k2 - nums[i]，次数为 v2,
 *      k2 + nums[i] 次数也为v2...
 * 
 * @param {*} nums 
 * @param {*} S 
 */
function findTargetSumWays(nums, S) {
    let len = nums.length
    let dp = Array.from(new Array(len), ()=>new Array(2001).fill(0))
    // 初始化
    dp[0][nums[0]+1000] = 1
    dp[0][1000-nums[0]] += 1
    // 循环填表格
    for(let i=1; i<len; i++) {
        for(let j=-1000; j<=1000; j++) {
            if(dp[i-1][j+1000] > 0) {
                dp[i][j + nums[i] + 1000] += dp[i - 1][j + 1000]
                dp[i][j - nums[i] + 1000] += dp[i - 1][j + 1000]
            }
        }
    }
    return S > 1000 ? 0 : dp[len - 1][S + 1000]
}
/**
 * 优化动态规划的空间复杂度
 * @param {*} nums 
 * @param {*} S 
 */
function findTargetSumWays3(nums, S) {
    let len = nums.length
    let dp = new Array(2001).fill(0)
    dp[0 - nums[0] + 1000] = 1
    dp[0 + nums[0] + 1000] += 1
    for (let i = 1; i < len; i++) {
        let next = new Array(2001).fill(0)
        for (let j = -1000; j <= 1000; j++) {
            next[j + nums[i] + 1000] += dp[j + 1000]
            next[j - nums[i] + 1000] += dp[j + 1000]
        }
        dp = next
    }
    return S > 1000 ? 0 : dp[S + 1000]
}
let nums = [0,0,0,0,0,0,0,0,1], S=1
console.log(findTargetSumWays3(nums, S))