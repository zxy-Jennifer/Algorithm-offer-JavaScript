function search1(nums, target) {
    let start = nums.indexOf(target)
    let end = nums.lastIndexOf(target)
    let res = end - start
    if(start!==-1) {
        res++
    }
    return res
}
/**
 * 使用二分查找
 * @param {*} nums 
 * @param {*} target 
 */
function search(nums, target) {
    let i = 0, j = nums.length-1
    // 寻找右边界 right
    while(i<=j) {
        let mid = Math.floor((j+i)/2)
        if(nums[mid] <= target) {
            i = mid+1
        }else {
            j = mid-1
        }
    }
    let right = i
    // 不存在返回 0
    if(j>=0 && nums[j] !== target) {
        return 0
    }
    // 寻找左边界
    i = 0
    while(i<=j) {
        let mid = Math.floor((j+i)/2)
        if(nums[mid] < target) {
            i = mid+1
        }else {
            j = mid-1
        }
    }
    let left = j
    return right-left-1
}
let nums = [5,7,7,8,8,10]
console.log(search(nums,8))