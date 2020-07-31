
function findPeakElement1(nums) {
    let len = nums.length
    if(len<=0)return
    let left = 0, right = len-1
    return recur(left, right, nums)
    
    function recur(left, right, nums) {
        if(left===right)return left
        let mid = Math.floor((left + right) / 2)
        // console.log(mid)
        if(nums[mid] > nums[mid+1]) {
            return recur(left, mid, nums)
        }else {
            return recur(mid+1, right, nums)
        }
    }
}
function findPeakElement(nums) {
    let len = nums.length
    if(len<=0)return null
    for(let i=0; i<len-1; i++) {
        if(nums[i]>nums[i+1]) {
            return i
        }
    }
    return 0
}
let nums = [1]
console.log(findPeakElement(nums))