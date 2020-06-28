
/**
 * 滑动窗口 + 双指针
 * @param {*} s 
 */
function lengthOfLongestSubstring(s) {
    let cur = []
    let len = s.length
    let rk = -1
    let res = 0
    for(let i=0; i<len; i++) {
        if(i!==0) {
            cur.shift()
        }
        while(rk+1<len && !cur.includes(s[rk+1])) {
            cur.push(s[rk+1])
            rk++
        }
        res = Math.max(res, rk-i+1)
    }
    return res
}

let s = "abcdabcbb"
console.log(lengthOfLongestSubstring(s))