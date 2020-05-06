/**
 * 定义树的结构
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * 判断 B 是否是 A 的子结构
 * @param {*} A 
 * @param {*} B 
 */
function hasSubTree(A,B){
    if(B===null||A===null){
        return false
    }
    let res=false
    if(isEqual(A.val,B.val)){
        res=doesAHasB(A,B)
    }
    if(!res){
        res=hasSubTree(A.left,B)
    }
    if(!res){
        res=hasSubTree(A.right,B)
    }
    return res
}
function doesAHasB(A,B){
    if(B===null){
        return true
    }
    if(A===null){
        return false
    }
    if(!isEqual(A.val,B.val)){
        return false
    }
    return doesAHasB(A.left,B.left) && doesAHasB(A.right,B.right)
}
function isEqual(num1,num2){
    return Math.abs(num1-num2)<0.0000001
}
// [4,2,3,4,5,6,7,8,9]
// [4,8,9]
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
console.log(a,i)
console.log(hasSubTree(a,d))