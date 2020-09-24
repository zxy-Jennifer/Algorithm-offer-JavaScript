/**
 * 深度优先遍历
 * @param {*} numCourses 
 * @param {*} prerequisites 
 */
function canFinish11(numCourses, prerequisites) {
    prerequisites.sort((a, b) => a[1] - b[1])
    // 0：未访问，1：访问中，-1：已访问
    let visited = new Array(numCourses).fill(0)
    let edges = Array.from(new Array(numCourses), () => new Array())
    for (let i = 0; i < prerequisites.length; i++) {
        edges[prerequisites[i][1]].push(prerequisites[i][0])
    }
    console.log(edges)
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true

    function dfs(index) {
        // 访问中 => 出现环
        if (visited[index] === 1) return false
        // 已访问完成
        if (visited[index] === -1) return true
        // 访问该节点
        visited[index] = 1
        // 判断节点的子节点
        // console.log('edges[index]', index, edges[index])
        for (let i of edges[index]) {
            if (!dfs(i)) return false
        }
        // 该节点访问完成
        visited[index] = -1
        return true
    }
}

function canFinish12(numCourses, prerequisites) {
    let len = prerequisites.length
    let edges = Array.from(new Array(numCourses), () => new Array())
    for (let i = 0; i < len; i++) {
        edges[prerequisites[i][1]].push(prerequisites[i][0])
    }
    console.log(edges)
    let visited = new Array(numCourses).fill(0)
    for (let i = 0; i < numCourses; i++) {
        if (!backTrack(i)) {
            return false
        }
    }
    return true

    function backTrack(index) {
        if (visited[index] === 1) return false
        if (visited[index] === -1) return true
        // 访问中
        visited[index] = 1
        for (let i of edges[index]) {
            if (!backTrack(i)) {
                return false
            }
        }
        // 访问结束
        visited[index] = -1
        return true
    }
}
/**
 * 广度优先遍历
 * @param {*} numCourses 
 * @param {*} prerequisites 
 */
function canFinish21(numCourses, prerequisites) {
    // 入度表
    let indegrees = new Array(numCourses).fill(0)
    let edges = Array.from(new Array(numCourses), () => new Array())
    for (let i = 0; i < prerequisites.length; i++) {
        indegrees[prerequisites[i][0]]++
        edges[prerequisites[i][1]].push(prerequisites[i][0])
    }
    let queue = []
    // console.log(indegrees)
    // 入度为零的节点入队
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) queue.push(i)
    }
    // 广度优先遍历
    while (queue.length) {
        let pre = queue.shift()
        numCourses--
        for (let cur of edges[pre]) {
            if (--indegrees[cur] === 0) queue.push(cur)
        }
    }
    return numCourses === 0
}

function canFinish22(numCourses, prerequisites) {
    let indegrees = new Array(numCourses).fill(0)
    let len = prerequisites.length
    let edges = Array.from(new Array(numCourses), () => new Array())
    for (let i = 0; i < len; i++) {
        edges[prerequisites[i][1]].push(prerequisites[i][0])
        indegrees[prerequisites[i][0]]++
    }
    let queue = []
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        let cur = queue.shift()
        numCourses--
        for (let item of edges[cur]) {
            if (--indegrees[item] === 0) {
                queue.push(item)
            }
        }
    }
    return numCourses === 0
}
// [1, 2] 学习 1 之前要先学习 2  2->1
let numCourses = 7,
    prerequisites = [
        [1, 0],
        [0, 3],
        [0, 2],
        [3, 2],
        [2, 5],
        [4, 5],
        [5, 6],
        [2, 4]
    ]
console.log(canFinish21(numCourses, prerequisites))
console.log(canFinish22(numCourses, prerequisites))