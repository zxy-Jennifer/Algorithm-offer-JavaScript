/**
 * 
 * @param {*} s 
 * @param {*} nums 
 */
function minSubArrayLen1(s, nums) {
    let res=Infinity,sum=0
    let len=nums.length
    if(len <= 0)return 0
    for(let i=0; i<len; i++) {
        let j=i
        sum=0
        while(j<len) {
            sum += nums[j++]
            // console.log(i,j,sum)
            if(sum >= s){
                // console.log(res)
                res = Math.min(res, j-i)
                break
            }
        }
    }
    return res<=len?res:0
}

/**
 * 前缀和 + 二分查找
 * @param {*} s 
 * @param {*} nums 
 */
function minSubArrayLen2(s, nums) {
    let len = nums.length
    let res = Infinity
    //  sums[i] 表示从nums[0] 到 nums[i−1] 的元素和
    let sums = new Array(len+1)
    sums[0] = 0
    for(let i=1; i<=len; i++) {
        sums[i] = sums[i-1] + nums[i-1]
    }
    // console.log(sums)

    for(let i=1; i<=len; i++) {
        let target = sums[i-1]+s
        let bound = binSearch(i, len, target, sums)
        // console.log(i, bound)
        if(bound<0) {
            bound = -bound-1
        } else if(bound<=len) {
            res = Math.min(res, bound-i+1)
        }
    }
    return res<=len?res:0


    /**
     * 二分查找大于等于某个数的第一个位置
     * @param {*} l 
     * @param {*} r 
     * @param {*} target 
     * @param {*} arr 
     */
    function binSearch(l, r, target, arr) {
        let mid = 0
        while(l < r) {
            mid = Math.floor((l+r)/2)
            if(arr[mid]<target) {
                l=mid+1
            } else {
                r=mid
            }
        }
        return arr[l]>=target?l:-1
    } 
}

/**
 * 双指针
 * @param {*} s 
 * @param {*} nums 
 */
function minSubArrayLen(s, nums) {
    let len = nums.length
    if(len <= 0)return 0
    let res = Infinity
    let i=0, j=0, sum=0
    while(j<len) {
        sum+=nums[j]
        while(sum>=s) {
            res = Math.min(res, j-i+1)
            sum-=nums[i]
            // 头指针后移
            i++
        }
        // 尾指针后移
        j++
    }
    return res<=len?res:0
}

let s = 9, nums = [1,2,3,4,5]
console.log(minSubArrayLen(s, nums))