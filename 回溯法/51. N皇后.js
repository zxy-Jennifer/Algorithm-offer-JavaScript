/**
 * 
 * @param {*} n 
 */
function solveNQueens(n) {
    let board = Array.from(new Array(n), () => new Array(n).fill('.').join(''))
    // new Array(n).fill(new Array(n).fill('.').join(''))
    let res = []
    for (let i = 0; i < n; i++) {
        handlePut(0, i, 'Q')
        recur(1)
        handlePut(0, i, '.')
    }
    return res

    // 回溯摆放
    function recur(index) {
        if (index === n) {
            res.push(board.slice())
            return
        }

        for (let i = 0; i < n; i++) {
            if (canPut(index, i)) {
                handlePut(index, i, 'Q')
                recur(index + 1)
                handlePut(index, i, '.')
            }
        }
    }

    // 计算特定位置是否可以摆放
    function canPut(row, col) {
        let pos = row - col
        let neg = row + col
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') return false
            if (board[row][i] === 'Q') return false
            let j = i - pos
            if (j >= 0 && j < n && board[i][j] === 'Q') return false
            j = neg - i
            if (j >= 0 && j < n && board[i][j] === 'Q') return false
        }
        return true
    }
    // 在特定位置摆放 char 
    function handlePut(row, col, char) {
        let str = board[row].substring(0, col) + char + board[row].substring(col + 1)
        board.splice(row, 1, str)
    }
}

function solveNQueens11(n) {
    let res = []
    let board = Array.from(new Array(n), () => new Array(n).fill('.').join(''))
    for (let i = 0; i < n; i++) {
        if (canPut(0, i)) {
            handlePut(0, i, 'Q')
            backTrack(1)
            handlePut(0, i, '.')
        }
    }
    return res

    /**
     * 
     * @param {*} index 行！
     */
    function backTrack(index) {

        if (index === n) {
            console.log('hahahaha')
            res.push(board.slice())
            return
        }
        for (let i = 0; i < n; i++) {
            if (canPut(index, i)) {
                handlePut(index, i, 'Q')
                backTrack(index + 1)
                handlePut(index, i, '.')
            }
        }
    }

    // 摆放
    function handlePut(i, j, char) {
        // board[i][j] = char
        let str = board[i].substr(0, j) + char + board[i].substring(j + 1, n)
        board.splice(i, 1, str)
    }
    // 判断是否可以摆放
    function canPut(row, col) {
        let pos = row - col
        let neg = row + col
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q' || board[row][i] === 'Q') {
                return false
            }
            let j = i - pos
            let k = neg - i
            if ((j >= 0 && j < n && board[i][j] === 'Q') || (k < n && k >= 0 && board[i][k] === 'Q')) {
                return false
            }
        }
        return true
    }
}

console.log(solveNQueens11(4))