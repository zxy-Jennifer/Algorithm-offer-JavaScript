
function lastRemaining1(n,m) {
    let arr = Array.from({length:n},(v,k)=>k)
    let index = 0
    for(let i=2;i<=n;i++) {
        let len = arr.length
        // index = (index + (m-1)%len) % len
        // arr.splice(index, 1)
        index = (m-1)%len
        arr.splice(index, 1)
        arr.unshift(...arr.splice(index))
    }
    return arr[0]
}
/**
 * 反推被杀的人的索引号
 * n:5,m:3   0 1 2 3 4
 * 
 * ’‘表示本轮被杀的人                               活着的人的索引号
 * n=5   0  1 '2' 3  4                                ^  3    (0+3)%5=3
 * n=4   3  4 '0' 1     =>    3  4 '0' 1  "2"         ^  0    (1+3)%4=0
 * n=3   1  3 '4'                                     |  1    (1+3)%3=1
 * n=2  '1' 3                                         ^  1    (0+3)%2=1
 * n=1   3                                            |  0 
 * 反推：
 * 
 * @param {*} n 
 * @param {*} m 
 */
function lastRemaining(n,m) {
    let ans = 0
    for(let i=2;i<=n;i++) {
        ans = (ans + m) % i
        // +m：上一轮被杀的人补回来，并且右移m个
        // %i：将溢出部分添加到最前面
    }
    return ans
}
console.log(lastRemaining1(9,13))