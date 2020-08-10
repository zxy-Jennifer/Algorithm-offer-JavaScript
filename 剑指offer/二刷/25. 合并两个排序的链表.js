
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

/**
 * 合并两个排序的链表
 * @param {*} l1 
 * @param {*} l2 
 */
function mergeTwoList1(l1, l2) {
    if(l1 === null && l2 === null)return null
    let h1 = l1, h2 = l2
    let head = null, l3 = null
    if(h2 === null || h1!==null&&h1.val<=h2.val){
        l3 = head = new ListNode(l1.val)
        l1 = l1.next
    }
    if(h1 === null || h2!=null&&h1.val>h2.val){
        l3 = head = new ListNode(l2.val)
        l2 = l2.next
    }
    while(l1!==null && l2!==null) {
        if(l1.val <= l2.val) {
            l3.next = new ListNode(l1.val)
            l1 = l1.next
            l3 = l3.next
        }else {
            l3.next = new ListNode(l2.val)
            l2 = l2.next
            l3 = l3.next
        }
    }
    while(l1!==null) {
        l3.next = new ListNode(l1.val)
        l1 = l1.next
        l3 = l3.next
    }
    while(l2!==null) {
        l3.next = new ListNode(l2.val)
        l2 = l2.next
        l3 = l3.next
    }
    return head
}

/**
 * 递归
 * @param {*} l1 
 * @param {*} l2 
 */
function mergeTwoList(l1, l2) {
    if(l1 === null)return l2
    if(l2 === null)return l1
    let res = null
    if(l1.val<=l2.val){
        res = new ListNode(l1.val)
        res.next = mergeTwoList(l1.next, l2)
    }else {
        res = new ListNode(l2.val)
        res.next = mergeTwoList(l1, l2.next)
    }
    return res
}

let a=new ListNode(1)
let b=new ListNode(3)
let c=new ListNode(2)
let d=new ListNode(4)
let e=new ListNode(5)
a.next=b
// b.next=c
c.next=d
d.next=e
console.log(mergeTwoList(a,c))