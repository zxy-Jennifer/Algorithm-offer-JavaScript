
/**
 * 每一步可以在矩阵中向左、右、上、下移动一格
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子
 * 
 * @param {*} board 
 * @param {*} word 
 */
function exist(board, word) {
    let visited = []
    let m = board.length
    let n = board[0].length
    for(let i=0;i<m;i++) {
        visited.push(new Array(n).fill(true))
    }
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(recur(i,j,0)) {
                return true
            }
        }
    }
    return false

    function recur(i, j, index){
        if(index === word.length) {
            return true
        }
        let hasPath = false
        if(i>=0 && i<m && j>=0 && j<n && board[i][j] === word[index] && visited[i][j]) {
            index++
            visited[i][j] = false
            console.log(index)
            
            hasPath = recur(i-1,j,index) || recur(i+1,j,index) || recur(i,j-1,index) || recur(i,j+1,index)
            console.log('hasPath', hasPath)
            if(!hasPath) {
                index--
                visited[i][j] = true
            }
        }
        return hasPath
    }
}



let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

console.log(exist(board, word))