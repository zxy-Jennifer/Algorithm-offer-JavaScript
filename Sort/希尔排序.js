
/**
 * 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，
 * 待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。
 * @param {*} nums 
 */
function shellSort(nums) {
    let len = nums.length
    let temp = 0
    let gap = 1
    while(gap < len/3) {
        gap = gap*3+1
    }
    console.log(gap)

    for(gap; gap>0; gap = Math.floor(gap/3)) {
        for(let i=gap; i<len; i++) {
            temp = nums[i]
            for(var j=i-gap; j>=0&&nums[j]>temp; j-=gap) {
                nums[j+gap] = nums[j]
            }
            nums[j+gap] = temp
        }
    }
    return nums
}
console.log(shellSort([3,2,7,7,5,9,1,3,8,6,4,0]))
