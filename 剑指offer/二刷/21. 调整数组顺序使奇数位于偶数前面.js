
/**
 * 调整数组，使奇数位于偶数前面
 * 
 * @param {*} nums 
 */
function exchange(nums) {
    let i = 0
    let j = nums.length-1
    while(i<j) {
        while((nums[i]&1) && i<j)i++
        while(!(nums[j]&1) && i<j)j--
        if(i<j)[nums[i], nums[j]] = [nums[j], nums[i]]
    }
    return nums
}

let arr = [2,4,5,6]
console.log(exchange(arr))