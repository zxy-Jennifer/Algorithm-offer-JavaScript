
/**
 * 按括号序列的长度递归
 * 每一个括号序列可以用 (a)b 来表示
 * 其中 a 与 b 分别是一个合法的括号序列（可以为空）
 * @param {*} n 
 */
function generateParenthesis1(n) {
    if(n<=0)return []
    let res = [[""]]

    for(let i=1; i<=n; i++) {
        let cur = []
        for(let j=0; j<i; j++) {
            let str1 = res[j]
            let str2 = res[i-j-1]
            for(let s1 of str1) {
                for(let s2 of str2) {
                    cur.push('(' + s1 + ')' + s2)
                } 
            }
        }
        res.push(cur)
    }
    return res[n]
}

/**
 * 回溯法
 * @param {*} n 
 */
function generateParenthesis(n) {
    let res = []
    recur(n, n, '')
    return res

    function recur(left, right, path) {
        if(left === 0 && right === 0) {
            // console.log(path)
            res.push(path)
            return
        }
        // 左括号数小于大括号数
        if(left > right)return
        // 还可以放左括号
        if(left > 0) recur(left-1, right, path+'(')
        // 还可以放右括号
        if(right > 0) recur(left, right-1, path+')')
    }
}
// console.log(generateParenthesis1(3))

console.log(generateParenthesis(3))