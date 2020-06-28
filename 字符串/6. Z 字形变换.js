/**
 * 
 * @param {*} s 
 * @param {*} numRows 
 */
function convert1(s, numRows) {
    if(numRows<=1)return s
    let dp = new Array(numRows)
    for(let i=0; i<numRows; i++) {
        dp[i] = ''
    }
    let len = s.length
    let index = 0
    let flag = true // false为加，true为减
    for(let i=0; i<len; i++) {
        if(index === numRows-1 || index === 0)flag = !flag
        dp[index] += s[i]
        index += flag ? -1 :1
    }
    let res = ''
    for(let i=0; i<numRows; i++) {
        res += dp[i]
    }
    return res
}

/**
 * 对于所有整数 k：
    * 行 0 中的字符位于索引 k (2 * numRows - 2) 处;
    * 行 numRows−1 中的字符位于索引 k(2⋅numRows−2)+numRows−1 处;
    * 内部的 行 i 中的字符位于索引 k(2⋅numRows−2)+i 以及 (k+1)(2⋅numRows−2)−i 处;
 * 
 * @param {*} s 
 * @param {*} numRows 
 */
function convert(s, numRows) {
    if(numRows<=1)return s
    let res = ''
    let len = s.length
    // cycleLen：放在第一行的字符
    let cycleLen = 2 * numRows - 2;
    for(let i=0; i<numRows; i++) {
        for(let j=0; j + i <len; j+=cycleLen) {
            res += s[i+j]
            if(i !== 0 && i !== numRows - 1 && j + cycleLen - i < len) {
                console.log(i)
                res += s[j + cycleLen - i]
            }
        }
    }
    return res
}

let s = "LEETCODEISHIRING", numRows = 3
console.log(convert1(s, numRows))
console.log(convert(s, numRows))