

function singleNumbers1(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++) {
        if(map.has(nums[i])) {
            map.delete(nums[i])
        }else {
            map.set(nums[i],1)
        }
    }
    return [...map.keys()]
}
/**
 * 只有一个出现一次的数的时候
 * @param {*} nums 
 */
function singleOneNumbers(nums) {
    let res = 0
    for(let i=0;i<nums.length;i++) {
        res ^= nums[i]
    }
    return res
}

/**
 * 有两个出现一次的数的时候
 * @param {*} nums 
 */
function singleNumbers(nums) {
    let k=0
    let mask=1
    for(let i=0;i<nums.length;i++) {
        k^=nums[i]
    }
    while((k&mask)===0) {
        mask <<= 1
    }
    let a=0,b=0
    for(let i=0;i<nums.length;i++) {
        if((nums[i]&mask)===0){
            a^=nums[i]
        }else {
            b^=nums[i]
        }
    }
    return [a,b]
}

let nums = [1,2,10,2,4,1,3,3]
// console.log(singleOneNumbers(nums))

console.log(singleNumbers(nums))