/**
 * 
 * @param {*} nums 
 */
function missingNumber1 (nums) {
    let res = nums.length
    for(let i=0;i<nums.length;i++) {
        if(i!==nums[i]){
            res = i
            break
        }
    }
    return res
}
function missingNumber(nums) {
    let res = nums.length
    let i=0,j=nums.length-1
    while(i<=j) {
        let mid = Math.floor((i+j)/2)
        if(mid!==nums[mid]) {
            j = mid-1
        }else {
            i = mid+1
        }
    }
    return i
}

let nums = [1,2]
console.log(missingNumber(nums))