/**
 * digit：数字的位数
 * start：digit位数的起始数字
 * count：digit位数字的数量
 * @param {*} n 
 */
function findNthDigit(n) {
    let digit = 1
    let start = 1
    let count = 9
    while(n>count) {
        n -= count
        digit++
        start *= 10
        count = digit * start * 9
    }
    // digit：n所在数字的位数
    // num：n所在的数字
    let num = start + parseInt((n-1)/digit)
    return parseInt(String(num).charAt(parseInt((n-1)%digit)))
}

console.log(findNthDigit(11))