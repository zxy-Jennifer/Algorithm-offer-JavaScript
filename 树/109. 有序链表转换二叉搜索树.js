class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * 
 * @param {*} head 
 */
function sortedListToBST1(head) {
    if(head === null)return null
    let nums = []
    let node = head
    while(node!=null) {
        nums.push(node.val)
        node = node.next
    }
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

function sortedListToBST2(head) {
    return recur(head)

    function recur(head) {
        if(head === null)return null

        let pre = null
        let slow = head
        let fast = head
        while(fast!==null && fast.next !== null) {
            pre = slow
            slow = slow.next
            fast = fast.next.next
        }
        // 把slow前半部分和slow断开
        if(pre!==null)pre.next = null

        let root = new TreeNode(slow.val)
        if(slow === head)return root

        root.left = recur(head)
        root.right = recur(slow.next)
        return root
    }
}

function sortedListToBST(head) {
    let size = 0
    let ptr = head
    while(ptr !== null) {
        size ++
        ptr = ptr.next
    }

    let root = head

    function recur(l,r) {
        if(l>r)return null
        let mid = Math.floor((l+r)/2)
        let left = recur(l,mid-1)

        let node = new TreeNode(root.val)
        node.left = left
        root = root.next
        node.right = recur(mid+1,r)
        return node
    }
    return recur(0,size-1)
}


let a=new ListNode(1)
let b=new ListNode(2)
let c=new ListNode(3)
let d=new ListNode(4)
let e=new ListNode(5)
a.next=b
b.next=c
c.next=d
d.next=e

console.log(sortedListToBST(a))
