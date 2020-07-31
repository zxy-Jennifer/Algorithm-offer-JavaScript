/**
 * 选择排序：在无序区找到最小元素放到有序区的起始位置
 * @param {*} nums 
 * 时间复杂度：O(n^2)
 * 空间复杂度：
 */
function selectSort(nums){
    for(let i=0;i<nums.length-1;i++){
        minIndex = i
        for(let j=i+1;j<nums.length;j++){
            if(nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        // let temp = nums[i]
        // nums[i] = nums[minIndex]
        // nums[minIndex] = temp
        [nums[i],nums[minIndex]] = [nums[minIndex],nums[i]]
    }
    return nums
}
console.log(selectSort([3,2,7,1,5,9]))