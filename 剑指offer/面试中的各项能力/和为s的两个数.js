/**
 * 
 * @param {*} nums 
 * @param {*} target 
 */
function twoSum(nums, target) {
    let right=nums.length-1
    while(nums[right]>=target) {
        right--
    }
    if(right<=0) {
        return []
    }
    let i=0,j=right;
    while(i<j) {
        while(nums[i]+nums[j]>target) {
            j--
        }
        if(nums[i]+nums[j] === target) {
            return [nums[i],nums[j]]
        }
        if(nums[i]+nums[j] < target){
            i++
            j=right
        }
    }
    return []
}



let nums = [1,10,30,31,47,60], target = 40

console.log(twoSum(nums,target))