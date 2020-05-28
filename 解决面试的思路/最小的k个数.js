function getLeastNumbers1(arr, k) {
    return arr.sort((a,b)=>{return a-b}).splice(0,k)
}

/**
 * 堆排序
 * @param {*} arr 
 * @param {*} k 
 */
function getLeastNumbers2(arr,k) {

}
/**
 * 基于快速排序的partition
 * @param {*} arr 
 * @param {*} k 
 */
function getLeastNumbers(arr,k) {
    if(arr===null||arr.length<=0) {
        return []
    }
    if(arr.length<=k) {
        return arr
    }
    let start = 0,
     end = arr.length-1
    let index = partiton(arr,start,end)
    while(index!==k) {
        if(index<k) {
            // k在index+1到end中间
            start = index+1
            index = partiton(arr,start,end)
        }else if(index>k) {
            // k在start到index-1中间
            end = index-1
            index = partiton(arr,start,end)
        }
    }
    return arr.slice(0,k)
}
/**
 * 快速排序
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function partiton(arr,start,end) {
    let k = arr[start]
    let left = start+1
    let right = end
    while(1) {
        while(left<=end && arr[left]<=k) {
            left++
        }
        while(right>=start+1 && arr[right]>=k) {
            right--
        }
        if(left>=right){
            break
        }
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    [arr[right],arr[start]] = [arr[start],arr[right]]
    return right
}

// while(i<j) {
//     if(i<j && arr[j]>k) {
//         j--
//     }
//     if(i<j && arr[i]<k) {
//         i++
//     }
//     [arr[i],arr[j]] = [arr[j],arr[i]]
// }
let arrr = [0,0,2,3,2,1,1,2,0,4]
console.log(partiton(arrr,0,9))
console.log(arrr)

// [0,1,2,1], k = 1
let arr = [0,0,2,3,2,1,1,2,0,4]
console.log(getLeastNumbers(arr,10))  //  [0]