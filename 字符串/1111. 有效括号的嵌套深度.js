
function maxDepthAfterSplit (seq) {
    let dep = 0
    return seq.split("").map((value, index) => {
        if(value === '(') {
            ++dep
            return dep % 2
        }else {
            let res = dep%2
            dep--
            return res
        }
    })
}
let seq = "()(())()"
console.log(maxDepthAfterSplit (seq))