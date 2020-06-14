
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

/**
 * 返回删除节点后的链表的头节点
 * @param {*} head 
 * @param {*} val 
 */
function deleteNode(head, val) {
    if(head === null)return null
    let node = head
    if(node.val === val) {
        let res = node.next
        delete node
        return res
    }
    let pre = null
    while(node.next!==null) {
        pre = node
        node = pre.next
        if(node.val === val) {
            pre.next = node.next
            delete node
        }
    }
    return head
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
console.log(deleteNode(b,5))