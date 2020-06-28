
/**
 * 
 * @param {*} arr 
 * @param {*} target 
 */
function search(arr, target) {
    let left = 0
    let right = arr.length-1
    if(right === -1)return -1
    while(left < right) {
        let mid = Math.floor((left+right)/2)
        if(arr[left] < arr[mid]) {
            // 左半边有序
            if(target >= arr[left] && target <= arr[mid]) {
                // 目标值在左半边有序区间中
                right = mid
            }else {
                left = mid+1
            }
        }else if(arr[left] > arr[mid]) {
            // 左半边无序
            if(target >= arr[left] || target <= arr[mid]) {
                right=mid
            }else {
                left = mid+1
            }
        }else if(arr[left] === arr[mid]){
            // 
            if(arr[left] !== target) {
                left++
            }else {
                right = left
            }
        }
    }
    return target === arr[left] ? left : -1
}

let arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5

console.log(search(arr, target))