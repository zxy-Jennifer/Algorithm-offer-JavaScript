
function nextGreaterElement(nums1, nums2) {
    let s = []
    let len1 = nums1.length
    let len2 = nums2.length
    if(len1 <= 0)return []
    let res = new Array(len1).fill(-1)
    if(len2 <= 0)return res
    for(let i=len2-1; i>=0; i--) {
        while(s.length>=0 && s[s.length-1]<nums2[i]) {
            s.pop()
        }
        let index = nums1.indexOf(nums2[i])
        if(index!==-1) {
            if(s.length===0) {
                res[index]=-1
            }else {
                res[index]=s[s.length-1]
            }
        }
        s.push(nums2[i])
    }
    return res
}

let nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2))