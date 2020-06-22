

/**
 * 
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
                recur(cur, currRow+1, res)
                put(currRow, col, cur, '.')
            }
        }
    }
    return res


    /**
     * 在特定位置摆放
     * @param {*} i 
     * @param {*} j 
     * @param {*} cur 
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
        let pos = row - col
        let neg = row + col
        if(cur[row].includes('Q'))return false
        for(let i=0;i<n;i++) {
            if(cur[i][col] === 'Q')return false
            let j = neg-i
            if(j>=0 && j<n && cur[i][j] === 'Q')return false
            j = i-pos
            if(j>=0 && j<n && cur[i][j] === 'Q')return false
        }
        return true
    }
}

console.log(solveNQueens(4))