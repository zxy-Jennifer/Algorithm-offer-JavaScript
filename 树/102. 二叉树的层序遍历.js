
function levelOrder(root) {
    if(!root)return []
    let q1 = [root]
    let q2 = []
    let res = []
    let path = []
    while(q1.length!==0 || q2.length!==0) {
        if(q2.length===0) {
            while(q1.length!==0) {
                let node = q1[0]
                path.push(node.val)
                if(node.left)q2.push(node.left)
                if(node.right)q2.push(node.right)
                q1.shift()
            }
        } else if(q1.length===0){
            while(q2.length !==0 ) {
                let node = q2[0]
                path.push(node.val)
                if(node.left)q1.push(node.left)
                if(node.right)q1.push(node.right)
                q2.shift()
            }
        }
        res.push(path.slice())
        path = []
    }
    return res
}
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
let a=new TreeNode(1)
let b=new TreeNode(2)
let c=new TreeNode(3)
let d=new TreeNode(4)
let e=new TreeNode(5)
let f=new TreeNode(6)
let g=new TreeNode(7)
let h=new TreeNode(8)
let i=new TreeNode(9)
a.left=b
a.right=c
b.left=d
b.right=e
c.left=f
c.right=g
d.left=h
d.right=i
console.log(levelOrder(a))