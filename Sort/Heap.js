class Heap {
    // 每个结点都大于等于它的两个子结点
    constructor(com = defaultCom,swap=swp){
        this.data = []
        this.com = com
        this.swap = swap
    }
    /**
     * 堆中插入元素
     * @param {*} num 
     */
    insert(num) {
        const { data, com, swap} = this
        data.push(num)
        // console.log('data before',data)
        let index = data.length - 1
        while(index) {
            let parent = Math.floor((index-1)/2)
            if(!com(data[index], data[parent])) {
                return
            }else {
                // console.log('jaiohuan')
                swap(data, parent, index)
            }
            index = parent
        }
        // console.log('data after',data)
    }
    /**
     * 取出堆中最大值并将堆调整为最大堆
     */
    exact(){
        const { data, com, swap} = this
        if(data.length === 0){
            return null
        }
        swap(data,0,data.length - 1)
        let res = data.pop()
        let len = data.length
        let index = 0
        let exchange = index * 2 + 1
        while(exchange < len) {
            let right = index * 2 + 2
            if(com(data[right],data[exchange])) {
                exchange = right
            }
            if(com(data[index], data[exchange])) {
                break
            }
            swap(data, exchange, index)
            index = exchange
            exchange = index * 2 + 1
        }
        return res
    }
    /**
     * 返回堆顶元素
     */
    top(){
        if(this.data.length) {
            return this.data[0]
        }else {
            return null
        }
    }
}
function swp(arr,i,j) {
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
function defaultCom(x,y) {
    return x > y
}

function HeapSort(arr) {
    let heap = new Heap((x,y)=>x<y, swp)
    if(arr.length<=0) {
        return []
    }
    let res = []
    for(let i=0;i<arr.length;i++) {
        heap.insert(arr[i])
    }
    for(let j=0;j<arr.length;j++){
        res.push(heap.top())
        heap.exact()
    }
    return res
}

let arr = [3,7,1,2,8]
console.log(HeapSort(arr))

module.exports = Heap