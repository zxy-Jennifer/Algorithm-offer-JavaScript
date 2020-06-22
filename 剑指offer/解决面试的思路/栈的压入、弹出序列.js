function isPopOrder(pushed,popped) {
    // 1 2 3 4 5 
    // 5 4 3 2 1
    if(pushed.length===0&&popped.length===0){
        return true
    }
    if(pushed.length===0||popped.length===0||pushed.length!==popped.length){
        return false
    }
    var tmp=[]
    let j=0
    for(let i=0;i<pushed.length;i++){
        tmp.push(pushed[i])
        while(tmp.length!==0 && j<popped.length && tmp[tmp.length-1] === popped[j]){
            j++
            tmp.pop()
        }
    }
    return tmp.length === 0
}
var pushed = [1,2,3,4,5]
var popped = [4,5,5,2,1]
console.log(isPopOrder(pushed,popped))