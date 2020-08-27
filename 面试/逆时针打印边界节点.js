
function getBianjie(num, arr) {
    if(num<=0)return []
    let res = []
    let depth = 0
    let count = 1
    let rarr = []
    let size = 0
    let row = []
    res.push(arr[0])
    while(count<num) {
        size = Math.pow(2, ++depth)
        let left = count
        count += size
        let right = count-1
        if(count<num) {
            row = []
            for(let i=left; i<=right; i++) {
                row.push(arr[i])
            }
        }
        if(count === num) {
            for(let i=left; i<=right; i++) {
                res.push(arr[i])
            }
        }else {
            if(left<num)res.push(arr[left])
            if(right<num)rarr.push(arr[right])
        }
        // console.log('count', count, depth, row, res)
    }
    let last = 0
    if(count>num) {
        count-=size
        last++
    }
    // 加入最后一层的叶节点
    while(++count<num) {
        res.push(arr[count])
        last++
    }
    // 加入倒数第二层的叶节点
    for(let i=Math.ceil(last/2); i<row.length-1; i++) {
        res.push(row[i])
    }
    // console.log(count, res, rarr, last)
    return [...res,...rarr.reverse()]
}

let arr = [1,2,3,4,5,6], num=6
console.log(getBianjie(num, arr))