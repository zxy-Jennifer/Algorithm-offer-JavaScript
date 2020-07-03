class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function reverseKGroup(head, k) {
    const myReverse = (head, tail) => {
        let prev = tail.next;
        let p = head;
        while (prev !== tail) {
            const nex = p.next;
            p.next = prev;
            prev = p;
            p = nex;
        }
        return [tail, head];
    }

    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
    

    function reverseList(start, end) {
        let node = start
        let pre = end.next
        while(pre !== end) {
            let pnext = node.next
            node.next = pre
            pre = node
            node = pnext
        }
        return [end, start]
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
let res = reverseKGroup(a, 3)
console.log(res, res.next.next)