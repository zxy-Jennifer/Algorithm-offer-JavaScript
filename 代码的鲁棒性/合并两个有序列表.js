class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function merge(l1,l2) {
    if(l1==null) {
        return l2
    }else if(l2==null) {
        return l1
    }
    let res=null
    if(l1.val<l2.val) {
        res=l1
        res.next=merge(l1.next,l2)
    }else {
        res=l2
        res.next=merge(l1,l2.next)
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
console.log(merge(a,c))