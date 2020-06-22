class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function reList(head){
    var newHead=null
    var p=head
    var pre=null
    while(p!=null){
        var pnext=p.next
        if(pnext===null){
            // 新链表的头节点
            newHead=p
        }
        // 反转
        p.next=pre
        // 记录下一个
        pre=p
        p=pnext
    }
    return newHead
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
console.log(reList(a))