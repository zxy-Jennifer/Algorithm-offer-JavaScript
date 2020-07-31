
function lexicalOrder1(n) {
    let res = new Array(n).fill(0)
    for(let i=0; i<n; i++) {
        res[i] = i+1
    }
    return res.sort()
}
function lexicalOrder(n) {
    let res = []
    recur(null, n)
    return res
    function recur(currentValue, maxNum) {
        if(currentValue !== null && currentValue>maxNum)return
        if(currentValue !== null)res.push(currentValue)

        for(let i=0; i<=9; i++) {
            if(currentValue === null) {
                if(i===0) {
                    continue
                }else {
                    currentValue = 0
                }
            }
            recur(currentValue*10 + i, maxNum)
        }
    }
}
console.log(lexicalOrder(13))