/**
 *
 * @param {*} s
 * @param {*} str
 */
function getRes(base, str) {
  let all_words = new Map();
  let len1 = base.length;
  let index = 1;
  for (let i = 0; i < len1; i++) {
    all_words.set(base[i], index);
    index = index << 1;
  }
  //   console.log(all_words);
  // all_words：{'A':1, 'B':2, 'C':4, 'D':8}
  let len2 = str.length;
  let map = new Map();
  let current = 0;
  let res = 0;
  map.set(current, -1);
  for (let i = 0; i < len2; i++) {
    let c = str[i];
    if (all_words.has(c)) {
      index = all_words.get(c);
      current ^= index;
    }
    if (!map.has(current)) {
      map.set(current, i);
    } else {
      res = Math.max(res, i - map.get(current));
    }
  }
  return res;
}
let base = "ABCD",
  str = "AABCDBAEECDAEF";
console.log(getRes(base, str));
