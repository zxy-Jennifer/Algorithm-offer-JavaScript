
function combinationSum(candidates, target) {
    let res = []
    candidates.sort((x,y)=>x-y)
    recur(candidates, target, 0, [], res)
    return res

    function recur(can, target, index, path, res) {
        // console.log(target, path)
        if(target === 0) {
            res.push(path.slice())
            return 
        }

        // 在搜索起点 begin 之前的数因为以前的分支搜索过了，所以一定会产生重复
        for(let i=index; i<can.length; i++) {
            // 如果一个数位搜索起点都不能搜索到结果，那么比它还大的数肯定搜索不到结果
            if(can[i] - target > 0) {
                break
            }
            path.push(can[i])
            recur(can, target-can[i], i, path, res)
            path.pop()
        }
    }
}

// [8,7,4,3]
let candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum(candidates, target))