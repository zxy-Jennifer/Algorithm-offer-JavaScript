

function insert(intervals, newInterval) {
    intervals.push(newInterval)
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

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log(insert(intervals, newInterval))