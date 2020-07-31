
function getLeave(pre) {
    let res = []
    recur(0, pre.length-1)
    return res

    function recur(start, end) {
        if(start>end)return
        if(end===start) {
            res.push(pre[start])
        }
        let mid = start+1
        while(mid<=end && pre[mid] < pre[start])mid++
        recur(start+1, mid-1)
        recur(mid, end)
    }
}
let pre = [12,5,2,9,18,15,17,16,19]
console.log(getLeave(pre))
