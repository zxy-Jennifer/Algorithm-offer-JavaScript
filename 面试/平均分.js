
function getAverage(arr) {
    let res = 0
    let count = 0
    for(let i=1; i<=5; i++) {
        res += arr[i-1]*i
        count += arr[i-1]
    }
    res = Math.floor(res/count * 10)
    return res/10
}
let arr = [2, 2, 1, 1, 2]
console.log(getAverage(arr))