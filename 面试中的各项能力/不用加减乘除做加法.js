
/**
 * 利用位运算：a+b = (a^b)+((a&b)<<1)
 * ^ 异或运算法则：两位不同，结果为“1”，否则为0
 * & 按位与运算法则：两位同时为“1”，结果才为“1”，否则为0
 * @param {*} a 
 * @param {*} b 
 */
function add(a,b) {
    let noCarrySum = a^b
    let hasCarry = a&b
    if(!hasCarry) {
        return noCarrySum
    }
    while(hasCarry) {
        let oldCarrySum = noCarrySum
        hasCarry <<= 1
        noCarrySum = oldCarrySum ^ hasCarry
        hasCarry = oldCarrySum & hasCarry
        console.log(noCarrySum, hasCarry)
    }
    return noCarrySum
}
console.log(add(3,-8))