class minStack {
    constructor() {
        this.stack = []; // 数据栈
        this.minS = []; // 辅助栈
    }
}
/**
 * 推入数据
 */
minStack.prototype.push=function(x){
    this.stack.push(x);
    if(this.minS.length===0||x<this.minS[this.minS.length-1]){
        this.minS.push(x)
    }else {
        this.minS.push(this.minS[this.minS.length-1])
    }
}
/**
 * 弹出数据
 */
minStack.prototype.pop=function(){
    if(this.stack.length>0&&this.minS.length>0){
        this.stack.pop()
        console.log('min',this.minS.length)
        this.minS.pop()
    }
}
/**
 * 得到最小元素
 */
minStack.prototype.min=function(){
    if(this.minS.length>0){
        return this.minS[this.minS.length-1]
    }
}
/**
 * 得到栈顶元素
 */
minStack.prototype.top=function(){
    return this.stack[this.stack.length-1]
}

var ss=new minStack()
console.log(1111,ss)
ss.push(2)
ss.push(0)
ss.push(3)
ss.push(0)
console.log(2222,ss)
console.log(ss.min())
ss.pop()
console.log(3333,ss)
console.log(ss.min())
ss.pop()
console.log(4444,ss)
console.log(ss.min())
ss.pop()
console.log(5555,ss)
console.log(ss.min())