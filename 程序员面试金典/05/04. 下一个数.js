

function findClosedNumbers(num) {
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
    //  2 4 8 6
let num = 6
console.log(findClosedNumbers(num))                          