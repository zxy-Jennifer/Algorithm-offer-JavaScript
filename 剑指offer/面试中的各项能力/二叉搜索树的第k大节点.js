class TreeNode {
    constructor(val) {
        this.val = val
        this.right = this.left = null
    }
}

/**
 * 寻找第k小节点
 * @param {*} root 
 * @param {*} k 
 */
function kthSmallest(root, k) {
    return findKth(root, k).val
}
/**
 * 寻找第k小节点
 * @param {*} root 
 * @param {*} k 
 */
function kthLargest1(root, k) {
    return findKth(root, k).val
}
function findKth(root, k){
    let node = root
    let len = getLength(node)
    if(len<k || k===0){
        return null
    }
    while(node){
        let Lright = getLength(node.right)
        if(k === Lright+1) {
            return node
        }
        if(k < Lright+1) {
            return findKth(root.right, k)
        }
        if(k > Lright+1) {
            return findKth(root.left, k-Lright-1)
        }
    }
}

/**
 * 右根左遍历树
 * @param {*} root 
 * @param {*} k 
 */
function kthLargest(root, k){
    let res = 0
    dfs(root,k)
    return res
    function dfs(root){
        if(root === null){
            return null
        }
        dfs(root.right)
        if(k===0) {
            return null
        }
        if(--k===0) {
            res = root.val
        }
        dfs(root.left)
    }
}



/**
 * 计算以node为根节点的树中的节点个数
 * @param {*} root 
 */
function getLength(root) {
    if(root === null) {
        return 0
    }
    let res = 1
    if(root.left === null&&root.right===null) {
        return res
    }
    if(root.right) {
        res+= getLength(root.right)
    }
    if(root.left) {
        res += getLength(root.left)
    }
    return res
}
let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

console.log(kthLargest(root,3))

