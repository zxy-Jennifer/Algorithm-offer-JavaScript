
function numSub(s) {
    let res = 0
    let len = s.length
    if(len<=0)return res
    let flag = 0
    for(let i=0; i<len; i++) {
        if(s[i] == 1) {
            flag++
        }else {
            res+=Math.floor((flag*(flag+1))/2)
            flag = 0
        }
    }
    if(flag!==0)res+=Math.floor((flag*(flag+1))/2)
    return res%1000000007

}

let s = "0110111"
console.log(numSub(s))