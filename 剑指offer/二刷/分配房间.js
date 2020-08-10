
function getPenson(n, x, arr) {
    let min = Math.min(...arr)
    let i = min * n
    for(let i=0; i<n; i++) {
        arr[i]-=min
    }
    // 下标
    let j=x-1
    while(arr[j]!==0) {
        arr[j--]--
        if(j<0)j+=n
        i++
    }
    arr[j] = i
    return arr
}
let n=3, x=1, arr=[6,5,1]
console.log(getPenson(n, x, arr))