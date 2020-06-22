
/**
 * 
 * @param {*} a 
 */
function constructArr1(a) {
    let n = a.length
    let arr = []
    let sum = a.reduce((sum,v,i)=>{
        if(v===0) {
            arr.push(i)
            return sum
        }
        return sum * v
    },1)
    // console.log(sum)
    let res = []
    for(let i=0;i<n;i++) {
        let cur = 0
        if(arr.length===0) {
            cur = Math.floor(sum/a[i])
        }
        if(arr.includes(i)&&arr.length===1){
            cur = sum
        }
        if((arr.includes(i)&&arr.length>1) || (!arr.includes(i)&&arr.length>0)) {
            cur = 0
        }
        res.push(cur)
    }
    return res
}
/**
 * 不使用除法：
 * b[i]：把数组a拆成了两部分(0 - i-1, i+1 - n-1)，两部分相乘得到b[i]
 * 第一部分：0 - i-1，即下三角
 * 第二部分：i+1 - n-1，即上三角
 * @param {*} a 
 */
function constructArr(a) {
    let len = a.length
    if(len===0)return []
    let b = Array(len).fill(0)

    b[0]=1
    let tmp = 1
    
    // 上三角
    for(let i=1;i<len;i++) {
        b[i] = b[i-1] * a[i-1]
    }

    // 下三角
    for(let i=len-2;i>=0;i--) {
        tmp *= a[i+1]
        b[i] *= tmp
    }
    return b
}

let arr = [1,2,3,4,5] //[0,0,40,0,0]
console.log(constructArr(arr))