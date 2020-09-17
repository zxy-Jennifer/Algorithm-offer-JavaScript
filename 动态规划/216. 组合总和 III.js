/**
 * 
 * @param {*} k 
 * @param {*} n 
 */
function combinationSum3(k, n) {
    let res = []
    let path = []
    backTrack(0, path, 0)
    return res

    function backTrack(index, path, sum) {
        if (path.length === k && sum === n) {
            res.push(path.slice())
            return
        }
        for (let i = index + 1; i <= 9; i++) {
            if (sum + i <= n) {
                sum += i
                backTrack(i, [...path, i], sum)
                sum -= i
            }
        }
    }
}

console.log(combinationSum3(3, 9))