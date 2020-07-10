class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
/**
 * 
 * @param {*} root 
 */
function sumNumbers(root) {
    let res = 0
    let path = []
    recur(root, path)
    return res

    function recur(root, path) {
        if(!root)return
        // console.log(path)
        if(!root.left && !root.right) {
            path.push(root.val)
            let num = path && path.length ? parseInt(path.join('')) : 0
            res += num
            path.pop()
            return
        }
        path.push(root.val)
        if(root.left)recur(root.left, path, res)
        if(root.right)recur(root.right, path, res)
        path.pop()
    }
}
function sumNumbers1(root) {
    return recur(root, 0)

    function recur(root, sum) {
        if(!root)return 0
        let temp = sum*10 + root.val
        if(!root.left && !root.right)return temp
        return recur(root.left, temp) + recur(root.right, temp)
    }
}

let a=new TreeNode(1)
let b=new TreeNode(2)
let c=new TreeNode(3)
let d=new TreeNode(4)
let e=new TreeNode(5)
let f=new TreeNode(6)
let g=new TreeNode(7)
a.left=b
// a.right=c
// b.left=d
// b.right=e
// c.left=f
// c.right=g

console.log(sumNumbers(null))