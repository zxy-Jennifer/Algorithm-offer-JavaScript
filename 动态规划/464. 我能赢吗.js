/**
 * @param {*} maxChoosableInteger 整数池中可选择的最大数
 * @param {*} desiredTotal 累计和
 */
function canIWin(maxChoosableInteger, desiredTotal) {
    if((1+maxChoosableInteger)*maxChoosableInteger/2 < desiredTotal){
        return false
    }
    // 使用dp数组来记录对应状态下第一个人先选的情况下是否能赢的情况
    // dp[state] = true：在state的状态下可以赢
    // dp[state] = false：在state的状态下不可以赢
    let dp = new Array(1<<maxChoosableInteger)
    return recur(desiredTotal, dp, 0)

    function recur(desiredTotal, dp, state) {
        if(dp[state])return dp[state]

        for(let i=1; i<=maxChoosableInteger; i++) {
            let cur = 1<<(i-1)
            // 对于数字i来说，如果其在state对应二进制从左往右数第i个位置为1说明数字i被使用过了，否者没有被使用过。
            if(cur&state)continue
            // state|cur：state对应二进制从左往右数第i个位置 置为1
            if(desiredTotal-i<=0 || !recur(desiredTotal-i, dp, state|cur)) {
                return dp[state] = true
            }
        }
        return dp[state] = false
    }
}

let maxChoosableInteger = 10, desiredTotal = 11
console.log(canIWin(maxChoosableInteger, desiredTotal))