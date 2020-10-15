/**
 *
 * @param {*} nums
 */
function subsets(nums) {
  let res = [];
  let path = [];
  let len = nums.length;
  backTrack(0, path);
  return res;

  function backTrack(index, path) {
    res.push(path.slice());
    if (index === len) {
      return;
    }
    for (let i = index; i < len; i++) {
      backTrack(i + 1, [...path, nums[i]]);
    }
  }
}

function subsetsWithDup(nums) {
  let res = [[]];
  let len = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    let dupCount = 1;
    while (i + 1 < len && nums[i] === nums[i + 1]) {
      dupCount++;
      i++;
    }
    // console.log(dupCount, i, res);
    let preNum = res.length;
    for (let k = 0; k < preNum; k++) {
      let addEle = res[k].slice();
      for (let j = 1; j <= dupCount; j++) {
        addEle.push(nums[i]);
        res.push(addEle.slice());
      }
    }
  }
  return res;
}

let nums = [1, 2, 2, 2];
console.log(subsetsWithDup(nums));
