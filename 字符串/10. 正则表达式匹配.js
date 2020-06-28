
function isMatch(s, p) {
    if(s === null || p === null)return false
    return recur(s, p, 0, 0)

    function recur(s, p, i, j) {
        if(s.length === i && p.length === j)return true
        if(s.length !== i && p.length === j)return false
        // '*' 匹配零个或多个前面的那一个元素
        // p 的下一个字符可以匹配任意多个前一个字符
        if(p[j+1] === '*') {
            // '.' 匹配任意单个字符
            // 当前字符可匹配
            if(p[j] === s[i] || (i<s.length && p[j] === '.')) {
                return recur(s, p, i+1, j) ||
                       recur(s, p, i+1, j+2) ||
                       recur(s, p, i, j+2)
            }else {
                return recur(s, p, i, j+2)
            }
        }
        if(p[j] === s[i] || (i<s.length && p[j] === '.')) {
            return recur(s, p, i+1, j+1)
        }
        return false
    }
}

console.log(isMatch("aaha","ab*a*c*a"))