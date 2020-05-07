// import TreeNode from 'TreeNode'
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * 镜像二叉树
 * @param {*} root 
 */
function mirrorTree(root) {
    if(root===null){
        return root
    }
    if(root.left===null&&root.right===null) {
        return root
    }
    let tmp=root.left
    root.left=root.right
    root.right=tmp

    if(root.left!==null) {
        root.left = mirrorTree(root.left)
    }
    if(root.right !== null) {
        root.right = mirrorTree(root.right)
    }
    return root
}
let a=new TreeNode(4)
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
console.log(a)
console.log(mirrorTree(a))