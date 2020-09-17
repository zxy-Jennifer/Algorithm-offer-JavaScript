function permute(nums) {
    let len = nums.length
    let visited = new Array(len).fill(false)
    let res = []
    let path = []
    recur(path)
    return res

    function recur(path) {
        if (path.length === len) {
            res.push(path.slice())
        }
        for (let i = 0; i < len; i++) {
            if (!visited[i]) {
                visited[i] = true
                recur([...path, nums[i]])
                visited[i] = false
            }
        }
    }
}
console.log(permute([1, 2, 3]))