
function palindromePairs1(paris) {
    let res = []
    let len = paris.length
    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j<len; j++) {
            let str = paris[i] + paris[j]
            if(isPalindrome(str))res.push([i,j])
            let rstr = paris[j] + paris[i]
            // console.log(str, rstr, i, j)
            if(isPalindrome(rstr))res.push([j,i])
        }
    }
    return res
    // 判断是否是回文
    function isPalindrome(s) {
        let len = s.length
        if(len<=1)return true
        let i=0, j=len-1
        while(i<j) {
            if(s[i]!==s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}

function palindromePairs(words) {
    let res = []
    let map = new Map()
    let len = words.length
    for(let i=0; i<len; i++) {
        let str = words[i].split('').reverse().join('')
        map.set(str, i)
    }
    for(let i=0; i<len; i++) {
        let str = words[i]
        if(isPalindrome(str) && map.has('') && str !== '') {
            res.push([map.get(''), i])
        }
        for(let j=0; j<str.length; j++) {
            let left = str.substring(0,j)
            let right = str.substring(j)
            if(isPalindrome(left) && map.has(right) && map.get(right) !== i) {
                res.push([map.get(right), i])
            }
            if(isPalindrome(right) && map.has(left) && map.get(left) !== i) {
                res.push([i, map.get(left)])
            }
        }
    }
    return res

    // 判断是否是回文
    function isPalindrome(s) {
        let len = s.length
        if(len<=1)return true
        let i=0, j=len-1
        while(i<j) {
            if(s[i]!==s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}

let paris = ["a",""]
console.log(palindromePairs1(paris))
console.log(palindromePairs(paris))