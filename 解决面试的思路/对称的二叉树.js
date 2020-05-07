function isSymmetric(root){
    return isSymmetrical(root,root)
}
function isSymmetrical(root1,root2){
    if(root1===null&&root2===null){
        return true
    }
    if(root1===null||root2===null){
        return false
    }
    if(root1.val!==root2.val){
        return false
    }
    return isSymmetrical(root1.left,root2.right) && isSymmetrical(root1.right,root2.left)
}
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
let a=new TreeNode(4)
let b=new TreeNode(2)
let c=new TreeNode(3)
let d=new TreeNode(4)
let e=new TreeNode(5)
let f=new TreeNode(6)
let g=new TreeNode(7)
let h=new TreeNode(8)
let i=new TreeNode(8)
a.left=b
a.right=c
b.left=d
b.right=e
c.left=f
c.right=g
d.left=h
d.right=i
console.log(a)
console.log(isSymmetric(d))