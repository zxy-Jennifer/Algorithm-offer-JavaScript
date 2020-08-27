
function characterReplacement(s,k) {
    let map = new Map()
    let maxCount = 0
    let res=0
    let left=0, right=0, len = s.length
    for(right=0; right<len; right++) {
        map.set(s[right], (map.has(s[right])?map.get(s[right]):0) + 1)
        maxCount = Math.max(maxCount, map.get(s[right]))
        if(right-left+1>maxCount+k) {
            // 窗口减去重复字符出现次数>k：重复字符不能填满整个窗口 
            map.set(s[left], map.get(s[left])-1)
            left++
        }else {
            // 重复字符可以填满整个窗口,更新结果
            res = Math.max(right-left+1, res)
        }
    }
    return res
}
let s = "ABAA", k = 0
console.log(characterReplacement(s,k))