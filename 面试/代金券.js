function getRes(n, coupons) {
    let res = 0
    for(let i=n-1; i>=0; i--) {
        if(coupons[i] === coupons[i-1]) {
            res++
        }
    }
    return res-1
}
let coupons = [1,1,1,1,1], n=5
console.log(getRes(n, coupons))