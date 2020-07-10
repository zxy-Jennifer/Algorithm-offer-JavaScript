
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function invertTree(root) {
    if(root === null)return null
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}