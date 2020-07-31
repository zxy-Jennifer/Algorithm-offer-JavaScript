
function canMakeArithmeticProgression(arr) {
    arr.sort((a,b)=>a-b)
    if(arr.length<=1)return true
    let flag = arr[1]-arr[0]
    for(let i=1; i<arr.length; i++) {
        if(arr[i]-arr[i-1]!==flag)return false
    }
    return true
}

let arr = []
console.log(canMakeArithmeticProgression(arr))