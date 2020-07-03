/**
 * 假设数组中不存在重复的元素
 * 如果数组中存在这个目标值，则返回它的索引，否则返回 -1
 * @param {*} nums 
 * @param {*} target 
 */
function search(nums, target) {
    let len = nums.length
    if(len<=0)return -1
    let left = 0
    let right = len-1
    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        console.log(mid)
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] >= nums[left]) {
            // left
            if(nums[mid] > target && target >= nums[left]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
    return -1
}

let nums = [3,1], target = 1
console.log(search(nums, target))