

/**
 * 
 * @param {*} nums 
 */
function findMagicIndex1(nums) {
    let len = nums.length
    let i=0
    while(i<len && i>=0) {
        if(nums[i] === i) {
            return i
        }else if(i<nums[i]) {
            i = nums[i]
        }else {
            i++
        }
    }
    return -1
}

function findMagicIndex(nums) {
    let len = nums.length
    let i = 0, j = len-1
    while(i<=j) {
        console.log(i,j)
        let mid = Math.floor((i+j)/2)
        console.log(mid)
        if(nums[mid] === mid)return mid
        if(nums[mid]>mid)j=mid-1
        if(nums[mid]<mid)i=mid+1
    }
    return -1
}

function findMagicIndex(nums) {}
let nums = [0, 0, 2]
console.log(findMagicIndex1(nums))