/**
 * 
 * @param {*} nums 
 */
function mergeSort(nums) {
    let len = nums.length
    let mid = Math.floor(len/2)
    if(len<2)return nums
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    return merge(mergeSort(left), mergeSort(right))


    function merge(left,right) {
        let res = []
        while(left.length && right.length) {
            if(left[0]<=right[0]) {
                res.push(left.shift())
            }else {
                res.push(right.shift())
            }
        }
        while(left.length) {
            res.push(left.shift())
        }
        while(right.length) {
            res.push(right.shift())
        }
        return res
    }
}
console.log(mergeSort([3,2,7,7,5,9]))
