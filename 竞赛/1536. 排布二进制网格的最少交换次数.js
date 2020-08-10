
function minSwaps(grid) {
    let len = grid.length
    let afterZero = []
    for(let i=0; i<len; i++) {
        let zero = 0
        for(let j=len-1; j>=0; j--) {
            if(grid[i][j] === 0) {
                zero++
            }else {
                break
            }
        }
        afterZero.push(zero)
    }
    // console.log(afterZero)
    let res = 0
    for(let i=0; i<len-1; i++) {
        if(afterZero[i] >= len-i-1) {
            continue
        }else {
            let j=i
            for(; j<len; j++) {
                if(afterZero[j]>=len-i-1) {
                    break
                }
            }
            if(j===len)return -1
            for(; j>i; j--) {
                [afterZero[j], afterZero[j-1]] = [afterZero[j-1], afterZero[j]]
                res++
            }
        }
    }
    return res
}
let grid = [[1,0,0],[1,1,0],[1,1,1]]
console.log(minSwaps(grid))