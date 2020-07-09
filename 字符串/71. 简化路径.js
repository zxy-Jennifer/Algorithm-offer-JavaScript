
function simplifyPath(path) {
    // if()
    let arr = path.split('/')
    let stack = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '' || arr[i] === '.') {
            continue
        }else if(arr[i] === '..') {
            stack.pop()
        }else {
            stack.push(arr[i])
        }
    }
    return '/' + stack.join('/')
}

let path = ""
console.log(simplifyPath(path))