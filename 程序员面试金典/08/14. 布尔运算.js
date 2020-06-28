
/**
 * &：按位与
 * |：按位或
 * ^：异或运算符
 * @param {*} s 
 * @param {*} result 
 */
function countEval(s, result) {
    let len = s.length
    // let dp = new Array(len).fill(new Array(len).fill(new Array(2).fill(-1)))
    let dp = new Array(len)
    for(let i=0; i<len; i++) {
        dp[i] = new Array(len)
        for(let j=0; j<len; j++) {
            dp[i][j] = new Array(2).fill(-1)
        }
    }
    console.log(dp)
    let res = recur(0, s.length-1, result, dp)
    console.log(dp)
    return res

    /**
     * 返回从索引start到end值为result的不同括号方案的个数
     * @param {*} start 
     * @param {*} end 
     * @param {*} result 
     */
    function recur(start,end,result,dp) {
        if(start === end)return s[start] == result ? 1 : 0
        if(dp[start][end][result] !== -1){
            return dp[start][end][result]
        }

        let res = 0
        for(let i = start; i<end; i+=2) {
            for(let m = 0; m<=1; m++) {
                for(let n=0; n<=1; n++) {
                    if(getResult(m, n, s[i+1]) === result) {
                        res += recur(start, i, m, dp) * recur(i + 2, end, n, dp)
                    }
                }
            }
        }
        dp[start][end][result] = res
        return res
    }
    /**
     * 
     * @param {*} i 
     * @param {*} j 
     * @param {*} operation 
     */
    function getResult(i,j,operation) {
        switch(operation) {
            case '&':
                return i&j
            case '|':
                return i|j
            case '^':
                return i^j
        }
        return i & j
    }
}

let s = "1^0|0|1", result = 1
/**
 * "1^0|0|1"
 * 2：
 *      1^(0|(0|1))   
 *      1^((0|0)|1)
 * 
 * 
 * s = "0&0&0&1^1|0", result = 1
 * 
 */
console.log(countEval(s,result))