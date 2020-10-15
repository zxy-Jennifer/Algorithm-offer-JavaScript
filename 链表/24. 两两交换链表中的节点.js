class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function swapPairs(head) {
  if (head === null || head.next === null) return head;
  let pre = head;
  let pnext = head.next;
  let p = head;
  while (pre && pnext) {
    if (pre === head) {
      head = pnext;
    }
    p.next = pnext;
    pre.next = pnext.next;
    pnext.next = pre;

    p = pre;
    pre = p.next;
    pnext = pre ? pre.next : null;
  }
  return head;
}

function swapPairs1(head) {
  if (!head || !head.next) {
    return head;
  }
  let newHead = null;
  let cur = head;
  let pre = head;
  let nex = head.next;
  while (cur && nex) {
    if (!newHead) {
      newHead = nex;
    }

    pre.next = nex;
    cur.next = nex.next;
    nex.next = cur;

    pre = cur;
    cur = pre.next;
    nex = cur ? cur.next : null;
  }
  return newHead;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(swapPairs1(a), a, a.next.next);
