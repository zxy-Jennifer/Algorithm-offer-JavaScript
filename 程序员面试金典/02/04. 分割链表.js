class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
/**
 * 
 * @param {*} head 
 * @param {*} x 
 */
function partition1(head, x) {
    if(!head)return head
    let res, small, big, mid
    let node = head
    while(node!==null) {
        if(node.val < x) {
            if(small) {
                small.next = node
                small = small.next
            }else {
                res = node
                small = node
            }
        }else {
            if(big) {
                big.next = node
                big = big.next
            }else {
                mid = node
                big = node
            }
        }
        node = node.next
    }
    if(!small) {
        return mid
    }else {
        small.next = mid
        if(big){
            big.next = null
        }else {
            small.next = null
        }
        return res
    }
}

let a=new ListNode(3)
let b=new ListNode(12)
let c=new ListNode(1)
let d=new ListNode(14)
let e=new ListNode(5)
// a.next=b
// b.next=c
// c.next=d
// d.next=e

console.log(partition(a, 3))