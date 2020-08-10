
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

/**
 * 
 * @param {*} head 
 * @param {*} k 
 */
function getKthFromEnd(head, k) {
    let first = head
    let sec = head
    let i = 1
    while(i<k && first.next!=null) {
        first = first.next
        i++
    }
    // console.log(first)
    while(first.next!=null) {
        first = first.next
        sec = sec.next
    }
    return sec
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
console.log(getKthFromEnd(a,5))