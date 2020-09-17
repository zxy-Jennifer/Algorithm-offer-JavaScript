/**
 * 
 * @param {*} n 
 */
function getRes(n) {
    let path = new Array(2 * n + 1).fill(0)
    let res = []
    recur(1, path)
    return res

    function recur(index, path) {
        if (index > n) {
            // console.log('index', index)
            res.push(path.slice(1).join(''))
        }
        for (let i = 1; i <= n * 2; i++) {
            if (i + index + 1 <= n * 2 && path[i] === 0 && path[i + index + 1] === 0) {
                path[i] = index
                path[i + index + 1] = index
                recur(index + 1, path)
                path[i] = 0
                path[i + index + 1] = 0
            }
        }
    }
}
console.log(getRes(7).length)