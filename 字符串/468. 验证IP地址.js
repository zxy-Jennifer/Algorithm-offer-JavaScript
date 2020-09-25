/**
 *
 * @param {*} IP
 */
function validIPAddress(IP) {
  function isIPv4(str) {
    let num = parseInt(str);
    if (num === 0) {
      return str.length === 0 && str == 0;
    }
    if (!(num >= 0 && num <= 255)) {
      return false;
    }
    if (str.length !== num.toString().length) {
      return false;
    }
    return true;
  }

  function isIPv6(str) {}
}
