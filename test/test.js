function getRes(str) {
  let tmp = [];
  let index = 0;
  if (!str || str.length === 0) {
    return 0;
  }
  let j = 0;
  // 处理字符串
  for (let i = 0; i <= str.length; i++) {
    let c = str[i];
    if (c === "+" || c === "-" || c === "*" || c === "/") {
      if (
        i > 0 &&
        (str[i - 1] === "+" ||
          str[i - 1] === "-" ||
          str[i - 1] === "*" ||
          str[i - 1] === "/")
      ) {
        j = i + 1;
        continue;
      }
      tmp[index++] = str.substring(j, i);
      tmp[index++] = c;
      j = i + 1;
    }
    if (i === str.length) {
      tmp[index++] = str.substring(j, i + 1);
    }
  }
  //   let tmp = [];
  //   console.log(tmp);
  let count = -1;
  for (let i = 0; i < tmp.length; i++) {
    let c = tmp[i];
    switch (c) {
      case "*":
        tmp[count] = parseInt(tmp[count]) * parseInt(tmp[i + 1]);
        i++;
        break;
      case "/":
        if (parseInt(tmp[i + 1]) == 0) {
          throw new Error("");
        }
        tmp[count] = Math.floor(parseInt(tmp[count]) / parseInt(tmp[i + 1]));
        i++;
        break;
      default:
        tmp[++count] = c;
        break;
    }
    // console.log("tmpzzzzzzzzz: ", tmp);
  }
  //   console.log("tmp,count", count, tmp);
  let i = 0;
  for (; i <= count; i++) {
    if (tmp[i] === "+") {
      let val = parseInt(tmp[i - 1]) + parseInt(tmp[i + 1]);
      tmp[++i] = val + "";
    }
    if (tmp[i] === "-") {
      let val = parseInt(tmp[i - 1]) - parseInt(tmp[i + 1]);
      tmp[++i] = val + "";
    }
    // console.log("tmp" + i + ": " + tmp);
  }
  //   console.log(tmp, i);
  let res = tmp[i - 1];
  return res;
}

console.log(getRes("3/2"));
