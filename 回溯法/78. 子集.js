/**
 * 
 * @param {*} nums 
 */
function subsets(nums) {
    let res = []
    let path = []
    let len = nums.length
    backTrack(0, path)
    return res

    function backTrack(index, path) {
        res.push(path.slice())
        if (index === len) {
            return
        }
        for (let i = index; i < len; i++) {
            backTrack(i + 1, [...path, nums[i]])
        }
    }
}

let nums = [1, 2, 3, 4]
console.log(subsets(nums))