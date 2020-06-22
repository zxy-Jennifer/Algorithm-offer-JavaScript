
function nextPermutation(nums) {
    let i = nums.length-2
    while(i>=0 && nums[i+1]<=nums[i]) {
        i--
    }
    if(i>=0) {
        let j = nums.length-1
        while(j>=0 && nums[j]<=nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    i++
    let j = nums.length-1
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--;
    }
    return nums
}
let nums = [1,3,2]
console.log(nextPermutation(nums))