function majorityElement(nums) {
    let count = 1
    let res = nums[0]
    for(let i=1;i<nums.length;i++){
        if(count === 0){
            res = nums[i]
        }
        if(nums[i]===res){
            count++
        }else {
            count--
        }
    }
    return res
}
/**
 * 出现次数最多的数
 */
function mostElement(nums) {
    let res=0
    let bit=[]
    let len = nums.length
    for(let i=0;i<32;i++) {
        bit[i] = 0
        for(let j=0;j<nums.length;j++){
            if(nums[j]>>>i & 1){  // nums[j]第i位为1
                bit[i]++
            }
        }
    }
    console.log(bit)
    for(let i=0;i<32;i++) {
        if(bit[i]>len/2) {
            res = res | (1<<i)
        }
    }
    return res
}
let arr = [-2,-2,-2,-2,0]
console.log(mostElement(arr))
/**
 * 1.
 * 1 2
 * 3.
 * 3 2
 * 2.
 * 2..
 * 2. 5
 * 2 4
 * 2.
 * return 2
 * 
 */