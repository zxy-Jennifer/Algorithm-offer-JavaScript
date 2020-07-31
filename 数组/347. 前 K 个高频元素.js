
function topKFrequent(nums, k) {
    let map = new Map()
    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        }else {
            map.set(num, 1)
        }
    }
    let arr = Array.from(map).sort((a,b)=>b[1]-a[1])
    map = new Map(arr.map(item=>[item[0],item[1]]))
    let res = Array.from(map.keys())
    return res.slice(0, k)
}

let nums = [1,1], k = 0
console.log(topKFrequent(nums, k))