

function findMedianSortedArrays1(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let len = len1 + len2
    let sum = 0
    let i=0, j=0, index=-1, cur=0
    while(true) {
        if((i>=len1 || len1<=0) && (j>=len2 || len2<=0))break
        if(i<len1 && (j>=len2 || len2<=0 || nums1[i]<=nums2[j])) {
            cur = nums1[i]
            i++
        }else if(j<len2 && (i>=len1 || len1<=0 || nums1[i] > nums2[j])){
            cur = nums2[j]
            j++
        }
        index++
        if(((index+1)*2 === len) || (index*2 === len)) {
            sum += cur
        }
        if(index*2+1 === len) {
            return cur
        }
    }
    return sum/2
}

function findMedianSortedArrays(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let left = Math.floor((len1+len2+1)/2)
    let right = Math.floor((len1+len2+2)/2)
    return (getKth(nums1,0,len1-1,nums2,0,len2-1,left) + getKth(nums1,0,len1-1,nums2,0,len2-1,right)) / 2

    function getKth(nums1, s1, e1, nums2, s2, e2, k) {
        let len1 = e1 - s1 + 1
        let len2 = e2 - s2 + 1
        if(len1 > len2)return getKth(nums2, s2, e2, nums1, s1, e1, k)
        if(len1 === 0)return nums2[s2 + k - 1]

        if(k === 1)return Math.min(nums1[s1], nums2[s2])
        // 计算本次要比较的元素的位置
        let i = s1 + Math.min(len1, Math.floor(k/2)) - 1
        let j = s2 + Math.min(len2, Math.floor(k/2)) - 1
        if(nums1[i] <= nums2[j]) {
            // 缩小范围 同时k减去排除掉的元素个数
            return getKth(nums1, i+1, e1, nums2, s2, e2, k - (i - s1 + 1))
        }else {
            return getKth(nums1, s1, e1, nums2, j+1, e2, k - (j - s2 + 1))
        }
    }
}

let nums1 = [1,2], nums2 = []
console.log(findMedianSortedArrays(nums1,nums2))