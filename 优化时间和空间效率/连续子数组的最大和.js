/**
 * 
 * @param {*} nums 
 */
function maxSubArray1(nums) {
    let max = -Infinity
    /**
     * total：返回值
     * cur：当前元素
     * i：当前索引
     */
    nums.reduce((total,cur,i) => {
        if(total>0){
            total+=cur
        }else {
            total = cur
        }
        max = max>total?max:total
        return total
    },0)
    return max
};
/**
 * 动态规划：定义状态数组dp[i]，数组中元素下标为[0, i]的连续子数组最大和
 * 状态转移方程：
 *              dp[0]=nums[0]
 *              nums[i]>0：dp[i] = nums[i]+dp[i-1]
 *              nums[i]<0：dp[i] = nums[i]
 * @param {*} nums 
 */
function maxSubArray2(nums) {
    const dp = new Array()
    if(!nums||nums.length===null) {
        return null
    }
    let res = (dp[0]=nums[0])
    for(let i = 1;i<nums.length;i++) {
        dp[i] = nums[i]
        if(dp[i-1]>0) {
            dp[i] = nums[i]+dp[i-1]
        }
        res = res>dp[i]?res:dp[i]
    }
    console.log(dp)
    return res
}
/**
 * 不占用额外数组的动态规划
 * @param {*} nums 
 */
function maxSubArray3(nums) {
    if(!nums||nums.length<=0) {
        return null
    }
    let res = nums[0]
    for (let i=1;i<nums.length;i++) {
        if(nums[i-1]>0) {
            nums[i]+=nums[i-1]
        }
        res = res>nums[i]?res:nums[i]
    }
    return res
}
/**
 * 贪心法：
 * 如果之前得到的最大和小于0则丢弃，否则与当前值相加，得到当前的最大和
 * 比较每次得到的最大和，纪录最大值
 * @param {*} nums 
 */
function maxSubArray4(nums) {
    if(!nums||nums.length<=0) {
        return null
    }
    let res = (sum = nums[0])
    for(let i = 1;i<nums.length;i++) {
        sum = sum > 0 ? sum + nums[i] : nums[i]
        res = sum > res ? sum : res
    }
    return res
}
/**
 * 分治法
 * @param {*} nums 
 */
function maxSubArray(nums) {
    return maxSum(nums,0,nums.length-1)
}
function maxSum(nums,left,right) {
    if(left === right) {
        return nums[left]
    }
    let mid = Math.floor((left+right)/2)
    console.log(left,right,mid)
    let maxLeft = maxSum(nums,left,mid)
    let maxRight = maxSum(nums,mid+1,right)
    let maxCross = crossSum(nums,left,right,mid)
    console.log(maxLeft,maxRight,maxCross)
    return Math.max(maxLeft,maxRight,maxCross)
}
function crossSum(nums,left,right,mid) {
    if(left === right) {
        return nums[left]
    }
    let maxLeftSum = -Infinity
    let leftSum = 0
    for(let i = mid; i>=left; i--) {
        leftSum+=nums[i]
        maxLeftSum = maxLeftSum>leftSum?maxLeftSum:leftSum
    }

    let maxRightSum = -Infinity
    let rightSum = 0
    for(let i=mid+1;i<=right;i++) {
        rightSum+=nums[i]
        maxRightSum = maxRightSum>rightSum?maxRightSum:rightSum
    }
    return maxLeftSum+maxRightSum
}
var arr = [1,2]
// var arr = [1]
console.log(maxSubArray(arr))