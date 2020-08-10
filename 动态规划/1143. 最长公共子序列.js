/**
 * 动态规划
 * @param {*} text1 
 * @param {*} text2 
 */
function longestCommonSubsequence(text1, text2) {
    let len1 = text1.length
    let len2 = text2.length
    if(len1===0 || len2===0)return 0
    let dp = Array.from(new Array(len1+1), ()=>new Array(len2+1).fill(0))
    for(let i=0; i<len1; i++) {
        for(let j=0; j<len2; j++) {
            if(text1[i] === text2[j]) {
                dp[i+1][j+1] = dp[i][j]+1
            }else {
                dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j])
            }
        }
    }
    console.log(dp)
    return dp[len1][len2]
}

let text1 = "abc", text2 = "def" 
console.log(longestCommonSubsequence(text1, text2))