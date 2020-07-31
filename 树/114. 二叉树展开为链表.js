function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function flatten(root) {
    if(!root)return root
    let [head, tail] = recur(root)
    return head

    function recur(root) {
        if(!root || (!root.left && !root.right)) {
            return [root, root]
        }
        let head = root, tail = root
        let left = root.left, right =root.right
        if(left) {
            [leftHead, leftTail] = recur(left)
            root.right = leftHead
            root.left = null
            root = leftTail
            tail = leftTail
        }
        if(right) {
            [rightHead, rightTail] = recur(right)
            root.right = rightHead
            root.left = null
            tail = rightTail
        }
        return [head, tail]
    }
}
let a=new TreeNode(1)
let b=new TreeNode(2)
let c=new TreeNode(3)
let d=new TreeNode(4)
let e=new TreeNode(5)
let f=new TreeNode(6)
let g=new TreeNode(6)
let h=new TreeNode(8)
let i=new TreeNode(9)
a.left=b
a.right=c
b.left=d
b.right=e
// c.left=f
// c.right=g
// d.left=h
d.right=i
console.log('结果', flatten(a))