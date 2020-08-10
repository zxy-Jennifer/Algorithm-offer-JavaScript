/**
 * '.'表示任意一个字符
 * '*'表示它前面的字符可以出现任意次（含0次)
 * 递归
 * @param {*} s 
 * @param {*} p 
 */
function isMatch1(s, p) {
    if(s === null || p === null)return false
    return recur(s, p, 0, 0)

    function recur(s, p, i, j) {
        if(i === s.length && j === p.length)return true
        if(i !== s.length && j === p.length)return false
        // p的下一个字符可以匹配任意多个前一个字符
        if(p[j+1] === '*') {
            // 当前字符可匹配
            if(s[i] === p[j] || (i<s.length && p[j] === '.')) {
                return recur(s,p,i,j+2) || // 0个
                recur(s,p,i+1,j+2) || //1个
                recur(s,p,i+1,j) //两个或多个
            }else {
                // 当前字符不可匹配
                return recur(s,p,i,j+2)
            }
        }
        // 如果当前字符可匹配，但p的下一个不是*
        if(s[i] === p[j] || (i<s.length && p[j] === '.')) {
            return recur(s,p,i+1,j+1)
        }
        return false
    }
}

/**
 * 动态规划解法
 * @param {*} s 
 * @param {*} p 
 */
function isMatch(s, p) {
    let m = s.length
    let n = p.length
    let dp = new Array(m+1)
    for(let i = 0;i<= m;i++) {
        dp[i] = new Array(n+1).fill(false)
    }
    
    for(let i=0;i<=m;i++) {
        for(let j=0;j<=n;j++) {
            if(j===0) {
                dp[i][j] = i===0
            } else {
                // p的上一个是 *
                if(p[j-1] === '*') {
                    // 直接砍掉正则串的后面两个
                    if(j >=2 ) {
                        dp[i][j] = dp[i][j-2] || dp[i][j]
                    }
                    // 当前字符可匹配
                    // 正则串不动，主串前移一个
                    if(i>=1 && j>=2 && (s[i-1] === p[j-2] || p[j-2] === '.')) {
                        dp[i][j] = dp[i-1][j] || dp[i][j]
                    }
                }
                else {
                    // p的上一个不是 * 且 当前字符可匹配
                    if(i>0 && (s[i-1] === p[j-1] || p[j-1] === '.')) {
                        dp[i][j] = dp[i-1][j-1]
                    }
                }
            }
        }
    }
    // console.log(dp)
    return dp[m][n]
}

console.log(isMatch("aaa","ab*a*c*a"))