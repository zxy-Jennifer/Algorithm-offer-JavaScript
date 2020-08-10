/**
 * 深度优先遍历
 * @param {*} numCourses 
 * @param {*} prerequisites 
 */
function canFinish1(numCourses, prerequisites) {
    prerequisites.sort((a,b) => a[1]-b[1])
    // 0：未访问，1：访问中，-1：已访问
    let visited = new Array(numCourses).fill(0)
    let edges = Array.from(new Array(numCourses), ()=>new Array())
    for(let i=0; i<prerequisites.length; i++) {
        edges[prerequisites[i][1]].push(prerequisites[i][0])
    }
    // console.log(edges)
    for(let i=0; i<numCourses; i++) {
        if(!dfs(i))return false
    }
    return true

    function dfs(index) {
        // 访问中 => 出现环
        if(visited[index] === 1)return false
        // 已访问完成
        if(visited[index] === -1)return true
        // 访问该节点
        visited[index] = 1
        // 判断节点的子节点
        // console.log('edges[index]', index, edges[index])
        for(let i of edges[index]) {
            if(!dfs(i))return false
        }
        // 该节点访问完成
        visited[index] = -1
        return true
    }
}
/**
 * 广度优先遍历
 * @param {*} numCourses 
 * @param {*} prerequisites 
 */
function canFinish(numCourses, prerequisites) {
    // 入度表
    let indegrees = new Array(numCourses).fill(0)
    let edges = Array.from(new Array(numCourses), ()=>new Array())
    for(let i=0; i<prerequisites.length; i++) {
        indegrees[prerequisites[i][0]]++
        edges[prerequisites[i][1]].push(prerequisites[i][0])
    }
    let queue = []
    // console.log(indegrees)
    // 入度为零的节点入队
    for(let i=0; i<numCourses; i++) {
        if(indegrees[i] === 0)queue.push(i)
    }
    // 广度优先遍历
    while(queue.length) {
        let pre = queue.shift()
        numCourses--
        for(let cur of edges[pre]) {
            if(--indegrees[cur] === 0) queue.push(cur)
        }
    }
    return numCourses === 0
}

// [1, 2] 学习 1 之前要先学习 2  2->1
let numCourses = 6, prerequisites = [[2,1], [4,1], [3,2],[4,2],[5,4],[5,3]]
console.log(canFinish1(numCourses, prerequisites))
console.log(canFinish(numCourses, prerequisites))