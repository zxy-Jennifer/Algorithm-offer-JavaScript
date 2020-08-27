
function getRes(str, N) {
    let arr = str.split('')
    let len = arr.length
    if(len<=N && !(/.*[\u4e00-\u9fa5]+.*$/.test(str)))return str
    if(len*2<=N && !(/.*[0-9]/.test(str)))return str
    let res = ''
    let i=0;
    let count = 0
    for(let j=0; j<len; j++) {
        if(isNaN(Number(arr[j]))) {
            count+=2
        }else {
            count++
        }
    }
    if(count<=N)return str
    for(let k=0; k<len; k++) {
        console.log('i', i)
        if(isNaN(Number(arr[k]))) {
            if(i+2>N-3)break
            res+=arr[k]
            i+=2
        }else {
            if(i>=N-3)break
            res+=arr[k]
            i++
        }
    }
    return res+'...'
}

let str = "12345"
console.log(getRes(str, 7))