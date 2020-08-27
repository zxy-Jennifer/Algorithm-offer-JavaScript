function hasAllCodes(s, k) {
    let set = new Set()
    let len = s.length
    for(let i=0; i<=len-k; i++) {
        set.add(s.substr(i,k))
    }
    console.log(set)
    return set.size === Math.pow(2, k)
}

let s = "0000000001011100", k = 4
console.log(hasAllCodes(s, k))