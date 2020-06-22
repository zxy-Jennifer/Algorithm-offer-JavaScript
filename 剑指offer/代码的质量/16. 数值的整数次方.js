/**
 * 
 * @param {*} x 
 * @param {*} n 
 */
function myPow(x, n) {
    if(n === 0)return 1
    try{
        if(x === 0 && n<0) throw "非法输入"
    }catch(e) {
        console.log(e)
    }
    let res = getPow(Math.abs(x), Math.abs(n))
    if(x<0) {
        if(n&1)return -res
    }
    if(n<0)return 1/res
    return res

    /**
     * 求幂
     * @param {*} x 
     * @param {*} n 
     */
    function getPow(x, n) {
        if(n === 1)return x
        let mid = Math.floor(n/2)
        let res = getPow(x, mid)
        res *= res
        return n&1 ? res * x : res
    }
}

console.log(myPow(2.00000, -2))