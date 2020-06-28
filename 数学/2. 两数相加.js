
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
function addTwoNumbers(l1, l2) {
    let tmp, head = null
    let carry = 0
    while(l1 || l2 || carry) {
        let sum = (l1?l1.val:0) + (l2?l2.val:0) + carry
        if(sum>=10) {
            carry = Math.floor(sum/10)
        }else {
            carry = 0
        }
        sum -= carry * 10
        let node = new ListNode(sum)
        if(!tmp){
            tmp = node
            head = tmp
        }else {
            tmp.next = node
            tmp = tmp.next
        }
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
    }
    return head
}

let a=new ListNode(5)
let b=new ListNode(9)
let c=new ListNode(3)
let d=new ListNode(5)
let e=new ListNode(5)
// a.next=b
// b.next=c
// c.next=d
// d.next=e
console.log(addTwoNumbers(a,d))
