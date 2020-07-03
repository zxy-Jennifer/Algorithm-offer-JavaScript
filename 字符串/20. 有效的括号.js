
function isValid(s) {
    if(s.length === 0)return true
    let stack = []
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        }else {
            if(stack.length === 0) {
                return false
            }
            if((s[i] === ')' && stack[stack.length-1] === '(')
                || (s[i] === '}' && stack[stack.length-1] === '{')
                    || (s[i] === ']' && stack[stack.length-1] === '[')) {
                        stack.pop()
                    }else {
                        return false
                    }
        }
    }
    return stack.length === 0
}

let s = "(([])[])"
console.log(isValid(s))