/**
 * 暴力解法
 * @param {*} nums 
 */
function reversePairs1(nums) {
    let res = 0
    for(let i = 0;i<nums.length;i++) {
        res += findMin(nums,i)
    }
    function findMin(nums,index) {
        let min = 0
        for(let i = index+1;i<nums.length;i++) {
            if(nums[i]<nums[index]) {
                min++
            }
        }
        return min
    }
    return res
}
/**
 * 利用归并排序
 * @param {*} nums 
 */
function reversePairs(nums) {
    let res = findReverseNum(nums,0,nums.length-1)
    return res
}

function findReverseNum(nums,start,end) {
    if(start>=end) {
        return 0
    }
    let length = Math.floor((end-start)/2)
    let copy = new Array(end-start+1)

    let leftNum = findReverseNum(nums,start,start+length)
    let rightNum = findReverseNum(nums,start+length+1,end)

    let num = 0
    let i = start + length
    let j = end
    let index = end - start
    while(i>=start && j>=start+length+1) {
        if(nums[i] > nums[j]) {
            num += j-start-length
            copy[index--] = nums[i--]
        }else {
            copy[index--] = nums[j--]
        }
    }
    while(i>=start) {
        copy[index--] = nums[i--]
    }
    while(j>=start+length+1) {
        copy[index--] = nums[j--]
    }

    for(let k=start; k<=end; k++) {
        nums[k] = copy[k-start]
    }
    return num+leftNum+rightNum
}

console.log(reversePairs([7,5,6,4]))