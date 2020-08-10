/**
 * dp[i][j]：nums1[i],nums2[j]开始走得到的最大值
 * dp[i][j] = 
 *              Math.max(dp[i+1][j] + nums1[i], dp[i][j+1] + nums1[j]), nums1[i] !== nums1[j]
 *              Math.max(dp[i+1][j], dp[i][j+1])+nums1[i], nums1[i] === nums1[j]
 * @param {*} nums1 
 * @param {*} nums2 
 */
function maxSum1(nums1, nums2) {
    return Math.max(recur(0, nums1, nums2), recur(0, nums2, nums1))


    function recur(index, arr1, arr2) {
        console.log(index, arr1, arr2)
        if(index === arr1.length-1){
            console.log(index, arr1)
            return arr1[index]
        }

        if(arr2.indexOf(arr1[index])!==-1) {
            return arr1[index]+Math.max(recur(index+1, arr1,arr2), recur(index+1, arr2, arr1))
        }else {
            return arr1[index] + recur(index+1, arr1, arr2)
        }
    }
}
/**
 * 双指针
 * @param {*} nums1 
 * @param {*} nums2 
 */
function maxSum(nums1, nums2) {
    let res = 0
    let sum1=0, sum2=0
    let len1=nums1.length, len2=nums2.length
    let i=0, j=0
    while(i<len1 && j<len2) {
        if(nums1[i] === nums2[j]) {
            res += (Math.max(sum1, sum2)+nums1[i])
            sum1 = 0
            sum2 = 0
            i++
            j++
        }else if(nums1[i] < nums2[j]) {
            sum1 += nums1[i++]
        }else {
            sum2 += nums2[j++]
        }
    }
    while(i<len1) {
        sum1+=nums1[i++]
    }
    while(j<len2) {
        sum2+=nums2[j++]
    }
    res += Math.max(sum1, sum2)
    return res % (10 ** 9 + 7)
}

let nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
console.log(maxSum(nums1, nums2))