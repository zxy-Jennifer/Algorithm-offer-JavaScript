
function carPooling(trips, capacity) {
    let map = new Map()
    for(item of trips) {
        if(map.has(item[1])) {
            map.set(item[1],map.get(item[1])+item[0])
        }else {
            map.set(item[1], item[0])
        }
        if(map.has(item[2])) {
            map.set(item[2], map.get(item[2])-item[0])
        }else {
            map.set(item[2], 0-item[0])
        }
    }
    let arr = Array.from(map).sort((a,b)=>a[0]-b[0])
    map = new Map(arr.map(item=>[item[0],item[1]]))
    let flag = 0
    for(let key of map.keys()) {
        flag+=map.get(key)
        if(flag>capacity || flag<0)return false
    }
    return true
}

let trips = [[8,2,3],[4,1,3],[1,3,6],[8,4,6],[4,4,8]], capacity = 13
console.log(carPooling(trips, capacity))