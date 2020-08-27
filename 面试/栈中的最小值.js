// while(N=parseInt(readline())){
//     let s1 = new MinStack
//     while(lines = line.split(" ")){
//         if(lines[0] === 'push'){
//             s1.push(parseInt(arr[1]))
//         }else if(arr[0] === 'getMin') {
//             print(s1.getMin())
//         }else if(arr[0] === 'pop') {
//             s1.pop()
//         }
//     }
// }
var MinStack = function() {
    this.stack = [];
    this.min = [];
}
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.min.length === 0 || this.min[this.min.length-1]>=x) {
        this.min.push(x)
    }
}
MinStack.prototype.pop = function() {
    if(this.stack[this.stack.length-1]===this.min[this.min.length-1]) {
        this.min.pop()
    }
    this.stack.pop()
}
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
}
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
}

let s1 = new MinStack()
s1.push(1)
console.log(s1)
