/**
 *
 * @param {*} num1
 * @param {*} num2
 */
function addStrings(num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let i = len1 - 1,
    j = len2 - 1;
  let res = "";
  let carry = 0;
  while (i >= 0 || j >= 0 || carry) {
    // console.log(i, Number(num1[i]), j, Number(num2[j]));
    let sum =
      (i >= 0 ? Number(num1[i--]) : 0) +
      (j >= 0 ? Number(num2[j--]) : 0) +
      carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res = sum + res;
    // console.log(sum, res);
  }
  return res;
}
let num1 = "99",
  num2 = "34";
console.log(addStrings(num1, num2));
