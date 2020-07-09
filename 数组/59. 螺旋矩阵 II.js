
function generateMatrix(n) {
    if(n<=0)return []
    let res = new Array(n)
    for(let i=0;i<n;i++) {
        res[i] = new Array(n).fill(0)
    }
    let num = 1
    // let end = n*n
    let left = 0, top=0
    let right = n-1, bottom = n-1
    while(left<=right && top<=bottom) {
        for(let i=left; i<=right; i++) {
            res[top][i] = num++
        }
        for(let i=top+1; i<=bottom; i++) {
            res[i][right] = num++
        }
        if(left<right && top<bottom) {
            for(let i=right-1; i>=left; i--) {
                res[bottom][i] = num++
            }
            for(let i=bottom-1; i>=top+1; i--) {
                res[i][left] = num++
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return res
}

console.log(generateMatrix(2))