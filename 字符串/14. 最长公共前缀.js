

function longestCommonPrefix(strs) {
    if(strs.length === 0)return ''
    let len = strs.length
    let res = strs[0]

    for(let i=1; i<len; i++) {
        let j=0
        for(;j<res.length && j<strs[i].length; j++) {
            if(res[j] !== strs[i][j])break
        }
        res = res.substr(0, j)
        if(res === '')return res
    }
    return res
}

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))