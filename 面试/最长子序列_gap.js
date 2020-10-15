/**
 *
 * @param {*} arr
 * @param {*} gap
 */
function getRes(arr, gap) {
  let res = 0;
  let len = arr.length;
  if (len <= 0) {
    return res;
  }
  let map = new Map();
  map.set(arr[0], 1);
  for (let i = 1; i < len; i++) {
    let key = arr[i] - gap;
    let value = 1;
    if (map.has(key)) {
      value += map.get(key);
    }
    map.set(arr[i], value);
    res = Math.max(res, value);
  }
  return res;
}
let arr = [1, 2, 3, 4, 6, 8],
  gap = 2;
console.log(getRes(arr, gap));
