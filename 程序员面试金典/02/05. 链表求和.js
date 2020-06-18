
/**
 * 整数反向存放
 * @param {*} l1 
 * @param {*} l2 
 */
function addTwoNumbers1(l1, l2) {
    if(!l1)return l2
    if(!l2)return l1
    let res,tmp = null
    let carry  = 0
    while(l1 || l2 || carry) {
        let sum = (l1?l1.val:0) + (l2?l2.val:0) + carry
        carry = Math.floor(sum/10)
        sum = sum%10
        let node = new ListNode(sum)
        if(!tmp){
            tmp = node
            res = tmp
        }else {
            tmp.next = node
            tmp = tmp.next
        }
        if(l1)l1 = l1.next
        if(l2)l2 = l2.next
    }
    return res
}

/**
 * 整数正向存放
 * @param {*} l1 
 * @param {*} l2 
 */
function addTwoNumbers(l1, l2) {
    let arr1 = []
    let arr2 = []
    let head = null
    while(l1) {
        arr1.push(l1.val)
        l1 = l1.next
    }
    while(l2) {
        arr2.push(l2.val)
        l2 = l2.next
    }
    let carry = 0
    while(arr1.length || arr2.length || carry) {
        let sum = (arr1.length?arr1.pop():0) + (arr2.length?arr2.pop():0) + carry
        carry = Math.floor(sum/10)
        sum = sum%10
        let node = new ListNode(sum)
        node.next = head
        head = node
    }
    return head
}

class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
let a=new ListNode(9)
let b=new ListNode(9)
let c=new ListNode(3)
let d=new ListNode(4)
let e=new ListNode(5)
a.next=b
b.next=c
// c.next=d
d.next=e

console.log(addTwoNumbers1(a,d))
console.log(addTwoNumbers(a,d))
