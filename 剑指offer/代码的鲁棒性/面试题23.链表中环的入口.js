class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
/**
 * 确定环的入口节点
 * @param {*} head 
 */
function findCircle(head){
    var fast=head
    var slow=head
    var loopLength=1
    // 确定环的长度：loopLength
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
                loopLength++
            }
            console.log(loopLength)
            break
        }
    }
    fast=head
    slow=head
    /**
     * fast 先走 loopLength 步
     * slow从头开始 和 fast一起往下走，相遇的时候 fast一共走了len步，slow走了len-loopLen步
     */
    let len = loopLength
    for(let i=0;i<loopLength;i++){
        fast=fast.next
    }
    while(slow.val!==fast.val){
        slow=slow.next
        fast=fast.next
        len++
    }
    console.log('len', len)
    if(slow.val===fast.val){
        return slow
    }else {
        return false
    }
}
/**
 * 确定带环链表的长度
 * @param {*} node 
 */
function getLen(head) {
    let slow = head
    let fast = head
    let loopLength = 1
    let len = 1
    while(slow!==null) {
        slow = slow.next
        if(fast.next === null) {
            console.log('len1', len)
            return len
        }
        fast = fast.next.next
        if(fast === null) {
            console.log('len2', len)
            return len+1
        }
        len+=2
        // 存在环的话，获取环的长度
        if(slow.val === fast.val) {
            slow = slow.next
            while(slow.val !== fast.val) {
                slow = slow.next
                loopLength++
            }
            break
        }
    }
    console.log('slow', slow.val, fast.val)
    console.log('loopLength', loopLength)
    slow = head
    fast = head
    len = loopLength
    // fast先走 loopLength 步
    for(let i=0; i<loopLength; i++) {
        fast = fast.next
    }
    console.log('fast', slow.val, fast.val)
    while(fast.val !== slow.val) {
        fast = fast.next
        slow = slow.next
        len++
    }
    return len
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
// e.next=c
// console.log(findCircle(a))
console.log(getLen(a))
