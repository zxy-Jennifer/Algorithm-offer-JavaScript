/**
 * 三指针
 * @param {*} A 
 * @param {*} S 
 */
function numSubarraysWithSum1(A,S) {
    let res = 0 
    let len = A.length
    let iHi=0, iLo=0, j=0
    let sumHi=0, sumLo=0
    while(j<len) {
        sumLo+=A[j]
        while(iLo<j && sumLo>S) {
            sumLo -= A[iLo++]
        }
        sumHi+=A[j]
        while(iHi<j && (sumHi>S || (sumHi===S && A[iHi]===0))) {
            sumHi -= A[iHi++]
        }
        if(sumLo === S) {
            res += iHi - iLo + 1
        }
        j++
    }
    return res
}
/**
 * 前缀和
 * @param {*} A 
 * @param {*} S 
 */
function numSubarraysWithSum(A,S) {
    let len = A.length
    let sum = new Array(len).fill(0)
    for(let i=0; i<len; i++) {
        sum[i+1] = sum[i] + A[i]
    }
    let res = 0
    let map = new Map()
    console.log(sum)
    for(let num of sum) {
        // P[j] - P[i] === S 且 i < j 的 i 的数目
        // 
        if(map.has(num)) {
            res+=map.get(num)
        }
        // 加上S的和作为map的key，相同的和出现的次数作为value
        if(map.has(num+S)){
            map.set(num+S, map.get(num+S)+1)
        }else {
            map.set(num+S, 1)
        }
    }
    console.log(map)
    // Map(4) { 2 => 1, 3 => 2, 4 => 2, 5 => 1 }
    // value：sum中加上S的和为key的i的数目
    return res
}
let A = [1,0,0,1,0,1], S = 2
console.log(numSubarraysWithSum1(A,S))