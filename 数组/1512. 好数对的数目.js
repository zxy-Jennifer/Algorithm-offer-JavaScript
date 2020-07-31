
function numIdenticalPairs(nums) {
    let res = 0
    let len = nums.length
    if(len <= 0)return res
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            if(nums[j]===nums[i]) {
                res++
            }
        }
    }
    return res
}

let nums = []
console.log(numIdenticalPairs(nums))