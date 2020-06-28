

function permutation(S) {
    let res = []
    let path = []
    recur(path,S)
    let set = new Set(res)
    return Array.from(set)

    function recur(path, s) {
        if(s === '') {
            res.push(path.join(''))
            return
        }

        for(let i=0,len = s.length;i<len;i++) {
            path.push(s[i])
            recur(path,s.slice(0, i).concat(s.slice(i+1)))
            path.pop()
        }
    }
}
console.log(permutation('qqe'))
