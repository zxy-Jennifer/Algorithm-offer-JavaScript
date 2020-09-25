/**
 * 
 * @param {*} nums 
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    let len = nums.length
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1,
            right = len - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (left < right && nums[left] === nums[left - 1]) left++
                while (left < right && nums[right] === nums[right + 1]) right--
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else {
                right--
            }

        }
    }
    return res
}
let nums = [1, 1, 0, -1, 0, -2, 2]
console.log(threeSum(nums))