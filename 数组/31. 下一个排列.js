
/**
 * 从右边找到第一对两个连续的数字 a[i] 和 a[i+1]，它们满足 a[i] < a[i+1]
 * 重新排列 a[i] 右边的数字，包括它自己
 * 将数字 a[i] 替换为位于其右侧区域的数字中比它更大的数字，记为a[j]
 * 交换数字 a[i] 和 a[j]
 * 反转 a[i] 之后的数字
 * @param {*} nums 
 */
function nextPermutation(nums) {
    let i = nums.length-2
    while(i>=0 && nums[i]>=nums[i+1]) {
        i--
    }
    if(i>=0) {
        let j = nums.length-1
        while(nums[j]<=nums[i] && j>i) {
            j--
        }
        // 交换数字 a[i] 和 a[j]
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
    }
    // 反转 a[i] 之后的数字
    i++
    j = nums.length-1
    while(i<j) {
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
        i++
        j--
    }
    return nums
}
let nums = [1,5,1]
console.log(nextPermutation(nums))