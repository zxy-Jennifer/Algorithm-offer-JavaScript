

function oneEditAway(first, second) {
    let s1 = first.length
    let s2 = second.length
    if(Math.abs(s1-s2)>1)return false
    if(s1 === s2) {
        let count = 0
        for(let i=0;i<s1;i++) {
            if(first[i]!==second[i])count++
        } 
        return count<=1
    }else {
        let short = s1<s2?first:second
        let long = s1>s2?first:second
        for(let i=0;i<short.length;i++) {
            if(short[i]!==long[i]) {
                return short.substring(i) === long.substring(i+1)
            }
        }
        return true
    }
}
/**
 * "intention"
"execution"
 */
let first = "intention", second = "intenti"
console.log(oneEditAway(first,second))