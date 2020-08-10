/**
 * 
 * @param {*} s 
 */
function makeGood(s) {
    let i=0;
    let len = s.length-1
    while(i<len) {
        let a=s[i], b=s[i+1]
        if(a!==b && a.toLowerCase() === b.toLowerCase()) {
            s=s.substring(0,i)+s.substr(i+2)
            i=0
        }else {
            i++
        }
        len=s.length-1
    }
    return s
}
let s="Pp"
console.log(makeGood(s))