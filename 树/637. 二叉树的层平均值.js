var averageOfLevels = function (root) {
    let res = []
    if (!root) {
        return res
    }
    let queue = [root]
    while (queue.length) {
        let nextQueue = []
        let len = queue.length
        let sum = 0
        while (queue.length) {
            let node = queue.shift()
            sum += node.val
            if (node.left) nextQueue.push(node.left)
            if (node.right) nextQueue.push(node.right)
        }
        res.push(sum / len)
        queue = nextQueue
    }
    return res
};