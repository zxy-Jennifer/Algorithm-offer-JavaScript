
function smallestRange(nums) {
    let m = nums.length
    let ordered = []
    let j=0
    for(let item of nums) {
        for(let num of item) {
            let arr = [num, j]
            ordered.push(arr.slice())
        }
        j++
    }
    ordered.sort((a,b)=>a[0]-b[0])
    console.log(ordered, m)
    let res = []
    let len = Infinity
    for(let i=0; i<ordered.length; i++) {
        let count = 0, j=i
        let set = new Set()
        console.log(set, m)
        while(set.size<m && j<ordered.length) {
            set.add(ordered[j++][1])
        }
        if(set.size === m) {
            j--
            count = ordered[j][0] - ordered[i][0]
            console.log('i, j, count', i, j, count)
            if(count<len) {
                len=count
                res = [ordered[i][0], ordered[j][0]]
            }
        }
        console.log(res)
    }
    return res
}

let nums = [[47,67,82,97],[-2,34,42,49,50,50,51],[-61,-45,-3,-1,2,10],[25,57,76,77,78],[-11,10,29,55,55,55,57,59,60,60,62,63]]
console.log(smallestRange(nums))