
function findSubstring (s, words) {
    if(s.length <= 0 || words.length <= 0)return []
    console.log(words.length)
    let n = s.length
    let wlen = words[0].length
    let len = words.length * wlen
    let res = []
    for(let i=0; i<=n-len; i++) {
        let flag = isMatch(s, i, words)
        // console.log(flag)
        if(flag) {
            res.push(i)
        }
    }
    return res
    // console.log(isMatch(s,0,words))

    function isMatch(s, index, words) {
        let map = new Map()
        for(let i=0; i<words.length; i++) {
            if(map.has(words[i])) {
                map.set(words[i], map.get(words[i])+1)
            }else {
                map.set(words[i], 1)
            }
        }
        // console.log('111', map)
        for(let i=0; i<len; i+= wlen) {
            let str = s.substr(i+index, wlen)
            if(map.has(str)) {
                map.set(str, map.get(str)-1)
            }else {
                return false
            }
        }
        // console.log('222', map)
        for(let value of map.values()) {
            // console.log(value)
            if(value !== 0)return false
        }
        return true
    }
}

// barfoothefoobarman
// let s = "barfoothefoobarman",words = ["foo","bar"]
// "lingmindraboo fooo wing ding barr wing monkeypoundcake"
// ["fooo","barr","wing","ding","wing"]
let s="a",words=[]
// let   s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo","barr","wing","ding","wing"]
console.log(findSubstring(s,words))