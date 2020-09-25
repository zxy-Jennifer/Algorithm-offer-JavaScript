/**
 *  K = 5,
    N = 1000
 * @param {*} K 
 * @param {*} N 
 */
function superEggDrop11(K, N) {
    let memo = Array.from(new Array(K + 1), () => new Array(N + 1).fill(-1))
    return backTrack(K, N)

    function backTrack(K, N) {
        // 只有一个鸡蛋的话，只能线性扫描所有楼层
        if (K === 1) return N
        if (N === 0) return 0
        if (memo[K][N] !== -1) {
            return memo[K][N]
        }
        // 穷举所有可能的选择
        let res = Infinity
        for (let i = 1; i <= N; i++) {
            // 最坏情况下的最少扔鸡蛋次数
            res = Math.min(res, Math.max(backTrack(K - 1, i - 1) /** 鸡蛋碎了，搜索的楼层区间变为 [1..i-1]，共i-1层楼 */ ,
                backTrack(K, N - i) /** 鸡蛋没碎，搜索的楼层区间变为 [i+1..N] 共 N-i 层楼 */ ) + 1)
        }
        memo[K][N] = res
        return res
    }
}

function superEggDrop(K, N) {
    let memo = Array.from(new Array(K + 1), () => new Array(N + 1).fill(-1))
    return backTrack(K, N)

    function backTrack(K, N) {
        if (K === 1) return N
        if (N === 0) return 0
        if (memo[K][N] !== -1) {
            return memo[K][N]
        }
        let res = Infinity
        let l = 1,
            r = N
        while (l <= r) {
            // 楼层
            let mid = Math.floor((l + r) / 2)
            // 碎 ，搜索：1  -  mid-1
            let broken = backTrack(K - 1, mid - 1)
            // 没碎，搜索 mid+1 - N
            let not_broken = backTrack(K, N - mid)
            if (broken > not_broken) {
                res = Math.min(res, broken + 1)
                r = mid - 1
            } else {
                res = Math.min(res, not_broken + 1)
                l = mid + 1
            }
        }
        memo[K][N] = res
        return res
    }
}
let K = 5,
    N = 10000
console.log(superEggDrop(K, N))