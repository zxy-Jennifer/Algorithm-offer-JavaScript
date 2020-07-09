

function groupAnagrams(strs) {
    let map = new Map()
    for(let i=0; i<strs.length; i++) {
        let temp = strs[i]
        temp = Array.from(temp).sort().join("")
        if(map.has(temp)) {
            map.set(temp, [...map.get(temp), strs[i]])
        }else {
            map.set(temp, [strs[i]])
        }
    }
    // console.log(map)
    return Array.from(map.values())
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))