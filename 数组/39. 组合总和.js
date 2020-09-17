function combinationSum(candidates, target) {
    let res = []
    candidates.sort((x, y) => x - y)
    recur(target, 0, [], res)
    return res

    function recur(target, index, path) {
        // console.log(target, path)
        if (index === candidates.length) {
            return
        }
        if (target === 0) {
            res.push(path.slice())
            return
        }

        // 在搜索起点 begin 之前的数因为以前的分支搜索过了，所以一定会产生重复
        recur(target, index + 1, path)
        // 如果一个数位搜索起点都不能搜索到结果，那么比它还大的数肯定搜索不到结果
        if (candidates[index] - target <= 0) {
            path.push(candidates[index])
            recur(target - candidates[index], index, path)
            path.pop()
        }
    }
}

var combinationSum22 = function (candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
};

// [8,7,4,3]
let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 2
console.log(combinationSum(candidates, target))
console.log(combinationSum22(candidates, target))