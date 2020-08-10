/**
 * 暴力
 * @param {*} n 
 * @param {*} k 
 */
function findKthBit1(n,k) {
    let s = recur(n)
    // console.log(s)
    return s[k-1]
    function recur(n) {
        if(n===1) {
            return '0'
        } else {
            let pre = recur(n-1)
            let str = invert(pre).split('').reverse().join('')
            return pre+'1'+str
        }
    }
    function invert(x){
        let s=''
        for(let i=0; i<x.length; i++) {
            if(x[i]==='0') {
                s+='1'
            }else {
                s+='0'
            }
        }
        return s
    }
}
/**
 * 二分法
 * @param {*} n 
 * @param {*} k 
 */
function findKthBit(n,k) {
    let reverse = false
    while(n>1) {
        let mid = 2 ** (n-1)
        if(k===mid) {
            // console.log('mid')
            return reverse ? '0' : '1'
        }else if(k>mid){
            reverse = !reverse
            k=mid-(k-mid)
        }
        n--
    }
    return reverse?'1':'0'
}
let n = 3, k = 5
console.log(findKthBit1(n,k))
console.log(findKthBit(n,k))
