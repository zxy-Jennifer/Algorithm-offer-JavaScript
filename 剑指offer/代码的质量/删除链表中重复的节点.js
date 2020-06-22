class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
// 1-2-3-3-4-4-5  =》  1-2-5
function delRepNode(head){
    var pre=null
    var p=head
    while(p!=null){
        var pnt=p.next
        var flag=false
        if(pnt!=null&&pnt.val==p.val){
            flag=true
        }
        if(flag){
            var value=p.val
            var toDetel=p
            while(toDetel!=null&&toDetel.val==value){
                pnt=toDetel.next
                toDetel=pnt
            }
            if(pre==null){
                // 头结点和下一节点重复
                head=pnt
            }else {
                pre.next=pnt
            }
            p=pnt
        }else {
            pre=p
            p=p.next
        }
    }
    return head
}
function deleteDuplicates(head){
    var p=head
    while(p!=null){
        var pnext=p.next
        while(pnext!=null&&pnext.val==p.val){
            pnext=pnext.next
        }
        p.next=pnext
        p=p.next
    }
    return head
}
let a=new ListNode(2)
let b=new ListNode(2)
let c=new ListNode(2)
let d=new ListNode(3)
let e=new ListNode(4)
a.next=b
b.next=c
c.next=d
d.next=e
console.log(deleteDuplicates(a))