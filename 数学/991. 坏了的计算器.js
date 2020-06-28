
/**
 * 更多的执行乘法操作！！！！
 * x*2 => y/2
 * x-1 => y+1
 *  [(Y+2) / 2 vs Y/2 + 1]
 *  [(Y+3) / 2 vs (Y+1) / 2 + 1]
 * @param {*} x 
 * @param {*} y 
 */
function brokenCalc(x, y) {
    let res = 0
    while(x<y) {
        res++
        if(y&1) y++
        else y/=2
    }
    return x+res-y
}
let X = 3, Y = 10
console.log(brokenCalc(X, Y))