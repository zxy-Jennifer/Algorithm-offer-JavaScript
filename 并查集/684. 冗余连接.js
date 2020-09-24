/**
 * 并查集
 * @param {*} edges 
 */
function findRedundantConnection1(edges) {
    // 先找到n的值，即图中一共有多少个节点
    let len = -Infinity;
    edges.forEach(([e1, e2]) => len = Math.max(len, e1, e2));
    let parent = new Array(len + 1).fill(-1).map((item, index) => index)
    console.log(parent)

    for (let i = 0; i < edges.length; i++) {
        let par1 = findParent(edges[i][0])
        let par2 = findParent(edges[i][1])
        if (par1 === par2) {
            return edges[i]
        } else {
            parent[par1] = parent[par2]
        }
    }

    function findParent(index) {
        if (parent[index] === index) {
            return index
        } else {
            return findParent(parent[index])
        }
    }
}
/**
 * DFS
 * @param {*} edges 
 */
function findRedundantConnection(edges) {
    if (!edges || edges.length === 0 || edges[0].length === 0) {
        return []
    }
    let len = edges.length
    // 创建邻接表
    let map = new Map()

}
let edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5]
]
console.log(findRedundantConnection(edges))