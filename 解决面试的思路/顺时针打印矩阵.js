function printMatrixClock(matrix){
    if(matrix===null){
        return false;
    }
    var start=0
    var col=matrix.length
    var row=matrix[0].length
    console.log(col,row)
    var res=new Array()
    while(start*2<col&&start*2<row){
        res= res.concat(printMatrix(matrix,col,row,start))
        start++
    }
    return res
}
function printMatrix(matrix,col,row,start){
    // 结束行号
    var res=new Array()
    var endC=col-1-start
    // 结束列号
    var endR=row-start-1
    // 第一步：从左到右的行
    for(let i=start;i<=endR;i++){
        res.push(matrix[start][i])
    }
    // 第二步：从上到下的列
    if(start<endC){
        for(let i=start+1;i<=endC;i++){
            res.push(matrix[i][endR])
        }
    }
    // 第三步：从右到左的行
    if(endR>start&&start<endC){
        for(let i=endR-1;i>=start;i--){
            res.push(matrix[endC][i])
        }
    }
    // 第四步：从下到上的行
    if(endC-start>=2&&start<endR){
        for(let i=endC-1;i>=start+1;i--){
            res.push(matrix[i][start])
        }
    }
    return res
}
// var matrix=[[1,2,3],[4,5,6],[7,8,9]]
var matrix=[[3],[2]]
console.log(printMatrixClock(matrix))