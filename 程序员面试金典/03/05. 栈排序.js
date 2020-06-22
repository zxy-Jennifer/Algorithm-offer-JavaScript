


class SortedStack {
    constructor() {
        this.stack = []
        this.temp = []
    }

    push(val) {
        if(this.stack.length === 0) {
            this.stack.push(val)
        }else {
            while(this.stack.length !== 0 && this.stack[this.stack.length-1]<val) {
                console.log(1111)
                this.temp.push(this.stack[this.stack.length-1])
                this.stack.pop()
            }
            console.log(this.stack,this.temp)
            this.stack.push(val)
            while(this.temp.length !== 0) {
                this.stack.push(this.temp[this.temp.length-1])
                this.temp.pop()
            }
        }
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        if(this.stack.length === 0) {
            return -1
        }else {
            return this.stack[this.stack.length-1]
        }
    }

    isEmpty() {
        return this.stack.length === 0
    }
}
/**
 * 输入：
 * ["SortedStack", "push", "push", "peek", "pop", "peek"]
 * [[], [1], [2], [], [], []]
 * 
 * 输出：
 * [null,null,null,1,null,2]
 */

 let s1 = new SortedStack()

 s1.push(1)
 s1.push(2)
console.log(s1)
console.log(s1.peek())

console.log(s1.pop())

console.log(s1.peek())