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
function lowestCommonAncestor(root, p, q){
    if(p.val<root.val&&q.val<root.val) {
        return lowestCommonAncestor(root.left,p,q)
    }else if(p.val>root.val&&q.val>root.val){
        return lowestCommonAncestor(root.right,p,q)
    }
    return root
}