// 反转从位置 m 到 n 的链表
class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function reverseBetween(head,m,n){
    var i=1
    var fir=head
    var pre=head
    var arr=new Array()
    while(i<=n && fir!=null){
        if(i<m){
            pre=pre.next
        }
        if(i>=m){
            arr.push(fir.val)
        }
        fir=fir.next
        i++
    }
    i=m
    while(i<=n){
        var tmp=arr.pop()
        pre.val=tmp
        pre=pre.next
        i++
    }
    return head
}
function reverseBetweenMN(head,m,n){
    var dummy=new ListNode(-1)
    dummy.next=head
    var pre=dummy
    for(var i=1;i<m;i++){
        pre=pre.next
    }
    head=pre.next
    for(var i=m;i<n;i++){
        var nxt=head.next
        head.next=nxt.next
        nxt.next=pre.next
        pre.next=nxt
    }
    return dummy.next
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
console.log(reverseBetweenMN(a,2,4))
// reverseBetween(a,2,4)