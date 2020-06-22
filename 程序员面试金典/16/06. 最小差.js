
/**
 * 动态规划
 * @param {*} a 
 * @param {*} b 
 */
function smallestDifference1(a,b) {
    let lena = a.length
    let lenb = b.length
    if(lena === 0 || lenb === 0)return null
    let dp = []
    for(let i=0;i<lena;i++) {
        dp.push(new Array(lenb).fill(0))
    }
    dp[0][0] = Math.abs(a[0]-b[0])
    for(let i=0;i<lena;i++) {
        for(let j=0;j<lenb;j++) {
            let diff = Math.abs(a[i]-b[j])
            if(i===0&&j===0) {dp[i][j] = diff}
            else {
                up = (i>0&&j>0) ? Math.min(dp[i][j-1],dp[i-1][j]) : (i>0 ? dp[i-1][j] : dp[i][j-1])
                dp[i][j] = Math.min(up,diff)
            }
        }
    }
    return dp[lena-1][lenb-1]
}

function smallestDifference(a,b) {
    a.sort((m,n)=>{return m-n})
    b.sort((m,n)=>{return m-n})

    let res = Infinity
    let lena = a.length
    let lenb = b.length
    let i=0,j=0
    while(i<lena && j<lenb) {
        if(a[i]<b[j]) {
            res = Math.min(res, b[j]-a[i])
            i++
        }else if(a[i]>b[j]) {
            res = Math.min(res, a[i]-b[j])
            j++
        }else {
            return 0
        }
    }
    return res
}


let a=[1, 3, 15, 11, 2], b=[23, 127, 235, 19, 8]
console.log(smallestDifference(a,b))