/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') {
        return -1
    }
    this.map.delete(key)
    this.map.set(key, val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果已经存在，先删除再添加新的值
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    // 如果容量超出，先删除最久未使用的
    let keys = this.map.keys()
    while (this.map.size > this.capacity) {
        this.map.delete(keys.next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var cache = new LRUCache(2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得关键字 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4