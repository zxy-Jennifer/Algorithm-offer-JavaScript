

function isValidSudoku(board) {
    let mapRow = new Map()
    let mapCol = new Map()
    let mapBlo = new Map()

    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            // 判断行
            if(board[i][j] === '.')continue
            if(mapRow.has(i)) {
                if(mapRow.get(i).includes(board[i][j])) {
                    // console.log('1', i, j, board[i][j])
                    return false
                }else {
                    mapRow.get(i).push(board[i][j])
                }
            }else {
                mapRow.set(i, [ board[i][j] ])
            }

            // 判断列
            if(mapCol.has(j)) {
                if(mapCol.get(j).includes(board[i][j])) {
                    // console.log('2', i, j, board[i][j])
                    return false
                }else {
                    mapCol.get(j).push(board[i][j])
                }
            }else {
                mapCol.set(j, [ board[i][j] ])
            }

            // 判断块
            let brow = Math.floor(i/3)
            let bcol = Math.floor(j/3)
            let index = brow * 3 + bcol
            if(mapBlo.has(index)) {
                if(mapBlo.get(index).includes(board[i][j])) {
                    // console.log('3',i, j, board[i][j])
                    return false
                }else {
                    mapBlo.get(index).push(board[i][j])
                }
            }else {
                mapBlo.set(index, [ board[i][j] ])
            }
        }
    }
    return true
}

let board = [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]
console.log(isValidSudoku(board))