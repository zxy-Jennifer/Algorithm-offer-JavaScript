/**
 * ^ 异或运算法则：两位不同，结果为“1”，否则为0
 * @param {*} nums 
 */
function findRepeatNumber1(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])) {
            return nums[i]
        }else {
            map.set(nums[i],1)
        }
    }
}
/**
 * 调整数组nums，使得索引与值相等，如果num重复出现了多次，那么总有一个num在放回nums[num]前  nums[num]===num已经成立
 * @param {*} nums 
 */
function findRepeatNumber(nums) {
    for(let i=0;i<nums.length;i++) {
        //检测下标为i的元素是否放在了位置i上
        while((num=nums[i])!==i) {
            // nums[num]===num
            if(num === nums[num]) {
                return num
            }
            [nums[i],nums[num]] = [nums[num], nums[i]]
        }
    }
}
let arr = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(arr))