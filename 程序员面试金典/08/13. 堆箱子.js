

/**
 * 动态规划
 * @param {*} box 
 */
function pileBox(box) {
    box.sort((a,b)=>a[0] === b[0] ? a[1] === b[1] ? b[2]-a[2] : b[1]-a[1] : a[0]-b[0])
    let len = box.length
    // 记录j做底得到的最大值
    let dp = new Array(len).fill(0)
    dp[0] = box[0][2]
    let res = dp[0]
    for(let i=1;i<len;i++) {
        // i做底
        let max = 0
        let height = box[i][2]
        let depth = box[i][1]
        for(let j=0;j<i;j++) {
            if(height > box[j][2] && depth > box[j][1]) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + height
        res = Math.max(res, dp[i])
    }
    return res
}

let box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
console.log(pileBox(box))