const Heap = require('../../Sort/Heap')
// import {Heap} from '../Sort/Heap'
class MedianFinder1 {
    constructor() {
        this.data = [];
    }
    /**
     * 从数据流中添加一个整数到数据结构中
     */
    addNum(num) {
        // this.data.push(num)
        // 插入元素后对数组排序
        // this.data.sort((a,b)=>a-b)
        // 把新插入的元素的放入合适的位置
        let left = 0;
        let right = this.data.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (this.data[mid] < num) {
                left = mid + 1;
            }
            else if (this.data[mid] > num) {
                right = mid - 1;
            }
            else {
                this.data.splice(mid, 0, num);
                return;
            }
        }
        this.data.splice(right + 1, 0, num);
    }
    /**
     * 返回目前所有元素的中位数
     */
    findMedian() {
        if (this.data.length <= 0) {
            return null;
        }
        let len = this.data.length;
        let mid = Math.floor((len - 1) / 2);
        if (len & 1) {
            // 奇数
            return this.data[mid];
        }
        else {
            return (this.data[mid - 1] + this.data[mid]) / 2;
        }
    }
}
function swap(arr,i,j) {
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
class MedianFinder {
    constructor(){
        // 大根堆
        this.maxHeap = new Heap((x,y)=>x>y, swap)
        // 小根堆
        this.minHeap = new Heap((x,y)=>x<y, swap)
    }
    addNum(num){
        this.maxHeap.insert(num)
        this.minHeap.insert(this.maxHeap.top())
        this.maxHeap.exact()
        if(this.maxHeap.data.length < this.minHeap.data.length) {
            this.maxHeap.insert(this.minHeap.top())
            this.minHeap.exact()
        }
    }
    findMedian(){
        return this.minHeap.data.length===this.maxHeap.data.length?(this.minHeap.top()+this.maxHeap.top())/2:this.maxHeap.top()
    }
}
var obj = new MedianFinder()
obj.addNum(6)
obj.addNum(3)
obj.addNum(12)
obj.addNum(6)
obj.addNum(5)

console.log(obj.findMedian())
console.log(obj)