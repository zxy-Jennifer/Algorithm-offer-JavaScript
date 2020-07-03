
function fourSum(nums, target) {
    nums.sort((a,b)=>a-b)
    let res = []
    let len = nums.length
    for(let i=0; i<len-3; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue
        for(let j=i+1; j<len-2; j++) {
            let temp = getTwo(nums, j+1, target-nums[i]-nums[j])
            if(temp.length <= 0 || (j>i+1 && nums[j] === nums[j-1])) {
                continue
            }else {
                // console.log(i,j,temp)
                temp.forEach((value, key)=>{
                    // console.log('value', value)
                    if(value.length>0) {
                        // let item = value
                        value.push(nums[i],nums[j])
                        res.push(value)
                    }
                    // item.push(nums[i])
                    // res.push(item)
                })
            }
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
let nums = [1, 0, -1, 0, -2, 2], target = 0
console.log(fourSum(nums, target))