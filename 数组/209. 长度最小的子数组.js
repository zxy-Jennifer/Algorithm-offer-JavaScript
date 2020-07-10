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

function minSubArrayLen2(s, nums) {
    let len = nums.length
    let res = Infinity
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
            i++
        }
        j++
    }
    return res<=len?res:0
}

let s = 9, nums = [1,2,3,4,5]
console.log(minSubArrayLen(s, nums))