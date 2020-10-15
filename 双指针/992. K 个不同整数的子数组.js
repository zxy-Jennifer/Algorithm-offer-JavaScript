/**
 *
 * @param {*} A
 * @param {*} K
 */
function subarraysWithKDistinct(A, K) {
  let len = A.length;
  let res = 0;
  let r = 0,
    l = 0;
  let map = new Map();
  while (r < len) {
    map.set(A[r], (map.has(A[r]) ? map.get(A[r]) : 0) + 1);
    r++;
    while (map.size > K) {
      if (map.get(A[l]) > 1) {
        map.set(A[l], map.get(A[l]) - 1);
      } else {
        map.delete(A[l]);
      }
      l++;
    }
    let temp = l;
    while (map.size === K) {
      res++;
      //   console.log(l, r, map);
      if (map.get(A[temp]) > 1) {
        map.set(A[temp], map.get(A[temp]) - 1);
      } else {
        map.delete(A[temp]);
      }
      temp++;
    }
    while (temp > l) {
      temp--;
      map.set(A[temp], (map.has(A[temp]) ? map.get(A[temp]) : 0) + 1);
    }
  }
  return res;
}
function subarraysWithKDistinct1(A, K) {
  let res = 0;
  let win1 = new Map();
  let win2 = new Map();
  let len = A.length;
  let l1 = 0,
    l2 = 0;
  for (let r = 0; r < len; r++) {
    win1.set(A[r], (win1.has(A[r]) ? win1.get(A[r]) : 0) + 1);
    win2.set(A[r], (win2.has(A[r]) ? win2.get(A[r]) : 0) + 1);
    //   等于K时跳出循环
    while (win1.size > K) {
      if (win1.get(A[l1]) > 1) {
        win1.set(A[l1], win1.get(A[l1]) - 1);
      } else {
        win1.delete(A[l1]);
      }
      l1++;
    }
    //   小于K时跳出循环
    while (win2.size >= K) {
      if (win2.get(A[l2]) > 1) {
        win2.set(A[l2], win1.get(A[l2]) - 1);
      } else {
        win2.delete(A[l2]);
      }
      l2++;
    }
    // console.log(r, l1, l2);
    res += l2 - l1;
  }
  return res;
}
let A = [1, 2, 1, 2, 3],
  K = 2;
console.log(subarraysWithKDistinct(A, K));
console.log(subarraysWithKDistinct1(A, K));
