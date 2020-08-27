/**
 * 两两比较，反序则交换位置
 * @param {*} nums 
 * 时间复杂度：O(n^2) 
 * 空间复杂度：O(1)
 */
function bubbleSort(nums) {
    let flag = false
    // i控制比较的轮数
    for(let i=0;i<nums.length-1;i++) {
        flag = false
        // j是比较的位置
        for(let j=1; j<nums.length-i; j++){
            if(nums[j-1]>nums[j]) {
                flag = true;
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
        if(!flag){
            break;
        }
    }
    return nums
}
console.log(bubbleSort([3,2,7,1,5,9]))