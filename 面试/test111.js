/**
 * data = {a: {b :[{},{c:0]}}
 * "a.b.2.c"
 * @param {*} data 
 * @param {*} path 
 */
function getValueByPath(data, path){
    let arr = path.split('.')
    // console.log(arr)
    let len = arr.length
    let temp = data
    for(let i=0; i<len; i++) {
        if(isNaN(arr[i])) {
            temp = temp[arr[i]]
        }else {
            temp = temp[arr[i]]
        }
        if(temp === undefined)break
        // console.log('temp', temp)
    }
    return temp
}

let data = {'a': [{'b' :[{},{'c':0}]}, {'d':9}]}
let path = "a.0.b.1.c"

let data1 = {'a': {'b':[{}, {'c': [{'d':10}]}]}}
let path1 = "a.b.1.c.0.d"

let data2 = {'a': {'b':[[{}], {'c': [{'d':10}]}]}}
let path2 = "a.b.1.c.0.d"
console.log(getValueByPath(data1, path1))