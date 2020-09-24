function sumOfLeftLeaves(root) {
    if (!root || (!root.left && !root.right)) {
        return 0
    }
    let left = 0
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            left = root.left.val
        } else {
            left = sumOfLeftLeaves(root.left)
        }
    }
    return left + sumOfLeftLeaves(root.right)
}