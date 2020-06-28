
/**
 * 双指针
 * @param {*} nums 
 * @param {*} target 
 */
function threeSumClosest(nums, target) {
    nums.sort((a,b)=>a-b)
    let res = nums[0] + nums[1] + nums[2]
    for(let i=0;i<nums.length;i++) {
        let start = i+1
        let end = nums.length-1
        while(start < end) {
            let sum = nums[start] + nums[end] + nums[i]
            if(Math.abs(sum-target) < Math.abs(res-target)) {
                res = sum
            }
            if(sum === target)return res
            if(sum < target){
                start++
            }
            if(sum > target)end--
        }
    }
    return res
}

let nums = [-1,2,1,-4], target = 1
console.log(threeSumClosest(nums, target))