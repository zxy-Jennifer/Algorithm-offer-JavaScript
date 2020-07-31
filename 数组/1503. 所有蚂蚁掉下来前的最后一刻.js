
function getLastMoment(n, left, right) {
    if(!left || !right || n===0)return 0
    let llen = left.length
    let max = llen!==0?Math.max(...left)-0:0

    let rlen = right.length
    let min = rlen!==0?n-Math.min(...right):0
    return Math.max(max, min)
}
let n = 4, left = [0], right = []
console.log(getLastMoment(n, left, right))