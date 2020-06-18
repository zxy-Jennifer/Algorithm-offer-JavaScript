function pathSum(root, sum){
    var path = []
    const res = []
    if(root===null){
        return path
    }
    let currentNum = 0
    findPath(root,sum,path,currentNum,res)
    return res
}
function findPath(root, sum, path, currentNum,res) {
    currentNum += root.val
    // es6的扩展运算符实现数组的深拷贝
    path=[...path,root.val]

    let isLeaf = root.right === null && root.left === null
    if(currentNum === sum && isLeaf){
        res.push(path)
    }
    if(root.left!==null){
        findPath(root.left, sum, path, currentNum, res)
    }
    if(root.right!==null) {
        findPath(root.right, sum, path, currentNum, res)
    }
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

console.log(pathSum(a,10))
