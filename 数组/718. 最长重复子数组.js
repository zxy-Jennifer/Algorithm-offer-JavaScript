/**
 * 动态规划
 * @param {*} A 
 * @param {*} B 
 */
function findLength1(A, B) {
    let len1 = A.length
    let len2 = B.length
    if(len1 === 0 || len2 === 0)return 0
    let dp = new Array(len1+1)
    for(let i=0; i<=len2; i++) {
        dp[i] = new Array(len2+1).fill(0)
    }
    let res = 0
    for(let i=len1-1; i>=0; i--) {
        for(let j=len2-1; j>=0; j--) {
            if(A[i] !== B[j]) {
                dp[i][j] = 0
            }else {
                dp[i][j] = dp[i+1][j+1] + 1
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    return res
}

/**
 * 滑动窗口
 * @param {*} A 
 * @param {*} B 
 */
function findLength(A, B) {
    let len1 = A.length
    let len2 = B.length
    if(len1 === 0 || len2 === 0)return 0
    let res = 0
    for(let i=0; i<len1; i++) {
        let len = Math.min(len2, len1-i)
        let maxLen = maxLength(A, B, i, 0, len)
        res = Math.max(res, maxLen)
    }

    for(let i=0; i<len2; i++) {
        let len = Math.min(len1, len2-i)
        let maxLen = maxLength(A, B, 0, i, len)
        res = Math.max(res, maxLen)
    }
    return res

    function maxLength(A, B, m, n, len) {
        let res = 0
        let k = 0
        for(let i=0; i<len; i++) {
            if(A[i+m] === B[i+n]) {
                k++
            }else {
                k=0
            }
            res = Math.max(res, k)
        }
        return res
    }
}

let A = [1,2,3,2,1], B = [3,2,1,4,7]
console.log(findLength(A, B))