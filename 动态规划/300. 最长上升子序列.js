/**
 * 动态规划
 * @param {*} nums 
 */
function lengthOfLIS11(nums) {
    let len = nums.length
    if (len <= 0) return 0
    let dp = new Array(len).fill(0)
    dp[0] = 1
    let max = 1
    for (let i = 1; i < len; i++) {
        let maxVal = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j])
            }
        }
        dp[i] = maxVal + 1
        max = Math.max(max, dp[i])
    }
    return max
}

function lengthOfLIS12(nums) {
    let len = nums.length
    if (len <= 0) {
        return 0
    }
    let dp = new Array(len).fill(0)
    dp[0] = 1
    max = 1
    for (let i = 1; i < len; i++) {
        let maxVal = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j])
            }
        }
        dp[i] = maxVal + 1
        max = Math.max(max, dp[i])
    }
    return max
}
/**
 * 贪心+二分
 * @param {*} nums 
 */
function lengthOfLIS21(nums) {
    let len = nums.length
    if (len <= 0) return 0
    // dp：单调栈
    let dp = [0, nums[0]]
    let res = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > dp[res]) {
            dp[++res] = nums[i]
        } else {
            let l = 1,
                r = res,
                pos = 0
            while (l <= r) {
                let mid = Math.floor((l + r) / 2)
                if (dp[mid] < nums[i]) {
                    pos = mid
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
            dp[pos + 1] = nums[i]
        }
    }
    // console.log(dp)
    return res
}

function lengthOfLIS22(nums) {
    let len = nums.length
    let stack = [0, nums[0]]
    let res = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > stack[res]) {
            stack[++res] = nums[i]
        } else {
            let left = 1,
                right = res,
                pos = 0
            while (left <= right) {
                let mid = left + Math.floor((right - left) / 2)
                if (stack[mid] < nums[i]) {
                    pos = mid
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            stack[pos + 1] = nums[i]
        }
    }
    return res
}
let nums = [1, 3, 6, 7, 9, 4, 5, 6, 7]
console.log(lengthOfLIS22(nums))