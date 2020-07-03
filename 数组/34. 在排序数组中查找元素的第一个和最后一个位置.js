
function searchRange(nums, target) {
    let left = -1
    let right = -1
    let flag = false
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] === target) {
            if(flag) {
                right = i
            }else {
                left = i
                right = i
                flag = true
            }
        }
    }
    return [left, right]
}

let nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target))