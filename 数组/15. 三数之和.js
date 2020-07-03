
function threeSum(nums) {
    nums.sort((a,b)=>a-b)
    // console.log(nums)
    let res = []
    for(let i=0; i<nums.length-2; i++) {
        if(nums[i]>0)break
        let temp = getTwo(nums, i+1, 0-nums[i])
        if(temp.length<=0 || (i>0 && nums[i] === nums[i-1])) {
            continue
        }else {
            console.log(i,nums[i],temp)
            temp.forEach((value, key)=>{
                // console.log('value', value)
                if(value.length>0) {
                    // let item = value
                    value.push(nums[i])
                    res.push(value)
                }
                // item.push(nums[i])
                // res.push(item)
            })
        }
    }
    return res

    function getTwo(arr, l, target) {
        // console.log(arr,l,target)
        let res = new Map()
        let i = l
        let j = arr.length-1
        while(true) {
            if(i>=j)break
            while(arr[i]+arr[j] < target && i<j) i++
            while(arr[i]+arr[j] > target && j>l) j--
            if(arr[i]+arr[j] === target) {
                if(i<j && !res.has(arr[i])) {
                    res.set(arr[i], [arr[i], arr[j]] )
                }
                i++
                j--
            }
        }
        return res
    }
}

let nums = [1, 1, 0, -1, 0, -2, 2]
console.log(threeSum(nums))