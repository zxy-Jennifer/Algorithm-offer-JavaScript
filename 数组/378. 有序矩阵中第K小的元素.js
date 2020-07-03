
/**
 * 二分查找，寻找小于mid的个数
 * @param {*} matrix 
 * @param {*} k 
 */
function kthSmallest1(matrix, k) {
    let n = matrix.length
    let left = matrix[0][0]
    let right = matrix[n-1][n-1]
    /*
        查找范围: [left, right)
        结束条件：left == right
    */
    while(left < right) {
        let mid = Math.floor((left+right) / 2)
        let num = check(matrix, mid, n)
        // console.log(num, left, mid, right)
        if(num < k) {
            left = mid+1
        }else {
            right = mid
        }
    }
    return left

    function check(matrix, mid, n) {
        let i=n-1
        let j=0
        let num = 0
        while(i>=0 && j < n) {
            if(matrix[i][j] <= mid) {
                num += (i+1)
                j++
            }else {
                i--
            }
        }
        return num
    }
}

/**
 * 合并数组
 * @param {*} matrix 
 * @param {*} k 
 */
function kthSmallest(matrix, k) {

    let arr = mergeK(matrix, 0, matrix.length-1)
    return arr[k-1]


    function mergeK(matrix, left, right) {
        if(left === right)return matrix[left]
        let mid = Math.floor((left+right)/2)
        let arr1 = mergeK(matrix, left, mid)
        let arr2 = mergeK(matrix, mid+1, right)
        return mergeTwo(arr1, arr2)
    }

    function mergeTwo(a, b) {
        let m = a.length, n = b.length
        let res = []
        let i=0, j=0, index=0
        while(index < m+n) {
            if(j>=n || a[i]<=b[j]) {
                res[index++] = a[i++]
            }else if(i>=m || a[i]>b[j]) {
                res[index++] = b[j++]
            }
        }
        return res
    }
}

let matrix = [
    [ 1,  5,  9],
    [2, 11, 13],
    [3, 13, 15]
 ],
 k = 1

 console.log(kthSmallest(matrix, k))