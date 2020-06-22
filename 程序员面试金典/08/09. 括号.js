
/**
 * 回溯法！！！
 * @param {*} n 
 */
function generateParenthesis1(n) {
    let res = []
    recur(n,n,'')
    return res
    function recur(left,right,str) {
        if(left === 0 && right === 0){
            res.push(str)
            return
        }

        if(left > right)return

        if(left > 0) {
            recur(left-1,right,str+'(')
        }

        if(right > 0) {
            recur(left,right-1,str+')')
        }
    }
}

/**
 * 
 * @param {*} n 
 */
function generateParenthesis(n) {
    if(n === 0)return []
    let res = [[""]]

    for(let i=1;i<=n;i++) {
        let cur = []
        for(let j=0;j<i;j++) {
            let str1 = res[j]
            let str2 = res[i-j-1]
            for(let s1 of str1) {
                for(let s2 of str2) {
                    cur.push('('+s1+')'+s2)
                }
            }
        }
        res.push(cur)
    }
    return res[n]
}

console.log(generateParenthesis(3))