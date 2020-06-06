class TreeNode {
    constructor(val) {
        this.val = val
        this.right = this.left = null
    }
}

/**
 * 后序遍历：从低至顶返回子树的深度
 * @param {*} root 
 */
function isBalanced1(root) {
    return recur(root)!==-1
    function recur(root) {
        if(root === null) {
            return 0
        }
        let left = recur(root.left)
        if(left === -1) {
            return -1
        }
        let right = recur(root.right)
        if(right === -1){
            return -1
        }
        return Math.abs(left-right)<2 ? Math.max(left,right)+1 : -1
    }
}

/**
 * 方法二：递归计算每个节点的左右子树差
 * @param {*} root 
 */
function isBalanced(root) {
    if(root === null) {return true}
    if(Math.abs(getDepth(root.left)-getDepth(root.right))>1) {return false}
    if(!isBalanced(root.left)) {return false}
    if(!isBalanced(root.right)) {return false}
    return true
}
function getDepth(root) {
    if(root===null) {
        return 0
    }
    return Math.max(getDepth(root.left),getDepth(root.right))+1
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

console.log(isBalanced(root))