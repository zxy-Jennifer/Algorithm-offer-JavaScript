
function minTime(n) {
    return recur(n)
    
    function recur(index) {
        if(index<=1) {
            return index
        }
        let mid = Math.floor(index/2)
        return recur(mid)+1
    }
}
console.log(minTime(10))