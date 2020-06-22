
/**
 * 
 * 一次可以跳1级或者2级，所以跳上n级共有以下两种情况：
 *    1.若最后一步跳了1级，则前n-1步跳了n-1阶
 *    2.若最后一步跳了2级，则前n-1步跳了n-2阶
 * 所以一共有 f(n-1) + f(n-2)
 * 
 * @param {*} n 
 */
function numWays(n) {
    if(n<=1)return 1
    let a = 1
    let b = 1
    let res = 1
    for (let i=2;i<=n;i++) {
        res = (a+b) % 1000000007
        a=b
        b=res
    }
    return res
}

console.log(numWays(7))