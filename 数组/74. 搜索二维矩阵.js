
function searchMatrix(matrix, target) {
    if(!matrix || matrix.length<=0 || matrix[0].length<=0)return false
    let m = matrix.length
    let n = matrix[0].length
    let i = 0, j = n-1
    while(i<m && j>=0) {
        if(matrix[i][j] === target) {
            return true
        }
        if(matrix[i][j] < target) {
            i++
        }else {
            j--
        }
    }
    return false
}

let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
let target = 4
console.log(searchMatrix(matrix, target))
  