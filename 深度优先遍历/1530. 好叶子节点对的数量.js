/**
 * 
 * @param {*} root 
 * @param {*} distance 
 */
function countPairs(root, distance) {
    let res = 0
    dfs(root, distance)
    return res

    function dfs(root, distance) {
        if(!root) {
            return []
        }else if(!root.left && !root.right) {
            return [0]
        }
        let toEnd = []
        let left = dfs(root.left, distance)
        for(let l of left) {
            if(++l>distance) {
                continue
            }else {
                toEnd.push(l)
            }
        }
        let right = dfs(root.right,distance)
        for(let r of right) {
            if(++r>distance) {
                continue
            }else {
                toEnd.push(r)
            }
        }
        for(let l of left) {
            for(let r of right) {
                // console.log('11111l,r', l+r+2, distance, res)
                if(l+r+2 <= distance)res++
                // console.log('222222l,r', l, r, res)
            }
        }
        // console.log(root.val, res, toEnd)
        return toEnd
    }
}

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
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

console.log(countPairs(a, 4))