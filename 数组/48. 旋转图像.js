

function rotate (matrix) {
    let n = matrix.length
    if(n === 0)return matrix
    // 转置
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    // console.log(matrix)
    // 翻转
    for(let k=0; k<n; k++) {
        let i=0, j=n-1
        while(i<j) {
            let temp = matrix[k][j]
            matrix[k][j] = matrix[k][i]
            matrix[k][i] = temp
            i++
            j--
        }
    }
    // console.log(matrix)
    return matrix
}

let matrix = [ [1,2,3], [4,5,6], [7,8,9] ]
console.log(rotate(matrix))