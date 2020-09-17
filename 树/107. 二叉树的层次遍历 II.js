function levelOrderBottom1(root) {
    let res = []
    if (!root) {
        return res
    }
    let q1 = [root]
    let path = []
    while (q1.length !== 0) {
        let q2 = []
        while (q1.length) {
            let node = q1[0]
            path.push(node.val)
            if (node.left) q2.push(node.left)
            if (node.right) q2.push(node.right)
            q1.shift()
        }
        res.push(path.slice())
        q1 = q2
        path = []
    }
    return res.reverse()
}

function levelOrderBottom(root) {
    let res = []
    if (!root) {
        return res
    }
    let queue = [root]
    while (queue.length !== 0) {
        let path = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            path.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.unshift(path.slice())
    }
    return res
}