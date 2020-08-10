
function fib(n) {
    let a=1, b=1, c=1
    for(let i=2; i<=n; i++) {
        c=a+b;
        a=b;
        b=c
        // console.log(i,a,b,c)
    }
    return c
}
// 1,1,2,3,5,8
let n = 50
console.log(fib(n))