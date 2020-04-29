class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function delNode(head,node){
    if(head==null||head.next==null){
        return null
    }
    let pre=head
    if(node.next==null){
        while(pre.next.next!=null){
            pre=pre.next
        }
        pre.next=null
        return head
    }
    node.val=node.next.val
    node.next=node.next.next
    ptn=null
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
console.log(delNode(c,d))
