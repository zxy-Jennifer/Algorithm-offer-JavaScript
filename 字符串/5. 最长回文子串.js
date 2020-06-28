
/**
 * 动态规划
 * @param {*} s 
 */
function longestPalindrome1(s) {
    let maxLen = 1
    let index = 0
    let len = s.length
    let dp = new Array(len)
    for(let i=0; i<len; i++) {
        dp[i] = new Array(len).fill(false)
        dp[i][i] = true
    }
    if(len<2)return s
    for(let j=1; j<len; j++) {
        for(let i=0; i<j; i++) {
            if(s[i] !== s[j]){
                dp[i][j] = false
            }else {
                if(j-i < 3) {
                    dp[i][j] = true
                }else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if(dp[i][j] && (j-i+1) > maxLen) {
                maxLen = j-i+1
                index = i
            }
        }
    }
    return s.substring(index, maxLen+index)
}
/**
 * 中心扩散法
 * @param {*} s 
 */
function longestPalindrome(s) {
    let len = s.length
    if(s<2)return s
    let maxLen = 1
    let res = s.substring(0, 1)
    for(let i=0; i<len-1; i++) {
        let s1 = centerSpread(i,i,s)
        let s2 = centerSpread(i,i+1,s)
        let maxStr = s1.length > s2.length ? s1 : s2
        if(maxStr.length > maxLen) {
            maxLen = maxStr.length
            res = maxStr
        }
    }
    return res

    function centerSpread(left, right, s) {
        let len = s.length
        let i = left, j = right
        while(i>=0 && j<len) {
            if(s[i] === s[j]) {
                i--
                j++
            }else {
                break
            }
        }
        return s.substring(i+1, j)
    }
}

let s = "qccbabcc"
console.log(longestPalindrome(s))