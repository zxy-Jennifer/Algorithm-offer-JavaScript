
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function removeDuplicateNodes(head) {
    let set = new Set()
    let node = head
    let pre = null
    while(node) {
        if(set.has(node.val)) {
            pre.next = node.next
            node = node.next
        }else {
            set.add(node.val)
            pre = node
            node = node.next
        }
    }
    return head
}

let a=new ListNode(1)
let b=new ListNode(2)
let c=new ListNode(3)
let d=new ListNode(3)
let e=new ListNode(2)
let f=new ListNode(1)
a.next=b
b.next=c
// c.next=d
// d.next=e
// e.next=f

console.log(removeDuplicateNodes(a))