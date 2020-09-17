function found(arr, target) {
    let len = arr.length
    let left = 0,
        right = len - 1
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(found(arr, 4))