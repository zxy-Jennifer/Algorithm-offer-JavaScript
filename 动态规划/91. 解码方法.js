/**
 *
 * @param {*} s
 */
function numDecodings(s) {
  let len = s.length;
  if (s[0] === "0") {
    return 0;
  }
  let pre = 1,
    cur = 1;
  for (let i = 1; i < len; i++) {
    let tmp = cur;
    if (s[i] === "0") {
      if (s[i - 1] === "1" || s[i - 1] === "2") {
        //   dp[i] = dp[i-2]
        cur = pre;
      } else {
        return 0;
      }
    } else if (
      s[i - 1] === "1" ||
      (s[i - 1] === "2" && s[i] >= "1" && s[i] <= "6")
    ) {
      // dp[i] = dp[i-1] (s[i]与s[i-1]单独编码) + dp[i-2] (s[i]与s[i-1]合并编码)
      cur += pre;
    }
    pre = tmp;
  }
  return cur;
}
