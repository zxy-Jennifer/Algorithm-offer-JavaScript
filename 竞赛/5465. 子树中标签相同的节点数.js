/**
 * 
 * @param {*} n 
 * @param {*} edges 
 * @param {*} labels 
 */
function countSubTrees1(n, edges, labels) {
    // 根据edges简历邻接表
    let res = new Array(n).fill(0)
    let map = new Map()
    let omap = new Map()
    let par = new Set()
    recur(0, edges, par)
    let keys = [...omap.keys()].reverse()
    for(let i=0; i<keys.length; i++) {
        let arr = []
        let vals = omap.get(keys[i])
        for(let j=0; j<vals.length; j++) {
            arr.push(labels[vals[j]])
            if(map.has(vals[j])) {
                arr.push(...map.get(vals[j]))
            }
        }
        map.set(keys[i], arr.slice())
    }
    for(let i=0; i<n; i++) {
        res[i] = findNum(map.get(i), labels[i]) + 1
    }
    return res

    function findNum(arr, target) {
        let res = 0
        if(!arr || arr.length<=0)return res
        for(let i=0; i<arr.length; i++) {
            if(arr[i] === target)res++
        }
        return res
    }

    function getMap(edges, root, par) {
        edges.forEach(item=>{
            if(item[0] === root || item[1] === root ) {
                let value = item[0]===root?item[1]:item[0]
                if(!par.has(value)) {
                    if(omap.has(root)) {
                        omap.set(root, [...omap.get(root), value])
                    }else {
                        omap.set(root, [value])
                    }
                }
            }
        })
    }
    function recur(root, edges, par) {
        getMap(edges, root, par)
        par.add(root)
        if(!omap.get(root) || omap.get(root).length===0)return
        for(let value of omap.get(root)) {
            recur(value, edges, par)
        }
    }
}
function countSubTrees2(n, edges, labels) {
    let mat = new Array(n)
    for(let i=0; i<n; i++) {
        mat[i] = new Array()
    }
    let res = new Array(n)
    for(let item of edges) {
        mat[item[0]].push(item[1])
        mat[item[1]].push(item[0])
    }
    let visited = new Array(n).fill(false)
    dfs(0)
    return res

    function dfs(num) {
        let next = mat[num]
        console.log('next', next)
        visited[num] = true
        let temp = new Map()
        for(let item of next) {
            if(!visited[item]) {
                let sub = dfs(item)
                for(let key of sub.keys()){
                    if(temp.has(key)){
                        temp.set(key, temp.get(key) + sub.get(key))
                    }else {
                        temp.set(key, sub.get(key))
                    }
                }
            }
        }
        if(temp.has(labels[num])){
            temp.set(labels[num],temp.get(labels[num])+1)
        }else {
            temp.set(labels[num],1)
        }
        console.log(temp)
        res[num] = temp.get(labels[num])
        return temp
    }
}

function countSubTrees(n, edges, labels) {
    if(n == 1) return [1];
    let stack = [],
        res = new Array(n).fill(0),
        graph = Array.from(new Array(n), ()=> new Set()),
        dp = Array.from(new Array(n), ()=> new Map()),
        visited = new Array(n).fill(false);
        // 建立邻接表
    for(let i = 0; i < edges.length; i++){
        graph[edges[i][0]].add(edges[i][1]);
        graph[edges[i][1]].add(edges[i][0]);
    }
    // 将叶子节点进栈
    for(let i = 1; i < n; i++){
        if(graph[i].size == 1) stack.push(i);
    }
    while(stack.length) {
        console.log(stack)
        let temp = new Map()
        let cur = stack.pop()
        temp.set(labels[cur],1)
        // 得到相邻边
        let par = [...graph[cur]]
        visited[cur] = true
        for(let item of par) {
            if(visited[item]) {
                let sub = dp[item]
                for(let key of sub.keys()){
                    if(temp.has(key)){
                        temp.set(key, temp.get(key) + sub.get(key))
                    }else {
                        temp.set(key, sub.get(key))
                    }
                }
            }else {
                stack.unshift(item)
            }
        }
        res[cur] = temp.get(labels[cur])
    }
    return res
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees3 = function(n, edges, labels) {
    if(n == 1) return [1];
    let stack = [],
        res = new Array(n).fill(0),
        graph = Array.from(new Array(n), ()=> new Set()),
        // 存放子节点的字母分布
        dp = Array.from(new Array(n), ()=> new Array(26).fill(0));
    // 建立邻接表
    for(let i = 0; i < edges.length; i++){
        graph[edges[i][0]].add(edges[i][1]);
        graph[edges[i][1]].add(edges[i][0]);
    }
    // 将叶子节点进栈
    for(let i = 1; i < n; i++){
        if(graph[i].size == 1) stack.push(i);
    }
    // 自底向上计算
    while(stack.length != 0){
        let temp = [];
        while(stack.length != 0){
            let t = stack.pop(),
                ta = [...graph[t]];
            // t的子节点中自身字母位置处加一
            res[t] = ++dp[t][labels[t].charCodeAt() - 97];
            for(let i = 0; i < ta.length; i++){
                // 为父节点加上 自己字母位置处的个数
                for(let j = 0; j < 26; j++){
                    dp[ta[i]][j] += dp[t][j];
                }
                // 计算过的孩子节点从父节点的邻接矩阵中删除，避免重新计算
                graph[ta[i]].delete(t);
                // 当节点的孩子节点全计算完时节点进栈
                if(graph[ta[i]].size == 1 && ta[i] != 0 || graph[ta[i]].size == 0 && ta[i] == 0){
                    temp.push(ta[i]);
                }
            }
        }
        stack = temp;
    }
    return res;
};
/**
 * 25
[[4,0],[5,4],[12,5],[3,12],[18,3],[10,18],[8,5],[16,8],[14,16],[13,16],[9,13],[22,9],[2,5],[6,2],[1,6],[11,1],[15,11],[20,11],[7,20],[19,1],[17,19],[23,19],[24,2],[21,24]]
"hcheiavadwjctaortvpsflssg"
 */
let n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab"
// let edges = [[0,1],[1,2],[0,3]]
// let n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"
console.log(countSubTrees3(n, edges, labels))