/**
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * @param {*} n 
 */
function fib1(n) {
    if(n<=1)return n
    let a = 0
    let b = 1
    let res = 1
    for (let i=2;i<=n;i++) {
        res = (a+b) % 1000000007
        a=b
        b=res
    }
    return res
}

/**
 * 矩阵快速幂解法
 *                                   |1, 1|
 * [f(n+1), f(n)] = [f(n), f(n-1)] * |    |
 *                                   |1, 0|
 * 
 *                                  |1, 1| ^ n
 *                = [f(1), f(0)] *  |    |
 *                                  |1, 0|
 * 
 *                           |1, 1| ^ n
 *                = [1, 0] * |    |
 *                           |1, 0|
 * 
 * @param {*} n 
 */
function fib(n) {
    if(n<=1)return n
    let m = b = [[1,1],[1,0]]
    let a = [[1,0]]
    for (let i=1;i<n-1;i++) {
        m = getPro(m,b)
    }
    return (getPro(a,m)[0][0]) % 1000000007

    function getPro(a, b) {
        let res = []
        for(let i=0;i<a.length;i++) {
            res.push([])
            for(let j=0;j<a[0].length;j++) {
                let pro = 0
                for(let k=0;k<2;k++) {
                    pro += a[i][k] * b[k][j]
                }
                res[i][j] = pro
            }

        }
        return res
    }
}
console.log(fib1(80))

console.log(fib(80))