class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function buildTree(preorder, inorder) {
    return getTree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1)

    function getTree(preorder, pl, pr, inorder, il, ir) {
        if(pl > pr)return null
        let root = new TreeNode(preorder[pl])
        let mid = inorder.indexOf(preorder[pl])
        let leftNum = mid-il // 左子树节点个数
        root.left = getTree(preorder, pl+1, pl+leftNum, inorder, il, mid-1)
        root.right = getTree(preorder, pl+leftNum+1, pr, inorder, mid+1, ir)
        return root
    }
}

var buildTree1 = function(preorder, inorder) {
    pre = i = 0
    build = function(stop) {
        // stop为根节点
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[pre++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder))