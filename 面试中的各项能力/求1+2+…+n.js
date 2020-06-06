/**
 * 不使用乘法和除法
 */

/**
 * 把乘法和除法换成log的加法和减法
 * @param {*} n 
 */
function sumNums1(n) {
    return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)));
}

/**
 * 递归 加 &&
 * &&：有一个为0则结果为0，都不为0则结果为符号右边的数字
 * @param {*} n 
 */
function sumNums2(n) {
    return n && sumNums(n-1) + n
}

/**
 * 幂运算 加 移位: (n^2+n)/2
 * @param {*} n 
 */
function sumNums3(n) {
    return (n**2 + n) / 2
}

/**
 * 利用reduce函数
 * 因为数组的索引是0到n-1，因此要给reduce函数赋初始值n
 * @param {*} n 
 */
function sumNums(n) {
    return Array(n).fill(0).reduce((sum,v,i)=>sum+i,n)
}
console.log(sumNums(3))