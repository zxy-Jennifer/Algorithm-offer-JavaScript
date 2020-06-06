
/**
 * 
 * @param {*} s 
 * @param {*} n 
 */
function reverseLeftWords1(s,n) {
    let left = s.substr(0,n).split('').reverse()
    let right = s.substr(n).split('').reverse()
    return left.concat(right).reverse().join('')
}

function reverseLeftWords(s,n) {
    let res = ''
    for(let i=n;i<s.length+n;i++) {
        // console.log(i%s.length)
        res+=s[i%s.length]
    }
    return res
}

let s = "abcdefg", k = 2
console.log(reverseLeftWords(s,k))