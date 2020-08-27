
function award(arr) {
    let len = arr.length
    let res = 1
    for(let i=1; i<len; i++) {
        if(arr[i]<arr[i-1]) {
            let j=i-1
            while(j>0 && arr[j]){}
        }else {
            res++
        }
    }
}

let arr = [20, 32, 12, 32, 45, 11, 21, 31, 41, 33]