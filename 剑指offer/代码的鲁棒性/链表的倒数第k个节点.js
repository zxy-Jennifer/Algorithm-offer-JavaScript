class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function FindKthToTail(head, k){
    if(head==null||k<=0){
        return null
    }
    let first=head
    let second=head
    let count=0;
    while(count<k-1){
        if(first.next){
            first=first.next
        }else {
            return null
        }
        count++;
    }
    while(first.next){
        first=first.next;
        second=second.next
    }
    return second
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
console.log(FindKthToTail(a,1))
