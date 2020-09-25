/**
 * 
 * @param {*} root 
 */
function convertBST1(root) {
    if (!root) {
        return null
    }
    let arr = traverse(root)
    let len = arr.length
    arr.sort((a, b) => b - a)
    let map = new Map()
    let sum = arr[0]
    map.set(sum, sum)
    for (let i = 1; i < len; i++) {
        if (arr[i] !== arr[i - 1]) {
            sum += arr[i]
            let key = arr[i]
            let value = sum
            map.set(key, value)
        }
    }

    function getRes(root) {
        if (!root) {
            return root
        }
        root.val = map.get(root.val)
        getRes(root.left)
        getRes(root.right)
    }
    getRes(root)
    return root


    function traverse(root) {
        if (!root) {
            return []
        }
        return [root.val, ...traverse(root.left), ...traverse(root.right)]
    }
}

function convertBST(root) {
    let current = 0
    return traverse(root)

    function traverse(root) {
        if (root) {
            traverse(root.right)
            current += root.val
            root.val = current
            traverse(root.left)
        }
        return root
    }
}