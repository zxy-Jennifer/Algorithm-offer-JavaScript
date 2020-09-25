class TreeNode {
    constructor(val) {
        this.val = val
        this.right = this.left = null
    }
}

/**
 * root是p、q最近公共祖先的三种情况: 
 * 1. p、q分别在root的左右子树中
 * 2. p为root，q在root的左右子树中
 * 3. q为root，p在root的左右子树中
 * 
 * @param {*} root  
 * @param {*} p 
 * @param {*} q 
 */
function lowestCommonAncestor(root, p, q) {
    // root为公共祖先，且p、q中有一个是root
    if (root === null || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    // 公共祖先在右子树中
    if (left === null) return right
    // 公共祖先在左子树中
    if (right === null) return left
    // root为公共祖先，且p、q分别在root的左右子树中
    return root
}