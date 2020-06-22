

function findNumberIn2DArray(matrix, target) {
    if(!matrix||matrix.length===0) return false
    let row = matrix.length
    let column = matrix[0].length
    // console.log(row,column)
    let i = 0
    let j = column-1
    while(i < row && j >= 0) {
        if(matrix[i][j]===target) {
            return true
        }
        while(i < row && j >= 0 && matrix[i][j] > target) {
            console.log('j',j)
            j--
        }
        console.log(i,j)
        while(i < row && j >= 0 && matrix[i][j] < target) {
            console.log(i,j,matrix[i][j])
            i++
        }
    }
    return false
}

let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
  console.log(findNumberIn2DArray(matrix, 5))