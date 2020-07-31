/**
 * 
 * @param {*} n 
 * @param {*} edges 
 * @param {*} succProb 
 * @param {*} start 
 * @param {*} end 
 */
function maxProbability(n, edges, succProb, start, end) {
    let res = 0
    let path = []
    let len = succProb.length
    if(len<=0)return 0
    let prob = 0
    let right
    for(let i=0; i<len; i++) {
        if(edges[i][0] === start) {
            right = edges[i][1]
        }else if(edges[i][1] === start) {
            right = edges[i][0]
        }else {
            continue
        }
        path.push(i)
        prob = succProb[i]
        recur(n, len, edges, succProb, path, right, end, prob)
        path.pop()
    }
    return res

    function recur(n, len, edges, succProb, path, start, end, prob) {
        if(start === end)console.log('prob', prob)
        if(start === end && prob>res) {
            // console.log('daaaaaaaaaaaaaaaaaaaa',prob)
            res=prob
        }

        let right
        for(let i=0; i<len; i++) {
            // 访问过了
            if(path.indexOf(i)!==-1)continue
            if(edges[i][0] === start) {
                right = edges[i][1]
            }else if(edges[i][1] === start) {
                right = edges[i][0]
            }else {
                continue
            }
            path.push(i)
            prob *= succProb[i]
            recur(n, len, edges, succProb, path, right, end, prob)
            path.pop()
        }
    }
}

let n = 5, edges = [[2,3],[1,2],[3,4],[1,3],[1,4],[0,1],[2,4],[0,4],[0,2]], succProb = [0.06,0.26,0.49,0.25,0.2,0.64,0.23,0.21,0.77], start = 0, end = 3
console.log(maxProbability(n, edges, succProb, start, end))