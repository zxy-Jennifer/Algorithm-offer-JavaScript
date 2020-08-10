/**
 * 前缀和+hash
 * @param {*} nums 
 * @param {*} k 
 */
function subarraySum(nums, k) {
    let map = new Map()
    map.set(0,1)
    let res = 0
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum+=nums[i]
        if(map.has(sum-k))res+=map.get(sum-k)
        map.set(sum, (map.has(sum)?map.get(sum):0)+1)
    }
    return res
}
let nums = [1,1,1], k = 2
console.log(subarraySum(nums, k))