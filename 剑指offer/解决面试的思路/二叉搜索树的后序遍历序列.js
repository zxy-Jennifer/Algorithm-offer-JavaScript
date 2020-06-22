function verifyPostorder(postorder) {
    if(postorder===null || postorder.length===0) {
        return true
    }
    let len = postorder.length
    let root = postorder[len-1]
    return verify(postorder,0,len-2,root)
}
function verify(arr, start, end, root) {
    if(end<=start) {
        return true
    }
    let i = start
    while(arr[i] < root) {
        i++
    }
    console.log('<',i)
    let mid = i-1>=0?i-1:0
    if(i <= end) {
        while(arr[i] > root) {
            i++
        }
    }
    console.log('>',i)
    if(i!=end+1) {
        return false
    }
    console.log('start',start,'mid',mid,'end',end)
    console.log('left',verify(arr, start, mid-1, arr[mid]),'right',verify(arr, mid+1, end-1, arr[end]))
    return verify(arr, start, mid-1, arr[mid]) && verify(arr, mid+1, end-1, arr[end])
}
let arr=[1,2,5,10,6,9,4,3]
console.log(verifyPostorder(arr))