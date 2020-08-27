/**
 * 动态规划
 * @param {*} envelopes 
 */
function maxEnvelopes1(envelopes) {
    envelopes.sort((a,b) => a[0]===b[0]?b[1]-a[1]:a[0]-b[0])
    let res=0
    let len = envelopes.length
    let dp = new Array(len).fill(1)
    for(let i=0; i<len; i++) {
        for(let j=0; j<i; j++) {
            if(envelopes[i][0]>envelopes[j][0] && envelopes[i][1]>envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
        res = Math.max(dp[i], res)
    }
    return res
}
/**
 * 二分法
 * @param {*} envelopes 
 */
function maxEnvelopes(envelopes) {
    envelopes.sort((a,b) => a[0]===b[0]?b[1]-a[1]:a[0]-b[0])
    console.log(envelopes)
    if(envelopes.length<=0)return 0
    let arr = []
    for(let i=0; i<envelopes.length;i++) {
        arr.push(envelopes[i][1])
    }
    return lengthOfLIS(arr)

    function lengthOfLIS(arr) {
        let res=1
        let len = envelopes.length
        // 单调栈
        let dp = new Array(len).fill(0)
        dp[1] = arr[0]
        for(let i=1; i<len; i++) {
            if(dp[res]<arr[i]) {
                dp[++res] = arr[i]
            }else {
                let l=0, r=res, pos=0
                while(l<=r) {
                    let mid = Math.floor((l+r)/2)
                    if(dp[mid]<arr[i]) {
                        pos=mid
                        l=mid+1
                    }else {
                        r=mid-1
                    }
                }
                dp[pos+1] = arr[i]
            }
        }
        console.log(dp, res)
        return res
    }
}

let envelopes = [[46,89],[50,53],[52,68],[72,45],[77,81]]
console.log(maxEnvelopes(envelopes))