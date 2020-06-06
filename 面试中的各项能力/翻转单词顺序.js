

function reverseWords(s) {
    return s.trim().split(' ').filter(item=>item.length>0).reverse().join(' ')
}
let s="a good   example"
console.log(reverseWords(s))