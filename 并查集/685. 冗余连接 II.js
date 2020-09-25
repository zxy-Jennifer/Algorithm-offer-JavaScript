/**
 * 
 * @param {*} edges 
 */
function findRedundantDirectedConnection(edges) {
    let len = edges.length
    let parent = new Array(len + 1).fill(0).map((item, index) => index)
    // 导致某个节点有两个父节点的边记为冲突边
    let conflict = -1
    // 导致环路出现的边
    let cycle = -1
    let uf = new UnionFind(len + 1)
    for (let i = 0; i < len; i++) {
        let [node1, node2] = edges[i]
        if (parent[node2] !== node2) {
            conflict = i
        } else {
            parent[node2] = node1
            if (uf.findParent(node1) === uf.findParent(node2)) {
                cycle = i
            } else {
                uf.union(node1, node2)
            }
        }
    }
    if (conflict < 0) {
        // 无冲突，则返回造成环的边
        return edges[cycle]
    } else {
        // 有冲突
        let conflictEdge = edges[conflict]
        if (cycle < 0) {
            // 没有导致环的边
            return conflictEdge
        } else {
            // 有导致环的边
            return [parent[conflictEdge[1]], conflictEdge[1]]
        }
    }
}
class UnionFind {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((item, index) => index)
    }
    findParent(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.findParent(this.parent[i])
        }
        return this.parent[i]
    }

    union(i, j) {
        let parI = this.findParent(i)
        let parJ = this.findParent(j)
        this.parent[parI] = parJ
    }
}
let edges = [
    [2, 1],
    [3, 1],
    [4, 2],
    [1, 4]
]
console.log(findRedundantDirectedConnection(edges))