/**
 * 
 * @param {*} nums 
 */
function permuteUnique(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    let len = nums.length
    let visited = new Array(len).fill(false)
    backTrack(0, [])
    return res

    function backTrack(index, path) {
        if (index === len) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue
            }
            visited[i] = true
            backTrack(index + 1, [...path, nums[i]])
            visited[i] = false
        }
    }
}
let nums = [1, 1, 2]
console.log(permuteUnique(nums))