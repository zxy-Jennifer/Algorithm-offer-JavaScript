
/**
 * 暴力法:
 * @param {*} nums 
 * @param {*} k 
 */
function maxSlidingWindow1(nums,k) {
    let res = []
    if(k===0||nums.length<=0) {
        return []
    }
    for(i=0;i<=nums.length-k;i++) {
        let j = i + 1, max = nums[i]
        while(j < i + k) {
            max = Math.max(max, nums[j])
            j++
        }
        res.push(max)
    }
    return res
}
/**
 * 动态规划
 * 数组分块(k个元素为一块）：[1,3,-1,-3,5,3,6,7], k = 3  =>   [ 1,3,-1,  -3,5,3,  6,7 ]
 * @param {*} nums 
 * @param {*} k 
 */
var maxSlidingWindow2 = function(nums, k) {
    if (k === 1) return nums;
    const length = nums.length;
    if (!length) return [];

    const left = new Array(length);
    const right = new Array(length);

    left[0] = nums[0];
    right[length - 1] = nums[length - 1];
    // 从左到右遍历数组，建立数组 left
    // 从右到左遍历数组，建立数组 right
    for (let i = 1; i < length; ++i) {
        if (i % k) {
            // 块内的其他元素
            left[i] = Math.max(nums[i], left[i - 1]);
        } else {
            // 块内的第一个元素
            left[i] = nums[i];
        }

        let j = length - i - 1;
        if ((j + 1) % k) {
            // 块内的其他元素
            right[j] = Math.max(nums[j], right[j + 1]);
        } else {
            // 块内的最后一个元素
            right[j] = nums[j];
        }
    }
    const res = [];
    for (let i = 0; i < length - k + 1; i++) {
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;
}

function maxSlidingWindow(nums, k) {
    if(k===1) return nums
    let len = nums.length
    if(len===0)return []
    let left = new Array(len)
    let right = new Array(len)

    let res = []

    left[0] = nums[0]
    right[len-1] = nums[len-1]

    for(let i=1;i<len;i++) {
        if(i%k === 0) {
            left[i] = nums[i]
        }else {
            left[i] = Math.max(left[i-1], nums[i])
        }

        let j = len-1-i
        if((j+1) % k === 0) {
            right[j] = nums[j]
        }else {
            right[j] = Math.max(nums[j], right[j+1])
        }
    }
    for(let i=0;i<len-k+1;i++) {
        res.push(Math.max(right[i], left[i+k-1]))
    }
    return res
}
/**
 * 利用队列维护最大值
 * @param {*} nums 
 * @param {*} k 
 */
var maxSlidingWindow3 = function (nums, k) {
    const deque = []
    const result = []
    for (let i = 0; i < nums.length; i++) {
        // 把滑动窗口之外的踢出
        if (i - deque[0] >= k) {
            deque.shift() // 头出
        }
        // 比较队尾与当前元素 i 对应的值，队尾元素值较小时出列  =》  这是为了保证当队头出队时，新的队头依旧是最大值
        while (nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop() // 尾出
        }
        deque.push(i)
        // 开始计算
        if (i >= k - 1) {
            result.push(nums[deque[0]])
        }
        console.log(deque)
    }
    return result
}

let nums = [1,3,-1,-3,5,3,6,7], k = 3
// let nums = [], k = 0

console.log(maxSlidingWindow(nums, k))