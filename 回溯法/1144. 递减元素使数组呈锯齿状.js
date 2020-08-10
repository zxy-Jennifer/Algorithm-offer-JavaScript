
/**
 * 
 * @param {*} nums 
 */
function movesToMakeZigzag(nums) {
    let res1=0, res2=0
    let len = nums.length
    let diff1=0, diff2=0
    for(let i=0; i<len; i++) {
        if(i%2===0) {
            // 改变偶数位置(偶数位置为谷值) => [5,6,1,6,2]
            diff1 = (i>0&&nums[i]>=nums[i-1])?nums[i]-nums[i-1]+1:0
            diff2 = (i<len-1 && nums[i]>=nums[i+1])?nums[i]-nums[i+1]+1:0
            res1+=Math.max(diff1, diff2)
        }else {
            // 改变奇数位置(奇数位置为谷值) => [9,6,1,0,2]
            diff1 = (nums[i]>=nums[i-1])?nums[i]-nums[i-1]+1:0
            diff2 = (i<len-1 && nums[i]>=nums[i+1])?nums[i]-nums[i+1]+1:0
            res2+=Math.max(diff1, diff2)
        }
    }
    return Math.min(res1, res2)
}

let nums = [9,6,1,6,2]
console.log(movesToMakeZigzag(nums))