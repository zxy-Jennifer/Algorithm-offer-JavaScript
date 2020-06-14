
/**
 * 右移：
 *      与1做 & 运算
 * @param {*} n 
 */
function hammingWeight1(n) {
    let res = 0
    while(n) {
        res += n&1
        n >>>= 1
    }
    return res
}

/**
 * (n−1) 解析： 二进制数字 n 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。
 * n & (n−1) 解析： 二进制数字 n 最右边的 1 变成 0 ，其余不变。
 * @param {*} n 
 */
function hammingWeight(n) {
    let res = 0
    while(n!=0) {
        res ++
        n &= (n-1)
    }
    return res
}

let n = 9
console.log(hammingWeight(n))