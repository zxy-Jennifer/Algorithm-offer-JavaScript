
/**
 * 
 * @param {*} root 
 * @param {*} sum 
 */
function pathSum(root, sum) {
    if(root === null)return false
    let nodeList = []
    let res = [0]
    nodeList.push(root)
    while(nodeList.length) {
        let node = nodeList.shift()
        // let path = []
        let currentSum = 0
        recur(node,currentSum,sum,res)
        if(node.left)nodeList.push(node.left)
        if(node.right)nodeList.push(node.right)
    }

    function recur(root,currentSum,sum,res) {
        currentSum+=root.val
        // path = [...path,root.val]
        if(currentSum === sum)res[0]++
        if(root.left) {
            recur(root.left,currentSum,sum,res)
        }
        if(root.right) {
            recur(root.right,currentSum,sum,res)
        }
    }
    return res[0]
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