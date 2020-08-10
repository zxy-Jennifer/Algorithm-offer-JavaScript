class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

/**
 * 反转链表
 * @param {*} head 
 */
function reverseList(head) {
    if(!head)return null
    let node = head
    let pre = null
    let pnext = head.next
    while(node !== null) {
        node.next = pre
        if(pnext === null)break
        pre = node
        node = pnext
        pnext = node.next
    }
    return node
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
console.log(reverseList(c))