
function merge(nums1, m, nums2, n) {
    if(n === 0)return nums1
    let len = nums1.length
    let i=m-1,j=n-1,index=len-1
    while(index>=0) {
        while(i>=0 && (j<0 || nums1[i]>=nums2[j])) {
            nums1[index--] = nums1[i--]
        }
        while(j>=0 && (i<0 || nums2[j]>=nums1[i])) {
            nums1[index--] = nums2[j--]
        }
    }
    return nums1
}
let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3
console.log(merge(nums1, m, nums2, n))