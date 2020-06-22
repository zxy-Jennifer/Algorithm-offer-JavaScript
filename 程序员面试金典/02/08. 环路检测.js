
/**
 * 
 * @param {*} head 
 */
function detectCycle(head) {
    if(!head || !head.next)return null
    let fast = head.next.next
    let slow = head.next

    while(slow!==fast) {
        if(slow === null || fast === null || fast.next === null)return null
        fast = fast.next.next
        slow = slow.next
    }
    let tmp = head.next
    fast = fast.next
    while(slow!==fast) {
        fast = fast.next
        tmp = tmp.next
    }
    slow = head
    while(slow!==tmp) {
        slow = slow.next
        tmp = tmp.next
    }
    return tmp
}
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
let a=new ListNode(1)
let b=new ListNode(2)
let c=new ListNode(3)
let d=new ListNode(4)
let e=new ListNode(5)
// a.next=b
b.next=c
c.next=d
d.next=e
e.next=e
console.log(detectCycle(a))