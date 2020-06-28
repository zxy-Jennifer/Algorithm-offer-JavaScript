

function wiggleSort1(nums) {
    for(let i=1;i<nums.length;i++) {
        if(i&1) {
            // 峰
            if(nums[i] < nums[i-1]) {
                [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
            }
        }else {
            // 谷
            if(nums[i] > nums[i-1]) {
                [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
            }
        }
    }
    return nums
}

function wiggleSort(nums) {
    nums.sort((a,b)=>a-b)
    let res = nums.splice(0)
    let i=0
    let j = res.length-1
    let index = 0
    while(i<j) {
        nums[index++] = res[j--]
        nums[index++] = res[i++]
    }
    if(i===j)nums[index] = res[i]
    return nums
}

let nums = [3,5,2,1,6,4]
console.log(wiggleSort(nums))