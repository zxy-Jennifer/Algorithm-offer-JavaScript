
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * 
 * @param {*} nums 
 */
function sortedArrayToBST(nums) {
    if(!nums || nums.length === 0)return null
    return recur(nums,0,nums.length-1)
    function recur(arr,left,right) {
        if(left<0 || left>right || right>=arr.length)return null

        let mid = Math.floor((left+right)/2)
        let root = new TreeNode(arr[mid])
        root.left = recur(arr,left,mid-1)
        root.right = recur(arr,mid+1,right)
        return root
    }
}

let nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))

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