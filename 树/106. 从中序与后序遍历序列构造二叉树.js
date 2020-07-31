class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function buildTree(inorder, postorder) {
    return getTree(postorder, 0, postorder.length-1, inorder, 0, inorder.length-1)

    function getTree(postorder, pl, pr, inorder, il, ir) {
        if(pl > pr)return null
        let root = new TreeNode(postorder[pr])
        let mid = inorder.indexOf(postorder[pr])
        let leftNum = mid-il // 左子树节点个数
        root.left = getTree(postorder, pl, pl+leftNum-1, inorder, il, mid-1)
        root.right = getTree(postorder, pl+leftNum, pr-1, inorder, mid+1, ir)
        return root
    }
}

function buildTree1(inorder, postorder) {
    let post = postorder.length-1
    let i = 0
    function recur(stop) {
        if(inorder[i]!=stop) {
            let root = new TreeNode(postorder[post--])
            root.left = recur(root.val)
            i++
            root.right = recur(stop)
            return root
        }
        return null
    }
    return recur()
}
let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
console.log(buildTree1(inorder, postorder))