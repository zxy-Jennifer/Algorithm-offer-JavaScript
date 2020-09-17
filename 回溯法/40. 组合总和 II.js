var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = []
    dfs(target, 0, [])
    return res

    function dfs(target, index, path) {

        if (target === 0) {
            res.push(path.slice())
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (target - candidates[i] < 0) {
                break
            }
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue
            }
            dfs(target - candidates[i], i + 1, [...path, candidates[i]])
        }
    }
};
let candidates = [2, 5, 2, 1, 2],
    target = 5
// [1,1,2,5,6,7,10]
console.log(combinationSum2(candidates, target))