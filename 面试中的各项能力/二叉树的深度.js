class TreeNode {
    constructor(val) {
        this.val = val
        this.right = this.left = null
    }
}

function maxDepth1(root) {
    if(root === null) {
        return 0
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}

function maxDepth(root) {
    if(root === null) {
        return 0
    }
    let queue = []
    let res = 0
    queue.push(root)
    while(queue.length>0) {
        let tmp = []
        for(let i=0;i<queue.length;i++) {
            let node = queue[i]
            if(node.left) {
                tmp.push(node.left)
            }
            if(node.right) {
                tmp.push(node.right)
            }
        }
        queue = [...tmp]
        res++
    }
    return res
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

console.log(maxDepth(root))