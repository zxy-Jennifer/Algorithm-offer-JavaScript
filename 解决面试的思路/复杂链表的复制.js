class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}
function copyRandomList(head) {
    if(head === null){
        return head
    }
    const map = new Map()
    map.set(node, newNode)
    let newHead = new Node(head.val)
    let node = head // 当前节点
    let newNode = newHead // 当前节点的copy
    while(node.next !== null) {
        newNode.next = new Node(node.next.val)
        node = node.next
        newNode = newNode.next
        map.set(node,newNode)
    }
    newNode = newHead
    node = head
    while(newNode !== null) {
        newNode.random = map.get(node.random)
        newNode = newNode.next
        node = node.next
    }
    return newHead
}
/**
 * 复制原始节点，并链接到原始节点的后面
 * @param {*} head 
 */
function cloneNodes(head){
    let pNode = head
    while(pNode!==null) {
        let cloneNode = new Node(pNode.val)
        cloneNode.random = null
        cloneNode.next = pNode.next
        pNode.next = cloneNode
        pNode = pNode.next.next
    }
}
/**
 * 如果原始节点S的random指向N，则原始节点的复制节点S'的random指向N的复制节点N'
 * @param {*} head 
 */
function connectRandom(head) {
    let pNode = head
    while(pNode!==null) {
        let fNode = pNode.next
        if(pNode.random!==null) {
            fNode.random = pNode.random.next
        }
        pNode = fNode.next
    }
}
/**
 * 把第二步得到的链表拆分成两个链表
 * 偶数位置上的节点组成复制出来的链表
 * @param {*} head 
 */
function reconnectNodes(head) {
    let pNode = head
    let cloneNode = null
    let cloneHead = null
    if(pNode !== null) {
        cloneHead = cloneNode = pNode.next
        pNode.next = cloneNode.next
        pNode = pNode.next
    }
    while(pNode !== null) {
        cloneNode.next = pNode.next
        cloneNode = cloneNode.next
        pNode.next = cloneNode.next
        pNode = pNode.next
    }
    return cloneHead
}
function copyRandomList(head) {
    cloneNodes(head)
    connectRandom(head)
    return reconnectNodes(head)
}