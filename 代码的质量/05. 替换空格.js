/**
 * 
 * @param {*} s 
 */
function replaceSpace1(s) {
    return s.split(" ").join('%20')
}

function replaceSpace(s) {
    let oi = s.length-1
    let res = ""
    while(oi>=0) {
        if(s[oi]!=" "){
            res = s[oi]+res
        }else {
            res = '%20'+res
        }
        oi--
    }
    return res
}

let str = "We are happy."
console.log(replaceSpace1(str))
console.log(replaceSpace(str))
