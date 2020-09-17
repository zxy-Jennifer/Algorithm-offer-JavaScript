function massage1(nums) {
    let len = nums.length
    return recur(0, len - 1)

    function recur(start, end) {
        if (start > end) {
            return 0
        }
        let choose = nums[start] + recur(start + 2, end)
        let notChoose = recur(start + 1, end)
        return Math.max(choose, notChoose)
    }
}
/**
 * 动态规划
 * @param {*} nums 
 */
function massage(nums) {
    let len = nums.length
    if (len <= 0) return 0
    let dp0 = 0,
        dp1 = nums[0]
    for (let i = 1; i < len; i++) {
        tdp0 = Math.max(dp0, dp1)
        dp1 = nums[i] + dp0
        dp0 = tdp0
    }
    return Math.max(dp1, dp0)
}
let nums = [1, 2, 3, 1]
console.log(massage(nums))