/**
 *
 * @param {*} IP
 */
function validIPAddress(IP) {
  if (IP.includes(".")) {
    let arr = IP.split(".");
    if (arr.length !== 4) {
      return "Neither";
    }
    for (let i = 0; i < arr.length; i++) {
      if (!isIPv4(arr[i])) {
        return "Neither";
      }
    }
    return "IPv4";
  }
  if (IP.includes(":")) {
    let arr = IP.split(":");
    if (arr.length !== 8) {
      return "Neither";
    }
    for (let i = 0; i < arr.length; i++) {
      if (!isIPv6(arr[i])) {
        return "Neither";
      }
    }
    return "IPv6";
  }
  return "Neither";
  function isIPv4(str) {
    let num = parseInt(str);
    console.log(str, num);
    if (num === 0) {
      return str.length === 1 && str == 0;
    }
    if (!(num >= 0 && num <= 255)) {
      return false;
    }
    if (str.length !== num.toString().length) {
      return false;
    }
    return true;
  }

  function isIPv6(str) {
    let num = parseInt(str, 16);
    if (str.length > 4 || str.length <= 0 || isNaN(num)) {
      return false;
    }
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i], 16))) {
        return false;
      }
    }
    return true;
  }
}
let IP = "20EE:FGb8:85a3:0:0:8A2E:0370:7334";
console.log(validIPAddress(IP));
