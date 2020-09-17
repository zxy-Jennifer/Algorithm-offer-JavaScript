/**
 * 
 * @param {*} board 
 */
function solveSudoku(board) {

    backTrack(0, 0)
    return board

    function backTrack(r, c) {
        if (c === 9) {
            c = 0
            r++
            if (r === 9) {
                return true
            }
        }
        if (board[r][c] !== '.') {
            return backTrack(r, c + 1)
        }

        for (let num = 1; num <= 9; num++) {
            if (canPut(r, c, num + '')) {
                board[r][c] = num + ''
                if (backTrack(r, c + 1)) {
                    return true
                }
                board[r][c] = '.'
            }
        }
        return false
    }

    function canPut(row, col, num) {
        let begR = Math.floor(row / 3) * 3
        let begC = Math.floor(col / 3) * 3
        for (let i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num) {
                return false
            }
            let r = begR + Math.floor(i / 3)
            let c = begC + i % 3
            if (board[r][c] == num) {
                return false
            }
        }
        return true
    }
}
/**
 * 回溯+哈希
 * @param {*} board 
 */
function solveSudoku1(board) {

    // let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let rows = new Array(9)
    let cols = new Array(9)
    let blocks = new Array(9)
    for (let i = 0; i < 9; i++) {
        rows[i] = new Set()
        cols[i] = new Set()
        blocks[i] = new Set()
    }

    function getBlockIndex(r, c) {
        return (r / 3 | 0) * 3 + c / 3 | 0
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                rows[i].add(board[i][j])
                cols[j].add(board[i][j])
                blocks[getBlockIndex(i, j)].add(board[i][j])
            }
        }
    }

    backTrack(0, 0)

    return board

    function backTrack(r, c) {
        if (c === 9) {
            c = 0
            r++
            if (r === 9) {
                return true
            }
        }
        if (board[r][c] !== '.') {
            return backTrack(r, c + 1)
        }

        for (let num = 1; num <= 9; num++) {
            let char = num + ''
            if (rows[r].has(char) || cols[c].has(char) || blocks[getBlockIndex(r, c)].has(char)) {
                continue
            }
            board[r][c] = char
            rows[r].add(char)
            cols[c].add(char)
            blocks[getBlockIndex(r, c)].add(char)
            if (backTrack(r, c + 1)) {
                return true
            }
            board[r][c] = '.'
            rows[r].delete(char)
            cols[c].delete(char)
            blocks[getBlockIndex(r, c)].delete(char)
        }
        return false
    }

}
let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
let board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(solveSudoku(board))
console.log(solveSudoku1(board1))