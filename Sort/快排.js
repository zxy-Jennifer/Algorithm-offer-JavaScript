/**
 * 从数列中挑出一个元素，称为 "基准"（pivot）
 * 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面
 * @param {*} nums 
 */
function quickSort(nums) {
    return quick(nums,0, nums.length-1)

    function quick(nums,left,right) {
        if(left < right) {
            let mid = partition(nums,left,right)
            quick(nums,left,mid-1)
            quick(nums,mid+1,right)
        }
        return nums
    }

    function partition(nums, left, right) {
        let pivot = nums[left]
        while(left < right) {
            while(right > left && nums[right] >= pivot) {
                right--
            }
            nums[left] = nums[right]
            while(left < right && nums[left] <= pivot) {
                left++
            }
            nums[right] = nums[left]
        }
        nums[left] = pivot
        return left
    }
}

let nums = [2,3,1,6,4]
console.log(quickSort(nums))