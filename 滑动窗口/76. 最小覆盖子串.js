/**
 * ADOBECODEBANC => ABC
 * @param {*} s 
 * @param {*} t 
 */

function minWindow(s, t) {
    let len = s.length
    let start = 0
    let map = new Map()
    for (let j = 0; j < t.length; j++) {
        map.set(t[j], map.has(t[j]) ? map.get(t[j]) + 1 : 1)
    }
    // console.log(map, map.size)
    let l = 0,
        r = 0
    let minLen = Infinity
    // let flag = true
    let needs = map.size
    while (r < len) {
        if (map.has(s[r])) {
            if (map.get(s[r]) === 1) {
                needs--
            }
            map.set(s[r], map.get(s[r]) - 1)
        }
        // 判断是否已经包含 t
        // flag = [...map.values()].filter((item) => item > 0).length <= 0
        // console.log('hahahahahaha', needs, l, r)
        r++
        while (needs <= 0) {
            if (map.has(s[l])) {
                if (map.get(s[l]) === 0) {
                    needs++
                }
                map.set(s[l], map.get(s[l]) + 1)
            }
            // console.log([...map.values()], flag, l, r)
            if (minLen > r - l) {
                start = l
                minLen = r - l
            }
            // flag = [...map.values()].filter((item) => item > 0).length <= 0
            l++
        }
    }
    // console.log('minLen', minLen, start)
    return minLen <= s.length ? s.substr(start, minLen) : ""
}
let s = "ADOBECODEBANC",
    t = "ABC"
console.log(minWindow(s, t))