/**
 * 
 * @param {*} mat 
 */
function numSubmat(mat) {
    if(!mat)return 0
    let m = mat.length
    let n = mat[0].length
    let res = 0
    let rb = new Array(m)
    for(let i=0; i<m; i++) {
        rb[i] = new Array(n).fill(0)
    }

    for(let i=m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            if(mat[i][j] != 0) {
                let k = i
                while(k>=0 && mat[k][j]===1) {
                    rb[i][j]++
                    k--
                }
            }
        }
    }
    for(let i=m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            let l=j;
            let min = Infinity
            while(l>=0 && rb[i][l]>0) {
                min = Math.min(rb[i][l], min)
                res+=min
                l--
            }
        }
    }
    return res
}

let mat = [[1,0,1],
[1,1,0],
[1,1,0]]
console.log(numSubmat(mat))