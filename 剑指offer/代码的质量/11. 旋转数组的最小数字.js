
/**
 * 一个递增排序的数组的一个旋转，输出旋转数组的最小元素
 * @param {*} numbers 
 */
function minArray1(numbers) {
    let i = 0
    let j = numbers.length - 1
    while(numbers[i]>=numbers[j] && i <= numbers.length) {
        i++
    }
    console.log(i)
    return i<numbers.length ? numbers[i] : numbers[numbers.length-1]
}

function minArray(numbers) {
    let i = 0
    let j = numbers.length-1
    while(i <= j) {
        let mid = Math.floor((i+j)/2)
        if(numbers[mid] > numbers[j]) {
            // 最小值在区间 mid+1 - j 内
            i= mid + 1
        }else if (numbers[mid] > numbers[i]) {
            // 最小值在区间 i - mid 内
            j = mid
        }else {
            // 处理特殊情况，如：[2,2,2,0,2]
            j --
        }
    }
    return numbers[i]
}

// [2,2,2,0,1]  [1,3,5] [3,4,5,1,2] [3,1,3]  [1]  [2,2,2,0,2] 
let arr = [2,2,2,0,2] 
console.log(minArray(arr))