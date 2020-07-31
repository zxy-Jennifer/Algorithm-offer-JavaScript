/**
 * 
 * @param {*} head 
 */
function insertionSortList(head) {
    if(head === null || head.next === null)return head
    let node = head.next
    let pre = head
    let hair = new ListNode(0)
    while(node) {
        pre = hair.next
        while(node.val>pre.val) {
            pre = pre.next
        }
        pre.next = node.next
        node.next = pre
        hair.next = node
    }
}