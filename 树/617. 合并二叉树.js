/**
 * 深度优先遍历
 * @param {*} t1 
 * @param {*} t2 
 */
function mergeTrees(t1, t2) {
    //
    if (!t1 || !t2) {
        return t1 || t2
    }
    let res = new TreeNode(t1.val + t2.val)
    res.left = mergeTrees(t1.left, t2.left)
    res.right = mergeTrees(t1.right, t2.right)
    return res
}
/**
 * 广度优先遍历
 * @param {*} t1 
 * @param {*} t2 
 */
function mergeTrees(t1, t2) {
    if (!t1 || !t2) {
        return t1 || t2
    }
    let newTree = new TreeNode(t1.val + t2.val)
    let queue = [newTree]
    let q1 = [t1]
    let q2 = [t2]
    while (q1.length || q2.length) {
        let node = queue.shift(),
            node1 = q1.shift(),
            node2 = q2.shift()
        let l1 = node1.left,
            r1 = node1.right,
            l2 = node2.left,
            r2 = node2.right
        if (l1 || l2) {
            if (!l1 || !l2) {
                node.left = (l1 || l2)
            } else {
                let left = new TreeNode(l1.val + l2.val)
                node.left = left
                queue.push(left)
                q1.push(l1)
                q2.push(l2)
            }
        }
        if (r1 || r2) {
            if (!r1 || !r2) {
                node.right = (r1 || r2)
            } else {
                let right = new TreeNode(r1.val + r2.val)
                node.right = right
                queue.push(right)
                q1.push(r1)
                q2.push(r2)
            }
        }
    }
    return newTree
}