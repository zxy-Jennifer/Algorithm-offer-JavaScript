
function merge(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]!==0?a[0]-b[0]:a[1]-b[1])
    // console.log(intervals)
    let res = []
    let i=0,j=1,len=intervals.length
    let end = 0
    while(i<len && j<=len) {
        end = intervals[i][1]
        if(i===len-1) {
            res.push(intervals[i])
            break
        }
        while(i<len && j<len && end >= intervals[j][1]){
            j++
        } 
        let temp = [intervals[i][0], intervals[i][1]]
        while(j<len && i<len && end >= intervals[j][0]) {
            temp.pop()
            end = intervals[j][1]
            temp.push(end)
            j++
            while(i<len && j<len && end >= intervals[j][1]){
                i=j++
            } 
        }
        // console.log(i,j,temp)
        res.push(temp)
        i=j++
    }
    return res
}

let intervals = [
    [ 0, 2 ], [ 0, 2 ],
    [ 1, 3 ], [ 1, 4 ],
    [ 3, 3 ], [ 6, 7 ],
    [ 6, 8 ], [ 7, 7 ]
  ]
// [[5,5],[1,3],[3,5],[4,6],[1,1],[3,3],[5,6],[3,3],[2,4],[0,0]]
// [[1,3],[2,6],[8,10],[15,18]]
//  [[2,3],[5,5],[2,2],[3,4],[3,4]]
console.log(merge(intervals))