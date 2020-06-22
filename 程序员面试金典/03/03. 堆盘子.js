
class StackOfPlates {
    constructor(cap){
        this.stack = []
        this.cap = cap
    }

    /**
     * 
     * @param {*} val 
     */
    push(val){
        if(this.cap<=0)return -1

        if(this.stack.length>0 && this.stack[this.stack.length-1][0] < this.cap) {
            this.stack[this.stack.length-1][0]++
            this.stack[this.stack.length-1][this.stack[this.stack.length-1][0]] = val
        }else {
            this.stack.push(new Array(this.cap).fill(1))
            this.stack[this.stack.length-1][1] = val
        }
    }

    pop(){
        return this.popAt(this.stack.length-1)
    }

    popAt(index) {
        if(this.cap<=0 || index<0)return -1
        let res = -1
        if(index < this.stack.length) {
            // console.log('this.stack[index]', this.stack[index])
            res = this.stack[index][this.stack[index][0]--]
            if(!this.stack[index][0]) {
                this.stack.splice(index,1)
            }
        }
        return res
    }
}

let s = new StackOfPlates(1)

s.push(1)
s.push(2)
console.log(s)

console.log(s.popAt(1))
console.log(s)
console.log(s.pop())
console.log(s)
console.log(s.pop())
console.log(s)