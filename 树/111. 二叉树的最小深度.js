/**
 * 递归
 * @param {*} root 
 */
function minDepth1(root) {
    if(!root)return 0
    let minLeft = minDepth(root.left)
    let minRight = minDepth(root.right)
    return (minLeft===0||minRight===0) ? minLeft+minRight+1 : Math.min(minLeft, minRight)+1
}

/**
 * 栈
 * @param {*} root 
 */
function minDepth(root) {
    if(!root)return 0
    let res = 0
    let stack = [root]

    while(stack.length) {
        res++
        let len = stack.length
        while(len--) {
            let node = stack.shift()
            if(!node.left && !node.right) {
                return res
            }
            if(node.left)stack.push(node.left)
            if(node.right)stack.push(node.right)
        }
    }
    return res
}