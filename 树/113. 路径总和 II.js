
/**
 * 
 * @param {*} root 
 * @param {*} sum 
 */
function pathSum(root,sum) {
    let path = []
    let res = []
    if(root === null)return path
    recur(root,sum,path,res)

    function recur(root,sum,path,res) {
        sum -= root.val
        path = [...path, root.val]
        if(sum === 0 && root.left === null && root.right === null)res.push(path)

        if(root.left) {
            recur(root.left, sum, path, res)
        }
        if(root.right) {
            recur(root.right, sum, path,res)
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
let g=new TreeNode(6)
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

console.log(pathSum(a,10))