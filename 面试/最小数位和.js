
function minPos(x) {
    let res = 0
    let arr = []
    while(x>9) {
        x-=9
        arr.push(9)
    }
    if(x>0)arr.push(x)
    arr = arr.reverse()
    for(let item of arr) {
        res = res*10 + item
    }
    return res
}
let x=22
console.log(minPos(x))