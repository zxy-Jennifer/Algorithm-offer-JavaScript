class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * 
 * @param {*} head 
 */
function reversePrint1(head) {
    let res = []
    let node = head
    while(node!==null) {
        res.unshift(node.val)
        node=node.next
    }
    return res
}

function reversePrint(head) {
    let res = []
    let node = head
    function recur(node) {
        if(node === null)return
        recur(node.next)
        res.push(node.val)
    }
    recur(node)
    return res
}