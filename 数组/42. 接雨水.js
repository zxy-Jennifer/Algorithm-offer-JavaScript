/**
 * 利用单调栈
 * @param {*} height 
 */
function trap1(height) {
    let res=0, current=0
    let s=[]
    while(current<height.length) {
        while(s.length>0 && height[current]>height[s[s.length-1]]) {
            let top = s.pop()
            if(s.length<=0)break
            let width = current - s[s.length-1] - 1
            let hei = Math.min(height[current], height[s[s.length-1]]) - height[top]
            res += width * hei
        }
        s.push(current++)
    }
    return res
}
/**
 * 暴力法
 * @param {*} height 
 */
function trap2(height) {
    let res = 0
    for(let i=1; i<height.length-1; i++) {
        let left_max = 0, right_max = 0
        for(let j=i; j>=0; j--) {
            left_max = Math.max(left_max, height[j])
        }
        for(let j=i; j<height.length; j++) {
            right_max = Math.max(right_max, height[j])
        }
        res += Math.min(left_max, right_max) - height[i]
    }
    return res
}

/**
 * 动态规划法
 * @param {*} height 
 */
function trap3(height) {
    if(!height || height.length <= 0)return 0
    let len = height.length
    let res = 0
    let left_max = new Array(len).fill(height[0])
    let right_max = new Array(len).fill(height[len-1])
    for(let i=1; i<len; i++) {
        left_max[i] = Math.max(height[i], left_max[i-1])
    }
    for(let i=len-2; i>=0; i--) {
        right_max[i] = Math.max(height[i], right_max[i+1])
    }
    for(let i=0; i<len; i++) {
        res += Math.min(left_max[i], right_max[i]) - height[i]
    }
    return res
}
/**
 * 双指针
 * @param {*} height 
 */
function trap(height) {
    let left = 0, right = height.length-1
    let left_max = 0, right_max = 0, res = 0
    while(left<right) {
        if(height[left] < height[right]) {
            if(height[left]>left_max) {
                left_max = height[left]
            }else {
                res+=left_max - height[left]
            }
            left++
        }else {
            if(height[right] > right_max) {
                right_max = height[right]
            }else {
                res+=right_max - height[right]
            }
            right--
        }
    }
    return res
}
let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))