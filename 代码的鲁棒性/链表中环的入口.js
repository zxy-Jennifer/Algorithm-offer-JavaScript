class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
function findCircle(head){
    // 确定环的长度
    var fast=head
    var slow=head
    var length=1
    while(slow!=null){
        fast=fast.next.next
        slow=slow.next
        if(fast===null){
            return null;
        }
        if(slow.val===fast.val){
            var getLen=slow.next
            while(getLen.val!==slow.val){
                getLen=getLen.next
                length++
            }
            console.log(length)
            break;
        }
    }
    fast=head
    slow=head
    for(let i=0;i<length;i++){
        fast=fast.next
    }
    while(slow.val!==fast.val){
        slow=slow.next
        fast=fast.next
    }
    if(slow.val===fast.val){
        return slow
    }else {
        return false
    }
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
e.next=e
console.log(findCircle(a))