

function longestValidParentheses(s) {
    let stack  = [-1]
    let res = 0
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(i)
        }else {
            stack.pop()
            if(stack.length === 0) {
                stack.push(i)
            } else {
                res = Math.max(res, i-stack[stack.length-1])
            }
        }
    }
    return res
}

let s = "()))))))()"
console.log(longestValidParentheses(s))