
/**
 * 
 * @param {*} num 
 */
function findClosedNumbers1(num) {
    let min = -1
    let max = -1
    let str = num.toString(2)
    console.log(str)
    let in2 = str.lastIndexOf('1')
    let in1 = in2===0&&str.lastIndexOf('0')!==-1?1:str.lastIndexOf('0')
    console.log(in1,in2)
    if(in1 === -1) {
        min = -1
        max = '10'+str.substring(1)
    }else {
        if(str[str.length-1] === '1' && str.includes(0)) {
            // 需要退位(包括局部)
            
        }
        min = str.substring(0,in1)+'1'+str.substring(in1+1)
        for(let i = in1-1;i>=0;i--) {
            if(str[i] === '1') {
                min = min.substring(0,i)+'0'+min.substring(i+1)
                break
            }
        }
        if(str.indexOf('0') === str.length-1) {
            // 需要进位
            max = '100'+new Array(str.length-2).fill(1).join('')
        }else {
            max = str.substring(0,in2)+'0'+str.substring(in2+1)
            let flag = false
            for(let i = in2-1;i>=0;i--) {
                if(str[i] === '0') {
                    flag = true
                    max = max.substring(0,i)+'1'+max.substring(i+1)
                    break
                }
            }
            if(!flag)max = '1'+ max
        }
    }
    console.log(max,min)
    max = parseInt(max,2)
    min = min===-1?-1:parseInt(min,2)
    return [max, min]
} 

/**
 * 暴力
 * @param {*} num 
 */
function findClosedNumbers2(num) {
    let max = -1, min = -1
    let left = Math.floor(num / 2)
    let right = num * 2
    let i = num-1, j=num+1
    let NumOne = countOne(num)
    while(i>=left || j<=right) {
        if(countOne(i) === NumOne) {
            min = i
            i = left
        }
        i--
        if(countOne(j) === NumOne) {
            max = j
            j = right+1
        }
        j++
    }
    return [max, min]

    /**
     * 计算num中1的个数
     * @param {*} num 
     */
    function countOne(num) {
        let res = 0
        while(num) {
            if(num&1)res++
            num = num >> 1
        }
        return res
    }
}

function findClosedNumbers(num) {
    console.log(num.toString(2))
    function getSmall(num) {
        let c = num, c1=0, c0=0, m=0
        while(c) {
            m++
            if(c&1) {
                c1++
            }else {
                c0++
                // 遇到 10 
                if(c&2) {
                    m++
                    c1++
                    break
                }
            }
            c>>=1
        }
        if( m===c1 ) return -1
        // p为非拖尾的1的位置
        let p = c0+c1
        // p以及p右边所有位清零
        num &= ~((1<<p)-1)
        // 在紧邻p的右方插入 c1+1 个 1
        // ((1<<p-1) - 1)：把后 c0+c1 位变为 1
        // ~((1<<(c0-1)) -1)：把后 c0 位变为 0
        return num|(((1<<p-1) - 1) & ~((1<<(c0-1)) -1));
    }
    
    function getBig(num) {
        let c = num, c0=0,c1=0
        while(c&&(c&1) === 0) {
            c0++
            c = c >> 1
        }
        while(c&1) {
            c1++
            c = c >> 1
        }
        if(c0+c1 === 32 || c0+c1 === -1)return -1
        let p = c0+c1
        // p以及p右边所有位清零
        num = num & ~((1<<p)-1)
        // 把后 c1 位变成 1
        num = num | ((1<<(c1-1)) -1)
        // 
        return num | (1<<p)
    }
    let big = getBig(num)
    let small = getSmall(num)
    return [big, small]
}
    //  2 4 8 6
let num = 33
console.log(findClosedNumbers(num))                          