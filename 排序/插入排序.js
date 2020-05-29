/**
 * 插入排序：无序区的元素逐个放入有序区，并保持有序区始终有序
 * @param {*} nums 
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function insertSort(nums){
    for(let i=1;i<nums.length;i++) {
        let tmp = nums[i]
        let j=i-1
        while(j>=0&&tmp<nums[j]){
            nums[j+1]=nums[j]
            j--
        }
        nums[++j]=tmp
    }
    return nums
}
console.log(insertSort([3,2,7,7,5,9]))