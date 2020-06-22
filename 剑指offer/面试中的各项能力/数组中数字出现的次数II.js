/**
 * 
 * @param {*} nums 
 */
function singleNumber1(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++) {
        if(map.get(nums[i]) === 2) {
            map.delete(nums[i])
        }else {
            let value = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1
            map.set(nums[i],value)
        }
    }
    return [...map.keys()]
}
/**
 * 除了一个数字出现一次，其他都出现了三次
 * @param {*} nums 
 */
function singleNumber(nums) {
    res = 0
    for(let i=0;i<32;i++) {
        let cnt = 0
        let bit = 1 << i
        for(let j=0;j<nums.length;j++) {
            if(nums[j]&bit) {
                cnt++
            }
        }
        if(cnt%3!=0) {
            res = res | bit
        }
    }
    return [res]
}

let nums = [9,10,7,9,7,9,7]
console.log(singleNumber(nums))