
function hammingDistance(x, y) {
    let res = 0
    while(x!==0 || y!==0) {
        if((x&1)^(y&1))res++
        x = x>>1
        y = y>>1
    }
    return res
}
let x = 1, y = 4
console.log(hammingDistance(x, y))