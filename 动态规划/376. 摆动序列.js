/**
 * 贪心算法
 * @param {*} nums 
 */
function wiggleMaxLength1(nums) {
    let len = nums.length
    if(len<2)return len
    let prediff = nums[1]-nums[0]
    let count = prediff!==0?2:1
    for(let i=2; i<len; i++) {
        let diff = nums[i]-nums[i-1]
        if(prediff<=0 && diff>0 || prediff>=0 && diff<0) {
            prediff = diff
            count++
        }
    }
    return count
}
/**
 * 动态规划
 * 比前面的元素大就可以作为上升摆动序列的结尾元素
 * 比前面的元素小就可以作为下降摆动序列的结尾元素
 * @param {*} nums 
 */
function wiggleMaxLength2(nums) {
    let len = nums.length
    if(len<2)return len
    let up = new Array(len).fill(0)
    let down = new Array(len).fill(0)
    for(let i=1; i<len; i++) {
        for(let j=0; j<i; j++) {
            if(nums[i]>nums[j]) {
                // 以第 i 个元素结尾的上升摆动序列的长度
                up[i] = Math.max(up[i], down[j]+1)
            }else if(nums[i]<nums[j]) {
                // 以第 i 个元素结尾的下降摆动序列的长度
                down[i] = Math.max(down[i], up[j]+1)
            }
        }
    }
    console.log(up, down)
    return Math.max(up[len-1], down[len-1])+1
}
/**
 * 线性动态规划
 * @param {*} nums 
 */
function wiggleMaxLength(nums) {
    let len = nums.length
    if(len<2)return len
    let up = new Array(len).fill(0)
    let down = new Array(len).fill(0) 
    up[0] = down[0] = 1
    for(let i=1; i<len; i++) {
        if(nums[i]>nums[i-1]) {
            up[i] = down[i-1]+1
            down[i] = down[i-1]
        }else if(nums[i]<nums[i-1]) {
            down[i] = up[i-1]+1
            up[i] = up[i-1]
        }else {
            down[i] = down[i-1]
            up[i] = up[i-1]
        }
    }
    return Math.max(up[len-1], down[len-1])
}
let nums = [1,17,5,10,13,15,10,5,16,8]
console.log(wiggleMaxLength(nums))