
function getKey(count, words) {
    let res = 0
    let map = new Map()
    for(let word of words) {
        let str = word.toLowerCase()
        if(map.has(str)){
            map.set(str, map.get(str)+1)
        }else {
            map.set(str, 1)
        }
    }
    for(let key of map.keys()) {
        // console.log(key, map.get(key))
        if(map.get(key)>=0.01) {
            res++
        }
    }
    return res
}
let count = 5, words = ['I','I','am','a','boy']
console.log(getKey(count, words))