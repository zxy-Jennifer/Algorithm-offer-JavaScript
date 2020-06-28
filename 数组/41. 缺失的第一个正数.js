
/**
 * 对于一个长度为 N 的数组，其中没有出现的最小正整数只能在 [1,N+1] 中
    * 如果如果 [1,N] 都出现了，那么答案是 N+1，
    * 否则答案是 [1,N] 中没有出现的最小正整数
 */
function firstMissingPositive1(nums) {
    let len = nums.length
    // 小于等于 0 的数修改为 N+1
    for(let i=0;i<len;i++) {
        if(nums[i] <= 0)nums[i] = len+1
    }

    // 如果 |x| in [1, N]，那么我们给数组中的第 |x| - 1个位置的数添加一个负号。
    for(let i=0;i<len;i++) {
        // 注意如果它已经有负号，不需要重复添加；
        let num = Math.abs(nums[i]);
        if(num <= len) {
            nums[num - 1] = -Math.abs(nums[num - 1])
        }
    }
    // 如果数组中的每一个数都是负数，那么答案是 N+1，否则答案是第一个正数的位置加 1。
    for(let i=0;i<len;i++) {
        if(nums[i] > 0) {
            return i+1
        }
    }
    return len+1
}

function firstMissingPositive(nums) {
    let len = nums.length
    for(let i=0; i<len; i++) {
        while(nums[i]>0 && nums[i]<=len && nums[nums[i]-1] !== nums[i]) {
            let temp = nums[nums[i]-1]
            nums[nums[i]-1] = nums[i]
            nums[i] = temp
            // [nums[index], nums[i]] = [nums[i], nums[index]]
            // [ nums[i], nums[nums[i]-1] ] = [ nums[nums[i]-1], nums[i] ]
        }
    }
    for(let i=0; i<len; i++) {
        if(nums[i]!==i+1) {
            return i+1
        }
    }
    return len+1
}

let nums = [3,4,-1,1]
// console.log(firstMissingPositive1(nums))
console.log(firstMissingPositive(nums))