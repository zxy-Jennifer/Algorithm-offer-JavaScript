
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * 递归实现序列化：树 => 数组
 * @param {*} root 
 */
function serialize1(root){
    var res=[]
    if(root===null){
        res.push(null)
        return
    }
    res.push(root.val)
    serialize1(root.left, res)
    serialize1(root.right, res)
}
/**
 * 借助队列非递归实现序列化
 * @param {*} root 
 */
function serialize(root) {
    if(root === null){
        return []
    }
    let res = []
    let queue = [root]
    while(queue.length>0) {
        console.log('queue.length1111',queue.length)
        let node = queue.shift()
        if(node === null) {
            res.push(null)
        }else {
            res.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }
        console.log('queue.length22222',queue.length)
    }
    return res
}
/**
 * 借助队列非递归反序列化：数组 => 树
 * @param {*} data 
 */
function deserialize(data) {
    if(data===null||data.length===0){
        return null
    }
    var root = new TreeNode(data[0])
    let i=1
    let queue = [root]
    while(queue.length>0) {
        let node = queue.shift()
        if(data[i]!==null) {
            node.left=new TreeNode(data[i])
            queue.push(node.left)
        }
        i++
        if(data[i]!==null){
            node.right=new TreeNode(data[i])
            queue.push(node.right)
        }
        i++
    }
    return root
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
// d.left=h
// d.right=i
// console.log(a)
console.log(serialize(a))