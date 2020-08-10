
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * 
 * @param {*} root 
 */
function isSymmetric(root) {
    return recur(root,root)

    function recur(r1,r2) {
        if(r1 ===null && r2 === null)return true
        if(r1 ===null || r2 === null)return false
        if(r1.val === r2.val)return recur(r1.left, r2.right) && recur(r1.right, r2.left)
        else return false
    }
}

let a=new TreeNode(4)
let b=new TreeNode(2)
let c=new TreeNode(2)
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
console.log(isSymmetric(a))