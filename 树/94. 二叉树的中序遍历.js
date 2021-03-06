class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

/**
 * 根左右
 * 递归
 * @param {*} root 
 */
function inorderTraversal11(root) {
    let res = []
    recur(root)
    return res

    function recur(root) {
        if (!root) {
            return
        }
        if (root.left) {
            recur(root.left)
        }
        res.push(root.val)
        if (root.right) {
            recur(root.right)
        }
    }
}
/**
 * 循环
 * @param {*} root 
 */
function inorderTraversal(root) {
    let stack = []
    let res = []
    if (!root) return res
    let curr = root
    while (curr || stack.length > 0) {
        // console.log(curr?curr.val:'null')
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }
    return res
}

let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(5)
let f = new TreeNode(6)
let g = new TreeNode(7)
let h = new TreeNode(8)
let i = new TreeNode(9)
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h
d.right = i

console.log(inorderTraversal(a))