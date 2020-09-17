function combinationSum2(candidates, target) {
    let res = []
    candidates.sort((x, y) => x - y)
    recur(candidates, target, 0, [], res)
    return res

    function recur(can, target, index, path, res) {
        // console.log(target, path)
        if (target === 0) {
            res.push(path.slice())
            return
        }

        // 在搜索起点 begin 之前的数因为以前的分支搜索过了，所以一定会产生重复
        for (let i = index; i < can.length; i++) {
            // 如果一个数位搜索起点都不能搜索到结果，那么比它还大的数肯定搜索不到结果
            if (can[i] - target > 0) {
                break
            }

            // 去重
            if (i > index && can[i] == can[i - 1]) {
                continue;
            }
            path.push(can[i])
            // i+1：当前索引的值不可以重复使用
            recur(can, target - can[i], i + 1, path, res)
            path.pop()
        }
    }
}
let candidates = [2, 5, 2, 1, 2],
    target = 5
console.log(combinationSum2(candidates, target))