
/**
 * 
 * @param {*} m 
 * @param {*} n 
 * @param {*} k 
 */
function movingCount(m,n,k) {
    let res = 0
    
    let visited = []
    for(let i=0;i<m;i++) {
        visited.push(new Array(n).fill(true))
    }
    function running(i,j) {
        if(i<0 || i>=m || j<0 || j>=n)return
        let sum = (i +'' +j).split('').reduce((total,val)=> total + Number(val) ,0)
        if(visited[i][j] && sum <= k) {
            res ++
            visited[i][j] = false

            running(i-1, j)
            running(i+1, j)
            running(i, j-1)
            running(i, j+1)
        }
    }
    running(0,0)
    return res
}

let m=1, n=2, k=1
console.log(movingCount(m,n,k))