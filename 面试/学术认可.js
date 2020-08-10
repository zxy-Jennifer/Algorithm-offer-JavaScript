/**
 * 
 * @param {*} n 
 * @param {*} arr 
 */
function getMatch(n, arr){
    let map = new Map()
    for(item of arr) {
        if(map.has(item[0])) {
            map.set(item[0], [...map.get(item[0]),item[1]])
        }else {
            map.set(item[0], [item[1]])
        }
    }
    // console.log(map)
    let grid = Array.from(new Array(n+1), ()=>new Array(n+1).fill(false))
    for(let i=1; i<=n; i++) {
        let visited = new Array(n+1).fill(false)
        visited[i] = true
        let next = map.get(i)
        // console.log('next', arr[i-1][0], next)
        while(next.length) {
            let temp = []
            for(let item of next) {
                if(!visited[item]) {
                    visited[item] = true
                    grid[i][item]=true
                    temp.push(...map.get(item))
                }
            }
            next = temp
        }
    }
    let res=0
    // console.log(grid)
    for(let i=1; i<=n; i++) {
        for(let j=i+1; j<=n; j++) {
            if(grid[i][j]&&grid[j][i]) {
                res++
            }
        }
    }
    return res
}

let n=5, arr = [[1,3],[2,1],[3,2],[3,5],[4,5],[5,4]]
console.log(getMatch(n, arr))