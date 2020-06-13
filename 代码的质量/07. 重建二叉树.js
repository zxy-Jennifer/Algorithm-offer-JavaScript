class TreeNode {
    constructor(val) {
        this.val = val
        this.right = this.left = null
    }
}

/**
 * 
 * @param {*} preorder 
 * @param {*} inorder 
 */
function buildTree(preorder,inorder) {
    if(!preorder || !inorder || preorder.length === 0 || inorder.length===0)return null
    return recur(0, preorder, 0, inorder.length-1, inorder)

    /**
     * 
     * @param {*} preorder 前序
     * @param {*} inorder 中序
     */
    function recur(start, preorder, left, right, inorder) {
        if(start<0 || start>=preorder.length || right<left || right>=inorder.length)return null
        let node = new TreeNode(preorder[start])
        let index = inorder.indexOf(preorder[start])
        node.left = recur(start+1, preorder, left,index-1,inorder)
        node.right = recur(start+index-left+1 ,preorder, index+1,right,inorder)
        return node
    }
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

// console.log(root)
let pre = [3,20,15,7]
let ino = [3,15,20,7]
console.log(buildTree(pre, ino))