/**
 * 
 */
function getTree(depth) {
    depth.sort((a,b)=>b-a)
    let len = depth.length
    let map = new Map()
    for(let i=0; i<len; i++) {
        map.set(depth[i], map.has(depth[i]) ? map.get(depth[i])+1 : 1)
    }
    let res = 1
    for(let key of map.keys()) {
        let b = map.get(key)
        if(map.has(key-1)) {
            let a = map.get(key-1)
            if(b>a*2)return 0
            res *= getC(a*2, b)
        }
    }
    return res
    // 计算组合数
    function getC(a,b) {
        let res = 1, i=1, cou=1,temp=a
        while(i<=b) {
            res*=temp--
            cou*=i++
        }
        return res/cou
    }
}
let depth = [1,0,2,2]
console.log(getTree(depth))