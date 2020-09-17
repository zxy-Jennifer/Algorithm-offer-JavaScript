/**
 * 
 * @param {*} head 
 */
function detectCycle(head) {
    if (!head) {
        return null
    }
    let slow = head
    let fast = head
    let temp = head.next
    while (fast !== null) {
        if (!fast.next) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            slow = fast.next
            while (fast != slow) {
                slow = slow.next
                temp = temp.next
            }
            break
        }
    }
    if (!fast) {
        return null
    }
    fast = head
    while (fast != temp) {
        fast = fast.next
        temp = temp.next
    }
    return temp
}
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)
a.next = b
b.next = c
c.next = d
d.next = e
// e.next = c
console.log(detectCycle(d))