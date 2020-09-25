/**
 * 
 * @param {*} nums 
 */
function singleNumber1(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 2) {
            map.delete(nums[i])
        } else {
            let value = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1
            map.set(nums[i], value)
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
    for (let i = 0; i < 32; i++) {
        let cnt = 0
        let bit = 1 << i
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] & bit) {
                cnt++
            }
        }
        if (cnt % 3 != 0) {
            res = res | bit
        }
    }
    return res
}
/**
 * 除了两个数字出现一次，其他都出现了两次
 * @param {*} nums 
 */
function singleNumber2(nums) {
    let len = nums.length
    if (len <= 0) {
        return []
    }
    let x = nums[0]
    for (let i = 1; i < len; i++) {
        x = x ^ nums[i]
    }
    // console.log('x', x)
    let res1 = false,
        res2 = false
    let flag = 1
    while (!(flag & x)) {
        flag = flag << 1
    }
    // console.log(flag)
    for (let i = 0; i < len; i++) {
        if (flag & nums[i]) {
            res1 = res1 === false ? nums[i] : res1 ^ nums[i]
        } else {
            res2 = res2 === false ? nums[i] : res2 ^ nums[i]
        }
    }
    return [res1, res2]
}
let nums = [-4, -2, 7, 9, 3, 3, 7, 9]
console.log(singleNumber2(nums))