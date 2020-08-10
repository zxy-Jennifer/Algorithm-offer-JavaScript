/**
 * 回溯计算
 * @param {*} n 
 */
function solveNQueens(n) {
    let res = []
    let cur = new Array(n).fill(new Array(n).fill('.').join(''))
    recur(cur,0,res)
    function recur(cur, currRow,res) {
        if(currRow === n) {
            res.push(cur.slice())
            return
        }
        for(let col = 0; col<n; col++) {
            // 判断当前位置 (currRow, col) 能否放置
            if(can(currRow, col, cur)){
                // 可以放：
                put(currRow, col, cur, 'Q')
                // 继续放后面的
                recur(cur, currRow+1, res)
                // 再收回
                put(currRow, col, cur, '.')
            }
        }
    }
    return res
    /**
     * 在特定位置摆放
     * @param {*} i 
     * @param {*} j 
     * @param {*} cur 棋盘
     */
    function put(i,j,cur,ch) {
        // let str = new Array(n).fill('.').join('')
        str = cur[i].substring(0,j)+ch+cur[i].substring(j+1)
        cur.splice(i,1,str)
    }
    /**
     * 计算特定位置是否可以摆放
     * @param {*} i 
     * @param {*} j 
     * @param {*} cur 
     */
    function can(row, col, cur) {
        // 主对角线：行列的值相减为常数
        let pos = row - col
        // 斜对角线：行列的值相加为常数
        let neg = row + col
        // 判断行
        if(cur[row].includes('Q'))return false
        for(let i=0;i<n;i++) {
            // 判断列
            if(cur[i][col] === 'Q')return false
            // 
            let j = neg-i
            if(j>=0 && j<n && cur[i][j] === 'Q')return false
            // 
            j = i-pos
            if(j>=0 && j<n && cur[i][j] === 'Q')return false
        }
        return true
    }
}

console.log(solveNQueens(4))