
function maxDepth(root) {
    if(!root)return 0
    if(!root.left && !root.right)return 1
    return Math.max(recur(root.left), recur(root.right)) + 1
}