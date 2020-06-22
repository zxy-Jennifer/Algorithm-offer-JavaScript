
/**
 * 动态规划：
 * dp[i][j]：执完i枚骰子之后j出现的次数
 * 状态转移方程：第n枚骰子，它的点数可能为1,2,3,...,6 因此投掷完n枚骰子后点数j出现的次数,可以由投掷完n-1枚骰子后，对应点数j−1,j−2,j−3,...,j−6出现的次数之和转化过来。
 * for(let i=1;i<=6;i++) {
 *      dp[n][j] += dp[n-1][j-i]
 * }
 * 第一阶段的状态：投掷完1枚骰子后，它的可能点数分别为1,2,3,... ,6并且每个点数出现的次数都是1
 * @param {*} n 
 */
function twoSum1(n) {
    let dp =[]
    let num = n * 6
    for(let i=0;i<=n;i++) {
        dp.push(new Array(num+1).fill(0))
    }

    // 如果只有一个骰子，1到6出现的次数都为1
    for(let i=1;i<=6;i++) {
        dp[1][i] = 1
    }

    for(let i=2;i<=n;i++) {
        for(let j=i;j<=i*6;j++) {
            for(let k=1;k<=6;k++) {
                if(j-k<0) {
                    break
                }
                dp[i][j] += dp[i-1][j-k]
            }
        }
    }
    // 打印所有可能出现的点数的概率
    let all = Math.pow(6,n)
    let res = []
    for(let i=n;i<=num;i++) {
        res.push(dp[n][i]*1.0/all)
    }
    return res
}
/**
 * 动态规划法的空间优化：二维数组 => 一维数组
 * @param {*} n 
 */
function twoSum(n) {
    let num = n*6
    let dp = new Array(70).fill(0)
    for(let i=1;i<=6;i++) {
        dp[i] = 1
    }

    for(let i=2;i<=n;i++) {
        for(let j=i*6;j>=i;j--) {
            // dp[j] = 0
            // k：1-6，第n个骰子可能掷出的点数
            // 加上第n-1个骰子掷出的点数为j-k，总的点数为j
            // for(let k = 1;k<=6;k++) {
            //     if(j-k<i-1) {
            //         // i-1个骰子不可能掷出小于i-1的点数
            //         break
            //     }
            //     dp[j] += dp[j-k]
            // }
            dp[j]=dp.slice(Math.max(j-6,i-1),j).reduce((sum,cur)=>sum+cur,0)
        }
    }
    return dp.slice(n,num).map(item=>item/Math.pow(6,n)).filter(Boolean)
}
console.log(twoSum(2))