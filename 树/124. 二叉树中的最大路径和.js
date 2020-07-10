
function maxPathSum(root) {
    let max = -Infinity
    recur(root)
    return max

    function recur(root) {
        if(!root)return 0
        let left = Math.max(recur(root.left), 0)
        let right = Math.max(recur(root.right), 0)

        let newSum = root.val + left + right
        max = Math.max(max, newSum)
        return root.val + Math.max(left, right)
    }
}