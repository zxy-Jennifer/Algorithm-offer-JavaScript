function gerRes(arr) {
    let len = arr.length
    if (len <= 0) {
        return ""
    }
    let cur = arr[0]
    for (let str of arr) {
        let tmp = ""
        let leni = cur.length
        let lenj = str.length
        for (let i = 0, j = 0; i < leni && j < lenj; i++, j++){
            if (cur[i] !== str[j]) {
                break
            } else {
                tmp+=str[j]
            }
        }
        cur = tmp
    }
    return cur
}
let arr = ["flower", "flow", "flour"]
console.log(gerRes(arr))
let arr2 = ["dog", "cat", "dark"]
console.log(gerRes(arr2))