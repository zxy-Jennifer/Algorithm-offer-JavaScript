/**
 * 层序打印二叉树
 * @param {*} root 
 */
function printTree(root){
    if(root===null){
        return []
    }
    let queue = new Array()
    queue.unshift(root)
    let res = new Array()
    var tmp = root
    while(tmp != null && queue.length != 0){
        tmp=queue.pop()
        res.push(tmp.val)
        if(tmp.left!==null){
            queue.unshift(tmp.left)
        }
        if(tmp.right!==null){
            queue.unshift(tmp.right)
        }
    }
    return res
}
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
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
// console.log(a)
console.log(printTree(a))