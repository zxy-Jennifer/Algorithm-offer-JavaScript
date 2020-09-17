/**
 * 
 * @param {*} m 
 * @param {*} n 
 * @param {*} arr 
 */
function getSum1(n, m, arr) {
    let len = arr.length
    let group = Array.from(new Array(m), () => [])
    let belong = Array.from(new Array(n), () => [])
    for (let i = 0; i < m; i++) {
        let peoples = arr[i].slice()
        group[i] = peoples.slice()
        for (let j of peoples) {
            belong[j].push(i)
        }
    }
    let visited = new Array(n).fill(false)
    let visitedGroup = new Array(m).fill(false)
    let noticeGroup = belong[0]
    for (item of noticeGroup) {
        visitedGroup[item] = true
    }
    while (noticeGroup.length) {
        let nextNoticeGroup = []
        // 找到所有和0同组的人
        for (item of noticeGroup) {
            // 找到同组的人所在的组
            for (let people of group[item]) {
                // 对组内每个人进行遍历
                for (let pgroup of belong[people]) {
                    if (!visitedGroup[pgroup]) {
                        nextNoticeGroup.push(pgroup)
                        visitedGroup[pgroup] = true
                    }
                }
                visited[people] = true
            }
        }
        noticeGroup = nextNoticeGroup
    }
    let res = 0
    for (let item of visited) {
        if (item) {
            res++
        }
    }
    return res
}

function getSum2(m, arr) {
    let parent = new Array(m + 1)
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i
    }
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            union(arr[i][j], arr[i][j + 1])
        }
    }
    let base = findParent(0)
    for (let i = 0; i < parent.length; i++) {
        if (findParent(i) === base) {
            res++
        }
    }
    console.log('parent:', parent)
    return res

    function findParent(i) {
        if (parent[i] === i) {
            return i
        } else {
            return findParent(parent[i])
        }
    }

    function union(i, j) {
        let pari = findParent(i)
        let parj = findParent(j)
        if (pari !== parj) {
            parent[pari] = parj
        }
    }
}
let arr = [
    [1, 2],
    [10, 11, 12, 13, 14],
    [0, 1],
    [49, 2],
    [6, 7, 8, 1]
]
// console.log(getSum2(50, 5, arr))
console.log(getSum2(50, arr))