/**
 * 递归
 * @param {*} s
 */
function checkValidString1(s) {
  return dfs(0, 0);

  function dfs(count, start) {
    if (count < 0) {
      return false;
    }
    for (let i = start; i < s.length; i++) {
      let c = s[i];
      if (c === "(") {
        count++;
      } else if (c === ")") {
        if (count-- === 0) {
          return false;
        }
      } else if (c === "*") {
        return (
          dfs(count + 1, start + 1) ||
          dfs(count - 1, start + 1) ||
          dfs(count, start + 1)
        );
      }
    }
    return count === 0;
  }
}
function checkValidString2(s) {
  let max = 0,
    min = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      max++;
      min++;
    } else if (s[i] === ")") {
      if (min > 0) min--;
      if (max-- <= 0) return false;
    } else if (s[i] === "*") {
      if (min > 0) min--;
      ++max;
    }
  }
  return min === 0;
}
function checkValidString3(s) {
  let stack = [],
    star = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else if (star.length > 0) {
        star.pop();
      } else {
        return false;
      }
    } else {
      star.push(i);
    }
  }
  while (stack.length > 0 && star.length > 0) {
    if (stack.pop() > star.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
let s = "((()))()(())(*()()())**(())()()()()((*()*))((*()*)";
console.log(checkValidString3(s));
