
/**
 * 
 * @param {*} n 
 */
function printNumbers(n) {
    let res = []
    let nums = []
    let i=0
    while(i<10) {
        nums[0] = i
        recur(nums, 0, n, res)
        i++
    }
    res.splice(0,1)
    return res

    function recur(nums, index, n, res) {
        if(index+1 === n) {
            res.push(print(nums))
            return
        }
        let i=0
        while(i<10) {
            nums[index+1] = i
            recur(nums, index+1, n, res)
            i++
        }
    }

    /**
     * 去掉数字开头的 0
     * @param {*} nums 
     */
    function print(nums) {
        let res = []
        let len = nums.length
        let flag = true
        for(let i=0;i<len;i++) {
            if(nums[i] !== 0 && flag) {
                flag = false
                res.push(nums[i])
            }else if(nums[i] !== 0 || !flag) {
                res.push(nums[i])
            }
        }
        return res.join('')
    }
}

console.log(printNumbers(2))