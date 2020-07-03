
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

function removeNthFromEnd(head, n) {
    if(head === null || n<=0)return null
    let fast = head, slow = head
    let count = 1
    let pre = null
    // 快指针先走n-1步，指向第n个节点
    while(count < n) {
        if(fast === null)return null
        fast = fast.next
        count++
    }
    if(fast.next === null)return head.next
    while(fast.next) {
        pre = slow
        fast = fast.next
        slow = slow.next
    }
    pre.next = slow.next
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
console.log(removeNthFromEnd(a,5))
