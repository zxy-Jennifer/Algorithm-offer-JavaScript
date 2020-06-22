/**
 * 连续！
 * @param {*} target 
 */
function findContinuousSequence1(target) {
    let res = []
    let j = Math.floor(target/2) + 1
    while(j>0) {
        let i=j;
        let arr = [j]
        let sum = j
        while(i>0) {
            i--
            arr.unshift(i)
            sum += i
            if(sum === target) {
                res.unshift(arr)
                break
            }
            if(sum > target) { break }
        }
        j--
    }
    return res
}

/**
 * 利用求和公式！
 * @param {*} target 
 */
function findContinuousSequence(target) {
    let res = []
    let start // 左边界
    let num = 2 // 数组的长度
    do{
        let tmp = Math.floor(target / num)
        let num2 = Math.floor(num / 2)
        // target = (start,...,target/n,...,start + n)，其中target/n 时要么在中间，要么是在中间偏左的那个数
        start = (num & 1) === 0 ? tmp-num2+1 : tmp-num2
        if(sum(start,start+num-1) === target) {
            res.unshift(getArr(start, start+num))
        }
        num++
    }while(start>1)
    return res
}
function sum(i,j) {
    if(i>j) {
        return null
    }
    return (i+j)*(j-i+1)/2
}
function getArr(i,j) {
    let arr = []
    for(let k=i;k<j;k++) {
        arr.push(k)
    }
    return arr
}

let target = 15
// [ [1,2,3,4,5], [4,5,6], [7,8] ]
console.log(findContinuousSequence(target))