
/**
 * 
 * @param {*} matrix 
 */
function setZeroes(matrix) {
    let rowList = []
    let colList = []
    for(let i = 0;i<matrix.length;i++) {
        for(let j = 0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0) {
                if(!rowList.includes(i)) {
                    rowList.push(i)
                }
                if(!colList.includes(j)) {
                    colList.push(j)
                }
            }
        }
    }
    for(let i=0;i<rowList.length;i++) {
        matrix[rowList[i]].fill(0)
    }
    for(let j=0;j<colList.length;j++) {
        for(let i=0;i<matrix.length;i++) {
            matrix[i][colList[j]] = 0
        }
    }
    return matrix
}

let matrix = 
[
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]

console.log(setZeroes(matrix))