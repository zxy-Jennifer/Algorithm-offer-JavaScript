
function minOperations(n) {
    let mid = Math.floor(n/2)
    let midItem = mid * 2 + 1
    if(n%2 === 0) {
        midItem--
    }
    // console.log(mid, midItem)
    let res = 0
    for(let i=0; i< mid; i++) {
        let temp = 2*i +1
        res += midItem - temp
    }
    return res
}
console.log(minOperations(3))