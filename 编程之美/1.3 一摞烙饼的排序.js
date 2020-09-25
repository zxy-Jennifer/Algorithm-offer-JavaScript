/**
 * 
 * @param {*} A 
 */
function pancakeSort(A) {
    let res = []
    let len = A.length
    let count = A.length
    while (count) {
        let max = Math.max(...A.slice(0, count))
        let index = A.indexOf(max)
        if (index === count - 1) {
            count--
            continue
        }
        if (index === 0) {
            A = A.slice(0, count).reverse().concat(A.slice(count, len))
            res.push(count)
            count--
            continue
        } else {
            // 当前的最大值反转到第一位
            A = A.slice(0, index + 1).reverse().concat(A.slice(index + 1, len))
            // 当前的最大值反转到正确的位置
            if (count === len) {
                A.reverse()
            } else {
                A = A.slice(0, count).reverse().concat(A.slice(index + 1, len))
            }
            res.push(index + 1)
            res.push(count)
            count--
        }
    }
    return res
}
let A = [3, 2, 4, 1]
console.log(pancakeSort(A))