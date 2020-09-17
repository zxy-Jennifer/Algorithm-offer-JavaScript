var combine = function (n, k) {
    let arr = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
        arr[i] = i
    }
    let res = []
    let path = []
    recur(path, 0, 0)
    return res

    /**
     * 
     * @param {*} path 目前所取的数据
     * @param {*} last 数组最后一个元素的下标
     * @param {*} len 得到的数组长度
     */
    function recur(path, last, len) {
        if (len === k) {
            res.push(path.slice())
            return
        }
        for (let i = last + 1; i <= n; i++) {
            recur([...path, arr[i]], i, len + 1)
        }
    }
};
console.log(combine(4, 2))