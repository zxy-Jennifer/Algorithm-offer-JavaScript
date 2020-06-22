
/**
 * 两个栈实现队列
 * 栈：先进后出
 * 队列：先进先出
 */
class CQueue {
    constructor(){
        this.s1 = []
        this.s2 = []
    }
    /**
     * 进队（队尾）
     * @param {*} value 
     */
    appendTail(value){
        this.s1.push(value)
    }
    /**
     * 出队：队头
     */
    deleteHead(){
        if(this.s1.length === 0)return -1
        while(this.s1.length>1) {
            this.s2.push(this.s1.pop())
        }
        let res =  this.s1.pop()
        while(this.s2.length !== 0) {
            this.s1.push(this.s2.pop())
        }
        return res
    }
}

/**
 * 两个栈实现队列
 * 栈：先进后出
 * 队列：先进先出
 */
class CStack{
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    /**
     * 进栈：头部
     * @param {*} value 
     */
    appendHead(value){
        if(this.q2.length>0) {
            this.q2.push(value)
        }else {
            this.q1.push(value)
        }
    }
    /**
     * 出栈：尾部
     */
    deleteTail(){
        if(this.q1.length > 0) {
            while(this.q1.length > 1) {
                this.q2.push(...this.q1.splice(0,1))
            }
            return this.q1.splice(0,1)[0]
        }else if(this.q2.length > 0) {
            while(this.q2.length > 1) {
                this.q1.push(...this.q2.splice(0,1))
            }
            return this.q2.splice(0,1)[0]
        }else {
            return -1
        }
    }
}
let stack = new CStack()
stack.appendHead(1)
stack.appendHead(2)
console.log(stack)
console.log(stack.deleteTail())
console.log(stack.deleteTail())
console.log(stack)

let queue = new CQueue()
console.log(queue.deleteHead())
console.log(queue.deleteHead())

console.log(queue.deleteHead())

console.log(queue)