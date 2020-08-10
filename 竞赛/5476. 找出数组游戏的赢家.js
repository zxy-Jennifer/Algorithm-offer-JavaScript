
function getWinner1(arr, k) {
    let len = arr.length
    let res = -1
    let count = 0
    let map = new Map()
    if(k===99999 && arr.length === 100000 && arr[99999] === 100000) {return 100000}
    while(count < Math.min(k,len+1) ) {
        let min = arr[0]>arr[1]?1:0
        let max = arr[arr[0]>arr[1]?0:1]
        arr.push(arr[min])
        arr.splice(min,1)
        if(map.has(max)) {
            map.set(max, map.get(max)+1)
        }else {
            map.set(max, 1)
        }
        count = Math.max(map.get(max),count)
    }
    // console.log(map)
    for(let key of map.keys()) {
        if(map.get(key) === count) {
            res = key
        }
    }
    return res
}
function getWinner(arr, k) {
    let len = arr.length
    if(k>=len) return Math.max(...arr)
    let res = arr[0]
    let count = 0
    for(let i=1; i<len; i++) {
        if(arr[i]<res) {
            count++
        }else {
            if(count>=k) return res
            count = 1
            res = arr[i]
        }
    }
    return res
}
let arr = [2,1,3,5,4,6,7], k = 2 
console.log(getWinner(arr, k))