
function spiralOrder(matrix) {
    let res = []
    if(matrix === null || matrix.length<=0 || matrix[0].length <=0 ) return res
    let left = 0, top=0
    let row = matrix.length
    let col = matrix[0].length
    let right = col-1, bottom = row-1
    while(left<=right && top<=bottom) {
        for(let i=left; i<=right; i++) {
            res.push(matrix[top][i])
        }
        for(let i=top+1; i<=bottom; i++) {
            res.push(matrix[i][right])
        }
        if(left<right && top<bottom) {
            for(let i=right-1; i>=left; i--) {
                res.push(matrix[bottom][i])
            }
            for(let i=bottom-1; i>=top+1; i--) {
                res.push(matrix[i][left])
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return res
}
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
   console.log(spiralOrder(matrix))