

function calculate(s) {
    let stack = [] // 存放数字
    let i = 0, n=0, sign = '+'
    while(i<s.length) {
        while(s[i] === ' ') {
            i++
        }
        while(i<s.length && s[i] <= '9' && s[i] >= '0') {
            n = n*10 + parseInt(s[i])
            i++
        }

        if(sign === '+') {
            stack.push(n)
        }else if(sign === '-') {
            stack.push(-n)
        }else if(sign === '*') {
            stack.push(stack.pop() * n)
        }else if(sign === '/') {
            stack.push(Math.trunc(stack.pop() / n))
        }
        sign = s[i++]
        n = 0
    }
    // console.log(stack)
    return stack.reduce((cur,item)=>cur+item,0)
}


/**
 * '3*4 - 5*9 /2 *2+ 3'
 */
let s = '3*4 - 5*9 /2 *2+ 3'
console.log(calculate(s))
