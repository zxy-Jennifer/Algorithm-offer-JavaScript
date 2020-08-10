
function findNumberIn2DArray(matrix, target) {
    if(!matrix||matrix.length===0) return false
    let row = matrix.length
    let column = matrix[0].length
    // console.log(row,column)
    let i = 0
    let j = column-1
    while(i<row && j>=0) {
        if(matrix[i][j] === target) {
            return true
        }
        if(i<row && j>=0 && matrix[i][j]>target) {
            j--
        }
        if(i<row && j>=0 && matrix[i][j]<target) {
            i++
        }
    }
    return false
}