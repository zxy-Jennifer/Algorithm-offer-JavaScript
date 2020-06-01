class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * 两个链表长度分别为L1+C、L2+C， C为公共部分的长度，
 * 第一个人走了L1+C步后，回到第二个人起点走L2步；第2个人走了L2+C步后，回到第一个人起点走L1步。 当两个人走的步数都为L1+L2+C时就指向相交点
 * @param {*} headA 
 * @param {*} headB 
 */
function getIntersectionNode(headA, headB) {
    let p1 = headA
    let p2 = headB
    while(p1!==p2) {
        // 两条链表最后都指向了同一个 null （None）节点，代替了不相交的特殊情况
        p1 = p1 === null ? headB : p1.next
        p2 = p2 === null ? headA : p2.next
    }
    return p1
}