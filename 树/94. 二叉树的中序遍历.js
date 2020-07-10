class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

/**
 * 根左右
 * @param {*} root 
 */
function inorderTraversal(root) {
    let res = []
    if(root && root.left) {
        res.push(...recur(root.left))
    }
    if(root) {
        res.push(root.val)
    }
    if(root && root.right) {
        res.push(...recur(root.right))
    }
    return res
}