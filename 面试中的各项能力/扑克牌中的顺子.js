/**
 * 0：大、小王为0，可以看成任意数字
 * [0,0,1,2,5] => true
 * @param {*} nums 
 */
function isStraight(nums) {
    let arr = nums.filter(item => item !==0)
    let len = arr.length
    let sub = []
    let max =1,min=14
    for(let i=0; i<len; i++) {
        if(sub.includes(arr[i])) {
            return false
        }
        sub.push(arr[i])
        max = Math.max(max,arr[i])
        min = Math.min(min,arr[i])
    }
    return max-min<=4
}
let arr = [3,10,8,9,10]
console.log(isStraight(arr))