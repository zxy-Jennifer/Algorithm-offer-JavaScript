/**
 * 栈
 * @param {*} S
 */
function scoreOfParentheses1(S) {
  let len = S.length;
  let stack = [0]; // 当前的分数为0
  for (let i = 0; i < len; i++) {
    if (S[i] === "(") {
      stack.push(0);
    } else {
      let cur = stack.pop();
      let preScore = stack.pop();
      stack.push(preScore + Math.max(cur * 2, 1));
    }
  }
  return stack.pop();
}
function scoreOfParentheses(S) {
  let res = 0,
    depth = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      depth++;
    } else {
      depth--;
      if (S[i - 1] === "(") {
        res += 1 << depth;
      }
    }
  }
  return res;
}
let S = "(()(()))";
console.log(scoreOfParentheses(S));
