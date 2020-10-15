/**
 *
 * @param {*} candidates
 * @param {*} target
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  candidates = Array.from(new Set(candidates));
  let res = [];
  dfs(target, 0, []);
  return res;

  function dfs(target, index, path) {
    if (index === candidates.length) {
      return;
    }
    if (target === 0) {
      res.push(path.slice());
      return;
    }
    dfs(target, index + 1, path);
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], index, [candidates[index], ...path]);
    }
  }
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 2;
console.log(combinationSum(candidates, target));
