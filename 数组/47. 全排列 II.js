
function permuteUnique(nums) {
    let res = []
    let path = []
    let len = nums.length
    if(len === 0)return res
    path.sort((a,b)=>a-b)
    // console.log(path, nums)
    let used = new Array(len).fill(false)
    recur(res, path, len, 0, nums, used)
    return res

    function recur(res, path, len, index, nums, used) {
        if(index === len) {
            res.push(path.slice())
            return 
        }

        for(let i=0; i<len; i++) {
            if(used[i])continue
            // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
            if(i>0 && nums[i] === nums[i-1] && !used[i-1]) continue
            path.push(nums[i])
            used[i] = true
            recur(res, path, len, index+1, nums, used);
            used[i] = false
            path.pop()
        }
    }
}
console.log(permuteUnique([3,3,0,3]))