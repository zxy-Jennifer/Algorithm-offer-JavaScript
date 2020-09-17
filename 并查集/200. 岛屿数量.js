/**
 * 深度优先遍历
 * @param {*} grid 
 */
var numIslands = function (grid) {
    let row = grid.length
    if (row <= 0) return 0
    let col = grid[0].length
    let res = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    }
    return res

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0') {
            return
        }

        grid[i][j] = '0'
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
};
/**
 * 广度优先遍历
 * @param {*} grid 
 */
var numIslands1 = function (grid) {
    let row = grid.length
    if (row <= 0) return 0
    let col = grid[0].length
    let res = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                grid[i][j] = '0'
                res++
                let neighbors = []
                neighbors.push(i * col + j)
                while (neighbors.length) {
                    let id = neighbors.pop()
                    let rid = Math.floor(id / col)
                    let cid = id % col
                    if (rid > 0 && grid[rid - 1][cid] === '1') {
                        neighbors.push((rid - 1) * col + cid)
                        grid[rid - 1][cid] = '0'
                    }
                    if (rid < row - 1 && grid[rid + 1][cid] === '1') {
                        neighbors.push((rid + 1) * col + cid)
                        grid[rid + 1][cid] = '0'
                    }
                    if (cid > 0 && grid[rid][cid - 1] === '1') {
                        neighbors.push(rid * col + cid - 1)
                        grid[rid][cid - 1] = '0'
                    }
                    if (cid < col - 1 && grid[rid][cid + 1] === '1') {
                        neighbors.push(rid * col + cid + 1)
                        grid[rid][cid + 1] = '0'
                    }
                }
            }
        }
    }
    return res
}
let grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
]
console.log(numIslands1(grid))