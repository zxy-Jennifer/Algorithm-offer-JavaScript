/**
 * 深度优先遍历
 * @param {*} M 
 */
function findCircleNum1(M) {
    let len = M.length
    let count = 0
    let visited = new Array(len).fill(0)
    for(let i=0; i<len; i++) {
        if(visited[i] === 0) {
            dfs(i)
            count++
        }
    }
    return count
    function dfs(index) {
        for(let j=0; j<len; j++) {
            if(M[index][j] === 1 && visited[j] === 0) {
                visited[j] = 1
                dfs(j)
            }
        }
    }
}
/**
 * 广度优先遍历
 * @param {*} M 
 */
function findCircleNum2(M) {
    let len = M.length
    let visited = new Array(len).fill(0)
    let queue = []
    let count = 0
    for(let i=0; i<len; i++) {
        if(visited[i] === 0) {
            queue.push(i)
            while(queue.length) {
                let f = queue.shift()
                visited[f] = 1
                for(let j=0; j<len; j++) {
                    if(M[f][j] === 1 && visited[j] === 0) {
                        queue.push(j)
                    }
                }
            }
            count++
        }
    }
    return count
}
/**
 * 并查集
 * @param {*} M 
 */
function findCircleNum(M) {
    let len = M.length
    let parent = new Array(len).fill(-1)
    let res = 0
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            if(M[i][j] === 1 && i!==j) {
                union(i, j)
            }
        }
    }
    for(let i=0; i<len; i++) {
        if(parent[i] === -1) {
            res++
        }
    }
    return res

    function findParent(i) {
        // i的parent是自己
        if(parent[i] === -1) {
            return i
        } else {
            return findParent(parent[i])
        }
    }
    function union(i, j) {
        let seti = findParent(i)
        let setj = findParent(j)
        if(seti !== setj) {
            parent[seti] = setj
        }
    }
}

let M = [[1,1,0],[1,1,0],[0,0,1]]
console.log(findCircleNum(M))