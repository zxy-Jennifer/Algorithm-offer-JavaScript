
function threeConsecutiveOdds(arr) {
    let len = arr.length
    let count = 0
    for(let i=0; i<len; i++) {
        if(arr[i]%2) {
            count++
            if(count>=3)return true
        }else {
            count = 0
        }
    }
    return false
}