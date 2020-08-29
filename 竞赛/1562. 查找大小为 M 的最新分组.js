/**
 * 
 * @param {*} arr 
 * @param {*} m 
 */
var findLatestStep = function (arr, m) {
    let len = arr.length
    let dp = new Array(len + 2).fill(0)
    let res = -1
    let map = new Map()
    for (let i = 0; i < len; i++) {
        let index = arr[i]
        let left = dp[index - 1],
            right = dp[index + 1]
        let target = left + right + 1
        dp[index - left] = target, dp[index + right] = target
        map.set(left, map.has(left) ? map.get(left) - 1 : 0)
        map.set(right, map.has(right) ? map.get(right) - 1 : 0)
        map.set(target, map.has(target) ? map.get(target) + 1 : 1)
        if (map.has(m) && map.get(m) > 0) {
            res = i + 1
        }
    }
    return res
};
let arr = [3, 5, 1, 2, 4],
    m = 1
console.log(findLatestStep(arr, m))