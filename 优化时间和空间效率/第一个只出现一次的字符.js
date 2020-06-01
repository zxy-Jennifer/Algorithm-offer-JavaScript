/**
 * 
 * @param {*} s 
 */
function firstUniqChar1(s) {
    for(let i=0;i<s.length;i++) {
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) {
            return s[i]
        }
    }
    return " "
}
function firstUniqChar(s) {
    if(!s) {
        return " "
    }
    let map = new Map()
    for(let c of s) {
        if(map.has(c)){
            map.set(c,map.get(c)+1)
        }else {
            map.set(c,1)
        }
    }
    for(let c of map.keys()) {
        if(map.get(c) === 1){
            return c
        }
    }
    return " "
}
console.log(firstUniqChar("aaccdff"))