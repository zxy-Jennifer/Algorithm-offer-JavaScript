

/**
 * 队列：先进先出
 */
class MaxQueue1 {
    constructor() {
        this.queue = []
        this.deque = [] // 递减
    }
    /**
     * 暴力法
     * @return {number}
     */
    max_value() {
        let len = this.queue.length
        let max = -1
        if(len) {
            for(let i=0;i<len;i++) {
                if(this.queue[i]>max) {
                    max = this.queue[i]
                }
            }
        }
        return max
    }
    /**
     * @param {number} value
     * @return {void}
     */
    push_back(value) {
        this.queue.push(value)
    }
    /**
     * @return {number}
     */
    pop_front() {
        return this.queue.length===0?-1:this.queue.shift()
    }
}

class MaxQueue {
    constructor() {
        this.queue = []
        this.deque = [] // 递减
    }
    /**
     * @return {number}
     */
    max_value() {
        return this.deque.length === 0 ? -1 : this.deque[0]
    }
    /**
     * @param {number} value
     * @return {void}
     */
    push_back(value) {
        while(this.deque.length>0 && this.deque[this.deque.length-1] < value) {
            this.deque.pop()
        }
        this.queue.push(value)
        this.deque.push(value)
    }
    /**
     * @return {number}
     */
    pop_front() {
        if(!this.queue.length) {
            return -1
        }
        let value = this.queue.shift()
        if(value === this.deque[0]) {
            this.deque.shift()
        }
        return value
    }
}

let a=new MaxQueue()
a.push_back(1)
a.push_back(2)
console.log(a)
console.log(a.max_value)
