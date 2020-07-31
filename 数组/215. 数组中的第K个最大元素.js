// const Heap = require('../../Sort/Heap')
const Heap = require('../Sort/Heap')

function findKthLargest1(nums, k) {
    nums.sort((a, b) => a-b)
    return nums[nums.length - k]
}

/**
 * 利用快排：倒数第k个的下标为 len-k
 * @param {*} nums 
 * @param {*} k 
 */
function findKthLargest(nums, k) {
    let len = nums.length
    return quickSelect(nums, 0, len-1, len-k)

    function quickSelect(arr, i, j, index) {
        let pivot = partition(arr, i, j)
        if(pivot === index) {
            return arr[pivot]
        }else if(pivot < index) {
            return quickSelect(arr, pivot+1, j, index)
        }else {
            return quickSelect(arr, i, pivot-1, index)
        }
    }
    function partition(arr, i, j) {
        let pivot = arr[i] // 轴值
        while(i < j) {
            while(j>i && arr[j] > pivot) {
                j--
            }
            arr[i] = arr[j]
            while(i<j && arr[i] <= pivot) {
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = pivot
        return i
    }
}

/**
 * 利用堆排序
 * @param {*} nums 
 * @param {*} k 
 */
function findKthLargest2(nums, k) {
    let len = nums.length
    let maxHeap = new Heap((x,y)=>x>y, swap)
    let res = 0
    for(let i=0;i<len;i++) {
        maxHeap.insert(nums[i])
    }

    for(let i=0;i<k;i++) {
        res = maxHeap.top()
        maxHeap.exact()
    }
    return res

    function swap(arr,i,j) {
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
}

let nums = [3,2,1,5,6,4] , k = 6
console.log(findKthLargest(nums, k))