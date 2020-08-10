
function countGoodTriplets(arr, a, b, c) {
    let len = arr.length
    let res = 0
    for(let i=0; i<len-2; i++) {
        for(let j=i+1; j<len-1; j++) {
            if(Math.abs(arr[i] - arr[j]) <= a) {
                for(let k=j+1; k<len; k++) {
                    if(Math.abs(arr[j]-arr[k])<=b && Math.abs(arr[i]-arr[k])<=c)res++
                }
            }
        }
    }
    return res
}
let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
console.log(countGoodTriplets(arr, a, b, c))