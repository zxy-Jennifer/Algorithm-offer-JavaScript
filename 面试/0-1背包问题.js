/**
 * 
 * @param {*} bagItems 
 * @param {*} bagSize 
 */
function get01PackageAnswer(w, v, bagSize) {
    let num = w.length
    let dp = Array.from(new Array(num+1), ()=>new Array(bagSize+1).fill(0))
    // let dp = Array.from(new Array(n), ()=> new Array(26).fill(0));
    for(let i=1; i<=num; i++) {
        for(let j=0; j<=bagSize; j++) {
            dp[i][j] = dp[i-1][j]
            if(j>=w[i]) {
                // 背包容量可以装下当前物品：
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-w[i]] + v[i])
            }
        }
    }
    console.log(dp)
    return dp[num][bagSize]
}
let w = [10, 3, 4, 5], v= [3, 4, 6, 7], bagSize = 10
console.log(get01PackageAnswer(w, v, bagSize))