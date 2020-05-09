class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeToDoublyList(root) {
    if(root===null) {
        return null
    }
    let head = null
    let pre = head
    inorder(root)
    head.left = pre
    pre.right = head
    return head

    function inorder(node) {
        if(node === null) {
            return null
        }
        inorder(node.left, pre)

        if(!pre) {
            // pre为空，即遍历到最左边节点，此时节点就是双向链表的head
            head = node
        }else {
            pre.right = node
        }
        node.left = pre
        pre = node
        inorder(node.right, pre)
    }
}

function treeToDoublyList(root) {
    if(root===null) {
        return null
    }
    const stack = []
    let head = null
    let pre = null
    let node = root
    while(stack.length||node) {
        if(node) {
            stack.push(node)
            node = node.left
        }else {
            const top = stack.pop()
            if(!pre) {
                node = top
            }else {
                pre.right = top
            }
            top.left = pre;
            pre = top;

            node = top.right; 
        }
    }
    head.left = pre;
    pre.right = head;
    return head;
}