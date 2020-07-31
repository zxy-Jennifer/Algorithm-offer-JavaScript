

function determine_virus_type( size ,  swap_indexes ) {
    let res = 0
    let arr = new Array(size).fill(0)
    for(let i=0; i<size; i++) {
        arr[i] = size-i
    }
    // console.log(arr)
    let len = swap_indexes.length
    for(let i=0; i<len; i++) {
        let left = swap_indexes[i][0], right = swap_indexes[i][1];
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    console.log(arr)
    for(let i=0; i<size; i++) {
        for(let j=i+1; j<size; j++) {
            if(arr[j]>arr[i]) {
                res++
            }
        }
    }
    return res%2===0?2:1
}

let size = 5
let swap_indexes = [[2,4],[1,4],[0,3]]

console.log(determine_virus_type( size ,  swap_indexes ))