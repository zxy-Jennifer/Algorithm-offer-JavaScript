
/**
 * DFS：广度优先遍历
 * @param {*} root 
 * @param {*} sum 
 */
function hasPathSum1(root, sum) {
    if(root === null)return false
    sum -= root.val
    if(root.left === null && root.right === null)return sum === 0
    return hasPathSum(root.left,sum) || hasPathSum(root.right,sum)
}
/**
 * BFS：深度优先遍历
 * @param {*} root 
 * @param {*} sum 
 */
function hasPathSum(root, sum) {
    if(root === null)return false
    let nodeList = [] // 遍历过程中存储节点
    let sumList = [] // 遍历过程中存储节点之和
    nodeList.push(root)
    sumList.push(root.val)
    while(nodeList.length>0) {
        let node = nodeList.shift()
        let temp = sumList.shift()

        if(temp === sum && node.left === null && node.right === null)return true
        if(node.left) {
            nodeList.push(node.left)
            sumList.push(temp + node.left.val)
        }
        if(node.right) {
            nodeList.push(node.right)
            sumList.push(temp + node.right.val)
        }
    }
    return false
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
let a=new TreeNode(1)
let b=new TreeNode(2)
let c=new TreeNode(3)
a.left = b
a.right = c
console.log(hasPathSum(a,9))