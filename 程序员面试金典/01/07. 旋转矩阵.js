/**
 * 
 * @param {*} matrix 
 */
function rotate(matrix) {
    if(matrix === null || matrix.length < 1)return null
    let m = matrix.length
    let n = matrix[0].length

    for(let i=0;i<m;i++) {
        for(let j=i;j<n;j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
        matrix[i] = matrix[i].reverse()
    }
    return matrix
}

let matrix = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
console.log(rotate(matrix))
  