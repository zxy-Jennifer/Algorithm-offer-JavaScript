/**
 * O(n^2)
 * @param {*} head 
 */
function sortList(head) {
    if(head === null)return null
    let node = head
    let curr = node.next
    while(node) {
        curr = node.next
        while(curr) {
            if(curr.val<node.val) {
                let temp = curr.val
                curr.val = node.val
                node.val = temp
            }
            curr = curr.next
        }
        node = node.next
    }
    return head
}
function sortList(head) {
    if(!head || !head.next) return head
    let slow = head, fast = head.next
    while(!fast && !fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let temp = slow.next
    slow.next = null
    let left = sortList(head)
    let right = sortList(temp)
    return merge(left, right)
}
function merge(h1, h2) {
    let pre = new ListNode(-1)
    let node = pre
    while(h1 && h2) {
        // console.log(h1, h2, node)
        if(h1.val> h2.val) {
            node.next = h2
            h2 = h2.next
        }else {
            node.next = h1
            h1 = h1.next
        }
        node = node.next
    }
    node.next = h1===null?h2:h1
    return pre.next
}
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
let a=new ListNode(3)
let b=new ListNode(12)
let c=new ListNode(14)
let d=new ListNode(1)
let e=new ListNode(7)
a.next=b
b.next=c
c.next=d
d.next=e
console.log(sortList(a))