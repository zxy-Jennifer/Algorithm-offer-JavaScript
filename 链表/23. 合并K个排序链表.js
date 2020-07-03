class ListNode {
    constructor(val) {
        this.val = val
        this.next = next
    }
}

/**
 * 逐一合并
 * @param {*} lists 
 */
function mergeKLists1(lists) {
    if(!lists || lists.length===0)return null
    let res = lists[0]
    for(let i=1; i<lists.length; i++) {
        res = mergeTwo(res, list[i])
    }

    return res

    function mergeTwo(a,b) {
        if(!a || !b)return a?a:b
        let res = null
        if(a.val <= b.val) {
            res = a
            res.next = mergeTwo(a.next, b)
        }else {
            res = b
            res.next = mergeTwo(a, b.next)
        }
        return res
    }
}

/**
 * 分治合并
 * @param {*} lists 
 */
function mergeKLists(lists) {
    if(!lists || lists.length===0)return null
    let j=lists.length-1
    return mergeK(lists, 0, j)

    function mergeK(lists, left, right) {
        if(left === right)return lists[left]
        let mid = Math.floor((left+right)/2)
        let lnode = mergeK(lists, left, mid)
        let rnode = mergeK(lists, mid+1, right)
        return mergeTwo(lnode, rnode)
    }

    function mergeTwo(a,b) {
        if(!a || !b)return a?a:b
        let res = null
        if(a.val <= b.val) {
            res = a
            res.next = mergeTwo(a.next, b)
        }else {
            res = b
            res.next = mergeTwo(a, b.next)
        }
        return res
    }
}

console.log(mergeKLists([]))